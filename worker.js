/**
 * ailab-knowledge Cloudflare Worker
 */

const GITHUB_REPO = "roymaste/ailab-knowledge";
const GITHUB_BRANCH = "main";
const KNOWLEDGE_BASE = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/knowledge`;

// 简单的内存缓存
let knowledgeCache = null;
let cacheTime = 0;
const CACHE_TTL = 60 * 60 * 1000; // 1小时

async function fetchKnowledgeList() {
  const now = Date.now();
  if (knowledgeCache && (now - cacheTime) < CACHE_TTL) {
    return knowledgeCache;
  }
  
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/knowledge`;
  const res = await fetch(url, {
    headers: { 'User-Agent': 'ailab-knowledge-worker' }
  });
  const data = await res.json();
  
  knowledgeCache = data.filter(f => f.name.endsWith('.md'));
  cacheTime = now;
  return knowledgeCache;
}

async function fetchKnowledgeContent(path) {
  const res = await fetch(`${KNOWLEDGE_BASE}/${path}`);
  return await res.text();
}

function parseMarkdown(content) {
  const result = {};
  const lines = content.split('\n');
  let inFrontmatter = false;
  let currentKey = null;
  let currentValue = [];
  let pendingCapture = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    const hasIndent = line.startsWith('  ') || line.startsWith('\t');
    
    if (trimmed === '---') {
      if (!inFrontmatter) {
        inFrontmatter = true;
      } else {
        inFrontmatter = false;
      }
      continue;
    }
    
    if (inFrontmatter) {
      const colonIdx = line.indexOf(':');
      if (colonIdx > 0) {
        const key = line.substring(0, colonIdx).trim();
        let value = line.substring(colonIdx + 1).trim();
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        result[key] = value;
      }
    } else {
      const sectionMatch = trimmed.match(/^(problem|solution|summary|experience):\s*\|?\s*$/);
      
      if (sectionMatch) {
        if (currentKey) {
          result[currentKey] = currentValue.join('\n').trim();
        }
        currentKey = sectionMatch[1];
        currentValue = [];
        pendingCapture = true;
      } else if (pendingCapture) {
        if (trimmed === '' || trimmed === '---') {
          // skip
        } else if (hasIndent) {
          currentValue.push(trimmed);
          pendingCapture = false;
        } else if (trimmed.match(/^(problem|solution|summary|experience):/)) {
          pendingCapture = false;
          i--;
        } else {
          currentValue.push(trimmed);
          pendingCapture = false;
        }
      } else if (currentKey && hasIndent) {
        currentValue.push(trimmed);
      }
    }
  }
  
  if (currentKey) {
    result[currentKey] = currentValue.join('\n').trim();
  }
  
  return result;
}

function searchKnowledge(keywords, allKnowledge) {
  if (!keywords || keywords.length === 0) {
    return allKnowledge;
  }
  
  const keywordList = keywords.toLowerCase().split(/\s+/).filter(k => k);
  
  return allKnowledge.filter(k => {
    const searchText = [
      k.id || '',
      k.title || '',
      k.tags || '',
      k.scenario || '',
      k.sub_scenario || '',
      k.solution || '',
      k.summary || ''
    ].join(' ').toLowerCase();
    
    return keywordList.some(kw => searchText.includes(kw));
  });
}

async function handleRequest(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  // CORS
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }
  
  // GET /
  if (pathname === '/' && request.method === 'GET') {
    const list = await fetchKnowledgeList();
    return new Response(JSON.stringify({
      name: 'ailab-knowledge-api',
      version: '1.0.0',
      count: list.length,
      endpoints: ['GET /knowledge', 'GET /knowledge?keywords=xxx']
    }, null, 2), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
  
  // GET /health
  if (pathname === '/health' && request.method === 'GET') {
    return new Response(JSON.stringify({ status: 'ok' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
  
  // GET /knowledge
  if (pathname === '/knowledge' && request.method === 'GET') {
    const keywords = url.searchParams.get('keywords') || '';
    
    const list = await fetchKnowledgeList();
    const items = [];
    
    for (const file of list) {
      const content = await fetchKnowledgeContent(file.name);
      const exp = parseMarkdown(content);
      if (exp.id) {
        items.push(exp);
      }
    }
    
    const results = searchKnowledge(keywords, items);
    
    return new Response(JSON.stringify({
      success: true,
      keywords,
      count: results.length,
      items: results
    }, null, 2), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
  
  // 404
  return new Response(JSON.stringify({ error: 'Not found' }), {
    status: 404,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

#!/usr/bin/env node
/**
 * ailab-knowledge API Server v5
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.argv[2] || 18792;
const KNOWLEDGE_DIR = path.join(__dirname, 'knowledge');
const KNOWLEDGE = [];

function loadKnowledge() {
  const files = fs.readdirSync(KNOWLEDGE_DIR).filter(f => f.endsWith('.md'));
  for (const file of files) {
    const content = fs.readFileSync(path.join(KNOWLEDGE_DIR, file), 'utf8');
    const exp = parseMarkdown(content);
    if (exp.id) {
      KNOWLEDGE.push(exp);
    }
  }
  console.log(`Loaded ${KNOWLEDGE.length} knowledge items`);
}

function parseMarkdown(content) {
  const result = {};
  const lines = content.split('\n');
  let inFrontmatter = false;
  let currentKey = null;
  let currentValue = [];
  let pendingCapture = false; // 等待捕获下一行内容
  
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
      // Body section
      const sectionMatch = trimmed.match(/^(problem|solution|summary|experience):\s*\|?\s*$/);
      
      if (sectionMatch) {
        // 保存之前的section
        if (currentKey) {
          result[currentKey] = currentValue.join('\n').trim();
        }
        currentKey = sectionMatch[1];
        currentValue = [];
        pendingCapture = true; // 等待捕获下一行
      } else if (pendingCapture) {
        if (trimmed === '' || trimmed === '---') {
          // 跳过空行，继续等待
        } else if (hasIndent) {
          // 有缩进的内容行，捕获
          currentValue.push(trimmed);
          pendingCapture = false;
        } else if (trimmed.match(/^(problem|solution|summary|experience):/)) {
          // 新的section开始（没有缩进）
          pendingCapture = false;
          i--; // 回头重新解析
        } else {
          // 没有缩进的内容（可能是续行或其他）
          currentValue.push(trimmed);
          pendingCapture = false;
        }
      } else if (currentKey && hasIndent) {
        // 继续捕获多行内容
        currentValue.push(trimmed);
      }
    }
  }
  
  // 保存最后一个section
  if (currentKey) {
    result[currentKey] = currentValue.join('\n').trim();
  }
  
  return result;
}

function searchKnowledge(keywords) {
  if (!keywords || keywords.length === 0) {
    return KNOWLEDGE;
  }
  const keywordList = keywords.toLowerCase().split(/\s+/).filter(k => k);
  return KNOWLEDGE.filter(k => {
    const searchText = [
      k.id || '', k.title || '', k.tags || '',
      k.scenario || '', k.sub_scenario || '',
      k.solution || '', k.summary || ''
    ].join(' ').toLowerCase();
    return keywordList.some(kw => searchText.includes(kw));
  });
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }
  
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname;
  
  if (pathname === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ name: 'ailab-knowledge-api', version: '1.0.0', count: KNOWLEDGE.length }, null, 2));
    return;
  }
  if (pathname === '/health' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }
  if (pathname === '/knowledge' && req.method === 'GET') {
    const keywords = url.searchParams.get('keywords') || '';
    const results = searchKnowledge(keywords);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true, keywords, count: results.length, items: results }, null, 2));
    return;
  }
  
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

loadKnowledge();
server.listen(PORT, () => {
  console.log(`ailab-knowledge-api running on http://localhost:${PORT}`);
});

process.on('SIGTERM', () => {
  server.close();
  process.exit(0);
});

---
id: exp_001
title: "小红书文案缺少emoji和hashtag"
source_url: https://github.com/roymaste/ailab-knowledge/discussions  # 待补全真实来源
source_type: 原创
scenario: 写作创作
sub_scenario: 社交媒体
tags: [小红书, emoji, hashtag, 内容创作]
difficulty: beginner
confidence: 0
validations: 0

problem: |
  用户让AI写小红书文案时，AI输出纯文字，缺少emoji和hashtag。
  小红书平台特性：emoji能提高互动率，hashtag能增加曝光。

solution: |
  当用户描述的场景涉及"写小红书"、"发小红书"、"小红书文案"时，
  自动注入以下配置到Context：
  
  【小红书文案配置】
  - 开头：1个emoji引入话题
  - 段落：每段末尾加1-2个emoji
  - 结尾：1个emoji + 5-8个hashtag
  - 格式：每段不超过50字
  - 语气：亲切、口语化、真实分享感
  
  示例输出：
  "最近发现了一个神器✨ 用了之后效率直接翻倍！
  
  1️⃣ 功能强大 2️⃣ 操作简单 3️⃣ 颜值在线
  
  真的绝了👍 #效率工具 #好物推荐 #神器分享"

summary: |
  小红书文案必须有emoji才有互动
  必须有hashtag才能被搜到
  emoji位置：开头1个，段落间1-2个，结尾1个

experience: |
  - 社交媒体内容必须明确要求格式元素
  - emoji和hashtag对小红书曝光很重要
  - 不要让AI"酌情添加"，要明确要求数量和位置

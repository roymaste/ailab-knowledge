---
id: exp_001
title: "小红书文案缺少emoji和hashtag"
tool: openclaw
scenario: writing
sub_scenario: social_media
tags: [小红书, emoji, hashtag, 内容创作]
difficulty: beginner
confidence: 92
validations: 47
contributor: ailab-core
created_at: 2026-04-06
---

problem: |
  AI写的小红书文案太平淡，缺少emoji和hashtag，用户需要手动添加

solution: |
  在输出要求中加入：
  - 每次输出必须包含3-5个emoji
  - 结尾必须包含5-8个相关hashtag
  - 格式示例："今天发现了一个神器✨真的太方便了！\n\n#生活技巧 #神器推荐 #效率提升"

summary: |
  小红书文案必须有emoji才有互动
  必须有hashtag才能被搜到
  emoji位置：开头1个，段落间1-2个，结尾1个

experience: |
  - 社交媒体内容必须明确要求格式元素
  - emoji和hashtag对小红书曝光很重要
  - 不要让AI"酌情添加"，要明确要求数量和位置

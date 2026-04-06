---
id: exp_009
title: "AI Prompt要具体不要模糊"
source_url: https://github.com/roymaste/ailab-knowledge/discussions
source_type: 原创
scenario: 写作创作
sub_scenario: 通用写作
tags: [Prompt, 具体, 模糊, 优化]
difficulty: beginner
confidence: 0
validations: 0

problem: |
  用户让AI写文章/文案时，AI回复太笼统，
  给的都是"取决于你的情况"这种没有意义的答案。
  原因是Prompt太模糊，AI不知道具体要什么。

solution: |
  当用户描述的场景涉及"帮我写"、"写一篇"、"写个"时，
  自动要求用户明确或自动补充：
  
  具体化技巧：
  1. 指定字数/长度："500字"、"不超过300字"
  2. 指定格式/风格："小红书风"、"学术风格"、"口语化"
  3. 指定受众："给新手看"、"给工程师看"
  4. 给出约束条件："要有案例"、"要有数据"
  
  示例：
  ❌ "帮我写一篇文章"
  ✅ "帮我写一篇500字的小红书风格文章，主题是AI助手"

summary: |
  Prompt越具体，回复越有价值
  不要让AI猜你要什么，直接告诉它
  给出具体数字、格式、风格要求

experience: |
  - 加具体数字（500字、3个方案）
  - 指定风格（小红书风、学术风）
  - 指定受众（新手、工程师）

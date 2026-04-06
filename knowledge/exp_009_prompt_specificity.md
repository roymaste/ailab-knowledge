---
id: exp_009
title: "AI Prompt要具体不要模糊"
tool: openclaw
scenario: general
sub_scenario: prompt_optimization
tags: [Prompt, 具体, 模糊, 优化]
difficulty: beginner
confidence: 92
validations: 200
contributor: ailab-core
created_at: 2026-04-07
---

problem: |
  AI回复太笼统，给的都是"取决于你的情况"这种没有意义的答案

solution: |
  改成具体要求：
  ❌ "帮我写一篇文章"
  ✅ "写一篇500字的小红书风格文章，主题是AI助手"

  ❌ "帮我分析这个代码"
  ✅ "分析这段Python代码的性能问题，给出3个优化方案"

  具体化技巧：
  1. 指定字数/长度
  2. 指定格式/风格
  3. 指定受众
  4. 给出约束条件

summary: |
  Prompt越具体，回复越有价值
  不要让AI猜你要什么，直接告诉它
  给出具体数字、格式、风格要求

experience: |
  - 加具体数字（500字、3个方案）
  - 指定风格（小红书风、学术风）
  - 指定受众（新手、工程师）

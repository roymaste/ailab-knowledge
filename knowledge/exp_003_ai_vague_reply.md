---
id: exp_003
title: "AI回复太泛泛，没有具体答案"
tool: openclaw
scenario: general
sub_scenario: prompt_optimization
tags: [通用, prompt, 泛泛回复]
difficulty: beginner
confidence: 85
validations: 42
contributor: ailab-core
created_at: 2026-04-06
---

problem: |
  AI回复太泛泛，都是"这取决于..."，"一般来说..."，没有给出具体答案

solution: |
  在prompt中明确要求：
  - 不要说"取决于你的情况"
  - 不要说"一般来说"
  - 直接给出具体建议和可执行的方案
  示例："请给出3个具体的可执行方案，不要模糊回答"

summary: |
  AI泛泛回复是因为prompt没有限制
  明确要求"不要模糊回答"和"给出具体方案"
  可以要求AI给出选项数量

experience: |
  - 问具体问题时加"给出3个选项"
  - 不要问"应该怎么做"，问"我应该选A还是B"
  - 要求AI给出理由和风险分析

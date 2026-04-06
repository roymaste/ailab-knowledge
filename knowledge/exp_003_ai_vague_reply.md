---
id: exp_003
title: "AI回复太泛泛，没有具体答案"
source_url: https://github.com/roymaste/ailab-knowledge/discussions  # 待补全真实来源
source_type: 原创
scenario: 写作创作
sub_scenario: 通用写作
tags: [通用, prompt, 泛泛回复]
difficulty: beginner
confidence: 0
validations: 0

problem: |
  用户问AI问题时，AI回复太笼统，
  都是"这取决于你的情况"、"一般来说"，
  没有给出具体可执行的答案。

solution: |
  当用户描述的场景涉及"怎么做？"、"帮我分析"、
  "给我建议"时，自动注入以下配置：
  
  【具体化回复配置】
  - 不要说"取决于你的情况"
  - 不要说"一般来说"
  - 不要说"这个需要看情况"
  - 直接给出3个具体可执行的方案
  - 每个方案说明适用场景
  - 说明每个方案的风险
  
  示例提示词：
  "请给出3个具体的可执行方案，不要模糊回答，
  每个方案说明适用场景和潜在风险"

summary: |
  AI泛泛回复是因为prompt没有限制
  明确要求"不要模糊回答"和"给出具体方案"
  可以要求AI给出选项数量

experience: |
  - 问具体问题时加"给出3个选项"
  - 不要问"应该怎么做"，问"我应该选A还是B"
  - 要求AI给出理由和风险分析

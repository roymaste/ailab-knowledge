---
id: exp_010
title: "AI写代码后必须人工review"
tool: openclaw
scenario: coding
sub_scenario: code_quality
tags: [编程, 代码审查, AI代码, 质量]
difficulty: intermediate
confidence: 95
validations: 180
contributor: ailab-core
created_at: 2026-04-07
---

problem: |
  AI生成的代码看起来能用，但实际有隐藏问题：安全漏洞、性能问题、边界条件没处理

solution: |
  AI代码必须review的重点：
  1. 安全：SQL注入、密码明文、XSS
  2. 边界：空值、越界、除零
  3. 性能：循环嵌套、重复计算、内存泄漏
  4. 逻辑：边界条件、异常处理

  审查清单：
  - 输入验证了吗？
  - 错误处理了吗？
  - 安全漏洞有吗？
  - 性能问题有吗？

summary: |
  AI代码不等于安全代码
  必须review安全、边界、性能、逻辑
  建立自己的AI代码审查清单

experience: |
  - AI经常忽略边界条件
  - 安全问题（SQL注入等）需要特别关注
  - 先让AI自检，再人工review

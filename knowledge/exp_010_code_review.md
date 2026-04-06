---
id: exp_010
title: "AI写代码后必须人工review"
source_url: https://github.com/roymaste/ailab-knowledge/discussions
source_type: 原创
scenario: 编程开发
sub_scenario: 代码审查
tags: [编程, 代码审查, AI代码, 质量]
difficulty: intermediate
confidence: 0
validations: 0

problem: |
  AI生成的代码看起来能用，但实际有隐藏问题：
  安全漏洞（SQL注入、密码明文）、
  性能问题（循环嵌套）、
  边界条件没处理（空值、越界、除零）。

solution: |
  当用户描述的场景涉及"写代码"、"写函数"、"帮我写Python/JS"时，
  自动注入代码审查要求：
  
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

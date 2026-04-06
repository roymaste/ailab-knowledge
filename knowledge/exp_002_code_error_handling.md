---
id: exp_002
title: "AI生成代码缺少错误处理"
tool: openclaw
scenario: coding
sub_scenario: code_generation
tags: [编程, 错误处理, 代码质量]
difficulty: intermediate

problem: |
  AI生成的代码经常缺少错误处理，直接返回没有try-catch或边界检查的代码

solution: |
  在prompt中加入明确的错误处理要求：
  - 必须包含try-catch块
  - 必须处理空值、边界条件
  - 必须有超时处理
  示例："写一个HTTP请求函数，包含：错误处理、超时5秒、空数据返回、空数据返回空数组而非null"

summary: |
  AI生成代码必须要求错误处理
  三个必须：try-catch、空值检查、超时处理

experience: |
  - 涉及IO操作（网络、文件、数据库）的代码必须要求错误处理
  - 不要相信AI会"自动考虑"，必须明确列出要处理的异常
  - 可以单独维护一个"错误处理检查清单"

confidence: 88
validations: 35
contributor: ailab-core
created_at: 2026-04-06

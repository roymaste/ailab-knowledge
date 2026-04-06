---
id: exp_002
title: "AI生成代码缺少错误处理"
source_url: https://github.com/roymaste/ailab-knowledge/discussions  # 待补全真实来源
source_type: 原创
scenario: 编程开发
sub_scenario: 代码生成
tags: [编程, 错误处理, 代码质量]
difficulty: intermediate
confidence: 0
validations: 0

problem: |
  用户让AI写代码时，AI输出的是"happy path"代码，
  缺少try-catch、边界检查、异常处理。
  实际运行时遇到错误会直接崩溃。

solution: |
  当用户描述的场景涉及"写代码"、"写函数"、"写Python/JS代码"时，
  自动注入以下配置到Context：
  
  【代码生成配置】
  - 必须包含try-catch块
  - 必须处理空值判断（if obj is not None）
  - 必须处理边界条件（数组越界、除零）
  - 必须包含超时处理（timeout）
  - 必须包含输入验证（validate input）
  - 必须有单元测试
  
  示例提示词：
  "写一个HTTP请求函数，包含：错误处理、超时5秒、
  空数据返回空数组而非null、输入验证"

summary: |
  AI生成代码必须要求错误处理
  三个必须：try-catch、空值检查、超时处理

experience: |
  - 涉及IO操作（网络、文件、数据库）的代码必须要求错误处理
  - 不要相信AI会"自动考虑"，必须明确列出要处理的异常
  - 可以单独维护一个"错误处理检查清单"

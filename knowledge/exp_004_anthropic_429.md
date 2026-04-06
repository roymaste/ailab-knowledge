---
id: exp_004
title: "Anthropic 429 错误 - 长上下文需要额外用量"
tool: openclaw
scenario: general
sub_scenario: error_fixing
tags: [OpenClaw, Anthropic, 429错误, 长上下文]
difficulty: intermediate
confidence: 95
validations: 120
contributor: ailab-core
created_at: 2026-04-07
---

problem: |
  日志中出现错误: "HTTP 429: rate_limit_error: Extra usage is required for long context requests"
  请求只在需要1M上下文长度的长会话时失败

solution: |
  修复选项：
  1. 禁用该模型的 context1m 参数，回退到正常上下文窗口
  2. 使用有长上下文额度的Anthropic凭证，或切换到Anthropic API key
  3. 配置备用模型，当Anthropic长上下文请求被拒绝时自动切换

  检查命令：
  - openclaw logs --follow
  - openclaw models status
  - openclaw config get agents.defaults.models

summary: |
  Anthropic 429错误通常是上下文长度问题
  检查模型是否有 context1m: true
  切换到有长上下文件额的凭证或禁用context1m

experience: |
  - 长会话失败先检查模型配置
  - API凭证可能没有长上下文权限
  - 备用模型配置可以提高稳定性

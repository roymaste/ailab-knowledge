---
id: exp_004
title: "Anthropic 429 错误 - 长上下文需要额外用量"
source_url: https://docs.openclaw.ai/gateway/troubleshooting
source_type: docs
scenario: OpenClaw使用
sub_scenario: 错误处理
tags: [OpenClaw, Anthropic, 429错误, 长上下文]
difficulty: intermediate
confidence: 0
validations: 0

problem: |
  日志中出现错误: "HTTP 429: rate_limit_error: Extra usage is required for long context requests"
  请求只在需要1M上下文长度的长会话时失败。

solution: |
  当用户描述Anthropic API报错、429错误、长会话失败时，
  按以下顺序排查：
  
  1. 检查模型是否开启了 context1m:
     openclaw models status
     openclaw config get agents.defaults.models
  
  2. 修复选项：
     - 禁用该模型的 context1m 参数，回退到正常上下文窗口
     - 使用有长上下文额度的Anthropic凭证
     - 或切换到Anthropic API key
     - 配置备用模型
  
  3. 检查凭证权限：
     旧版token（sk-ant-oat-*）不支持长上下文

summary: |
  Anthropic 429错误通常是上下文长度问题
  检查模型是否有 context1m: true
  切换到有长上下文件额的凭证或禁用context1m

experience: |
  - 长会话失败先检查模型配置
  - API凭证可能没有长上下文权限
  - 备用模型配置可以提高稳定性

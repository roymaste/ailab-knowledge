---
id: exp_006
title: "OpenClaw Dashboard/Control UI无法连接"
tool: openclaw
scenario: general
sub_scenario: dashboard_troubleshooting
tags: [OpenClaw, Dashboard, 连接问题, Control UI]
difficulty: intermediate
confidence: 88
validations: 65
contributor: ailab-core
created_at: 2026-04-07
---

problem: |
  Dashboard或Control UI无法连接，显示各种认证错误

solution: |
  排查命令：
  - openclaw gateway status
  - openclaw status
  - openclaw logs --follow
  - openclaw doctor
  - openclaw gateway status --json

  常见错误及解决方案：

  | 错误 | 原因 | 解决 |
  |------|------|------|
  | device identity required | 非安全上下文或缺少设备认证 | 使用安全上下文 |
  | origin not allowed | 浏览器Origin不在allowedOrigins | 修改白名单 |
  | AUTH_TOKEN_MISMATCH | Token不匹配 | 重置token并重试 |
  | gateway connect failed | 目标主机/端口错误 | 检查URL |

summary: |
  Dashboard连接问题通常是认证配置问题
  检查URL、认证模式和secure context设置
  常见原因：token不匹配、Origin不在白名单、缺少设备认证

experience: |
  - 连接问题先查gateway status
  - AUTH_TOKEN_MISMATCH可以尝试重新获取token
  - 检查浏览器控制台的具体错误代码

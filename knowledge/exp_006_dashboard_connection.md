---
id: exp_006
title: "OpenClaw Dashboard/Control UI无法连接"
source_url: https://docs.openclaw.ai/gateway/troubleshooting
source_type: docs
scenario: OpenClaw使用
sub_scenario: 故障排查
tags: [OpenClaw, Dashboard, 连接问题, Control UI]
difficulty: intermediate
confidence: 0
validations: 0

problem: |
  Dashboard或Control UI无法连接，显示各种认证错误：
  - device identity required
  - AUTH_TOKEN_MISMATCH
  - origin not allowed
  - gateway connect failed

solution: |
  当用户描述Dashboard无法连接时：
  
  1. 排查命令：
     - openclaw gateway status
     - openclaw status
     - openclaw logs --follow
     - openclaw doctor
     - openclaw gateway status --json
  
  2. 常见错误及解决方案：
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

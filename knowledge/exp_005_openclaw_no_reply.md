---
id: exp_005
title: "OpenClaw频道正常但AI不回复"
source_url: https://docs.openclaw.ai/gateway/troubleshooting
source_type: docs
scenario: OpenClaw使用
sub_scenario: 故障排查
tags: [OpenClaw, 无回复, 路由问题, 配置问题]
difficulty: beginner
confidence: 0
validations: 0

problem: |
  频道显示正常在线，但AI完全不回复消息。
  常见原因：配对待处理、群组需要@提及、被白名单拦截。

solution: |
  当用户描述频道在线但不回复时，按顺序排查：
  
  1. openclaw status（检查整体状态）
  2. openclaw channels status --probe（检查频道状态）
  3. openclaw pairing list --channel <channel> --account <id>（检查配对）
  4. openclaw config get channels（检查配置）
  5. openclaw logs --follow（查看日志）
  
  常见关键词：
  - "drop guild message (mention required" → 需要@提及
  - "pairing request" → 需要审批配对
  - "blocked" / "allowlist" → 被策略拦截

summary: |
  无回复先查路由和策略
  常见原因：需要配对、需要@提及、被白名单拦截
  检查日志中的关键词定位问题

experience: |
  - 频道在线但无回复通常是权限/配置问题
  - 检查 pairing list 是否有待审批请求
  - 检查 allowFrom 和 mentionPatterns 配置

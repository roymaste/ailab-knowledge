---
id: exp_005
title: "OpenClaw频道正常但无回复"
tool: openclaw
scenario: general
sub_scenario: troubleshooting
tags: [OpenClaw, 无回复, 路由问题, 配置问题]
difficulty: beginner
confidence: 90
validations: 85
contributor: ailab-core
created_at: 2026-04-07
---

problem: |
  频道显示正常在线，但AI完全不回复消息

solution: |
  排查命令（按顺序执行）：
  1. openclaw status
  2. openclaw channels status --probe
  3. openclaw pairing list --channel <channel> --account <id>
  4. openclaw config get channels
  5. openclaw logs --follow

  常见问题：
  - 配对待处理（pairing request）→ 需要审批
  - 群组需要@提及（mention required）
  - 频道/群组白名单不匹配
  - 发送者被策略拦截（blocked/allowlist）

summary: |
  无回复先查路由和策略
  常见原因：需要配对、需要@提及、被白名单拦截
  检查日志中的关键词：drop guild message、pairing request、blocked

experience: |
  - 频道在线但无回复通常是权限/配置问题
  - 检查 pairing list 是否有待审批请求
  - 检查 allowFrom 和 mentionPatterns 配置

---
id: exp_007
title: "OpenClaw卡住了怎么快速排查"
tool: openclaw
scenario: general
sub_scenario: troubleshooting
tags: [OpenClaw, 故障排查, 卡住, 急救]
difficulty: beginner
confidence: 95
validations: 150
contributor: ailab-core
created_at: 2026-04-07
---

problem: |
  OpenClaw出问题时的第一反应是什么？很多人在Discord提问，但其实大部分问题都是本地配置问题

solution: |
  快速排查命令（按顺序）：
  1. openclaw status                    # 快速状态检查
  2. openclaw status --all             # 可分享的诊断报告
  3. openclaw gateway status            # 服务状态
  4. openclaw logs --follow            # 查看日志
  5. openclaw doctor                   # 自动修复配置

  如果RPC挂了，回退到：
  tail -f "$(ls -t /tmp/openclaw/openclaw-*.log | head -1)"

summary: |
  出问题先跑 openclaw status
  大部分问题都是本地配置，远程无法帮你排查
  openclaw doctor 可以自动修复常见问题

experience: |
  - 提问前先跑一遍诊断命令
  - 大部分"卡住"其实是配置问题
  - openclaw doctor 能修复大部分配置问题

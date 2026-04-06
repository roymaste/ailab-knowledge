---
id: exp_013
title: "OpenClaw会话文件过大导致性能问题"
tool: openclaw
scenario: general
sub_scenario: performance
tags: [OpenClaw, Session, 性能, 文件过大]
difficulty: intermediate
confidence: 85
validations: 75
contributor: ailab-core
created_at: 2026-04-07
---

problem: |
  OpenClaw会话文件越来越大，导致性能下降或内存问题

solution: |
  检查命令：
  - openclaw status  # 查看会话状态
  - ls -la ~/.openclaw/sessions/  # 查看会话文件大小

  解决方案：
  1. 定期清理旧会话
  2. 配置会话保留策略
  3. 使用 summaries 减少上下文大小

  手动清理：
  rm -rf ~/.openclaw/sessions/*
  openclaw sessions list  # 验证

summary: |
  会话文件过大会影响性能
  定期清理或配置自动归档
  使用ContextOptimizer减少上下文

experience: |
  - 长时间使用后检查会话大小
  - 配置自动summary可以缓解
  - 定期归档旧会话

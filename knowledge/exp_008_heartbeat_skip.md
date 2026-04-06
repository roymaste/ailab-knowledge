---
id: exp_008
title: "Heartbeat一直跳过是怎么回事"
tool: openclaw
scenario: general
sub_scenario: heartbeat
tags: [OpenClaw, Heartbeat, 跳过, 定时任务]
difficulty: beginner
confidence: 90
validations: 80
contributor: ailab-core
created_at: 2026-04-07
---

problem: |
  Heartbeat一直显示跳过，不知道原因

solution: |
  常见跳过原因：
  - quiet-hours: 不在配置的活动时间内
  - empty-heartbeat-file: HEARTBEAT.md存在但只有空白或标题
  - no-tasks-due: 任务模式已激活但没有任务到期
  - alerts-disabled: 所有心跳可见性都关闭了

  注意：跳过的运行不会推进任务时间戳

summary: |
  Heartbeat跳过通常是配置问题
  检查 quiet-hours 和 HEARTBEAT.md 内容
  确认 showOk、showAlerts、useIndicator 没有全部关闭

experience: |
  - 定时任务不运行先检查HEARTBEAT.md内容
  - 确认时间窗口设置正确
  - 任务完成后时间戳才会推进

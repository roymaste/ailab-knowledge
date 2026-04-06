---
id: exp_008
title: "Heartbeat定时任务跳过不执行"
source_url: https://docs.openclaw.ai/gateway/heartbeat
source_type: docs
scenario: OpenClaw使用
sub_scenario: 定时任务
tags: [OpenClaw, Heartbeat, 跳过, 定时任务]
difficulty: beginner
confidence: 0
validations: 0

problem: |
  Heartbeat一直显示跳过（skip），定时任务不执行。
  用户不知道为什么任务没有运行。

solution: |
  当用户描述Heartbeat跳过时：
  
  1. 常见跳过原因：
     - quiet-hours: 不在配置的活动时间内
     - empty-heartbeat-file: HEARTBEAT.md存在但只有空白或标题
     - no-tasks-due: 任务模式已激活但没有任务到期
     - alerts-disabled: 所有心跳可见性都关闭了
  
  2. 注意：跳过的运行不会推进任务时间戳
  
  3. 检查命令：
     - openclaw status（查看状态）
     - 检查 HEARTBEAT.md 内容是否完整

summary: |
  Heartbeat跳过通常是配置问题
  检查 quiet-hours 和 HEARTBEAT.md 内容
  确认 showOk、showAlerts、useIndicator 没有全部关闭

experience: |
  - 定时任务不运行先检查HEARTBEAT.md内容
  - 确认时间窗口设置正确
  - 任务完成后时间戳才会推进

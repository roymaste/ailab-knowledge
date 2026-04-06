---
id: exp_007
title: "OpenClaw出问题时的第一反应"
source_url: https://docs.openclaw.ai/help/faq
source_type: docs
scenario: OpenClaw使用
sub_scenario: 故障排查
tags: [OpenClaw, 故障排查, 急救]
difficulty: beginner
confidence: 0
validations: 0

problem: |
  用户使用OpenClaw时遇到问题（不回复、出错、卡住），
  第一反应是去Discord提问，但其实大部分问题都是本地配置问题，
  远程无法帮你排查。

solution: |
  当用户描述OpenClaw出现以下症状时：
  - "不回复"、"没反应"、"挂了"
  - "报错"、"出错了"
  - "卡住了"
  
  自动按顺序执行诊断命令：
  1. openclaw status（快速状态检查）
  2. openclaw gateway status（服务状态）
  3. openclaw logs --follow（日志）
  4. openclaw doctor（自动修复）
  
  如果RPC挂了：
  tail -f "$(ls -t /tmp/openclaw/openclaw-*.log | head -1)"

summary: |
  出问题先跑 openclaw status
  大部分问题都是本地配置
  openclaw doctor 能自动修复常见问题

experience: |
  - 提问前先跑诊断命令
  - 大部分问题可以自己解决
  - 远程求助时提供 openclaw status --all 的输出

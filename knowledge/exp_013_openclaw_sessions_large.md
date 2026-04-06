---
id: exp_013
title: "OpenClaw会话文件过大导致性能问题"
source_url: https://github.com/openclaw/openclaw/issues
source_type: github_issue
scenario: OpenClaw使用
sub_scenario: 性能优化
tags: [OpenClaw, Session, 性能, 文件过大]
difficulty: intermediate
confidence: 0
validations: 0

problem: |
  OpenClaw会话文件越来越大，导致：
  - 性能下降
  - 内存占用高
  - 对话加载变慢

solution: |
  当用户描述会话变慢、内存问题时：
  
  检查命令：
  - openclaw status  # 查看会话状态
  - ls -la ~/.openclaw/sessions/  # 查看会话文件大小
  
  解决方案：
  1. 定期清理旧会话：rm -rf ~/.openclaw/sessions/*
  2. 配置会话保留策略
  3. 使用ContextOptimizer减少上下文大小
  4. 归档长期会话
  
  验证命令：
  openclaw sessions list

summary: |
  会话文件过大会影响性能
  定期清理或配置自动归档
  使用ContextOptimizer减少上下文

experience: |
  - 长时间使用后检查会话大小
  - 配置自动summary可以缓解
  - 定期归档旧会话

---
id: exp_017
title: "OpenClaw更新后Control UI不显示"
source_url: https://github.com/openclaw/openclaw/issues/52808
source_type: github_issue
scenario: OpenClaw使用
sub_scenario: 故障排查
tags: [OpenClaw, Control UI, 更新, 503错误]
difficulty: intermediate
confidence: 0
validations: 0

problem: |
  OpenClaw更新后（如2026.3.13到2026.3.22），Control UI dashboard无法访问，
  显示503错误："Control UI assets not found"。

solution: |
  当用户描述更新后Dashboard打不开、显示503、Control UI不显示时：
  
  【问题识别】
  错误信息："Control UI assets not found. Build them with `pnpm ui:build`"
  
  【解决方案】
  1. 重新构建UI：
     pnpm ui:build
     
  2. 如果不行，尝试完整重建：
     pnpm install
     pnpm build
     pnpm ui:build
  
  3. 临时 workaround（手动复制）：
     从旧版本包复制 dist/control-ui/ 到新版本
  
  【预防】
  更新前备份配置，更新后检查UI是否正常

summary: |
  更新后Control UI不显示通常是UI资源缺失
  用 pnpm ui:build 重建UI资源
  必要时重新完整构建

experience: |
  - 大版本更新后检查UI是否正常
  - 保留旧版本备份
  - pnpm ui:build 能解决大部分UI问题

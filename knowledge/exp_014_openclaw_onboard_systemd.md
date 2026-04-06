---
id: exp_014
title: "Ubuntu 22.04上OpenClaw Systemd服务安装失败"
tool: openclaw
scenario: general
sub_scenario: installation
tags: [OpenClaw, Ubuntu, Systemd, 安装]
difficulty: intermediate
confidence: 82
validations: 60
contributor: ailab-core
created_at: 2026-04-07
---

problem: |
  Onboarding wizard在Ubuntu 22.04上无法安装Systemd服务

solution: |
  症状：openclaw onboard --install-daemon 成功但服务没启动

  排查：
  1. 检查服务状态：systemctl status openclaw
  2. 查看日志：journalctl -u openclaw
  3. 手动安装服务

  手动安装：
  openclaw gateway install
  openclaw gateway start

  或者使用systemd：
  systemctl enable openclaw
  systemctl start openclaw

summary: |
  Ubuntu 22.04上可能需要手动安装Systemd
  用systemctl status openclaw检查状态
  journalctl查看详细日志

experience: |
  - wizard失败时手动尝试
  - 检查systemd日志定位问题
  - 服务安装后需要enable才能开机启动

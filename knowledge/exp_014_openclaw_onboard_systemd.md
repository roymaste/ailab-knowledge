---
id: exp_014
title: "Ubuntu 22.04上OpenClaw Systemd服务安装失败"
source_url: https://github.com/openclaw/openclaw/issues
source_type: github_issue
scenario: OpenClaw使用
sub_scenario: 安装部署
tags: [OpenClaw, Ubuntu, Systemd, 安装]
difficulty: intermediate
confidence: 0
validations: 0

problem: |
  在Ubuntu 22.04上运行openclaw onboard --install-daemon时，
  命令显示成功但服务没有实际启动。

solution: |
  当用户描述Ubuntu上服务安装失败时：
  
  症状：openclaw onboard --install-daemon成功但服务没启动
  
  排查步骤：
  1. 检查服务状态：systemctl status openclaw
  2. 查看日志：journalctl -u openclaw
  3. 手动安装服务：
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

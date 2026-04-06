---
id: exp_016
title: "OpenClaw扩展功能的三种方式"
source_url: https://github.com/openclaw/openclaw/issues/5799
source_type: github_issue
scenario: OpenClaw使用
sub_scenario: 扩展开发
tags: [OpenClaw, Skills, Fork, API, 扩展]
difficulty: beginner
confidence: 0
validations: 0

problem: |
  用户想要给OpenClaw增加新功能，第一反应是提PR或改核心代码。
  但OpenClaw目前处于稳定期，核心已锁定，新PR会被关闭。

solution: |
  当用户描述的场景涉及"我要给OpenClaw加功能"、
  "想改OpenClaw行为"、"要扩展OpenClaw"时：
  
  【OpenClaw扩展三路径】
  
  1. Skills（推荐）
     - 大部分"功能"本质上是Skill
     - 写一个Skill，放到指定目录，完成
     - 不需要PR，不需要改核心代码
     
  2. CLI和工具
     - 围绕OpenClaw API构建工具
     - 只要能调用API，就不需要进源码
     
  3. Fork（最快）
     - 完全控制，最快的自定义路径
     - 适合需要深度定制的场景

summary: |
  增加功能优先写Skill，不要提PR
  OpenClaw可扩展，不需要改核心
  Fork是最快的自定义路径

experience: |
  - 想加功能？先看Skills市场
  - 想改行为？考虑Fork
  - 想贡献？先确认是否在开放期

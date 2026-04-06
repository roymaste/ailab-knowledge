---
id: exp_018
title: "Docker安装OpenClaw后CLI连接gateway失败"
source_url: https://github.com/openclaw/openclaw/issues/9028
source_type: github_issue
scenario: OpenClaw使用
sub_scenario: 安装部署
tags: [OpenClaw, Docker, 安装, 连接失败, 1006错误]
difficulty: intermediate
confidence: 0
validations: 0

problem: |
  Docker安装OpenClaw后，CLI连接gateway失败，报错：
  - gateway closed (1006 abnormal closure)
  - unauthorized: gateway token missing
  - unauthorized: gateway token mismatch
  - pairing required

  原因：
  - CLI默认连接容器内部的127.0.0.1，但应该连接gateway主机名
  - OPENCLAW_GATEWAY_TOKEN会静默覆盖配置中的token

solution: |
  当用户描述Docker安装后CLI连不上、1006错误、token mismatch时：
  
  【排查步骤】
  1. 确认CLI连接地址：
     - 不用127.0.0.1，用 openclaw-gateway（Docker服务名）
     
  2. 确认token一致：
     - 检查 docker-compose.yml 中的 OPENCLAW_GATEWAY_TOKEN
     - 检查 ~/.openclaw/openclaw.json 中的 gateway.auth.token
     - 必须一致
     
  3. 正确连接命令：
     docker compose run --rm openclaw-cli health
     
  4. 如果还失败，检查 pairing：
     docker compose run --rm openclaw-cli pairing list

summary: |
  Docker安装后CLI连不上通常是地址和token不匹配
  CLI要连接 openclaw-gateway（不是127.0.0.1）
  OPENCLAW_GATEWAY_TOKEN会覆盖配置文件

experience: |
  - Docker环境下地址用服务名不用127.0.0.1
  - token必须手动确保一致
  - pairing required时要先配对

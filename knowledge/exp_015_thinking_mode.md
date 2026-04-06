---
id: exp_015
title: "OpenClaw Claude Thinking模式配置"
source_url: https://docs.openclaw.ai/providers/anthropic
source_type: docs
scenario: OpenClaw使用
sub_scenario: 配置
tags: [OpenClaw, Thinking, Claude, 思考模式]
difficulty: intermediate
confidence: 0
validations: 0

problem: |
  用户不知道Claude的Thinking模式是什么，
  不知道怎么配置，以及不知道不同级别的区别。

solution: |
  当用户描述的场景涉及"Thinking"、"思考模式"、"深入分析"时：
  
  Claude 4.6默认使用adaptive thinking
  
  配置方式：
  1. per-message: /think:<level>
  2. 模型参数: agents.defaults.models["anthropic/<model>"].params.thinking
  
  Thinking级别：
  - off: 关闭思考，快速响应
  - low: 快速响应
  - medium: 平衡模式
  - high: 深入分析
  - adaptive: 自动适应（默认）

summary: |
  Claude 4.6默认adaptive thinking
  可以per-message或全局配置
  high适合复杂推理任务

experience: |
  - 简单任务用low更快
  - 复杂问题用high
  - /think:off可以临时关闭

---
id: exp_015
title: "OpenClaw Claude Thinking模式配置"
tool: openclaw
scenario: general
sub_scenario: thinking
tags: [OpenClaw, Thinking, Claude, 思考模式]
difficulty: intermediate
confidence: 90
validations: 110
contributor: ailab-core
created_at: 2026-04-07
---

problem: |
  不知道Claude的Thinking模式是什么，以及如何配置

solution: |
  Claude 4.6默认使用adaptive thinking

  配置方式：
  1. per-message: /think:<level>
  2. 模型参数: agents.defaults.models["anthropic/<model>"].params.thinking

  Thinking级别：
  - off: 关闭思考
  - low: 快速响应
  - medium: 平衡
  - high: 深入分析
  - adaptive: 自动适应

  相关Anthropic文档：
  - Adaptive thinking
  - Extended thinking

summary: |
  Claude 4.6默认adaptive thinking
  可以per-message或全局配置
  high适合复杂推理任务

experience: |
  - 简单任务用low更快
  - 复杂问题用high
  - /think:off可以临时关闭

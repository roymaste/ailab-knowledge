---
id: exp_012
title: "Anthropic 1M上下文窗口配置"
tool: openclaw
scenario: general
sub_scenario: context_window
tags: [OpenClaw, Anthropic, 上下文, 长文本]
difficulty: intermediate
confidence: 88
validations: 95
contributor: ailab-core
created_at: 2026-04-07
---

problem: |
  需要处理超长文本，但不知道如何开启Anthropic的1M上下文窗口

solution: |
  配置方法：
  {
    agents: {
      defaults: {
        models: {
          "anthropic/claude-opus-4-6": {
            params: { context1m: true }
          }
        }
      }
    }
  }

  注意：
  - 需要Anthropic开启长上下文权限
  - 旧版token（sk-ant-oat-*）不支持
  - 如果没有权限会回退到标准上下文

summary: |
  1M上下文需要显式开启context1m
  必须有Anthropic长上下文权限
  旧版token不支持

experience: |
  - 长文本处理前检查凭证权限
  - 没有权限会静默回退
  - 用 openclaw models status 检查配置

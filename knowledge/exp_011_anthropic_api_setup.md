---
id: exp_011
title: "Anthropic API Key配置与模型选择"
tool: openclaw
scenario: general
sub_scenario: provider_config
tags: [OpenClaw, Anthropic, API配置, Claude]
difficulty: beginner
confidence: 95
validations: 200
contributor: ailab-core
created_at: 2026-04-07
---

problem: |
  不知道如何配置Anthropic API Key，或者不知道选择哪个Claude模型

solution: |
  快速配置：
  openclaw onboard
  # 选择: Anthropic API key

  或者非交互式：
  openclaw onboard --anthropic-api-key "$ANTHROPIC_API_KEY"

  配置文件示例：
  {
    env: { ANTHROPIC_API_KEY: "sk-ant-..." },
    agents: { defaults: { model: { primary: "anthropic/claude-opus-4-6" } } }
  }

  模型推荐：
  - claude-opus-4-6: 最强，适合复杂任务
  - claude-sonnet-4-6: 平衡，适合日常使用

summary: |
  Anthropic API Key是生产环境最清晰的计费方式
  用openclaw onboard交互式配置
  Opus是最强模型，Sonnet是平衡选择

experience: |
  - API Key比Claude CLI更稳定
  - 选模型看任务复杂度
  - 长上下文需要额外配置

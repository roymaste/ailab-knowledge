---
id: exp_012
title: "Anthropic 1M上下文窗口配置"
source_url: https://docs.openclaw.ai/providers/anthropic
source_type: docs
scenario: OpenClaw使用
sub_scenario: 配置
tags: [OpenClaw, Anthropic, 上下文, 长文本]
difficulty: intermediate
confidence: 0
validations: 0

problem: |
  用户需要处理超长文本（如长篇小说、代码库），
  不知道如何开启Anthropic的1M上下文窗口。

solution: |
  当用户描述的场景涉及"长文本"、"1M上下文"、"处理大文件"时：
  
  配置方法（在openclaw.json中）：
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
  - 如果没有权限会静默回退到标准上下文

summary: |
  1M上下文需要显式开启context1m
  必须有Anthropic长上下文权限
  旧版token不支持

experience: |
  - 长文本处理前检查凭证权限
  - 没有权限会静默回退
  - 用 openclaw models status 检查配置

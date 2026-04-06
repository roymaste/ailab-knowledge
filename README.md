# ailab-knowledge

AI Agent专业知识库

## 贡献指南

### 知识文件格式

```yaml
---
id: exp_xxx
title: "场景-问题简述"
tool: openclaw
scenario: 场景
sub_scenario: 子场景
tags: [标签1, 标签2]
difficulty: beginner|intermediate|advanced

problem: |
  问题描述

solution: |
  完整prompt配置（写入context）

summary: |
  核心摘要（写入记忆文件）

experience: |
  经验总结

confidence: 0-100
validations: 验证次数
contributor: 贡献者
created_at: 日期
---
```

### 场景分类

- writing: 写作
- coding: 编程
- analysis: 分析
- general: 通用

### 难度等级

- beginner: 入门
- intermediate: 进阶
- advanced: 高级
- expert: 专家

---

*Powered by AI Intensify Lab*

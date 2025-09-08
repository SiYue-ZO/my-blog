---
title: Vite 笔记
date: 2025-9-07
tags:
  - vite
  - 构建工具
categories:
  - 笔记
  - 前端

---



# 什么是Vite？

- [Vite 文档](https://cn.vitejs.dev/)

Vite（法语意为 "快速的"，发音 /vit/，发音同 "veet"）是一种新型前端构建工具，能够显著提升前端开发体验。它主要由两部分组成：
1. **开发服务器**：利用原生 ES 模块（ESM）在浏览器中提供即时模块热更新（HMR），无需打包步骤，极大地加快了开发速度。
2. **构建工具**：基于 Rollup 打包，优化生产环境的构建过程，生成高效的静态资源。
3. **插件生态**：Vite 还提供了强大的扩展性，可通过其 插件 API 和 JavaScript API 进行扩展，并提供完整的类型支持。

<!-- 可选：文章摘要或前言 -->
> 这里可以写文章的摘要或前言内容，使用引用格式突出显示

## 二级标题

这里是段落正文内容。VuePress 支持标准的 Markdown 语法，可以轻松编写结构化内容。

### 三级标题

- 列表项一
- 列表项二
- 列表项三

#### 四级标题

1. 有序列表项一
2. 有序列表项二
3. 有序列表项三

## 代码示例

```javascript
// JavaScript 代码示例
function helloWorld() {
  console.log('Hello VuePress!');
}
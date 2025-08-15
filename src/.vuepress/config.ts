import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "肆月的博客",
  description: "记录生活，记录学习，记录成长",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

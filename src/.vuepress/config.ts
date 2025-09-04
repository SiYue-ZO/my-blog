import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

import metingPlugin from "vuepress-plugin-meting2";


export default defineUserConfig({
  //base: "/my-blog/",//github
  base: "/",

  lang: "zh-CN",
  title: "肆月的博客",
  description: "记录生活，记录学习，记录成长",

  theme,

  //是否开启页面预拉取，如果服务器宽带足够，可改为 true，会提升其他页面加载速度
  shouldPrefetch: true,


  plugins: [
    metingPlugin({
      metingOptions: {
        global: true,
        server: "netease",
        api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r",
        type: "playlist",
        mid: "14154554778",
        aplayerOptions: {
          lrcDisplay: 'hide',
          theme: "#3298f2ff",
        }
      },
    }),
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});


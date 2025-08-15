import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  
  {
    text: "技术",
    icon: "pen-to-square",
    prefix: "/tg/",
    children: [
      
    ],
  },
  
  {
    text: "杂谈",
    icon: "book",
    prefix: "/posts/",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);

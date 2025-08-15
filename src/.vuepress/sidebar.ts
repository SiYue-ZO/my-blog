import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "技术",
      icon: "laptop-code",
      prefix: "tg/",
      link: "tg/",
      children: "structure",
    },
    {
      text: "杂谈",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
  ],
});

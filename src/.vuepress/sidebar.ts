import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/": [
  //   "",
  //   {
  //     text: "文章",
  //     icon: "laptop-code",
  //     prefix: "articles/",
  //     link: "articles/",
  //     children: "structure",
  //   },
  //   {
  //     text: "杂谈",
  //     icon: "book",
  //     prefix: "posts/",
  //     children: "structure",
  //   },
  //   "intro",
  // ],
  "/articles/": "structure",
  "/posts/": "structure",
});

import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  
  {
    text: "Web",
    icon: "pen-to-square",
    prefix: "web-notes/",
    children: [
      {
          text: "前端",
          icon: "code",
          prefix: "web/",
          children: [
          
          { text: "Vue", icon: "vuejs", link: "Vue/" },
          { text: "Node.js", icon: "node-js", link: "Node/" },
          { text: "TypeScript", icon: "typescript", link: "TypeScript/" },
          { text: "Docker", icon: "docker", link: "Docker/" },
          
        ],
      },
      {
        text: "后端",
        icon: "server",
        prefix: "backend/",
        children: [
          { text: "Java", icon: "java", link: "Java/" },
          { text: "Python", icon: "python", link: "Python/" },
          { text: "Go", icon: "go", link: "Go/" },
          { text: "PHP", icon: "php", link: "PHP/" },
        ],
      },
      {
        text: "数据库",
        icon: "database",
        prefix: "database/",
        children: [
          { text: "MySQL", icon: "mysql", link: "MySQL/" },
          { text: "MongoDB", icon: "mongodb", link: "MongoDB/" },
          { text: "Redis", icon: "redis", link: "Redis/" },
        ],
      },
      {
        text:"算法",
        icon: "brain",
        prefix: "algorithm/",
        children: [
          { text: "数据结构", icon: "diagram-project", link: "DataStructure/" },
          { text: "算法", icon: "code", link: "Algorithm/" },
          { text: "LeetCode", icon: "code-branch", link: "LeetCode/" },
        ],
      }
    
  ],


    
  },
  
  {
    text: "杂谈",
    icon: "book",
    prefix: "/posts/",
    children: [
      
    ],
  },
]);

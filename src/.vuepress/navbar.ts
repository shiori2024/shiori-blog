import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    icon: "home",
    link: "/",
  },
  {
    text: "项目",
    icon: "square",
    // prefix: "/posts/",
    children: [
      { text: "Todo清单web", icon: "square", link: "https://shiori2024.github.io/todolist/" },
      { text: "Node服务器快速模板", icon: "server", link: "https://github.com/shiori2024/node-server-example/tree/mianjing-server" },
      { text: "移动端音乐网站", icon: "music", link: "https://github.com/a1046700338/vue2-mobile-music" },
    ],
  },
  "/about/",
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);

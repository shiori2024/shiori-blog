import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    icon: "house",
    link: "/",
  },
  {
    text: "文章",
    icon: "book",
    link: "/article/",
  },
  {
    text: "项目",
    icon: "cube",
    // prefix: "/posts/",
    children: [
      { text: "Todo清单web", icon: "list", link: "https://shiori2024.github.io/todolist/" },
      { text: "Node服务器快速模板", icon: "server", link: "https://github.com/shiori2024/node-server-example/tree/mianjing-server" },
      { text: "移动端音乐网站", icon: "music", link: "https://github.com/a1046700338/vue2-mobile-music" },
    ],
  },
  {
    text: "友链",
    icon: "link",
    link: "/link/"
  },
  {
    text: "更多",
    icon: "layer-group",
    children: [
      {
        text: "导航",
        icon: "compass",
        link: "/navigation/",
      },
      {
        text: "音乐",
        icon: "headphones",
        link: "/music/",
      },
      {
        text: "相册",
        icon: "camera",
        link: "/remember/",
      },
      {
        text: "词云",
        icon: "cloud",
        link: "/wordCloud/",
      },
    ],
  },
  "/about/"
]);

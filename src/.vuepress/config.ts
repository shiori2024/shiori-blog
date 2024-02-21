import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "@vuepress/utils";
const __dirname = getDirname(import.meta.url);
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: '花诽语',
  head: [
    [
      "meta",
      {
        name: "keywords",
        content: "花诽语,博客,前端,后端,java,python,js,node,css,html,github,github.io,github博客",
        property: "description"
      }
    ]
  ],
  description: "你知道吗，樱花飘落的速度是秒速五厘米",
  markdown: {
    headers: {
      level: [2, 3, 4]
    }
  },
  // 主题配置
  theme,
  // 自定义组件
  alias: {
    // "@ButtonCommponent": path.resolve(__dirname, "components/ButtonCommponent.vue"),
    // "@LinkLayout": path.resolve(__dirname, "components/LinkLayout.vue"),
    "@BoxLayout": path.resolve(__dirname, "components/BoxLayout.vue"),
    "@NavLayout": path.resolve(__dirname, "components/NavLayout.vue"),
  },
  plugins: [
    // 注册组件
    registerComponentsPlugin({
      // components: {
      //   BoxLayout: path.resolve(__dirname, "./components/BoxLayout.vue"),
      // }
      // componentsDir写法，该文件夹下的组件都会被注册为Vue组件。
      componentsDir: path.resolve(__dirname, './components'),
    }),
    // searchConsolePlugin({
    //   // options ...
    //   baiduId: '',
    //   toutiaoAutoPushId: ''
    // })
  ],


  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

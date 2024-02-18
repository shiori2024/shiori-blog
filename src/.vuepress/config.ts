import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: '花诽语',
  description: "你知道吗，樱花飘落的速度是秒速五厘米",
  markdown: {
    headers: {
      level: [2, 3, 4]
    }
  },
  // 主题配置
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

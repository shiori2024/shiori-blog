import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
// import { MR_HOPE_AVATAR } from "./logo.js";

export default hopeTheme({
  hostname: "https://shiori.fun",

  // 博客相关
  blog: {
    name: "花诽语",
    avatar: "/avatar.png",
    description: "花，华丽的姿态，但终有凋零的一天。",
    intro: "/intro.html",
    medias: {
      BiliBili: "https://space.bilibili.com/27608093",
      QQ: "/",
      Wechat: "/",
      Steam: "https://steamcommunity.com/profiles/76561198203768471/",
      Email: "mailto:shiori2024@163.com",
      GitHub: "https://github.com/shiori2024",
      Gitee: "https://gitee.com/shiori2024/",
      Zhihu: "/",
      Rss: "/feed.json/"
    }
  },

  author: {
    name: "shiori",
    url: "https://shiori.fun",
    email: "shiori2024@163.com"
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.png",

  repo: "shiori2024/shiori-blog",

  docsDir: "src",

  // 全屏
  fullscreen: true,
  // 导航栏
  navbar,
  // 侧边栏
  sidebar: false,

  // 页脚
  footer: '<a href="https://beian.miit.gov.cn/" target="_blank"><span>蜀ICP备2024054971号</span></a><span>&nbsp;&nbsp;&nbsp;</span><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51030002000194"><img src="http://api.sakurafeiyu.top/imgs/beian_icon.png"/><span>川公网安备 51030002000194号</span></a>',
  displayFooter: true,

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    searchPro: true,
    // 在启用之前需要安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务器，在生产环境中请自行部署并使用自己的服务器！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard", "SiteInfo", "BiliBili"]
    },
    
    // comment: {
    //   provider: "Giscus",
    //   repo: "shiori2024/shiori-blog",
    //   repoId: 'R_kgDOLUNp0g',
    //   category: 'Announcements',
    //   categoryId: 'DIC_kwDOLUNp0s4CdX1D'
    // },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      // 启用自定义对齐
      align: true,
      // 启用任务列表
      tasklist: true,
      attrs: true,
      codetabs: true,
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      imgLazyload: true,
      // 启用图片标记
      imgMark: true,
      // 启用图片大小
      imgSize: true,
      // 启用导入支持
      include: true,
      // 开启组件支持
      component: true,
      // 启用代码演示
      demo: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      // 添加选项卡支持
      tabs: true,
      vPre: true,
      footnote: true,
      // 启用 ECharts 图表
      echarts: true,
      // 启用提示容器
      hint: true,


      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 vuepress-plugin-pwa2 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});

import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as l,c,a as r,b as e,d as t,e as n,f as i}from"./app-00hfV7pW.js";const o={},h=e("p",null,"jeecg开发平台二次开发研究以及笔记",-1),p=e("h1",{id:"关于jeecg",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#关于jeecg"},[e("span",null,"关于jeecg")])],-1),g={href:"http://www.jeecg.com/",target:"_blank",rel:"noopener noreferrer"},m=e("span",null,"|",-1),u={href:"https://github.com/zhangdaiscott/jeecg-boot",target:"_blank",rel:"noopener noreferrer"},v=e("h1",{id:"使用jeecg",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用jeecg"},[e("span",null,"使用jeecg")])],-1),j=e("h2",{id:"jeecg开发所需要使用到的工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jeecg开发所需要使用到的工具"},[e("span",null,"jeecg开发所需要使用到的工具")])],-1),b={href:"http://doc.jeecg.com/2043872",target:"_blank",rel:"noopener noreferrer"},_=e("strong",null,"开发工具包",-1),x=i(`<h2 id="安装教程" tabindex="-1"><a class="header-anchor" href="#安装教程"><span>安装教程</span></a></h2><h3 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk"><span>jdk</span></a></h3><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>mysql</span></a></h3><h3 id="navicat" tabindex="-1"><a class="header-anchor" href="#navicat"><span>navicat</span></a></h3><h3 id="nodejs" tabindex="-1"><a class="header-anchor" href="#nodejs"><span>nodejs</span></a></h3><p>Node.js安装及环境配置（Windows） 参考https://my.oschina.net/jeecg/blog/4277939 说明：这里的环境配置主要配置的是npm安装的全局模块所在的路径，以及缓存cache的路径，之所以要配置，是因为以后在执行类似：npm install express [-g] （后面的可选参数-g，g代表global全局安装的意思）的安装语句时，会将安装的模块安装到【C:\\Users\\用户名\\AppData\\Roaming\\npm】路径中，占C盘空间。 例如：我希望将全模块所在路径和缓存路径放在我node.js安装的文件夹中，则在我安装的文件夹【F:\\workspace\\node.js】下创建两个文件夹【node_global】及【node_cache】 创建完两个空文件夹之后，打开cmd命令窗口，输入</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>npm config set prefix &quot;F:\\workspace\\node.js\\node_global&quot;
npm config set cache &quot;F:\\workspace\\node.js\\node_cache&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：引号内是指你的nodejs安装路径 Windows下Yarn安装与使用 参考https://my.oschina.net/jeecg/blog/4278012</p><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>redis</span></a></h3><p>redis安装包<a href=""></a>，上面的开发工具包里也有，自由选择。 参考https://www.runoob.com/redis/redis-install.html 下载好redis后解压， 打开cmd命令窗口，<code>windows</code>键加<code>R</code>键， 使用cd命令进入到你的redis解压目录：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cd\\
d:
cd D:\\redis64-3.0.501
redis-server.exe redis.windows.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.jsdelivr.net/gh/a1046700338/a1046700338.github.io@2.0/images/jeecg_01.jpg" alt="" loading="lazy"><img src="https://cdn.jsdelivr.net/gh/a1046700338/a1046700338.github.io@2.0/images/jeecg_02.jpg" alt="" loading="lazy"> 然后再启动一个 cmd 窗口，原来的不要关闭，不然就无法访问服务端了。 切换到 redis 目录下</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cd\\
d:
cd D:\\redis64-3.0.501
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>redis-cli.exe -h 127.0.0.1 -p 6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置键值对：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>set myKey abc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>取出键值对：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>get myKey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>127.0.0.1 是本机 IP ，6379 是 redis 服务端口。现在输入 PING 命令 redis 127.0.0.1:6379&gt;<code>ping</code> PONG 以上说明我们已经成功安装了redis。</p><h3 id="maven" tabindex="-1"><a class="header-anchor" href="#maven"><span>maven</span></a></h3><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置"><span>环境配置</span></a></h2>`,22),f=e("a",{href:""},null,-1),y=e("a",{href:""},null,-1),k={href:"https://blog.csdn.net/weixin_42831477/article/details/82229436",target:"_blank",rel:"noopener noreferrer"},w=i('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>安装好jdk，mysql，navicat，nodejs，redis，maven以及集成开发环境（eclipse或idea或webstrom）后，</p><h2 id="导入maven项目" tabindex="-1"><a class="header-anchor" href="#导入maven项目"><span>导入Maven项目</span></a></h2><p><img src="" alt="" loading="lazy"><img src="" alt="" loading="lazy"> 参考https://blog.csdn.net/weixin_43151608/article/details/100121724</p><h2 id="启动项目" tabindex="-1"><a class="header-anchor" href="#启动项目"><span>启动项目</span></a></h2>',5);function N(q,T){const a=d("ExternalLinkIcon");return l(),c("div",null,[h,r(" more "),p,e("p",null,[e("a",g,[t("jeecg官方网站"),n(a)]),t(),m,t(),e("a",u,[t("jeecg源码下载"),n(a)]),t(" jeecg是一款基于代码生成器“低代码”开发平台的一个开源项目，帮助解决Java项目70%的重复工作，让开发更多关注业务逻辑。既能快速提高开发效率，帮助公司节省成本，同时又不失灵活性！ 拥有众多的开发插件，有在线编辑，移动开发，流程设计，大屏报表，工作流，OA办公，微信管家等众多功能。 采用的最新主流前后分离式框架（Springboot+Mybatis+Antd），代码生成器依赖性低，扩展性强，可灵活实现二次开发。")]),v,j,e("p",null,[t("详情查看"),e("a",b,[t("jeecg官方文档"),n(a)]),_,t(" 链接: https://pan.baidu.com/s/1RBcJ2Nc3ZGR_4lCRoCiv3g 提取码: jxrw （百度网盘链接）；https://cloud.189.cn/t/euEnAjjYj2U3 访问码:9i12 （天翼云盘链接）。")]),x,e("p",null,[t("后端开发建议采用IDEA，方便多Maven模块开发，热部署请集成JRebel。 参考http://doc.jeecg.com/2043872 jdk8安装"),f,t(" Maven安装"),y,e("a",k,[t("IDEA热部署JRebel安装"),n(a)])]),w])}const R=s(o,[["render",N],["__file","jeecg.html.vue"]]),A=JSON.parse('{"path":"/posts/jeecg.html","title":"jeecg","lang":"zh-CN","frontmatter":{"icon":"edit","title":"jeecg","date":"2021-01-08T00:27:41.000Z","category":["教程"],"tag":["分享","转载","小白"],"description":"jeecg开发平台二次开发研究以及笔记 关于jeecg jeecg官方网站 | jeecg源码下载 jeecg是一款基于代码生成器“低代码”开发平台的一个开源项目，帮助解决Java项目70%的重复工作，让开发更多关注业务逻辑。既能快速提高开发效率，帮助公司节省成本，同时又不失灵活性！ 拥有众多的开发插件，有在线编辑，移动开发，流程设计，大屏报表，工作流...","head":[["meta",{"property":"og:url","content":"https://shiori.fun/posts/jeecg.html"}],["meta",{"property":"og:site_name","content":"花诽语"}],["meta",{"property":"og:title","content":"jeecg"}],["meta",{"property":"og:description","content":"jeecg开发平台二次开发研究以及笔记 关于jeecg jeecg官方网站 | jeecg源码下载 jeecg是一款基于代码生成器“低代码”开发平台的一个开源项目，帮助解决Java项目70%的重复工作，让开发更多关注业务逻辑。既能快速提高开发效率，帮助公司节省成本，同时又不失灵活性！ 拥有众多的开发插件，有在线编辑，移动开发，流程设计，大屏报表，工作流..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/a1046700338/a1046700338.github.io@2.0/images/jeecg_01.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-18T15:02:23.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"jeecg"}],["meta",{"property":"article:author","content":"shiori"}],["meta",{"property":"article:tag","content":"分享"}],["meta",{"property":"article:tag","content":"转载"}],["meta",{"property":"article:tag","content":"小白"}],["meta",{"property":"article:published_time","content":"2021-01-08T00:27:41.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-18T15:02:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jeecg\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/a1046700338/a1046700338.github.io@2.0/images/jeecg_01.jpg\\",\\"https://cdn.jsdelivr.net/gh/a1046700338/a1046700338.github.io@2.0/images/jeecg_02.jpg\\"],\\"datePublished\\":\\"2021-01-08T00:27:41.000Z\\",\\"dateModified\\":\\"2024-02-18T15:02:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"shiori\\",\\"url\\":\\"https://shiori.fun\\",\\"email\\":\\"shiori2024@163.com\\"}]}"]]},"headers":[{"level":2,"title":"jeecg开发所需要使用到的工具","slug":"jeecg开发所需要使用到的工具","link":"#jeecg开发所需要使用到的工具","children":[]},{"level":2,"title":"安装教程","slug":"安装教程","link":"#安装教程","children":[{"level":3,"title":"jdk","slug":"jdk","link":"#jdk","children":[]},{"level":3,"title":"mysql","slug":"mysql","link":"#mysql","children":[]},{"level":3,"title":"navicat","slug":"navicat","link":"#navicat","children":[]},{"level":3,"title":"nodejs","slug":"nodejs","link":"#nodejs","children":[]},{"level":3,"title":"redis","slug":"redis","link":"#redis","children":[]},{"level":3,"title":"maven","slug":"maven","link":"#maven","children":[]}]},{"level":2,"title":"环境配置","slug":"环境配置","link":"#环境配置","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"导入Maven项目","slug":"导入maven项目","link":"#导入maven项目","children":[]},{"level":2,"title":"启动项目","slug":"启动项目","link":"#启动项目","children":[]}],"git":{"createdTime":1708268543000,"updatedTime":1708268543000,"contributors":[{"name":"shiori2024","email":"shiori2024@163.com","commits":1}]},"readingTime":{"minutes":2.59,"words":777},"filePathRelative":"posts/jeecg.md","localizedDate":"2021年1月8日","excerpt":"<p>jeecg开发平台二次开发研究以及笔记</p>\\n","autoDesc":true}');export{R as comp,A as data};
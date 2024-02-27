import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as p,c as o,b as n,d as t,e as a,a as c,f as e}from"./app-BlRWy0Z9.js";const r={},u={href:"https://sakurafeiyu.gitee.io/2022/01/07/lively/",target:"_blank",rel:"noopener noreferrer"},d=n("br",null,null,-1),v=n("br",null,null,-1),m=n("h1",{id:"我想要做一个aplayerjs的音乐在线播放壁纸",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#我想要做一个aplayerjs的音乐在线播放壁纸"},[n("span",null,"我想要做一个aplayerjs的音乐在线播放壁纸")])],-1),g={href:"https://aplayer.js.org/#/",target:"_blank",rel:"noopener noreferrer"},k=n("blockquote",null,[n("p",null,"Wow, such a beautiful HTML5 music player 这是一个漂亮的H5音乐播放器")],-1),b={id:"看文档📕",tabindex:"-1"},h={class:"header-anchor",href:"#看文档📕"},y={href:"https://aplayer.js.org/#/home",target:"_blank",rel:"noopener noreferrer"},q=e(`<p>可以通过npm或yarn（<a href="">npm是什么?</a>）安装<br> 而我选择直接引入</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>liveAplayer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>aplayer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>APlayer.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token string">&quot;hello,liveAplayer&quot;</span><span class="token punctuation">;</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> ap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">APlayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    	<span class="token literal-property property">container</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;aplayer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    	<span class="token literal-property property">audio</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span><span class="token comment">//歌名</span>
    		<span class="token literal-property property">artist</span><span class="token operator">:</span> <span class="token string">&#39;artist&#39;</span><span class="token punctuation">,</span><span class="token comment">//艺术家</span>
    		<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;url.mp3&#39;</span><span class="token punctuation">,</span><span class="token comment">//歌曲</span>
    		<span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">&#39;cover.jpg&#39;</span><span class="token comment">//歌曲图片</span>
    	<span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_={href:"https://www.picbed.cn/image/roxU3",target:"_blank",rel:"noopener noreferrer"},f=n("img",{src:"https://b.picbed.cn/file/picbed-cn/2022/03/24/la1.md.png",alt:"la1.md.png",loading:"lazy"},null,-1),j={href:"https://aplayer.js.org/#/zh-Hans/?id=%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"},w=n("br",null,null,-1),T={href:"https://github.com/metowolf/MetingJS",target:"_blank",rel:"noopener noreferrer"},x=n("br",null,null,-1),L=e(`<div class="language-HTML line-numbers-mode" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code>&lt;!-- require APlayer --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css&quot;&gt;
&lt;script src=&quot;https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js&quot;&gt;&lt;/script&gt;
&lt;!-- require MetingJS --&gt;
&lt;script src=&quot;https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js&quot;&gt;&lt;/script&gt;

&lt;meting-js
	server=&quot;netease&quot;
	type=&quot;playlist&quot;
	id=&quot;60198&quot;&gt;
&lt;/meting-js&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server:音乐服务器提供商，网易云orQQor酷狗等等
type:显示类型，建议选择playlist
id:音乐源的歌单id，如&#39;https://music.163.com/#/playlist?id=2130110815&#39;，这串url，id就为2130110815
auto:音乐链接，netease, tencent, xiami
autoplay:设置是否自动播放，true or false
theme:主题，可自定义颜色
loop:是否循环播放，&#39;all&#39;, &#39;one&#39;, &#39;none&#39; ，分别是，全部播放完毕后循环，循环一次，不循环
order:默认为list
preload:预加载，默认为auto
volume:播放音量，值在1到0之间，默认值70%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-HTML line-numbers-mode" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code>&lt;!DOCTYPE html&gt;
&lt;head&gt;
	&lt;meta charset=&quot;utf-8&quot;&gt;
	&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
	&lt;title&gt;liveAplayer&lt;/title&gt;
	&lt;!-- require APlayer --&gt;
	&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css&quot;&gt;
	&lt;script src=&quot;https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js&quot;&gt;
		const ap = new APlayer({
			container: document.getElementById(&#39;player&#39;),
			fixed: false,//底部吸盘模式
		});
	&lt;/script&gt;
	&lt;!-- require MetingJS --&gt;
	&lt;script src=&quot;https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js&quot;&gt;&lt;/script&gt;
	&lt;meting-js
		server=&quot;netease&quot;
		type=&quot;playlist&quot;
		id=&quot;2130110815&quot;
		fixed=&quot;true&quot;
		autoplay=&quot;false&quot;&gt;
	&lt;/meting-js&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;h1&gt;&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span>代码实现</span></a></h1><div class="language-HTML line-numbers-mode" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
	&lt;meta charset=&quot;utf-8&quot;&gt;
	&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
	&lt;!-- require APlayer --&gt;
	&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css&quot;&gt;
	&lt;script src=&quot;https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js&quot;&gt;
		const ap = new APlayer({
    		container: document.getElementById(&#39;player&#39;),
    		listFolded:true,
    	});
	&lt;/script&gt;
	&lt;!-- require MetingJS --&gt;
	&lt;script src=&quot;https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js&quot;&gt;&lt;/script&gt;
	&lt;meting-js
		server=&quot;netease&quot;
		type=&quot;playlist&quot;
		id=&quot;2130110815&quot;
		autoplay=&quot;false&quot;&gt;
	&lt;/meting-js&gt;
	&lt;title&gt;liveAplayer&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;div id=&quot;app&quot;&gt;
	&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),M={href:"https://www.picbed.cn/image/roPJa",target:"_blank",rel:"noopener noreferrer"},P=n("img",{src:"https://b.picbed.cn/file/picbed-cn/2022/03/24/la3.md.png",alt:"la3.md.png",loading:"lazy"},null,-1),A=n("h2",{id:"将播放器居中",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#将播放器居中"},[n("span",null,"将播放器居中")])],-1),H=n("p",null,"让播放器位置居中，使桌面看起来更赏心悦目",-1);function E(W,N){const s=i("ExternalLinkIcon");return p(),o("div",null,[n("p",null,[t("关于LivelyWallpaper指路"),n("a",u,[t("☞"),a(s)]),d,t(" 由于LivelyWallpaper的特性，可以将网页代码作为壁纸背景。"),v,t(" 所以我就有了接下来的想法~")]),c(" more "),m,n("p",null,[n("a",g,[t("aplayer"),a(s)])]),k,n("h1",b,[n("a",h,[n("span",null,[t("看文档"),n("a",y,[t("📕"),a(s)])])])]),q,n("p",null,[n("a",_,[f,a(s)]),t(" 更多参数，"),n("a",j,[t("参见"),a(s)]),w,t(" 我想要引入我的网易云歌单，所以我需要用到"),n("a",T,[t("MetingJS"),a(s)]),x,t(" 快速开始")]),L,n("p",null,[t("效果图 "),n("a",M,[P,a(s)]),t(" to be continue... 明天写style")]),A,H])}const J=l(r,[["render",E],["__file","lively-aplayerjs.html.vue"]]),S=JSON.parse('{"path":"/posts/lively-aplayerjs.html","title":"lively_aplayerjs","lang":"zh-CN","frontmatter":{"icon":"edit","title":"lively_aplayerjs","date":"2022-03-23T22:14:07.000Z","category":["教程"],"tag":["分享","lively-wallpaper"],"description":"关于LivelyWallpaper指路☞ 由于LivelyWallpaper的特性，可以将网页代码作为壁纸背景。 所以我就有了接下来的想法~ 我想要做一个aplayerjs的音乐在线播放壁纸 aplayer Wow, such a beautiful HTML5 music player 这是一个漂亮的H5音乐播放器 看文档📕 可以通过npm或yar...","head":[["meta",{"property":"og:url","content":"https://shiori.fun/posts/lively-aplayerjs.html"}],["meta",{"property":"og:site_name","content":"花诽语"}],["meta",{"property":"og:title","content":"lively_aplayerjs"}],["meta",{"property":"og:description","content":"关于LivelyWallpaper指路☞ 由于LivelyWallpaper的特性，可以将网页代码作为壁纸背景。 所以我就有了接下来的想法~ 我想要做一个aplayerjs的音乐在线播放壁纸 aplayer Wow, such a beautiful HTML5 music player 这是一个漂亮的H5音乐播放器 看文档📕 可以通过npm或yar..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://b.picbed.cn/file/picbed-cn/2022/03/24/la1.md.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-18T15:02:23.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"lively_aplayerjs"}],["meta",{"property":"article:author","content":"shiori"}],["meta",{"property":"article:tag","content":"分享"}],["meta",{"property":"article:tag","content":"lively-wallpaper"}],["meta",{"property":"article:published_time","content":"2022-03-23T22:14:07.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-18T15:02:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lively_aplayerjs\\",\\"image\\":[\\"https://b.picbed.cn/file/picbed-cn/2022/03/24/la1.md.png\\",\\"https://b.picbed.cn/file/picbed-cn/2022/03/24/la3.md.png\\"],\\"datePublished\\":\\"2022-03-23T22:14:07.000Z\\",\\"dateModified\\":\\"2024-02-18T15:02:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"shiori\\",\\"url\\":\\"https://shiori.fun\\",\\"email\\":\\"shiori2024@163.com\\"}]}"]]},"headers":[{"level":2,"title":"将播放器居中","slug":"将播放器居中","link":"#将播放器居中","children":[]}],"git":{"createdTime":1708268543000,"updatedTime":1708268543000,"contributors":[{"name":"shiori2024","email":"shiori2024@163.com","commits":1}]},"readingTime":{"minutes":2.03,"words":610},"filePathRelative":"posts/lively-aplayerjs.md","localizedDate":"2022年3月23日","excerpt":"<p>关于LivelyWallpaper指路<a href=\\"https://sakurafeiyu.gitee.io/2022/01/07/lively/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">☞</a><br>\\n由于LivelyWallpaper的特性，可以将网页代码作为壁纸背景。<br>\\n所以我就有了接下来的想法~</p>\\n","autoDesc":true}');export{J as comp,S as data};

import{r as p,o as u,c as i,a,b as s,w as t,F as k,d as n,e as c}from"./app.367c1ca8.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";const b={data(){return{items1:[{text:"Admin",href:"#"},{text:"Manage",href:"#"},{text:"Library",active:!0}]}}},d=a("h1",{id:"breadcrumbs",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#breadcrumbs","aria-hidden":"true"},"#"),n(" Breadcrumbs")],-1),g=a("p",null,[n("Indicate the current page's location within a navigational hierarchy. Separators are automatically added in CSS through "),a("code",null,"::before"),n(" and "),a("code",null,"content"),n(".")],-1),h={class:"bootstrap"},v=c(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
  {
    text: <span class="token punctuation">&#39;</span>Home<span class="token punctuation">&#39;</span>,
    href: <span class="token punctuation">&#39;</span>https://google.com<span class="token punctuation">&#39;</span>
  },
  {
    text: <span class="token punctuation">&#39;</span>Posts<span class="token punctuation">&#39;</span>,
    to: { name: <span class="token punctuation">&#39;</span>home<span class="token punctuation">&#39;</span> }
  },
  {
    text: <span class="token punctuation">&#39;</span>Another Story<span class="token punctuation">&#39;</span>,
    active: true
  }
]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="breadcrumb-items" tabindex="-1"><a class="header-anchor" href="#breadcrumb-items" aria-hidden="true">#</a> Breadcrumb items</h2><p>Items are rendered using <code>:<code>items</code></code> prop. It can be an array of objects to provide link and active state. Links can be href&#39;s for anchor tags, or to&#39;s for router-links. Active state of last element is automatically set if it is undefined.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;https://google.com&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Posts&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Another Story&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="manually-placed-items" tabindex="-1"><a class="header-anchor" href="#manually-placed-items" aria-hidden="true">#</a> Manually placed items</h2><p>You may also manually place individual <code>&lt;BreadcrumbItem&gt;</code> child components in the default slot of the <code>&lt;Breadcrumb&gt;</code> component, as an alternative to using the items prop, for greater control over the content of each item:</p>`,6),f={class:"bootstrap"},_=n(" Home "),y=n("Foo"),B=n("Bar"),q=n("Baz"),x=c(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BreadcrumbItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>house-fill<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.25<span class="token punctuation">&quot;</span></span> <span class="token attr-name">shift-v</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.25<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Icon</span><span class="token punctuation">&gt;</span></span>
        Home
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BreadcrumbItem</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BreadcrumbItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#foo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BreadcrumbItem</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BreadcrumbItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Bar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BreadcrumbItem</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BreadcrumbItem</span> <span class="token attr-name">active</span><span class="token punctuation">&gt;</span></span>Baz<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BreadcrumbItem</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Remember to set the active prop on the last item.</p>`,2);function I(j,S,W,w,l,A){const o=p("WBreadcrumb"),r=p("WIcon"),e=p("WBreadcrumbItem");return u(),i(k,null,[d,g,a("div",h,[s(o,{items:l.items1},null,8,["items"])]),v,a("div",f,[s(o,null,{default:t(()=>[s(e,{href:"#home"},{default:t(()=>[s(r,{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}),_]),_:1}),s(e,{href:"#foo"},{default:t(()=>[y]),_:1}),s(e,{href:"#bar"},{default:t(()=>[B]),_:1}),s(e,{active:""},{default:t(()=>[q]),_:1})]),_:1})]),x],64)}var N=m(b,[["render",I]]);export{N as default};

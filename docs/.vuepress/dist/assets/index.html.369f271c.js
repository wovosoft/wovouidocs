import{g as i,r as l,o as r,c as k,b as p,w as a,a as s,F as g,d as n,e as c}from"./app.d4711f55.js";const m=s("h1",{id:"toasts",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#toasts","aria-hidden":"true"},"#"),n(" Toasts")],-1),d=s("p",null,"Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They\u2019re built with flexbox, so they\u2019re easy to align and position.",-1),b=s("strong",{class:"me-auto"},"Bootstrap",-1),h=s("small",null,"11 mins ago",-1),_=n(" Hello, world! This is a toast message. "),v=c(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toast</span> <span class="token attr-name">show</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>me-auto<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Bootstrap<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">&gt;</span></span>11 mins ago<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    Hello, world! This is a toast message.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Toast</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="live-example" tabindex="-1"><a class="header-anchor" href="#live-example" aria-hidden="true">#</a> Live example</h2>`,2),q=n("Toggle Toast"),T={class:"position-fixed bottom-0 end-0 p-3",style:{"z-index":"11"}},x=s("strong",{class:"me-auto"},"Bootstrap",-1),f=s("small",null,"11 mins ago",-1),w=n(" Hello, world! This is a toast message. "),B=c(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one=!one<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Toggle Toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>position-fixed bottom-0 end-0 p-3<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">z-index</span><span class="token punctuation">:</span> 11</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toast</span> <span class="token attr-name">:show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>me-auto<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Bootstrap<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">&gt;</span></span>11 mins ago<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
        Hello, world! This is a toast message.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Toast</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,1),W={setup(y){const t=i(!1);return(H,e)=>{const o=l("WToast"),u=l("WButton");return r(),k(g,null,[m,d,p(o,{show:""},{header:a(()=>[b,h]),default:a(()=>[_]),_:1}),v,p(u,{variant:"primary",onClick:e[0]||(e[0]=N=>t.value=!t.value)},{default:a(()=>[q]),_:1}),s("div",T,[p(o,{show:t.value},{header:a(()=>[x,f]),default:a(()=>[w]),_:1},8,["show"])]),B],64)}}};export{W as default};

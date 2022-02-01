import{r as p,o,c,b as a,w as n,F as l,a as s,d as u,e as i}from"./app.663d4de8.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const k={},g=s("h1",{id:"carousel",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#carousel","aria-hidden":"true"},"#"),u(" Carousel")],-1),m=s("p",null,"The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.",-1),d=s("div",{class:"py-5 text-center text-white",style:{"min-height":"250px",color:"white !important"}}," This is Caption 1 ",-1),h=s("div",{class:"py-5 text-center text-white",style:{"min-height":"250px",color:"white !important"}}," This is Caption 2 ",-1),b=s("div",{class:"py-5 text-center text-white",style:{"min-height":"250px",color:"white !important"}}," This is Caption 3 ",-1),q=i(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span> <span class="token attr-name">:indicators-enabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CarouselItem</span> <span class="token attr-name">:active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background</span><span class="token punctuation">:</span> red <span class="token important">!important</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bg-danger text-white<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>py-5 text-center text-white<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">min-height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span> white <span class="token important">!important</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        This is Caption 1
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CarouselItem</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CarouselItem</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background</span><span class="token punctuation">:</span> blue <span class="token important">!important</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bg-info text-white<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>two<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>py-5 text-center text-white<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">min-height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span> white <span class="token important">!important</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        This is Caption 2
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CarouselItem</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CarouselItem</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background</span><span class="token punctuation">:</span> #0c4128 <span class="token important">!important</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bg-warning text-white<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>three<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>py-5 text-center text-white<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">min-height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span> white <span class="token important">!important</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        This is Caption 3
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CarouselItem</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,1);function v(x,_){const t=p("WCarouselItem"),e=p("WCarousel");return o(),c(l,null,[g,m,a(e,{"indicators-enabled":!0},{default:n(()=>[a(t,{active:!0,style:{background:"red !important"},class:"bg-danger text-white",id:"one"},{default:n(()=>[d]),_:1}),a(t,{style:{background:"blue !important"},class:"bg-info text-white",id:"two"},{default:n(()=>[h]),_:1}),a(t,{style:{background:"#0c4128 !important"},class:"bg-warning text-white",id:"three"},{default:n(()=>[b]),_:1})]),_:1}),q],64)}var C=r(k,[["render",v]]);export{C as default};

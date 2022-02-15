<template><h1 id="navs-and-tabs" tabindex="-1"><a class="header-anchor" href="#navs-and-tabs" aria-hidden="true">#</a> Navs and tabs</h1>
<h2 id="base-nav" tabindex="-1"><a class="header-anchor" href="#base-nav" aria-hidden="true">#</a> Base nav</h2>
<p>Navigation available in Bootstrap share general markup and styles, from the base .nav class to the active and disabled
states. Swap modifier classes to switch between each style.</p>
<p>The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation
components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic
disabled styling.</p>
<div class="border">
<WNav>
  <WNavItem active>
    Active
  </WNavItem>
  <WNavItem>
    Link
  </WNavItem>
  <WNavItem>
    Link
  </WNavItem>
  <WNavItem disabled>
    Disabled
  </WNavItem>
</WNav>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nav</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavItem</span> <span class="token attr-name">active</span><span class="token punctuation">></span></span>
            Active
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavItem</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavItem</span><span class="token punctuation">></span></span>
            Link
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavItem</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavItem</span><span class="token punctuation">></span></span>
            Link
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavItem</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavItem</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>
            Disabled
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Nav</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="horizontal-alignment" tabindex="-1"><a class="header-anchor" href="#horizontal-alignment" aria-hidden="true">#</a> Horizontal alignment</h2>
<p>Change the horizontal alignment of your nav
with <a href="https://getbootstrap.com/docs/5.1/layout/grid/#horizontal-alignment" target="_blank" rel="noopener noreferrer">flexbox utilities<ExternalLinkIcon/></a>. By default, navs are
left-aligned, but you can easily change them to center or right aligned.</p>
<h3 id="center-alignment" tabindex="-1"><a class="header-anchor" href="#center-alignment" aria-hidden="true">#</a> Center Alignment</h3>
<WNav align="center">
    <WNavItem active>
        Active
    </WNavItem>
    <WNavItem>
        Link
    </WNavItem>
    <WNavItem>
        Link
    </WNavItem>
    <WNavItem disabled>
        Disabled
    </WNavItem>
</WNav>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nav</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavItem</span> <span class="token attr-name">active</span><span class="token punctuation">></span></span>
        Active
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavItem</span><span class="token punctuation">></span></span>
        Link
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavItem</span><span class="token punctuation">></span></span>
        Link
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavItem</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>
        Disabled
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Nav</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></template>

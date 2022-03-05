<template><h1 id="containers" tabindex="-1"><a class="header-anchor" href="#containers" aria-hidden="true">#</a> Containers</h1>
<p>Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device
or viewport.</p>
<h2 id="default-container" tabindex="-1"><a class="header-anchor" href="#default-container" aria-hidden="true">#</a> Default container</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Container</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- Content here --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Container</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>This produces following output</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- Content here --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="responsive-containers" tabindex="-1"><a class="header-anchor" href="#responsive-containers" aria-hidden="true">#</a> Responsive containers</h2>
<p>Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after
which we apply max-widths for each of the higher breakpoints. For example, .container-sm is 100% wide to start until the
sm breakpoint is reached, where it will scale up with md, lg, xl, and xxl. This values can be set using <code>size</code> prop.</p>
<p>Supported values</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">responsiveSizes</span> <span class="token operator">=</span> <span class="token string">"sm"</span> <span class="token operator">|</span> <span class="token string">"md"</span> <span class="token operator">|</span> <span class="token string">"lg"</span> <span class="token operator">|</span> <span class="token string">"xl"</span> <span class="token operator">|</span> <span class="token string">"xxl"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Example</p>
<WContainer size="sm">
     Inspect Me
</WContainer>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Container</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- Content here --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Container</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>This will produce following output</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- Content here --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="fluid-containers" tabindex="-1"><a class="header-anchor" href="#fluid-containers" aria-hidden="true">#</a> Fluid containers</h2>
<p>Containers can be fluid be setting prop <code>fluid</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Container</span> <span class="token attr-name">fluid</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- Content here --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Container</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>

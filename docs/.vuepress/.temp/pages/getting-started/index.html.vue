<template><h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h1>
<p>Get started with <em><strong><code>wovoui</code></strong></em> which is based on the world's one of the most famous design
framework <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap 5<ExternalLinkIcon/></a> and Progressive JavaScript Framework
<a href="https://v3.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue 3<ExternalLinkIcon/></a>.
<em><strong><code>wovoui</code></strong></em> is fully responsive, mobile-first design approached as it
uses <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank" rel="noopener noreferrer">Bootstrap 5<ExternalLinkIcon/></a>'s design styles.</p>
<p>All the components provided by <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank" rel="noopener noreferrer">Bootstrap 5<ExternalLinkIcon/></a> is
available in the library, as well as it has some extra component to meet your requirements.</p>
<p><em><strong><code>wovoui</code></strong></em> can be used in Server <a href="https://en.wikipedia.org/wiki/Server-side_scripting" target="_blank" rel="noopener noreferrer">Side Rendered (SSR)<ExternalLinkIcon/></a>
applications, in <a href="https://jamstack.org/generators/" target="_blank" rel="noopener noreferrer">Static Site Generated (SSG)<ExternalLinkIcon/></a> applications,
in <a href="https://en.wikipedia.org/wiki/Single-page_application" target="_blank" rel="noopener noreferrer">Single Page Applications (SPA)<ExternalLinkIcon/></a> as well as
in <a href="https://www.electronjs.org/" target="_blank" rel="noopener noreferrer">Electronjs<ExternalLinkIcon/></a> based applications.</p>
<h2 id="using-npm" tabindex="-1"><a class="header-anchor" href="#using-npm" aria-hidden="true">#</a> Using NPM</h2>
<p>To install it using <a href="https://nodejs.org/en/download/package-manager/" target="_blank" rel="noopener noreferrer">Node Package Manage (NPM)<ExternalLinkIcon/></a> use the following
command:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @wovosoft/wovoui
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="using-yarn" tabindex="-1"><a class="header-anchor" href="#using-yarn" aria-hidden="true">#</a> Using Yarn</h2>
<p>To install it using <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">YARN<ExternalLinkIcon/></a> use the following command:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @wovosoft/wovoui
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to Use?</h2>
<p>For better performance, You should use components like the method below:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Button<span class="token punctuation">,</span> Accordion<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@wovosoft/wovoui"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>Button<span class="token punctuation">,</span> Accordion<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>But, if you want to register all components, then follow the method given below:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>createApp<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> plugin <span class="token keyword">from</span> <span class="token string">"@wovosoft/wovoui/plugin"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>

<template><h1 id="close-button" tabindex="-1"><a class="header-anchor" href="#close-button" aria-hidden="true">#</a> Close Button</h1>
<p>A generic close button for dismissing content like modals and alerts.</p>
<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>
<p>Provide an option to dismiss or close a component with <code>&lt;ButtonClose&gt;</code> component. Default styling is limited, but highly
customizable. Modify the Sass variables to replace the default <code>background-image</code>. Be sure to include text for screen
readers, as we’ve done with <code>aria-label</code>.</p>
<WButtonClose aria-label="Close"></WButtonClose>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonClose</span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Close<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ButtonClose</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="disabled-state" tabindex="-1"><a class="header-anchor" href="#disabled-state" aria-hidden="true">#</a> Disabled state</h2>
<p>Disabled close buttons change their opacity. Bootstrap have also applied <code>pointer-events: none</code> and <code>user-select: none</code>
to preventing <code>hover</code> and <code>active</code> states from triggering.</p>
<WButtonClose aria-label="Close" disabled></WButtonClose>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonClose</span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Close<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ButtonClose</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h1 id="white-variant" tabindex="-1"><a class="header-anchor" href="#white-variant" aria-hidden="true">#</a> White variant</h1>
<p>Change the default button to be white with the <code>white</code> prop.</p>
<div class="bg-dark p-3 rounded-1">
<WButtonClose white aria-label="Close"></WButtonClose>
<WButtonClose white disabled aria-label="Close"></WButtonClose>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-dark p-3 rounded-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonClose</span> <span class="token attr-name">white</span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Close<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ButtonClose</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonClose</span> <span class="token attr-name">white</span> <span class="token attr-name">disabled</span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Close<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ButtonClose</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>

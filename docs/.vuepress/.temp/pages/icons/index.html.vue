<template><h1 id="bootstrap-icons" tabindex="-1"><a class="header-anchor" href="#bootstrap-icons" aria-hidden="true">#</a> Bootstrap Icons</h1>
<p>Icons are imported from <a href="https://icons.getbootstrap.com" target="_blank" rel="noopener noreferrer">Bootstrap 5 icons<ExternalLinkIcon/></a>. There are almost 1522 icons. In future
there will be a separate package of these icons.</p>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<h3 id="using-npm" tabindex="-1"><a class="header-anchor" href="#using-npm" aria-hidden="true">#</a> Using NPM</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @wovosoft/wovoui-icons 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="using-yarn" tabindex="-1"><a class="header-anchor" href="#using-yarn" aria-hidden="true">#</a> Using yarn</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @wovosoft/wovoui-icons
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to Use</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Activity</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alarm</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>Activity<span class="token punctuation">,</span>Alarm<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@wovosoft/wovoui-icons"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>Activity<span class="token punctuation">,</span>Alarm<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><WCard>
<IconActivity :size="10" class="me-5"/>
<IconAlarm :size="10"/>
</WCard>
<h2 id="list-of-suppoerted-icons" tabindex="-1"><a class="header-anchor" href="#list-of-suppoerted-icons" aria-hidden="true">#</a> List of Suppoerted Icons</h2>
<WInput type="search" v-model="filter" placeholder="Search Icons..."></WInput>
<div class="container">
<div class="row">
<div class="col-md-3 p-1 text-center" v-for="icon in theIcons">
<div class="border p-1">
<component :is="'Icon'+icon" :size="2"></component>
<div class="mt-2">{{icon}}</div>
</div>
</div>
</div>
</div>
</template>

<script setup>
import {computed, ref} from "vue"; 
import * as icons_list from "@wovosoft/wovoui-icons";

const icons = Object.entries(icons_list).map(i=>i[0]);
const filter=ref("");
const theIcons = computed(()=>icons.filter(icon=>icon.toLowerCase().includes(filter.value.toLowerCase())));
</script>
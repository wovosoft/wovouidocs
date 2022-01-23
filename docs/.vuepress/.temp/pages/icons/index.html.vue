<template><h1 id="bootstrap-icons" tabindex="-1"><a class="header-anchor" href="#bootstrap-icons" aria-hidden="true">#</a> Bootstrap Icons</h1>
<p><a href="https://github.com/wovosoft/wovoui-icons" target="_blank" rel="noopener noreferrer">wovoui-icons<ExternalLinkIcon/></a> are imported
from <a href="https://icons.getbootstrap.com" target="_blank" rel="noopener noreferrer">Bootstrap 5 icons<ExternalLinkIcon/></a>. There are almost 1522 icons.
And in the future, if Bootstrap provides some more icons, those will be available too as soon as possible.</p>
<p><a href="https://github.com/wovosoft/wovoui-icons" target="_blank" rel="noopener noreferrer">wovoui-icons<ExternalLinkIcon/></a> are wrapped in a separate package so that it's dependency can
be optional.</p>
<h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2>
<p>Of-course You can use the icons using the provided <a href="https://icons.getbootstrap.com/#install" target="_blank" rel="noopener noreferrer">methods<ExternalLinkIcon/></a> of <a href="https://icons.getbootstrap.com" target="_blank" rel="noopener noreferrer">Bootstrap 5<ExternalLinkIcon/></a>. For example,</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"bootstrap-icons"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<h3 id="using-npm" tabindex="-1"><a class="header-anchor" href="#using-npm" aria-hidden="true">#</a> Using NPM</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @wovosoft/wovoui-icons 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="using-yarn" tabindex="-1"><a class="header-anchor" href="#using-yarn" aria-hidden="true">#</a> Using yarn</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @wovosoft/wovoui-icons
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to Use</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Activity</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alarm</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>Activity<span class="token punctuation">,</span> Alarm<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@wovosoft/wovoui-icons"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>Activity<span class="token punctuation">,</span> Alarm<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><WCard body-class="text-center">
<IconActivity :size="5" class="me-5"/>
<IconAlarm :size="5"/>
</WCard>
<h2 id="list-of-suppoerted-icons" tabindex="-1"><a class="header-anchor" href="#list-of-suppoerted-icons" aria-hidden="true">#</a> List of Suppoerted Icons</h2>
<WInput type="search" v-model="filter" placeholder="Search Icons..."></WInput>
<WContainer class="container"><WRow>
<WCol class="p-1 text-center" :md="icons[icon]?8:3" :offset-md="icons[icon]?2:null" sm="12" v-for="icon in theIcons">
<div class="border icon-box"
tabindex="0" 
:class="!!icons[icon]?'p-3':'p-1'" 
style="cursor: pointer;" 
@focus="toggleVisibility(icon)"
@click="toggleVisibility(icon)">
<component :is="'Icon'+icon" :size="2"></component>
<div class="mt-2" v-if="icons[icon]"><code>&lt;{{icon}} /&gt;</code> or <code>&lt;{{kebabCase(icon)}} /&gt;</code></div>
<div class="mt-2" v-else>{{icon}}</div>
<p v-if="icon.startsWith('_') && icons[icon]">
Because {{icon.replace('_','')}}'s type is 'number', underscore (_) symbol is used.
</p>
</div>
<div v-if="icons[icon]" class="language-javascript ext-js line-numbers-mode">
<pre class="language-javascript"><code><span class="token keyword">import</span> { {{icon}} } <span class="token keyword">from</span> <span class="token string">"@wovosoft/wovoui-icons"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>{{icon}}<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code>
</pre>
<div class="line-numbers">
<span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span>
</div></div></WCol></WRow></WContainer>
</template>

<script setup>
import {computed, ref} from "vue"; 
import * as icons_list from "@wovosoft/wovoui-icons";
import kebabCase from "lodash/kebabCase";
const icons = ref({});
Object.entries(icons_list).map(i=>i[0]).forEach(i=>icons.value[i]=false);
const filter=ref("");
const theIcons = computed(()=>Object.keys(icons.value).filter(icon=>icon.toLowerCase().includes(filter.value.toLowerCase())));
const toggleVisibility=(el)=>{
    Object.keys(icons.value).filter(i=>!!icons.value[i]).forEach(i=>icons.value[i]=false);
    icons.value[el]=true;
}
</script>

<style>
.icon-box:hover{
    transform: scale(1.1);
    background: white;
    transition: all .1s ease-in;
    box-shadow: 0px 3px 10px 3px lightblue;
    outline: black;   
}
</style>
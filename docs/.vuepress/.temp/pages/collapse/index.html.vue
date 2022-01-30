<template><h1 id="collapse" tabindex="-1"><a class="header-anchor" href="#collapse" aria-hidden="true">#</a> Collapse</h1>
<p>Easily toggle visibility of almost any content on your pages in a vertically collapsing container. Includes support for
making accordions. Visibility can be easily toggled with our v-b-toggle directive, or via v-model.</p>
<WButton @click="collapse1=!collapse1">Toggle Collapse</WButton>
<WCollapse v-model="collapse1">
<div class="border p-3">
Some placeholder content for the collapse component. 
This panel is hidden by default but revealed when the user activates the relevant trigger.
</div>
</WCollapse>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>collapse1=!collapse1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Toggle Collapse<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Collapse</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>collapse1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border p-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Some placeholder content for the collapse component.
        This panel is hidden by default but revealed when the user activates the relevant trigger.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Collapse</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">collapse1</span><span class="token operator">:</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="initial-visibility-start-expanded" tabindex="-1"><a class="header-anchor" href="#initial-visibility-start-expanded" aria-hidden="true">#</a> Initial visibility (start expanded)</h2>
<WButton @click="collapse2=!collapse2">Toggle Collapse</WButton>
<WCollapse v-model="collapse2">
<div class="border p-3">
Some placeholder content for the collapse component. 
This panel is hidden by default but revealed when the user activates the relevant trigger.
</div>
</WCollapse>
</template>

<script>
import {ref} from "vue"; 

export default {
    setup(props){
        return{
            collapse1:ref(false),
            collapse2:ref(true),
        }
    }
}
</script>
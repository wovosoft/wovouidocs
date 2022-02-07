<template><h1 id="alerts" tabindex="-1"><a class="header-anchor" href="#alerts" aria-hidden="true">#</a> Alerts</h1>
<p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<WAlert v-for="v in ['primary','secondary','success','danger','info','light','dark']" :variant="v" show>
A simple {{v}} alert—check it out!
</WAlert>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v in [<span class="token punctuation">'</span>primary<span class="token punctuation">'</span>,<span class="token punctuation">'</span>secondary<span class="token punctuation">'</span>,<span class="token punctuation">'</span>success<span class="token punctuation">'</span>,<span class="token punctuation">'</span>danger<span class="token punctuation">'</span>,<span class="token punctuation">'</span>info<span class="token punctuation">'</span>,<span class="token punctuation">'</span>light<span class="token punctuation">'</span>,<span class="token punctuation">'</span>dark<span class="token punctuation">'</span>]<span class="token punctuation">"</span></span> <span class="token attr-name">:variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v<span class="token punctuation">"</span></span> <span class="token attr-name">show</span><span class="token punctuation">></span></span>
A simple {{v}} alert—check it out!
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="dismissible-alert" tabindex="-1"><a class="header-anchor" href="#dismissible-alert" aria-hidden="true">#</a> Dismissible Alert</h2>
<WAlert v-for="v in ['primary','secondary','success','danger','info','light','dark']" :variant="v" dismissible show>
A simple {{v}} alert—check it out!
</WAlert>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v in [<span class="token punctuation">'</span>primary<span class="token punctuation">'</span>,<span class="token punctuation">'</span>secondary<span class="token punctuation">'</span>,<span class="token punctuation">'</span>success<span class="token punctuation">'</span>,<span class="token punctuation">'</span>danger<span class="token punctuation">'</span>,<span class="token punctuation">'</span>info<span class="token punctuation">'</span>,<span class="token punctuation">'</span>light<span class="token punctuation">'</span>,<span class="token punctuation">'</span>dark<span class="token punctuation">'</span>]<span class="token punctuation">"</span></span> <span class="token attr-name">:variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v<span class="token punctuation">"</span></span> <span class="token attr-name">dismissible</span> <span class="token attr-name">show</span><span class="token punctuation">></span></span>
A simple {{v}} alert—check it out!
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="auto-dismiss" tabindex="-1"><a class="header-anchor" href="#auto-dismiss" aria-hidden="true">#</a> Auto Dismiss</h2>
<p><code>&lt;Alert&gt;</code>s can be automatically dismissed by using <code>countdown</code> prop. Value for <code>countdown</code> prop should be the number of
seconds of visibility, after the defined period in seconds, the <code>&lt;Aler&gt;</code> will be dismissed automatically.</p>
<WButton @click="one=true">Show Again</WButton>
<WAlert v-for="v in ['primary','secondary','success','danger','info','light','dark']"
:variant="v"
:countdown="10"
v-model="one"
dismissible>
<template #default="{countdown,timeoutNow}">
Countdown: {{countdown}} , Timeout: {{timeoutNow}}
</template>
</WAlert>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v in [<span class="token punctuation">'</span>primary<span class="token punctuation">'</span>,<span class="token punctuation">'</span>secondary<span class="token punctuation">'</span>,<span class="token punctuation">'</span>success<span class="token punctuation">'</span>,<span class="token punctuation">'</span>danger<span class="token punctuation">'</span>,<span class="token punctuation">'</span>info<span class="token punctuation">'</span>,<span class="token punctuation">'</span>light<span class="token punctuation">'</span>,<span class="token punctuation">'</span>dark<span class="token punctuation">'</span>]<span class="token punctuation">"</span></span>
       <span class="token attr-name">:variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v<span class="token punctuation">"</span></span>
       <span class="token attr-name">:countdown</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span>
       <span class="token attr-name">dismissible</span> <span class="token attr-name">show</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{countdown,timeoutNow}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Countdown: {{countdown}} , Timeout: {{timeoutNow}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="countdown-step" tabindex="-1"><a class="header-anchor" href="#countdown-step" aria-hidden="true">#</a> Countdown step</h2>
<p>Typically, countdown step is 1 second. It can be changed by setting value for the prop <code>countdownStep</code>.</p>
<h2 id="scoped-slot-support" tabindex="-1"><a class="header-anchor" href="#scoped-slot-support" aria-hidden="true">#</a> Scoped Slot Support</h2>
<p><code>countdown</code> &amp; <code>timeoutNow</code> props and <code>show()</code>, <code>hide()</code> &amp; <code>toggle()</code> methods can be accessed in default slots scope.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">dismissible</span> <span class="token attr-name">show</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{countdown,timeoutNow,show,hide,toggle}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Countdown: {{countdown}} , Timeout: {{timeoutNow}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="exposed-methods" tabindex="-1"><a class="header-anchor" href="#exposed-methods" aria-hidden="true">#</a> Exposed Methods</h2>
<p><code>show()</code>, <code>hide()</code> &amp; <code>toggle()</code> methods are exposed to the parent components. So, by using refs these methods of an
<code>&lt;Alert&gt;</code> component can be accessed.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">dismissible</span> <span class="token attr-name">show</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert_ref<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        I am an alert box.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>Alert<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@wovosoft/wovoui"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>Alert<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>alert_ref<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>alert_ref<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>alert_ref<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * Check above three expressions.
         */</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2>
<ul>
<li><code>dismisssed</code> : emits with current state when <code>&lt;Alert&gt;</code> is dismissed.</li>
<li><code>countdown</code>  : emits with current <code>timeoutNow</code> value, when <code>timeoutNow</code> value is decreased.</li>
</ul>
</template>

<script setup>
import {ref} from "vue";
const one=ref(true)
</script>
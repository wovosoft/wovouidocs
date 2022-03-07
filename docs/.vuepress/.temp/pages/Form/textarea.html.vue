<template><h1 id="textarea" tabindex="-1"><a class="header-anchor" href="#textarea" aria-hidden="true">#</a> Textarea</h1>
<WTextarea v-model="val1"/>
{{val1}}
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Textarea</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>val1<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
{{val1}}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>

<script setup>
import {ref} from "vue"; 

const val1=ref('')
</script>
import{g as o,r as p,o as r,c,b as u,d as s,t as d,F as i,a as n,e as m}from"./app.66fc472f.js";const v=n("h1",{id:"textarea",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#textarea","aria-hidden":"true"},"#"),s(" Textarea")],-1),k=m(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Textarea</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>val1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
{{val1}}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,1),h={setup(x){const a=o("");return(g,e)=>{const t=p("WTextarea");return r(),c(i,null,[v,u(t,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l)},null,8,["modelValue"]),s(" "+d(a.value)+" ",1),k],64)}}};export{h as default};
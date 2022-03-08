import{g as u,r as i,o as r,c as k,a as n,b as t,w as e,t as b,F as d,d as s,e as c}from"./app.55b44544.js";const g=n("h1",{id:"form-checkbox",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#form-checkbox","aria-hidden":"true"},"#"),s(" Form Checkbox")],-1),m=n("p",null,[s("For cross browser consistency, "),n("code",null,"<CheckboxGroup>"),s(" and "),n("code",null,"<Checkbox>"),s(" use wovoui's custom checkbox input to replace the browser default checkbox input. It is built on top of semantic and accessible markup, so it is a solid replacement for the default checkbox input.")],-1),h={class:"bootstrap"},v=s(" I accept the terms and use "),_=s("State: "),x=c(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-form-checkbox</span>
            <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox-1<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox-1<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>accepted<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">unchecked-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>not_accepted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            I accept the terms and use
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-form-checkbox</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>State: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>{{ status }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;not_accepted&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="control-sizing" tabindex="-1"><a class="header-anchor" href="#control-sizing" aria-hidden="true">#</a> Control sizing</h2><p>Use the <code>size</code> prop to control the size of the checkbox. The default size is medium. Supported size values are <code>sm</code> ( small) and <code>lg</code> (large).</p>`,3),f={class:"bootstrap"},q=s("Small"),C=s("Default"),z=s("Large"),w=c(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span><span class="token punctuation">&gt;</span></span>Default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Large<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Sizes can be set on individual <code>&lt;Checkbox&gt;</code> components, or inherited from the size setting of <code>&lt;CheckboxGroup&gt;</code>.</p>`,2),F={setup(S){const p=u("not_accepted");return(y,o)=>{const a=i("WCheckbox");return r(),k(d,null,[g,m,n("div",h,[t(a,{id:"checkbox-1",modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=l=>p.value=l),name:"checkbox-1",value:"accepted","unchecked-value":"not_accepted"},{default:e(()=>[v]),_:1},8,["modelValue"]),n("div",null,[_,n("strong",null,b(p.value),1)])]),x,n("div",f,[t(a,{size:"sm"},{default:e(()=>[q]),_:1}),t(a,null,{default:e(()=>[C]),_:1}),t(a,{size:"lg"},{default:e(()=>[z]),_:1})]),w],64)}}};export{F as default};
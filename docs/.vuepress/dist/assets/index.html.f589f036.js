import{r as e,o as k,c as h,a as p,b as a,w as n,F as v,e as o,f as q,g as y,t as d,d as s}from"./app.367c1ca8.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";const w={data(){return{componentReference:{header:["Property","Type","Default","Description"],items:[["tag","string","button","Default Button Tag. Can be changed depending on requirements"],["variant","string","secondary","Applies one of the Bootstrap theme color variants to the component"],["size","string","null","Set the size of the component's appearance. 'sm', 'md' (default), or 'lg'"],["type","string","button","Button Type. Applies only when tag is button"],["outline","boolean","false","Outline Based Contextual Color Variants"],["block","boolean","false","Full Width button. Adds w-full class to the button element"],["pill","boolean","false","Renders the button with the pill style appearance when set to 'true'"],["squared","boolean","false","Renders the button with non-rounded corners when set to 'true'"],["disabled","boolean","false","When set to `true`, disables the component's functionality and places it in a disabled state"],["pressed","boolean","false",`When set to 'true', gives the button the appearance of
                        being pressed and adds attribute 'aria-pressed="true"'.
                        When set to \`false\` adds attribute 'aria-pressed="false"'.
                         Tri-state prop. Syncable with the .sync modifier`],["badge","string,number","null","Appends Badge in Button Element"],["badgeVariant","string","primary","Appended Badge's color variant"]]}}}},W=o('<h1 id="buttons" tabindex="-1"><a class="header-anchor" href="#buttons" aria-hidden="true">#</a> Buttons</h1><p>Use <code>Bootstrap&#39;s</code> custom <code>Button</code> component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.</p><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p><code>&lt;Button&gt;</code> component generates either a native<code>button</code> element, <code>a</code> element, or <code>router-link</code> component with the styling of a button.</p>',4),T={class:"child-m-2 bootstrap"},S=s("Button"),D=s("Button"),C=s("Button"),L=s("Button"),z=o(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>outline-primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="element-type" tabindex="-1"><a class="header-anchor" href="#element-type" aria-hidden="true">#</a> Element type</h2><p>The <code>Button</code> component generally renders a <code>button</code> element. However, you can also render an <code>a</code> element by providing an <code>href</code> prop value. You may also generate vue-router <code>router-link</code> when providing a value for the to prop (vue-router is required).</p><h2 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> Type</h2><p>You can specify the button&#39;s type by setting the prop type to <code>&#39;button&#39;</code>, <code>&#39;submit&#39;</code> or <code>&#39;reset&#39;</code>. The default type is <code>&#39;button&#39;</code>.</p><p>Note the type prop has no effect when either href or to props are set.</p><h2 id="sizing" tabindex="-1"><a class="header-anchor" href="#sizing" aria-hidden="true">#</a> Sizing</h2><p>Fancy larger or smaller buttons? Specify <code>lg</code> or <code>sm</code> via the <code>size</code> prop.</p>`,8),P={class:"bootstrap"},R=s("Small Button"),V=s("Default Button"),N=s("Large Button"),A=o(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">lg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pb-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Small Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">lg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pb-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>Default Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">lg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pb-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Large Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="contextual-variants" tabindex="-1"><a class="header-anchor" href="#contextual-variants" aria-hidden="true">#</a> Contextual Variants</h2><p>Use the variant prop to generate the various Bootstrap contextual button variants. By default, <code>&lt;Button&gt;</code> will render with the secondary variant. The variant prop adds the Bootstrap v5 class .btn-<code>variant</code> on the rendered button.</p><h2 id="solid-color-variants" tabindex="-1"><a class="header-anchor" href="#solid-color-variants" aria-hidden="true">#</a> Solid color variants</h2><p><code>primary</code>, <code>secondary</code>, <code>success</code>, <code>danger</code>, <code>warning</code>, <code>info</code>, <code>light</code> , <code>dark</code></p>`,5),H={class:"child-m-2 bootstrap"},I=s("Primary"),F=s("Secondary"),U=s("Success"),E=s("Danger"),O=s("Warning"),$=s("Info"),j=s("Light"),J=s("Dark"),M=o(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Secondary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>light<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Light<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Dark<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="outline-color-variants" tabindex="-1"><a class="header-anchor" href="#outline-color-variants" aria-hidden="true">#</a> Outline color variants</h2><p>Use Property <code>outline</code> to apply outlined color variants.</p>`,3),Y={class:"child-m-2 bootstrap"},G=s("Primary"),K=s("Secondary"),Q=s("Success"),X=s("Danger"),Z=s("Warning"),aa=s("Info"),na=s("Light"),sa=s("Dark"),ta=o(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">outline</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">outline</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Secondary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">outline</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">outline</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">outline</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">outline</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">outline</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>light<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Light<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">outline</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Dark<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="block-level-buttons" tabindex="-1"><a class="header-anchor" href="#block-level-buttons" aria-hidden="true">#</a> Block level buttons</h2><p>Block Level button is a full width button of its container. Use prop <code>block</code> to make a block/full width button.</p>`,3),ea={class:"bootstrap"},pa=s("Block Level Button"),oa=o(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">block</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Block Level Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="pill-style" tabindex="-1"><a class="header-anchor" href="#pill-style" aria-hidden="true">#</a> Pill style</h2><p>Prefer buttons with a more rounded-pill style? Just set the prop pill to <code>true</code>.</p>`,3),ca={class:"child-m-2 bootstrap"},la=s("Button"),ua=s("Button"),ia=s("Button"),ra=s("Button"),ka=s("Button"),da=s("Button"),ga=o(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">pill</span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">pill</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">pill</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>outline-secondary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">pill</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">pill</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>outline-danger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">pill</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="squared-style" tabindex="-1"><a class="header-anchor" href="#squared-style" aria-hidden="true">#</a> Squared style</h2><p>Prefer buttons with a more square corner style? Just set the prop squared to <code>true</code>.</p>`,3),ha={class:"child-m-2 bootstrap"},va=s("Button"),ma=s("Button"),_a=s("Button"),ba=s("Button"),Ba=s("Button"),fa=s("Button"),qa=o(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">squared</span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">squared</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">squared</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>outline-secondary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">squared</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">squared</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>outline-danger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">squared</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="disabled-state" tabindex="-1"><a class="header-anchor" href="#disabled-state" aria-hidden="true">#</a> Disabled state</h2><p>Set the <code>disabled</code> prop to <code>disabled</code> button default functionality. disabled also works with buttons rendered as <code>a</code> elements and \`router-link (i.e. with the href or to prop set).</p><p>The pressed prop can be set to one of three values:</p><ul><li><code>true</code>: Sets the .active class and adds the attribute <code>aria-pressed=&quot;true&quot;</code>.</li><li><code>false</code>: Clears the .active class and adds the attribute <code>aria-pressed=&quot;false&quot;</code>.</li><li><code>null</code>: (default) Neither the class .active nor the attribute <code>aria-pressed</code> will be set.</li></ul><h2 id="component-reference" tabindex="-1"><a class="header-anchor" href="#component-reference" aria-hidden="true">#</a> Component reference</h2>`,6),ya=s("Property"),xa=s("Type"),wa=s("Default"),Wa=s("Description");function Ta(Sa,Da,Ca,La,m,za){const c=e("w-button"),t=e("WButton"),r=e("WCol"),_=e("WRow"),l=e("WTh"),g=e("WTr"),b=e("WTHead"),u=e("WTd"),B=e("WTBody"),f=e("WTable");return k(),h(v,null,[W,p("div",T,[a(c,null,{default:n(()=>[S]),_:1}),a(c,{variant:"danger"},{default:n(()=>[D]),_:1}),a(c,{variant:"success"},{default:n(()=>[C]),_:1}),a(c,{variant:"outline-primary"},{default:n(()=>[L]),_:1})]),z,p("div",P,[a(_,null,{default:n(()=>[a(r,{lg:"4",class:"pb-2"},{default:n(()=>[a(t,{size:"sm"},{default:n(()=>[R]),_:1})]),_:1}),a(r,{lg:"4",class:"pb-2"},{default:n(()=>[a(t,null,{default:n(()=>[V]),_:1})]),_:1}),a(r,{lg:"4",class:"pb-2"},{default:n(()=>[a(t,{size:"lg"},{default:n(()=>[N]),_:1})]),_:1})]),_:1})]),A,p("div",H,[a(t,{variant:"primary"},{default:n(()=>[I]),_:1}),a(t,{variant:"secondary"},{default:n(()=>[F]),_:1}),a(t,{variant:"success"},{default:n(()=>[U]),_:1}),a(t,{variant:"danger"},{default:n(()=>[E]),_:1}),a(t,{variant:"warning"},{default:n(()=>[O]),_:1}),a(t,{variant:"info"},{default:n(()=>[$]),_:1}),a(t,{variant:"light"},{default:n(()=>[j]),_:1}),a(t,{variant:"dark"},{default:n(()=>[J]),_:1})]),M,p("div",Y,[a(t,{outline:"",variant:"primary"},{default:n(()=>[G]),_:1}),a(t,{outline:"",variant:"secondary"},{default:n(()=>[K]),_:1}),a(t,{outline:"",variant:"success"},{default:n(()=>[Q]),_:1}),a(t,{outline:"",variant:"danger"},{default:n(()=>[X]),_:1}),a(t,{outline:"",variant:"warning"},{default:n(()=>[Z]),_:1}),a(t,{outline:"",variant:"info"},{default:n(()=>[aa]),_:1}),a(t,{outline:"",variant:"light"},{default:n(()=>[na]),_:1}),a(t,{outline:"",variant:"dark"},{default:n(()=>[sa]),_:1})]),ta,p("div",ea,[a(t,{block:"",variant:"primary"},{default:n(()=>[pa]),_:1})]),oa,p("div",ca,[a(t,{pill:""},{default:n(()=>[la]),_:1}),a(t,{pill:"",variant:"primary"},{default:n(()=>[ua]),_:1}),a(t,{pill:"",variant:"outline-secondary"},{default:n(()=>[ia]),_:1}),a(t,{pill:"",variant:"success"},{default:n(()=>[ra]),_:1}),a(t,{pill:"",variant:"outline-danger"},{default:n(()=>[ka]),_:1}),a(t,{pill:"",variant:"info"},{default:n(()=>[da]),_:1})]),ga,p("div",ha,[a(t,{squared:""},{default:n(()=>[va]),_:1}),a(t,{squared:"",variant:"primary"},{default:n(()=>[ma]),_:1}),a(t,{squared:"",variant:"outline-secondary"},{default:n(()=>[_a]),_:1}),a(t,{squared:"",variant:"success"},{default:n(()=>[ba]),_:1}),a(t,{squared:"",variant:"outline-danger"},{default:n(()=>[Ba]),_:1}),a(t,{squared:"",variant:"info"},{default:n(()=>[fa]),_:1})]),qa,a(f,{bordered:"",hover:"",striped:""},{default:n(()=>[a(b,{class:"bg-dark text-light"},{default:n(()=>[a(g,null,{default:n(()=>[a(l,null,{default:n(()=>[ya]),_:1}),a(l,null,{default:n(()=>[xa]),_:1}),a(l,null,{default:n(()=>[wa]),_:1}),a(l,null,{default:n(()=>[Wa]),_:1})]),_:1})]),_:1}),a(B,null,{default:n(()=>[(k(!0),h(v,null,q(m.componentReference.items,i=>(k(),y(g,null,{default:n(()=>[a(u,null,{default:n(()=>[p("code",null,d(i[0]),1)]),_:2},1024),a(u,null,{default:n(()=>[p("code",null,d(i[1]),1)]),_:2},1024),a(u,null,{default:n(()=>[s(d(i[2]),1)]),_:2},1024),a(u,{innerHTML:i[3]},null,8,["innerHTML"])]),_:2},1024))),256))]),_:1})]),_:1})],64)}var Va=x(w,[["render",Ta]]);export{Va as default};

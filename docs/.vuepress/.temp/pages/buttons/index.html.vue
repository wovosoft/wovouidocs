<template><h1 id="buttons" tabindex="-1"><a class="header-anchor" href="#buttons" aria-hidden="true">#</a> Buttons</h1>
<p>Use <code>Bootstrap's</code> custom <code>Button</code> component for actions in forms, dialogs, and more.
Includes support for a handful of contextual variations, sizes, states, and more.</p>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p><code>&lt;Button&gt;</code> component generates either a native<code>button</code> element, <code>a</code> element,
or <code>router-link</code> component with the styling of a button.</p>
<div class="child-m-2">
    <w-button>Button</w-button>
    <w-button variant="danger">Button</w-button>
    <w-button variant="success">Button</w-button>
    <w-button variant="outline-primary">Button</w-button>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="element-type" tabindex="-1"><a class="header-anchor" href="#element-type" aria-hidden="true">#</a> Element type</h2>
<p>The <code>Button</code> component generally renders a <code>button</code> element. However, you can also render an <code>a</code>
element by providing an <code>href</code> prop value. You may also generate vue-router
<code>router-link</code> when providing a value for the to prop (vue-router is required).</p>
<h2 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> Type</h2>
<p>You can specify the button's type by setting the prop type to <code>'button'</code>,
<code>'submit'</code> or <code>'reset'</code>.
The default type is <code>'button'</code>.</p>
<p>Note the type prop has no effect when either href or to props are set.</p>
<h2 id="sizing" tabindex="-1"><a class="header-anchor" href="#sizing" aria-hidden="true">#</a> Sizing</h2>
<p>Fancy larger or smaller buttons? Specify <code>lg</code> or <code>sm</code> via the <code>size</code> prop.</p>
<WRow>
    <WCol lg="4" class="pb-2">
        <WButton size="sm">Small Button</WButton>
    </WCol>
    <WCol lg="4" class="pb-2">
        <WButton>Default Button</WButton>
    </WCol>
    <WCol lg="4" class="pb-2">
        <WButton size="lg">Large Button</WButton>
    </WCol>
</WRow>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">lg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pb-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Small Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">lg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pb-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Default Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">lg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pb-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Large Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="contextual-variants" tabindex="-1"><a class="header-anchor" href="#contextual-variants" aria-hidden="true">#</a> Contextual Variants</h2>
<p>Use the variant prop to generate the various Bootstrap contextual button variants.
By default, <code>&lt;Button&gt;</code> will render with the secondary variant.
The variant prop adds the Bootstrap v5 class .btn-<code>variant</code> on the rendered button.</p>
<h2 id="solid-color-variants" tabindex="-1"><a class="header-anchor" href="#solid-color-variants" aria-hidden="true">#</a> Solid color variants</h2>
<p><code>primary</code>, <code>secondary</code>, <code>success</code>, <code>danger</code>, <code>warning</code>, <code>info</code>, <code>light</code> , <code>dark</code></p>
<div class="child-m-2">
    <WButton variant="primary">Primary</WButton>
    <WButton variant="secondary">Secondary</WButton>
    <WButton variant="success">Success</WButton>
    <WButton variant="danger">Danger</WButton>
    <WButton variant="warning">Warning</WButton>
    <WButton variant="info">Info</WButton>
    <WButton variant="light">Light</WButton>
    <WButton variant="dark">Dark</WButton>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Secondary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Light<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Dark<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="outline-color-variants" tabindex="-1"><a class="header-anchor" href="#outline-color-variants" aria-hidden="true">#</a> Outline color variants</h2>
<p>Use Property <code>outline</code> to apply outlined color variants.</p>
<div class="child-m-2">
    <WButton outline variant="primary">Primary</WButton>
    <WButton outline variant="secondary">Secondary</WButton>
    <WButton outline variant="success">Success</WButton>
    <WButton outline variant="danger">Danger</WButton>
    <WButton outline variant="warning">Warning</WButton>
    <WButton outline variant="info">Info</WButton>
    <WButton outline variant="light">Light</WButton>
    <WButton outline variant="dark">Dark</WButton>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">outline</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">outline</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Secondary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">outline</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">outline</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">outline</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">outline</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">outline</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Light<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">outline</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Dark<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="block-level-buttons" tabindex="-1"><a class="header-anchor" href="#block-level-buttons" aria-hidden="true">#</a> Block level buttons</h2>
<p>Block Level button is a full width button of its container. Use prop <code>block</code> to make a block/full width button.</p>
<WButton block variant="primary">Block Level Button</WButton>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">block</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Block Level Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="pill-style" tabindex="-1"><a class="header-anchor" href="#pill-style" aria-hidden="true">#</a> Pill style</h2>
<p>Prefer buttons with a more rounded-pill style? Just set the prop pill to <code>true</code>.</p>
<div class="child-m-2">
    <WButton pill>Button</WButton>
    <WButton pill variant="primary">Button</WButton>
    <WButton pill variant="outline-secondary">Button</WButton>
    <WButton pill variant="success">Button</WButton>
    <WButton pill variant="outline-danger">Button</WButton>
    <WButton pill variant="info">Button</WButton>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">pill</span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">pill</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">pill</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline-secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">pill</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">pill</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline-danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">pill</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="squared-style" tabindex="-1"><a class="header-anchor" href="#squared-style" aria-hidden="true">#</a> Squared style</h2>
<p>Prefer buttons with a more square corner style? Just set the prop squared to <code>true</code>.</p>
<div class="child-m-2">
    <WButton squared>Button</WButton>
    <WButton squared variant="primary">Button</WButton>
    <WButton squared variant="outline-secondary">Button</WButton>
    <WButton squared variant="success">Button</WButton>
    <WButton squared variant="outline-danger">Button</WButton>
    <WButton squared variant="info">Button</WButton>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">squared</span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">squared</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">squared</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline-secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">squared</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">squared</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline-danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">squared</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="disabled-state" tabindex="-1"><a class="header-anchor" href="#disabled-state" aria-hidden="true">#</a> Disabled state</h2>
<p>Set the <code>disabled</code> prop to <code>disabled</code> button default functionality. disabled also works with
buttons rendered as <code>a</code> elements and `router-link (i.e. with the href or to prop set).</p>
<p>The pressed prop can be set to one of three values:</p>
<ul>
<li><code>true</code>: Sets the .active class and adds the attribute <code>aria-pressed=&quot;true&quot;</code>.</li>
<li><code>false</code>: Clears the .active class and adds the attribute <code>aria-pressed=&quot;false&quot;</code>.</li>
<li><code>null</code>: (default) Neither the class .active nor the attribute <code>aria-pressed</code> will be
set.</li>
</ul>
<h2 id="component-reference" tabindex="-1"><a class="header-anchor" href="#component-reference" aria-hidden="true">#</a> Component reference</h2>
<WTable bordered hover striped>
    <WTHead class="bg-dark text-light">
    <WTr>
        <WTh>Property</WTh>
        <WTh>Type</WTh>
        <WTh>Default</WTh>
        <WTh>Description</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="row in componentReference.items">
        <WTd><code>{{ row[0] }}</code></WTd>
        <WTd><code>{{ row[1] }}</code></WTd>
        <WTd>{{ row[2] }}</WTd>
        <WTd v-html=" row[3]"></WTd>
    </WTr>
    </WTBody>
</WTable>
</template>

<script>
export default {
    data(){
        return {
componentReference: {
                header: [
                    "Property",
                    "Type",
                    "Default",
                    "Description"
                ],
                items: [
                    [
                        "tag",
                        "string",
                        "button",
                        "Default Button Tag. Can be changed depending on requirements"
                    ],
                    [
                        "variant",
                        "string",
                        "secondary",
                        "Applies one of the Bootstrap theme color variants to the component"
                    ],
                    [
                        "size",
                        "string",
                        "null",
                        "Set the size of the component's appearance. 'sm', 'md' (default), or 'lg'"
                    ],
                    [
                        "type",
                        "string",
                        "button",
                        "Button Type. Applies only when tag is button"
                    ],
                    [
                        "outline",
                        "boolean",
                        "false",
                        "Outline Based Contextual Color Variants"
                    ],
                    [
                        "block",
                        "boolean",
                        "false",
                        "Full Width button. Adds w-full class to the button element"
                    ],
                    [
                        "pill",
                        "boolean",
                        "false",
                        "Renders the button with the pill style appearance when set to 'true'"
                    ],
                    [
                        "squared",
                        "boolean",
                        "false",
                        "Renders the button with non-rounded corners when set to 'true'"
                    ],
                    [
                        "disabled",
                        "boolean",
                        "false",
                        "When set to `true`, disables the component's functionality and places it in a disabled state"
                    ],
                    [
                        "pressed",
                        "boolean",
                        "false",
                        `When set to 'true', gives the button the appearance of
                        being pressed and adds attribute 'aria-pressed="true"'.
                        When set to \`false\` adds attribute 'aria-pressed="false"'.
                         Tri-state prop. Syncable with the .sync modifier`
                    ],
                    [
                        "badge",
                        "string,number",
                        "null",
                        "Appends Badge in Button Element"
                    ],
                    [
                        "badgeVariant",
                        "string",
                        "primary",
                        "Appended Badge's color variant"
                    ]
                ]
            }
        }
    }
}
</script>

<style>
.child-m-2 > button {
    margin: 2px;
}
</style>
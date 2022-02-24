<template><h1 id="toasts" tabindex="-1"><a class="header-anchor" href="#toasts" aria-hidden="true">#</a> Toasts</h1>
<p>Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and
desktop operating systems. They’re built with flexbox, so they’re easy to align and position.</p>
<WToast show>
<template #header>
<strong class="me-auto">Bootstrap</strong>
<small>11 mins ago</small>
</template>
Hello, world! This is a toast message.
</WToast>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toast</span> <span class="token attr-name">show</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>me-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Bootstrap<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">></span></span>11 mins ago<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    Hello, world! This is a toast message.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Toast</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="live-example" tabindex="-1"><a class="header-anchor" href="#live-example" aria-hidden="true">#</a> Live example</h2>
<WButton variant="primary" @click="one=!one">Toggle Toast</WButton>
<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <WToast v-model:show="one">
        <template #header>
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
        </template>
        Hello, world! This is a toast message.
    </WToast>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>one=!one<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Toggle Toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>position-fixed bottom-0 end-0 p-3<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">z-index</span><span class="token punctuation">:</span> 11</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toast</span> <span class="token attr-name"><span class="token namespace">v-model:</span>show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>one<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>me-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Bootstrap<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">></span></span>11 mins ago<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        Hello, world! This is a toast message.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Toast</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="show-hide-and-toggle-helpers" tabindex="-1"><a class="header-anchor" href="#show-hide-and-toggle-helpers" aria-hidden="true">#</a> <code>show</code>, <code>hide</code> and <code>toggle</code> helpers</h2>
<WButton variant="primary" @click="$refs.show.show()">Show Toast</WButton>
<WButton variant="primary" @click="$refs.show.hide()" class="mx-2">Hide Toast</WButton>
<WButton variant="primary" @click="$refs.show.toggle()">Toggle Toast</WButton>
<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <WToast ref="show">
        <template #header>
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
        </template>
        Hello, world! This is a toast message.
    </WToast>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$refs.show.show()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show Toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$refs.show.hide()<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mx-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hide Toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$refs.show.toggle()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Toggle Toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>position-fixed bottom-0 end-0 p-3<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">z-index</span><span class="token punctuation">:</span> 11</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toast</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>me-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Bootstrap<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">></span></span>11 mins ago<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        Hello, world! This is a toast message.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Toast</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="stacking" tabindex="-1"><a class="header-anchor" href="#stacking" aria-hidden="true">#</a> Stacking</h2>
<p>You can stack toasts by wrapping them in a <code>&lt;ToastContainer&gt;</code>, which will vertically add some spacing.</p>
<WToastContainer>
<WToast show>
<template #header>
<strong class="me-auto">Bootstrap</strong>
<small class="text-muted">just now</small>
</template>
See? Just like this.
</WToast>
<WToast show>
    <template #header>
        <strong class="me-auto">Bootstrap</strong>
        <small class="text-muted">2 seconds ago</small>
    </template>
    Heads up, toasts will stack automatically
</WToast>
</WToastContainer>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ToastContainer</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toast</span> <span class="token attr-name">show</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>me-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Bootstrap<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-muted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>just now<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        See? Just like this.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Toast</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toast</span> <span class="token attr-name">show</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>me-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Bootstrap<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-muted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2 seconds ago<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        Heads up, toasts will stack automatically
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Toast</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ToastContainer</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="custom-content" tabindex="-1"><a class="header-anchor" href="#custom-content" aria-hidden="true">#</a> Custom content</h2>
<p>Customize your toasts by removing sub-components, tweaking them with utilities, or by adding your own markup. Here we’ve
created a simpler toast by removing the default .toast-header, adding a custom hide icon from Bootstrap Icons, and using
some flexbox utilities to adjust the layout.</p>
<WToast class="align-items-center" no-body no-close-button show>
<div class="d-flex">
<WToastBody>
Hello, world! This is a toast message.
</WToastBody>
<WButtonClose class="me-2 m-auto"></WButtonClose>
</div>
</WToast>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toast</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>align-items-center<span class="token punctuation">"</span></span> <span class="token attr-name">no-body</span> <span class="token attr-name">no-close-buton</span> <span class="token attr-name">show</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ToastBody</span><span class="token punctuation">></span></span>
            Hello, world! This is a toast message.
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ToastBody</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonClose</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>me-2 m-auto<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Toast</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Alternatively, you can also add additional controls and components to toasts.</p>
<WToast show ref="additional_components">
Hello, world! This is a toast message.
<div class="mt-2 pt-2 border-top">
<WButton variant="primary" class="me-2" size="sm">Take action</WButton>
<WButton variant="secondary" size="sm" @click="$refs.additional_components.hide()">Close</WButton>
</div>
</WToast>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toast</span> <span class="token attr-name">show</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>additional_components<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Hello, world! This is a toast message.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-2 pt-2 border-top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>me-2<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Take action<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$refs.additional_components.hide()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Close<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Toast</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="color-schemes" tabindex="-1"><a class="header-anchor" href="#color-schemes" aria-hidden="true">#</a> Color schemes</h2>
<WToast show no-body no-close-button variant="primary" class="align-items-center text-white border-0">
    <div class="d-flex">
        <WToastBody>
            Hello, world! This is a toast message.
        </WToastBody>
        <WButtonClose class="me-2 m-auto" white></WButtonClose>
    </div>
</WToast>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toast</span> <span class="token attr-name">show</span> <span class="token attr-name">no-body</span> <span class="token attr-name">no-close-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>align-items-center text-white border-0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ToastBody</span><span class="token punctuation">></span></span>
            Hello, world! This is a toast message.
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ToastBody</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonClose</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>me-2 m-auto<span class="token punctuation">"</span></span> <span class="token attr-name">white</span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Toast</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="placement" tabindex="-1"><a class="header-anchor" href="#placement" aria-hidden="true">#</a> Placement</h2>
<p>Use prop <code>placement</code> on a <code>&lt;ToastContainer&gt;</code>. Supported values
are <code>'top-left'|'top-center'|'top-right'|'middle-left'|'middle-center'|'middle-right'|'bottom-left'|'bottom-center'|'bottom-right'</code></p>
<h3 id="placement-for-group-of-toasts" tabindex="-1"><a class="header-anchor" href="#placement-for-group-of-toasts" aria-hidden="true">#</a> Placement for group of <code>&lt;Toasts&gt;</code></h3>
<ul>
<li>First create a <code>&lt;ToastContainer&gt;</code>.</li>
<li>Then teleport it to any element. Most often it should be <code>body</code></li>
</ul>
<WButton @click="showPlacementsGroup=true" class="me-2">First Show Toasts</WButton>
<WButton @click="showPlacementsGroup=false">Hide Toasts</WButton>
<WSelect :options="placements" v-model="placement"/>
<WToastContainer style="z-index: 99999;" container="body" class="position-fixed" :placement="placement">
<WToast v-model:show="showPlacementsGroup" v-for="i in 4" header="Bootstrap">
Heads up, toasts will stack automatically
</WToast>
</WToastContainer>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showPlacementsGroup=true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>First Show Toasts<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showPlacementsGroup=false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hide Toasts<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>placements<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>placement<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ToastContainer</span> <span class="token attr-name">container</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>position-fixed<span class="token punctuation">"</span></span> <span class="token attr-name">:placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>placement<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toast</span> <span class="token attr-name"><span class="token namespace">v-model:</span>show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showPlacementsGroup<span class="token punctuation">"</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 4<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Bootstrap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Heads up, toasts will stack automatically
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Toast</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ToastContainer</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> placement <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'top-left'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> placements <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">'top-left'</span><span class="token punctuation">,</span> <span class="token string">'top-center'</span><span class="token punctuation">,</span> <span class="token string">'top-right'</span><span class="token punctuation">,</span> <span class="token string">'middle-left'</span><span class="token punctuation">,</span>
    <span class="token string">'middle-center'</span><span class="token punctuation">,</span> <span class="token string">'middle-right'</span><span class="token punctuation">,</span> <span class="token string">'bottom-left'</span><span class="token punctuation">,</span>
    <span class="token string">'bottom-center'</span><span class="token punctuation">,</span> <span class="token string">'bottom-right'</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> showPlacementsGroup <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="teleporting-toasts" tabindex="-1"><a class="header-anchor" href="#teleporting-toasts" aria-hidden="true">#</a> Teleporting Toasts</h2>
<p>Toasts can be teleported to any elements by using <code>container</code> prop. It uses <code>&lt;teleport&gt;</code> component under the hood.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ToastContainer</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top-right<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top-right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ToastContainer</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ToastContainer</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom-right<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom-right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ToastContainer</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toast</span> <span class="token attr-name">container</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#top-right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Toast One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Toast</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toast</span> <span class="token attr-name">container</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#bottom-right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Toast Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Toast</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>

<script setup>
import {ref} from "vue"; 

const one=ref(false);
const placement=ref('top-left');
const placements=['top-left','top-center','top-right','middle-left','middle-center','middle-right','bottom-left','bottom-center','bottom-right'];
const showPlacementsGroup = ref(false);
</script>
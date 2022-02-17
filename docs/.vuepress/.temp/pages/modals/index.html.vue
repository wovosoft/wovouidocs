<template><h1 id="modal" tabindex="-1"><a class="header-anchor" href="#modal" aria-hidden="true">#</a> Modal</h1>
<p>Use Bootstrap’s Modal to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
<h2 id="live-demo" tabindex="-1"><a class="header-anchor" href="#live-demo" aria-hidden="true">#</a> Live demo</h2>
<p>Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.</p>
<WButton variant="primary" @click="modal1=!modal1">
Launch demo modal
</WButton>
<WModal v-model="modal1" header="Modal title">
  Modal Body
</WModal>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal1=!modal1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Launch demo modal
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal1<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Modal title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Modal Body
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="static-backdrop" tabindex="-1"><a class="header-anchor" href="#static-backdrop" aria-hidden="true">#</a> Static backdrop</h2>
<p>When <code>true</code> is set to <code>static</code> prop, the modal will not close when clicking outside it. Click the button below to try
it.</p>
<WButton variant="primary" @click="modal2=!modal2">
Launch demo modal
</WButton>
<WModal static v-model="modal2" header="Modal title">
  Modal Body
</WModal>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal2=!modal2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Launch demo modal
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">static</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal2<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Modal title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Modal Body
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="scrolling-long-content" tabindex="-1"><a class="header-anchor" href="#scrolling-long-content" aria-hidden="true">#</a> Scrolling long content</h2>
<p>When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo
below to see what we mean.</p>
<WButton variant="primary" @click="modal3=!modal3">
Launch demo modal
</WButton>
<WModal v-model="modal3" header="Modal title">
  <div v-for="i in 50">Modal Body</div>
</WModal>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal3=!modal3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Launch demo modal
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal3<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Modal title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 50<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Modal Body<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>You can also create a <code>scrollable</code> modal that allows scroll the modal body by adding <code>scrollable</code> to <code>&lt;Modal&gt;</code>
component.</p>
<WButton variant="primary" @click="modal4=!modal4">
Launch demo modal
</WButton>
<WModal scrollable v-model="modal4" header="Modal title">
  <div v-for="i in 50">Modal Body</div>
</WModal>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal4=!modal4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Launch demo modal
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">scrollable</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal4<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Modal title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 50<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Modal Body<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="vertically-centered" tabindex="-1"><a class="header-anchor" href="#vertically-centered" aria-hidden="true">#</a> Vertically centered</h2>
<p>Add <code>centered</code> to <code>&lt;Modal&gt;</code> component to vertically center the modal.</p>
<WButton variant="primary" @click="modal5=!modal5">
Launch demo modal
</WButton>
<WModal centered v-model="modal5" header="Modal title">
  Vertically Centered
</WModal>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal5=!modal5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Launch demo modal
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">centered</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal5<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Modal title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Vertically Centered
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><WButton variant="primary" @click="modal6=!modal6">
Launch demo modal
</WButton>
<WModal scrollable centered v-model="modal6" header="Modal title">
  <div v-for="i in 50">Vertically Centered & Scrollable</div>
</WModal>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal6=!modal6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Launch demo modal
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">scrollable</span> <span class="token attr-name">centered</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal6<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Modal title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 50<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Vertically Centered &amp; Scrollable<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="using-the-grid" tabindex="-1"><a class="header-anchor" href="#using-the-grid" aria-hidden="true">#</a> Using the grid</h2>
<p>Utilize the Bootstrap grid system within a modal by nesting <code>&lt;Container&gt;</code> within the .modal-body. Then, use the normal
grid system classes as you would anywhere else.</p>
<WButton variant="primary" @click="modal7=!modal7">
Launch demo modal
</WButton>
<WModal scrollable centered v-model="modal7" header="Modal title">
  <WContainer fluid>
        <WRow>
            <WCol :md="4">.col-md-4</WCol>
            <WCol :md="4" class="ms-auto">.col-md-4 .ms-auto</WCol>
        </WRow>
        <WRow class="row">
            <WCol :md="3" class="ms-auto">.col-md-3 .ms-auto</WCol>
            <WCol :md="2" class="ms-auto">.col-md-2 .ms-auto</WCol>
        </WRow>
        <WRow>
            <WCol :md="6" class="ms-auto">.col-md-6 .ms-auto</WCol>
        </WRow>
        <WRow>
            <WCol :sm="9">
                Level 1: .col-sm-9
                <WRow class="row">
                    <WCol :sm="8" :col="8">
                        Level 2: .col-8 .col-sm-6
                    </WCol>
                    <WCol :col="4" :sm="6">
                        Level 2: .col-4 .col-sm-6
                    </WCol>
                </WRow>
            </WCol>
        </WRow>
    </WContainer>
</WModal>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal7=!modal7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Launch demo modal
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal7<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Modal title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Container</span> <span class="token attr-name">fluid</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">:md</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            .col-md-4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">:md</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            .col-md-4 .ms-auto<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">:md</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            .col-md-3 .ms-auto<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:md</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>.col-md-2 .ms-auto<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">:md</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            .col-md-6 .ms-auto<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">:sm</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>9<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Level 1: .col-sm-9
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">:sm</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>8<span class="token punctuation">"</span></span> <span class="token attr-name">:col</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                Level 2: .col-8 .col-sm-6
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">:col</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">:sm</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                Level 2: .col-4 .col-sm-6
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Container</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="optional-sizes" tabindex="-1"><a class="header-anchor" href="#optional-sizes" aria-hidden="true">#</a> Optional sizes</h2>
<p>Modals have three optional sizes, available via modifier classes to be placed on a .modal-dialog. These sizes kick in at
certain breakpoints to avoid horizontal scrollbars on narrower viewports. This can be controlled by <code>size</code> prop.
Supported values are <code>'sm'</code>,<code>'lg'</code> and <code>'xl'</code>.</p>
<template v-for="size in ['sm','lg','xl']">
<WButton variant="primary" @click="modalSizes[size]=true">
Launch {{size}} modal
</WButton>
<WModal v-model="modalSizes[size]" :size="size" header="Modal title">
  <div v-for="i in 10">Different Size Modal</div>
</WModal>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modalSizes[size]=!modalSizes[size]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Launch {{size}} modal
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modalSizes[size]<span class="token punctuation">"</span></span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>size<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Modal title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Different Size Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
<h2 id="fullscreen-modal" tabindex="-1"><a class="header-anchor" href="#fullscreen-modal" aria-hidden="true">#</a> Fullscreen Modal</h2>
<p>Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are
placed on a <code>.modal-dialog</code>.</p>
<template v-for="size in ['always','sm-down','md-down','lg-down','xl-down','xxl-down']">
<WButton class="m-1" variant="primary" @click="modalFullScreen[size]=true">
Launch <strong>{{size}}</strong> fullscreen modal
</WButton>
<WModal :fullscreen="size==='always'?true:size" v-model="modalFullScreen[size]" :header="size+ ' fullscreen modal'">
  <div v-for="i in 10">Different Size Modal</div>
</WModal>
</template>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>size in [<span class="token punctuation">'</span>always<span class="token punctuation">'</span>,<span class="token punctuation">'</span>sm-down<span class="token punctuation">'</span>,<span class="token punctuation">'</span>md-down<span class="token punctuation">'</span>,<span class="token punctuation">'</span>lg-down<span class="token punctuation">'</span>,<span class="token punctuation">'</span>xl-down<span class="token punctuation">'</span>,<span class="token punctuation">'</span>xxl-down<span class="token punctuation">'</span>]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>m-1<span class="token punctuation">"</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modalFullScreen[size]=true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Launch <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>{{size}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span> fullscreen modal
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">:fullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>size===<span class="token punctuation">'</span>always<span class="token punctuation">'</span>?true:size<span class="token punctuation">"</span></span> 
           <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modalFullScreen[size]<span class="token punctuation">"</span></span> 
           <span class="token attr-name">:header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>size+ <span class="token punctuation">'</span> fullscreen modal<span class="token punctuation">'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Different Size Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></template>

<script setup>
import {ref} from "vue"; 

const modal1 = ref(false);
const modal2 = ref(false);
const modal3 = ref(false);
const modal4 = ref(false);
const modal5 = ref(false);
const modal6 = ref(false);
const modal7 = ref(false);
const modalSizes = ref({sm:false,lg:false,xl:false});
//true | false | 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down'
const modalFullScreen = ref({
always:false,
'sm-down':false,
'md-down':false,
'lg-down':false,
'xl-down':false,
'xxl-down':false,
});
</script>
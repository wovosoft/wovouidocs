<template><h1 id="list-group" tabindex="-1"><a class="header-anchor" href="#list-group" aria-hidden="true">#</a> List Group</h1>
<p>List groups are a flexible and powerful component for displaying a series of content. List group items can be modified
to support just about any content within. They can also be used as navigation via various props.</p>
<h2 id="basic-example" tabindex="-1"><a class="header-anchor" href="#basic-example" aria-hidden="true">#</a> Basic example</h2>
<p>The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options
that follow, or with your own CSS as needed.</p>
<WListGroup>
  <WListGroupItem>Cras justo odio</WListGroupItem>
  <WListGroupItem>Dapibus ac facilisis in</WListGroupItem>
  <WListGroupItem>Morbi leo risus</WListGroupItem>
  <WListGroupItem>Porta ac consectetur ac</WListGroupItem>
  <WListGroupItem>Vestibulum at eros</WListGroupItem>
</WListGroup>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Cras justo odio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Dapibus ac facilisis in<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Morbi leo risus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Porta ac consectetur ac<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Vestibulum at eros<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="active-items" tabindex="-1"><a class="header-anchor" href="#active-items" aria-hidden="true">#</a> Active items</h2>
<p>Set prop <code>active</code> on the <code>&lt;ListGroupItem&gt;</code> which you want to be <code>active</code>.</p>
<WListGroup>
  <WListGroupItem>Cras justo odio</WListGroupItem>
  <WListGroupItem active>Dapibus ac facilisis in</WListGroupItem>
  <WListGroupItem>Morbi leo risus</WListGroupItem>
  <WListGroupItem>Porta ac consectetur ac</WListGroupItem>
  <WListGroupItem>Vestibulum at eros</WListGroupItem>
</WListGroup>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Cras justo odio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span> <span class="token attr-name">active</span><span class="token punctuation">></span></span>Dapibus ac facilisis in<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Morbi leo risus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Porta ac consectetur ac<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Vestibulum at eros<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="disabled-items" tabindex="-1"><a class="header-anchor" href="#disabled-items" aria-hidden="true">#</a> Disabled items</h2>
<p>Set prop <code>disabled</code> on the <code>&lt;ListGroupItem&gt;</code> which you want to be <code>disabled</code>.</p>
<WListGroup>
  <WListGroupItem>Cras justo odio</WListGroupItem>
  <WListGroupItem disabled>Dapibus ac facilisis in</WListGroupItem>
  <WListGroupItem>Morbi leo risus</WListGroupItem>
  <WListGroupItem>Porta ac consectetur ac</WListGroupItem>
  <WListGroupItem>Vestibulum at eros</WListGroupItem>
</WListGroup>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Cras justo odio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span> <span class="token attr-name">active</span><span class="token punctuation">></span></span>Dapibus ac facilisis in<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Morbi leo risus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Porta ac consectetur ac<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Vestibulum at eros<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="links-and-buttons" tabindex="-1"><a class="header-anchor" href="#links-and-buttons" aria-hidden="true">#</a> Links and buttons</h2>
<p>To make actionable items by <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> use <code>href</code> attribute which will automatically create an <code>&lt;a&gt;</code> item or
use <code>button</code> prop which will create items with button element.</p>
<WListGroup>
  <WListGroupItem button>Cras justo odio</WListGroupItem>
  <WListGroupItem button>Dapibus ac facilisis in</WListGroupItem>
  <WListGroupItem href="#">Morbi leo risus</WListGroupItem>
  <WListGroupItem href="#">Porta ac consectetur ac</WListGroupItem>
  <WListGroupItem>Vestibulum at eros</WListGroupItem>
</WListGroup>
<div class="mt-3">
<p>The first two items are created using <code>button</code> element, which are actionable. And next two items are created using <code>&lt;a&gt;</code>
element which are also actionable.</p>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span> <span class="token attr-name">button</span><span class="token punctuation">></span></span>Cras justo odio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span> <span class="token attr-name">button</span><span class="token punctuation">></span></span>Dapibus ac facilisis in<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Morbi leo risus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Porta ac consectetur ac<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Vestibulum at eros<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="flush" tabindex="-1"><a class="header-anchor" href="#flush" aria-hidden="true">#</a> Flush</h2>
<p>Add prop <code>flush</code> to remove some borders and rounded corners to render list group items edge-to-edge in a parent
container (e.g., cards).</p>
<WListGroup flush>
<WListGroupItem>Cras justo odio</WListGroupItem>
<WListGroupItem>Dapibus ac facilisis in</WListGroupItem>
<WListGroupItem>Morbi leo risus</WListGroupItem>
<WListGroupItem>Porta ac consectetur ac</WListGroupItem>
<WListGroupItem>Vestibulum at eros</WListGroupItem>
</WListGroup>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span> <span class="token attr-name">flush</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Cras justo odio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Dapibus ac facilisis in<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Morbi leo risus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Porta ac consectetur ac<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>Vestibulum at eros<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="numbered" tabindex="-1"><a class="header-anchor" href="#numbered" aria-hidden="true">#</a> Numbered</h2>
<p>Add the prop <code>numbered</code> to opt into numbered list group items. Numbers are generated via CSS (as opposed to a <code>&lt;ol&gt;</code>s
default browser styling) for better placement inside list group items and to allow for better customization.</p>
<WListGroup numbered>
  <WListGroupItem>A list item</WListGroupItem>
  <WListGroupItem>A list item</WListGroupItem>
  <WListGroupItem>A list item</WListGroupItem>
</WListGroup>
<p>When <code>numbered</code> prop is used, the default element of <code>list-group</code> changes to <code>ol</code>. Inspect the element in your browser
and check the output for more details.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span> <span class="token attr-name">numbered</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A list item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A list item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A list item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>These work great with custom content as well.</p>
<WListGroup numbered>
  <WListGroupItem class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <WBadge variant="primary" pill>14</WBadge>
  </WListGroupItem>
  <WListGroupItem class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <WBadge variant="primary" pill>14</WBadge>
  </WListGroupItem>
  <WListGroupItem class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <WBadge variant="primary" pill>14</WBadge>
  </WListGroupItem>
</WListGroup>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span> <span class="token attr-name">numbered</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex justify-content-between align-items-start<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-2 me-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-bold<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Subheading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        Content for list item
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">pill</span><span class="token punctuation">></span></span>14<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex justify-content-between align-items-start<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-2 me-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-bold<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Subheading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        Content for list item
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">pill</span><span class="token punctuation">></span></span>14<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex justify-content-between align-items-start<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-2 me-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-bold<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Subheading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        Content for list item
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">pill</span><span class="token punctuation">></span></span>14<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="horizontal" tabindex="-1"><a class="header-anchor" href="#horizontal" aria-hidden="true">#</a> Horizontal</h2>
<p>Add value for the prop <code>horizontal</code> to change the layout of list group items from vertical to horizontal across all
breakpoints. When value is <code>true</code> items are horizontal on all breakpoints. Alternatively, choose a responsive
variant <code>{sm|md|lg|xl|xxl}</code> to make a list group horizontal starting at that breakpoint’s <code>min-width</code>. Currently
horizontal list groups cannot be combined with flush list groups.</p>
<WListGroup horizontal>
  <WListGroupItem>An item</WListGroupItem>
  <WListGroupItem>A second item</WListGroupItem>
  <WListGroupItem>A third item</WListGroupItem>
</WListGroup>
<WListGroup horizontal="sm">
  <WListGroupItem>An item</WListGroupItem>
  <WListGroupItem>A second item</WListGroupItem>
  <WListGroupItem>A third item</WListGroupItem>
</WListGroup>
<WListGroup horizontal="md">
  <WListGroupItem>An item</WListGroupItem>
  <WListGroupItem>A second item</WListGroupItem>
  <WListGroupItem>A third item</WListGroupItem>
</WListGroup>
<WListGroup horizontal="lg">
  <WListGroupItem>An item</WListGroupItem>
  <WListGroupItem>A second item</WListGroupItem>
  <WListGroupItem>A third item</WListGroupItem>
</WListGroup>
<WListGroup horizontal="xl">
  <WListGroupItem>An item</WListGroupItem>
  <WListGroupItem>A second item</WListGroupItem>
  <WListGroupItem>A third item</WListGroupItem>
</WListGroup>
<WListGroup horizontal="xxl">
  <WListGroupItem>An item</WListGroupItem>
  <WListGroupItem>A second item</WListGroupItem>
  <WListGroupItem>A third item</WListGroupItem>
</WListGroup>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span> <span class="token attr-name">horizontal</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>An item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A second item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A third item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span> <span class="token attr-name">horizontal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>An item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A second item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A third item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span> <span class="token attr-name">horizontal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>An item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A second item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A third item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span> <span class="token attr-name">horizontal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>An item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A second item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A third item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span> <span class="token attr-name">horizontal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>An item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A second item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A third item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span> <span class="token attr-name">horizontal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xxl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>An item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A second item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A third item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="contextual-variants" tabindex="-1"><a class="header-anchor" href="#contextual-variants" aria-hidden="true">#</a> Contextual variants</h2>
<p>For different contextual variant of list group items, set value for <code>variant</code> prop. Supported variant values are
<code>'primary'</code>|<code>'secondary'</code>|<code>'success'</code>|<code>'danger'</code>|<code>'warning'</code>|<code>'info'</code>|<code>'light'</code>|<code>'dark'</code>.</p>
<WListGroup>
<WListGroupItem v-for="variant in [null,'primary','secondary','success','danger','warning','info','light','dark']" :variant="variant">
    A simple {{variant?variant:'default'}} group item
</WListGroupItem>
</WListGroup>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>variant in [null,<span class="token punctuation">'</span>primary<span class="token punctuation">'</span>,<span class="token punctuation">'</span>secondary<span class="token punctuation">'</span>,<span class="token punctuation">'</span>success<span class="token punctuation">'</span>,<span class="token punctuation">'</span>danger<span class="token punctuation">'</span>,<span class="token punctuation">'</span>warning<span class="token punctuation">'</span>,<span class="token punctuation">'</span>info<span class="token punctuation">'</span>,<span class="token punctuation">'</span>light<span class="token punctuation">'</span>,<span class="token punctuation">'</span>dark<span class="token punctuation">'</span>]<span class="token punctuation">"</span></span>
    <span class="token attr-name">:variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>variant<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    A simple {{variant?variant:'default'}} group item
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>These variants also works with actionable items.</p>
<WListGroup>
<WListGroupItem button v-for="variant in [null,'primary','secondary','success','danger','warning','info','light','dark']" :variant="variant">
    A simple {{variant?variant:'default'}} group item
</WListGroupItem>
</WListGroup>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span>
    <span class="token attr-name">button</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>variant in [null,<span class="token punctuation">'</span>primary<span class="token punctuation">'</span>,<span class="token punctuation">'</span>secondary<span class="token punctuation">'</span>,<span class="token punctuation">'</span>success<span class="token punctuation">'</span>,<span class="token punctuation">'</span>danger<span class="token punctuation">'</span>,<span class="token punctuation">'</span>warning<span class="token punctuation">'</span>,<span class="token punctuation">'</span>info<span class="token punctuation">'</span>,<span class="token punctuation">'</span>light<span class="token punctuation">'</span>,<span class="token punctuation">'</span>dark<span class="token punctuation">'</span>]<span class="token punctuation">"</span></span>
    <span class="token attr-name">:variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>variant<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    A simple {{variant?variant:'default'}} group item
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="with-badges" tabindex="-1"><a class="header-anchor" href="#with-badges" aria-hidden="true">#</a> With badges</h2>
<p>Add badges to any list group item to show unread counts, activity, and more with the help of
some <a href="https://getbootstrap.com/docs/5.1/utilities/flex/" target="_blank" rel="noopener noreferrer">utilities<ExternalLinkIcon/></a>.</p>
<WListGroup>
  <WListGroupItem class="d-flex justify-content-between align-items-center">
    A list item
    <WBadge variant="primary" pill>14</WBadge>
  </WListGroupItem>
  <WListGroupItem class="d-flex justify-content-between align-items-center">
    A second list item
      <WBadge variant="primary" pill>14</WBadge>
  </WListGroupItem>
  <WListGroupItem class="d-flex justify-content-between align-items-center">
    A third list item
      <WBadge variant="primary" pill>14</WBadge>
  </WListGroupItem>
</WListGroup>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex justify-content-between align-items-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    A list item
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">pill</span><span class="token punctuation">></span></span>14<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex justify-content-between align-items-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    A second list item
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">pill</span><span class="token punctuation">></span></span>14<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex justify-content-between align-items-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    A third list item
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">pill</span><span class="token punctuation">></span></span>14<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="custom-content" tabindex="-1"><a class="header-anchor" href="#custom-content" aria-hidden="true">#</a> Custom content</h2>
<p>Add nearly any HTML within, even for linked list groups like the one below, with the help
of <a href="https://getbootstrap.com/docs/5.1/utilities/flex/" target="_blank" rel="noopener noreferrer">flexbox utilities<ExternalLinkIcon/></a>.</p>
<WListGroup tag="div">
<WListGroupItem href="#" active>
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small>3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
</WListGroupItem>
<WListGroupItem href="#">
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
</WListGroupItem>
<WListGroupItem href="#">
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
</WListGroupItem>
</WListGroup>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">active</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex w-100 justify-content-between<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>List group item heading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">></span></span>3 days ago<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Some placeholder content in a paragraph.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">></span></span>And some small print.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex w-100 justify-content-between<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>List group item heading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-muted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3 days ago<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Some placeholder content in a paragraph.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-muted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>And some muted small print.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex w-100 justify-content-between<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>List group item heading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-muted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3 days ago<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Some placeholder content in a paragraph.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-muted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>And some muted small print.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="checkboxes-and-radios" tabindex="-1"><a class="header-anchor" href="#checkboxes-and-radios" aria-hidden="true">#</a> Checkboxes and radios</h2>
<w-list-group>
<w-list-group-item>
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    First checkbox
</w-list-group-item>
<w-list-group-item>
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Second checkbox
</w-list-group-item>
<w-list-group-item>
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Third checkbox
</w-list-group-item>
<w-list-group-item>
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Fourth checkbox
</w-list-group-item>
<w-list-group-item>
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Fifth checkbox
</w-list-group-item>
</w-list-group>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>list-group</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>list-group-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check-input me-1<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    First checkbox
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>list-group-item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>list-group-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check-input me-1<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Second checkbox
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>list-group-item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>list-group-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check-input me-1<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Third checkbox
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>list-group-item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>list-group-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check-input me-1<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Fourth checkbox
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>list-group-item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>list-group-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check-input me-1<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Fifth checkbox
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>list-group-item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>list-group</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>And if you want <code>&lt;label&gt;</code>s as the <code>&lt;ListGroupItem&gt;</code> for large hit areas, you can do that, too. Just set <code>tag=&quot;label&quot;</code>
for each <code>list-group-item</code>. Now click anywhere on any item, the checkbox will be toggled automatically.</p>
<w-list-group tag="div">
<w-list-group-item tag="label">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    First checkbox
</w-list-group-item>
<w-list-group-item tag="label">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Second checkbox
</w-list-group-item>
<w-list-group-item tag="label">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Third checkbox
</w-list-group-item>
<w-list-group-item tag="label">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Fourth checkbox
</w-list-group-item>
<w-list-group-item tag="label">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Fifth checkbox
</w-list-group-item>
</w-list-group>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>list-group</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>list-group-item</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check-input me-1<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        First checkbox
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>list-group-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>list-group-item</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check-input me-1<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Second checkbox
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>list-group-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>list-group-item</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check-input me-1<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Third checkbox
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>list-group-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>list-group-item</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check-input me-1<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Fourth checkbox
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>list-group-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>list-group-item</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-check-input me-1<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Fifth checkbox
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>list-group-item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>list-group</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></template>

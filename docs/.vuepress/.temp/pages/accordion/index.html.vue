<template><h1 id="accordion" tabindex="-1"><a class="header-anchor" href="#accordion" aria-hidden="true">#</a> Accordion</h1>
<p>The accordion uses <code>Collapse</code> component internally to make it collapsible. To render an accordion that’s expanded, add
the <code>.open</code> class on the <code>.accordion</code>.</p>
<h2 id="default-accordion" tabindex="-1"><a class="header-anchor" href="#default-accordion" aria-hidden="true">#</a> Default Accordion</h2>
<p>Click the accordions below to expand/collapse the accordion content.</p>
<WAccordion>
  <WAccordionItem v-for="i in 5" :header="'Accordion Item #'+i">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
the appropriate classes that we use to style each element. These classes control the overall appearance,
as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or 
overriding our default variables. It's also worth noting that just about any HTML can go within the
<code>.accordion-body</code>, though the transition does limit overflow.
  </WAccordionItem>
</WAccordion>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 5<span class="token punctuation">"</span></span> <span class="token attr-name">:header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>Accordion Item #<span class="token punctuation">'</span>+i<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>This is the first item's accordion body.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span> It is shown by default, until the collapse plugin adds
    the appropriate classes that we use to style each element. These classes control the overall appearance,
    as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
    overriding our default variables. It's also worth noting that just about any HTML can go within the
    `.accordion-body`, though the transition does limit overflow.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="flush" tabindex="-1"><a class="header-anchor" href="#flush" aria-hidden="true">#</a> Flush</h2>
<p>Add prop <code>flush</code> to remove the default <code>background-color</code>, some <code>borders</code>, and some rounded <code>corners</code> to render
accordions <code>edge-to-edge</code> with their parent container.</p>
<WAccordion flush>
<WAccordionItem v-for="i in 5" :header="'Accordion Item # '+i">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
    the appropriate classes that we use to style each element. These classes control the overall appearance,
    as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
    overriding our default variables. It's also worth noting that just about any HTML can go within the
    `.accordion-body`, though the transition does limit overflow.
</WAccordionItem>
</WAccordion>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion</span> <span class="token attr-name">flush</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 5<span class="token punctuation">"</span></span> <span class="token attr-name">:header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>Accordion Item # <span class="token punctuation">'</span>+i<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>This is the first item's accordion body.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span> It is shown by default, until the collapse plugin adds
    the appropriate classes that we use to style each element. These classes control the overall appearance,
    as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
    overriding our default variables. It's also worth noting that just about any HTML can go within the
    `.accordion-body`, though the transition does limit overflow.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="always-open" tabindex="-1"><a class="header-anchor" href="#always-open" aria-hidden="true">#</a> Always open</h2>
<p>Add prop <code>always-open</code> to the accordion itself to stay open its child items.</p>
<WAccordion always-open>
<WAccordionItem v-for="i in 5" :header="'Accordion Item # '+i">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
    the appropriate classes that we use to style each element. These classes control the overall appearance,
    as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
    overriding our default variables. It's also worth noting that just about any HTML can go within the
    `.accordion-body`, though the transition does limit overflow.
</WAccordionItem>
</WAccordion>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion</span> <span class="token attr-name">always-open</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 5<span class="token punctuation">"</span></span> <span class="token attr-name">:header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>Accordion Item # <span class="token punctuation">'</span>+i<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>This is the first item's accordion body.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span> It is shown by default, until the collapse plugin adds
    the appropriate classes that we use to style each element. These classes control the overall appearance,
    as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
    overriding our default variables. It's also worth noting that just about any HTML can go within the
    `.accordion-body`, though the transition does limit overflow.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="openall-collapseall-toggleall-exposed-methods" tabindex="-1"><a class="header-anchor" href="#openall-collapseall-toggleall-exposed-methods" aria-hidden="true">#</a> <code>openAll</code>, <code>collapseAll</code>, <code>toggleAll</code> exposed methods</h2>
<p><code>&lt;Accordion&gt;</code> component has few exposed methods to toggle/collapse/open it's children.</p>
<ul>
<li>openAll</li>
<li>collapseAll</li>
<li>toggleAll</li>
</ul>
<WButtonGroup class="mb-3">
    <WButton @click="$refs.acc.openAll()">Open All</WButton>
    <WButton @click="$refs.acc.collapseAll()">Collapse All</WButton>
    <WButton @click="$refs.acc.toggleAll()">Toggle All</WButton>
</WButtonGroup>
<WAccordion ref="acc" always-open>
<WAccordionItem v-for="i in 5" :header="'Accordion Item # '+i">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
    the appropriate classes that we use to style each element. These classes control the overall appearance,
    as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
    overriding our default variables. It's also worth noting that just about any HTML can go within the
    `.accordion-body`, though the transition does limit overflow.
</WAccordionItem>
</WAccordion>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonGroup</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$refs.acc.openAll()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Open All<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$refs.acc.collapseAll()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Collapse All<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$refs.acc.toggleAll()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Toggle All<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ButtonGroup</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>acc<span class="token punctuation">"</span></span> <span class="token attr-name">always-open</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 5<span class="token punctuation">"</span></span> <span class="token attr-name">:header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>Accordion Item # <span class="token punctuation">'</span>+i<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>This is the first item's accordion body.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span> It is shown by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
            `.accordion-body`, though the transition does limit overflow.
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ButtonGroup<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Accordion<span class="token punctuation">,</span> AccordionItem<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@wovosoft/wovoui"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="modelvalue" tabindex="-1"><a class="header-anchor" href="#modelvalue" aria-hidden="true">#</a> <code>modelValue</code></h2>
<p>Coming Later...</p>
</template>

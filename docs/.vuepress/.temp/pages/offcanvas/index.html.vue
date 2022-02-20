<template><h1 id="offcanvas-sidebar" tabindex="-1"><a class="header-anchor" href="#offcanvas-sidebar" aria-hidden="true">#</a> Offcanvas / Sidebar</h1>
<p>Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript
plugin.</p>
<h2 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a> How it works</h2>
<p>Offcanvas is a sidebar component that can be toggled via JavaScript to appear from the left, right, or bottom edge of
the viewport. Buttons or anchors are used as triggers that are attached to specific elements you toggle, and data
attributes are used to invoke our JavaScript.</p>
<ul>
<li>Offcanvas shares some of the same JavaScript code as modals. Conceptually, they are quite similar, but they are
separate plugins.</li>
<li>Similarly, some source Sass variables for offcanvas’s styles and dimensions are inherited from the modal’s variables.</li>
<li>When shown, offcanvas includes a default backdrop that can be clicked to hide the offcanvas.</li>
<li>Similar to modals, only one offcanvas can be shown at a time.</li>
</ul>
<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2>
<p>Below is an offcanvas example that is shown by default (via .show on .offcanvas). Offcanvas includes support for a
header with a close button and an optional body class for some initial padding. We suggest that you include offcanvas
headers with dismiss actions whenever possible, or provide an explicit dismiss action.</p>
<WButton @click="one=!one">Toggle Offcanvas</WButton>
<WOffCanvas aria-labelledby="offcanvasLabel" header="Offcanvas" v-model="one">
  Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</WOffCanvas>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>one=!one<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Toggle Offcanvas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OffCanvas</span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>offcanvasLabel<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Offcanvas<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>one<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>OffCanvas</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="placement" tabindex="-1"><a class="header-anchor" href="#placement" aria-hidden="true">#</a> Placement</h2>
<p>Use values for the prop <code>placement</code> among the options given below:</p>
<ul>
<li><code>start|left</code> places offcanvas on the left of the viewport (shown above)</li>
<li><code>end|right</code> places offcanvas on the right of the viewport</li>
<li><code>top</code> places offcanvas on the top of the viewport</li>
<li><code>bottom</code> places offcanvas on the bottom of the viewport</li>
</ul>
<WButton @click="top=!top">Top Offcanvas</WButton>
<WButton class="ms-2" @click="bottom=!bottom">Bottom Offcanvas</WButton>
<WButton class="ms-2" @click="left=!left">Left Offcanvas</WButton>
<WButton class="ms-2" @click="right=!right">Right Offcanvas</WButton>
<WOffCanvas aria-labelledby="offcanvasLabel" placement="top" header="Top Offcanvas" v-model="top">
  Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</WOffCanvas>
<WOffCanvas aria-labelledby="offcanvasLabel" placement="bottom" header="Bottom Offcanvas" v-model="bottom">
  Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</WOffCanvas>
<WOffCanvas aria-labelledby="offcanvasLabel" placement="left" header="Left Offcanvas" v-model="left">
  Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</WOffCanvas>
<WOffCanvas aria-labelledby="offcanvasLabel" placement="right" header="Right Offcanvas" v-model="right">
  Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</WOffCanvas>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top=!top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Top Offcanvas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-2<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom=!bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Bottom Offcanvas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-2<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left=!left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Left Offcanvas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-2<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right=!right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Right Offcanvas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OffCanvas</span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>offcanvasLabel<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Top Offcanvas<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>OffCanvas</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OffCanvas</span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>offcanvasLabel<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Bottom Offcanvas<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>OffCanvas</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OffCanvas</span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>offcanvasLabel<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Left Offcanvas<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>OffCanvas</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OffCanvas</span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>offcanvasLabel<span class="token punctuation">"</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Right Offcanvas<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>OffCanvas</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="backdrop" tabindex="-1"><a class="header-anchor" href="#backdrop" aria-hidden="true">#</a> Backdrop</h2>
<h3 id="hide-backdrop" tabindex="-1"><a class="header-anchor" href="#hide-backdrop" aria-hidden="true">#</a> Hide Backdrop</h3>
<p>Set <code>backdrop = false</code> to hide backdrop when offcanvas is shown.</p>
<WButton @click="backdrop=!backdrop">Toggle Offcanvas</WButton>
<WOffCanvas aria-labelledby="offcanvasLabel" header="Offcanvas" v-model="backdrop" :backdrop="false">
  Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</WOffCanvas>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backdrop=!backdrop<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Toggle Offcanvas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OffCanvas</span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>offcanvasLabel<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Offcanvas<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backdrop<span class="token punctuation">"</span></span> <span class="token attr-name">:backdrop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>OffCanvas</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="disable-body-scroll" tabindex="-1"><a class="header-anchor" href="#disable-body-scroll" aria-hidden="true">#</a> Disable body scroll</h2>
<WButton @click="bodyScroll=!bodyScroll">Toggle Offcanvas</WButton>
<WOffCanvas aria-labelledby="offcanvasLabel" header="Offcanvas" v-model="bodyScroll" :enableBodyScroll="false">
  Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</WOffCanvas>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bodyScroll=!bodyScroll<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Toggle Offcanvas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OffCanvas</span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>offcanvasLabel<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Offcanvas<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bodyScroll<span class="token punctuation">"</span></span> <span class="token attr-name">:enableBodyScroll</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>OffCanvas</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="variants" tabindex="-1"><a class="header-anchor" href="#variants" aria-hidden="true">#</a> Variants</h2>
<p>Use the props <code>bg-variant</code> and <code>text-variant</code> to control the theme color variant of the background and text, respectively.
Alternatively, you can apply styles or classes to specify the background and text colors.</p>
<WButton @click="variant=!variant">Toggle Offcanvas</WButton>
<WOffCanvas bg-variant="dark" text-variant="light" header="Offcanvas" v-model="variant">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</WOffCanvas>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>variant=!variant<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Toggle Offcanvas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OffCanvas</span> <span class="token attr-name">bg-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">text-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Offcanvas<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>variant<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>OffCanvas</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>//Some other features are coming very soon...</p>
</template>

<script setup>
import {ref} from "vue"; 

const one=ref(false);
const top=ref(false);
const left=ref(false);
const right=ref(false);
const bottom=ref(false);
const backdrop=ref(false);
const bodyScroll=ref(false);
const variant=ref(false);
</script>
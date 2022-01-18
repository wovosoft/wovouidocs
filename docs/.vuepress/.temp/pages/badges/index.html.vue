<template><h1 id="badges" tabindex="-1"><a class="header-anchor" href="#badges" aria-hidden="true">#</a> Badges</h1>
<p>Badges scale to match the size of the immediate parent element by using relative font sizing and em units. As of v5,
Badges no longer have focus or hover styles for links.</p>
<h2>
    Headings
</h2>
<h1>Example heading
    <WBadge>New</WBadge>
</h1>
<h2>Example heading
    <WBadge>New</WBadge>
</h2>
<h3>Example heading
    <WBadge>New</WBadge>
</h3>
<h4>Example heading
    <WBadge>New</WBadge>
</h4>
<h5>Example heading
    <WBadge>New</WBadge>
</h5>
<h6>Example heading
    <WBadge>New</WBadge>
</h6>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>
Example heading
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span><span class="token punctuation">></span></span>New<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Example heading
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span><span class="token punctuation">></span></span>New<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Example heading
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span><span class="token punctuation">></span></span>New<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Example heading
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span><span class="token punctuation">></span></span>New<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">></span></span>Example heading
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span><span class="token punctuation">></span></span>New<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>Example heading
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span><span class="token punctuation">></span></span>New<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="in-buttons" tabindex="-1"><a class="header-anchor" href="#in-buttons" aria-hidden="true">#</a> In Buttons</h2>
<p>Badges can be used as part of links or buttons to provide a counter.</p>
<WButton variant="primary">
    Notifications
    <WBadge>4</WBadge>
</WButton>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
Notifications
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive
technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be
presented with the content of the badge. Depending on the specific situation, these badges may seem like random
additional words or numbers at the end of a sentence, link, or button.</p>
<p>Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of
notifications), consider including additional context with a visually hidden piece of additional text.</p>
<h2 id="contextual-variations" tabindex="-1"><a class="header-anchor" href="#contextual-variations" aria-hidden="true">#</a> Contextual variations</h2>
<p>Add any of the following variants via the variant prop to change the appearance of a <code>Badge</code>: <code>primary</code>, <code>secondary</code>
, <code>success</code>, <code>danger</code>, <code>warning</code>, <code>info</code>, <code>light</code> , <code>dark</code>. If no variant is specified default will be used.</p>
<div class="child-m-2">
    <WBadge variant="primary">Primary</WBadge>
    <WBadge variant="secondary">Secondary</WBadge>
    <WBadge variant="success">Success</WBadge>
    <WBadge variant="danger">Danger</WBadge>
    <WBadge variant="warning">Warning</WBadge>
    <WBadge variant="info">Info</WBadge>
    <WBadge variant="light">Light</WBadge>
    <WBadge variant="dark">Dark</WBadge>
</div>
<h2 id="pill-badges" tabindex="-1"><a class="header-anchor" href="#pill-badges" aria-hidden="true">#</a> Pill badges</h2>
<p>Use the <code>pill</code> prop to make badges more rounded (with a larger border-radius and additional horizontal padding).</p>
<div class="child-m-2">
    <WBadge pill variant="primary">Primary</WBadge>
    <WBadge pill variant="secondary">Secondary</WBadge>
    <WBadge pill variant="success">Success</WBadge>
    <WBadge pill variant="danger">Danger</WBadge>
    <WBadge pill variant="warning">Warning</WBadge>
    <WBadge pill variant="info">Info</WBadge>
    <WBadge pill variant="light">Light</WBadge>
    <WBadge pill variant="dark">Dark</WBadge>
</div></template>

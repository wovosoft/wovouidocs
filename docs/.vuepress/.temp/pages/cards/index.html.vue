<template><h1 id="cards" tabindex="-1"><a class="header-anchor" href="#cards" aria-hidden="true">#</a> Cards</h1>
<p>A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of
content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace
our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for
cards.</p>
<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>
<p>Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and
customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have
no <code>margin</code> by default, so use
<a href="https://getbootstrap.com/docs/5.1/utilities/spacing/" target="_blank" rel="noopener noreferrer">spacing utilities<ExternalLinkIcon/></a> as needed.</p>
<p>Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll
naturally fill the full width of its parent element. This is easily customized with our various
<a href="https://getbootstrap.com/docs/5.1/components/card/Index.vue#sizing" target="_blank" rel="noopener noreferrer">sizing options<ExternalLinkIcon/></a>.</p>
<div class="bootstrap">
<WCard title="Card Title"
img-src="https://picsum.photos/600/300/?image=25"
img-alt="Image"
img-top tag="article"
style="max-width: 20rem;"
class="mb-2">
<WCardText>
Some quick example text to build on the card title and make up the bulk of the card's content.
</WCardText>
<WButton href="#" variant="primary">Go somewhere</WButton>
</WCard>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card Title<span class="token punctuation">"</span></span>
    <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://picsum.photos/600/300/?image=25<span class="token punctuation">"</span></span>
    <span class="token attr-name">img-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Image<span class="token punctuation">"</span></span>
    <span class="token attr-name">img-top</span>
    <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>article<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">max-width</span><span class="token punctuation">:</span> 20rem<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>
    Some quick example text to build on the card title and make up the bulk of the card's content.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Go somewhere<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="content-types" tabindex="-1"><a class="header-anchor" href="#content-types" aria-hidden="true">#</a> Content types</h2>
<p>Cards support a wide variety of content, including images, text, list groups, links and more. The following are examples
of what's supported inside a <code>&lt;Card&gt;</code></p>
<h2 id="card-body" tabindex="-1"><a class="header-anchor" href="#card-body" aria-hidden="true">#</a> Card body</h2>
<p>The building block of a <code>&lt;Card&gt;</code> is the <code>&lt;CardBody&gt;</code> section which provides a padded
section within a card.</p>
<p>By default the <code>&lt;Card&gt;</code> content is automatically placed in a <code>&lt;CardBody&gt;</code>
section:</p>
<WCard class="text-center mb-3">
    <div class="bg-secondary text-light">
        This is some content within the default <code>&lt;CardBody&gt;</code> block of the
        <code>&lt;Card&gt;</code> component. Notice the padding between the card's border and this
        gray <samp>&lt;div&gt;</samp>.
    </div>
</WCard>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">no-body</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-secondary text-light<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    This is some content without the default <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>samp</span><span class="token punctuation">></span></span><span class="token entity named-entity" title="&lt;">&amp;lt;</span>CardBody<span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>samp</span><span class="token punctuation">></span></span> section. Notice the
    lack of padding between the card's border and this gray <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>samp</span><span class="token punctuation">></span></span><span class="token entity named-entity" title="&lt;">&amp;lt;</span>div<span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>samp</span><span class="token punctuation">></span></span>.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Disable the automatic <code>&lt;CardBody&gt;</code> section (and associated padding) by setting the prop no-body on the <code>&lt;Card&gt;</code>.</p>
<WCard no-body class="text-center">
    <div class="bg-secondary text-light">
        This is some content without the default `CardBody` section. Notice the
        lack of padding between the card's border and this gray <samp>&lt;div&gt;</samp>.
    </div>
</WCard>
<p>Note that with <code>no-body</code> enabled, the content of the
<code>title</code> and <code>sub-title</code> props will not be rendered.</p>
<p>Use the <code>&lt;CardBody&gt;</code> sub-component to place your own card body anywhere in a
<code>&lt;Card&gt;</code> component that has <code>no-body</code> set.</p>
<h2 id="titles-text-and-links" tabindex="-1"><a class="header-anchor" href="#titles-text-and-links" aria-hidden="true">#</a> Titles, text, and links</h2>
<p>Card titles are adding via the <code>title</code> prop, and sub titles are added via the <code>sub-title</code>
prop. The title is rendered using the sub-component <code>&lt;CardTitle&gt;</code> while the Sub Title is rendered using the
sub-component <code>&lt;CardSubTitle&gt;</code>.</p>
<p>With sub-component <code>&lt;CardText&gt;</code>, paragraph text can be added to the card. The last <code>&lt;CardText&gt;</code>
in the card body will have its bottom margin automatically removed (via CSS). Text within
<code>&lt;CardText&gt;</code> can also be styled with the standard HTML tags.</p>
<p>Links can be added and placed next to each other by adding the .card-link class to a <code>&lt;a&gt;</code>
tag (or <code>&lt;Link&gt;</code> component).</p>
<WCard title="Card title" sub-title="Card subtitle" class="mb-3">
<WCardText>
    Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
    content.
</WCardText>
<WCardText>
A second paragraph of text in the card.
</WCardText>
<a href="#" class="card-link">Card link</a>
<WLink href="#" class="card-link">Another link</WLink>
</WCard>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card title<span class="token punctuation">"</span></span> <span class="token attr-name">sub-title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card subtitle<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>
    Some quick example text to build on the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">></span></span>card title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">></span></span> and make up the bulk of the card's
    content.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>A second paragraph of text in the card.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card-link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Card link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card-link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Another link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="images" tabindex="-1"><a class="header-anchor" href="#images" aria-hidden="true">#</a> Images</h2>
<p>The <code>&lt;Card&gt;</code> prop <code>img-src</code> places an image on the top of the card, and use the
<code>img-alt</code> prop to specify a string to be placed in the image's <code>alt</code> attribute. The image specified by the <code>img-src</code>
prop will be responsive and will adjust its width when the width of the card is changed.</p>
<p>Alternatively you can manually place images inside <code>&lt;Card&gt;</code> using the sub-component <code>&lt;CardImg&gt;</code>. See the kitchen sink
example below for usage.</p>
<div>
<h4>Top and Bottom</h4>
<WCardGroup deck>
<WCard img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
<WCardText>
    Some quick example text to build on the card and make up the bulk of the card's content.
</WCardText>
</WCard>
<WCard img-src="https://placekitten.com/1000/300" img-alt="Card image" img-bottom>
<WCardText>
    Some quick example text to build on the card and make up the bulk of the card's content.
</WCardText>
</WCard>
</WCardGroup>
</div>
<div class="mt-4">
<h4>Left and Right (or Start and End)</h4>
<WCard img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
<WCardText>
Some quick example text to build on the card and make up the bulk of the card's content.
</WCardText>
</WCard>
<WCard img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
<WCardText>
Some quick example text to build on the card and make up the bulk of the card's content.
</WCardText>
</WCard>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Top and Bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardGroup</span> <span class="token attr-name">deck</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://placekitten.com/1000/300<span class="token punctuation">"</span></span> <span class="token attr-name">img-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card image<span class="token punctuation">"</span></span> <span class="token attr-name">img-top</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>
                Some quick example text to build on the card and make up the bulk of the card's content.
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://placekitten.com/1000/300<span class="token punctuation">"</span></span> <span class="token attr-name">img-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card image<span class="token punctuation">"</span></span> <span class="token attr-name">img-bottom</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>
                Some quick example text to build on the card and make up the bulk of the card's content.
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Left and Right (or Start and End)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://placekitten.com/300/300<span class="token punctuation">"</span></span> <span class="token attr-name">img-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card image<span class="token punctuation">"</span></span> <span class="token attr-name">img-left</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>
            Some quick example text to build on the card and make up the bulk of the card's content.
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://placekitten.com/300/300<span class="token punctuation">"</span></span> <span class="token attr-name">img-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card image<span class="token punctuation">"</span></span> <span class="token attr-name">img-right</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>
            Some quick example text to build on the card and make up the bulk of the card's content.
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="overlay-image" tabindex="-1"><a class="header-anchor" href="#overlay-image" aria-hidden="true">#</a> Overlay image</h2>
<p>Place the image in the background of the card by setting the boolean prop <code>overlay</code>:</p>
<div class="bootstrap">
<WCard overlay img-src="https://picsum.photos/900/250/?image=3" img-alt="Card Image" text-variant="white" title="Image Overlay" sub-title="Subtitle">
<WCardText>
Some quick example text to build on the card and make up the bulk of the card's content.
</WCardText>
</WCard>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span>
    <span class="token attr-name">overlay</span>
    <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://picsum.photos/900/250/?image=3<span class="token punctuation">"</span></span>
    <span class="token attr-name">img-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card Image<span class="token punctuation">"</span></span>
    <span class="token attr-name">text-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Image Overlay<span class="token punctuation">"</span></span>
    <span class="token attr-name">sub-title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Subtitle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>
    Some quick example text to build on the card and make up the bulk of the card's content.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="list-groups" tabindex="-1"><a class="header-anchor" href="#list-groups" aria-hidden="true">#</a> List groups</h2>
<p>Create lists of content in a card with a flush list group.</p>
<WCard style="width: 18rem;" body-class="p-0">
    <WListGroup flush>
        <WListGroupItem>An item</WListGroupItem>
        <WListGroupItem>A second item</WListGroupItem>
        <WListGroupItem>A third item</WListGroupItem>
    </WListGroup>
</WCard>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 18rem<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span> <span class="token attr-name">body-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p-0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span> <span class="token attr-name">flush</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>An item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A second item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A third item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><WCard style="width: 18rem;" no-body>
    <WCardHeader>
        Card Header
    </WCardHeader>
    <WListGroup flush>
        <WListGroupItem>An item</WListGroupItem>
        <WListGroupItem>A second item</WListGroupItem>
        <WListGroupItem>A third item</WListGroupItem>
    </WListGroup>
</WCard>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 18rem<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span> <span class="token attr-name">no-body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardHeader</span><span class="token punctuation">></span></span>
    Card Header
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardHeader</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span> <span class="token attr-name">flush</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>An item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A second item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A third item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><WCard style="width: 18rem;" no-body>
    <WListGroup flush>
        <WListGroupItem>An item</WListGroupItem>
        <WListGroupItem>A second item</WListGroupItem>
        <WListGroupItem>A third item</WListGroupItem>
    </WListGroup>
    <WCardFooter>Card Footer</WCardFooter>
</WCard>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 18rem<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span> <span class="token attr-name">no-body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span> <span class="token attr-name">flush</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>An item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A second item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A third item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardFooter</span><span class="token punctuation">></span></span>Card Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardFooter</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="kitchen-sink" tabindex="-1"><a class="header-anchor" href="#kitchen-sink" aria-hidden="true">#</a> Kitchen sink</h2>
<p>Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image
styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.</p>
<WCard style="width: 18rem;" no-body>
    <img src="https://placekitten.com/380/200" class="card-img-top" alt="...">
    <WCardBody>
        <WCardTitle>Card title</WCardTitle>
        <WCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</WCardText>
    </WCardBody>
    <WListGroup flush>
        <WListGroupItem>An item</WListGroupItem>
        <WListGroupItem>A second item</WListGroupItem>
        <WListGroupItem>A third item</WListGroupItem>
    </WListGroup>
    <WCardBody>
        <WCardLink href="#">Card link</WCardLink>
        <WCardLink href="#">Another link</WCardLink>
    </WCardBody>
</WCard>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 18rem<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span> <span class="token attr-name">no-body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://placekitten.com/380/200<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card-img-top<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardBody</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardTitle</span><span class="token punctuation">></span></span>Card title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardTitle</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Some quick example text to build on the card title and make up the bulk of the card's content.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardBody</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroup</span> <span class="token attr-name">flush</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>An item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A second item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListGroupItem</span><span class="token punctuation">></span></span>A third item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroupItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ListGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardBody</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardLink</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Card link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardLink</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardLink</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Another link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardLink</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardBody</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="header-and-footer" tabindex="-1"><a class="header-anchor" href="#header-and-footer" aria-hidden="true">#</a> Header and footer</h2>
<p>Add an optional header and/or footer within a card via the <code>header/footer</code> props or named slots. You can control the
wrapper element tags used by setting the <code>header-tag</code> and <code>footer-tag</code>
props (both default is <code>div</code>)</p>
<WCard header="featured" header-tag="header" footer="Card Footer" footer-tag="footer" title="Title">
<WCardText>Header and footers using props.</WCardText>
<WButton href="#" variant="primary">Go somewhere</WButton>
</WCard>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span>
    <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>featured<span class="token punctuation">"</span></span>
    <span class="token attr-name">header-tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span>
    <span class="token attr-name">footer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card Footer<span class="token punctuation">"</span></span>
    <span class="token attr-name">footer-tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Header and footers using props.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Go somewhere<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><WCard title="Title" class="mt-3" header-tag="header" footer-tag="footer">
    <template #header>
        <h6 class="mb-0">Header Slot</h6>
    </template>
    <WCardText>Header and footers using slots.</WCardText>
    <WButton href="#" variant="primary">Go somewhere</WButton>
    <template #footer>
        <em>Footer Slot</em>
    </template>
</WCard>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-3<span class="token punctuation">"</span></span> <span class="token attr-name">header-tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span> <span class="token attr-name">footer-tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Header Slot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Header and footers using slots.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Go somewhere<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">></span></span>Footer Slot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><WCard header="Quote">
    <blockquote class="blockquote mb-0">
        <p>A well-known quote, contained in a blockquote element.</p>
        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
</WCard>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Quote<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blockquote mb-0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>A well-known quote, contained in a blockquote element.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blockquote-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Someone famous in <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cite</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Source Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Source Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cite</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><WCard class="text-center" header="Featured" footer="2 days ago">
    <WCardTitle class="card-title">Special title treatment</WCardTitle>
    <WCardText class="card-text">With supporting text below as a natural lead-in to additional content.</WCardText>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</WCard>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Featured<span class="token punctuation">"</span></span> <span class="token attr-name">footer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2 days ago<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardTitle</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Special title treatment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardTitle</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card-text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>With supporting text below as a natural lead-in to additional content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Go somewhere<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="sizing" tabindex="-1"><a class="header-anchor" href="#sizing" aria-hidden="true">#</a> Sizing</h2>
<p>Cards assume no specific <code>width</code> to start, so they’ll be 100% wide unless otherwise stated. You can change this as
needed with custom CSS, grid classes, grid Sass mixins, or utilities.</p>
<h2 id="using-grid-markup" tabindex="-1"><a class="header-anchor" href="#using-grid-markup" aria-hidden="true">#</a> Using grid markup</h2>
<p>Using the grid, wrap cards in columns and rows as needed.</p>
<WRow>
    <WCol sm="6">
        <WCard>
            <WCardTitle>Special title treatment</WCardTitle>
            <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </WCard>
    </WCol>
    <WCol sm="6">
        <WCard>
            <WCardTitle>Special title treatment</WCardTitle>
            <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </WCard>
    </WCol>
</WRow>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">sm</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardTitle</span><span class="token punctuation">></span></span>Special title treatment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardTitle</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>With supporting text below as a natural lead-in to additional content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Go somewhere<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">sm</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardTitle</span><span class="token punctuation">></span></span>Special title treatment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardTitle</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>With supporting text below as a natural lead-in to additional content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Go somewhere<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="using-utilities" tabindex="-1"><a class="header-anchor" href="#using-utilities" aria-hidden="true">#</a> Using utilities</h2>
<WCard class="w-75">
    <WCardTitle>Card title</WCardTitle>
    <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
    <a href="#" class="btn btn-primary">Button</a>
</WCard>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-75<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardTitle</span><span class="token punctuation">></span></span>Card title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardTitle</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>With supporting text below as a natural lead-in to additional content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><WCard class="w-50">
    <WCardTitle>Card title</WCardTitle>
    <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
    <a href="#" class="btn btn-primary">Button</a>
</WCard>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-50<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardTitle</span><span class="token punctuation">></span></span>Card title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardTitle</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>With supporting text below as a natural lead-in to additional content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="using-custom-css" tabindex="-1"><a class="header-anchor" href="#using-custom-css" aria-hidden="true">#</a> Using custom CSS</h2>
<p>Use custom CSS in your stylesheets or as inline styles to set a width.</p>
<WCard style="width: 18rem;">
    <WCardTitle>Special title treatment</WCardTitle>
    <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</WCard>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 18rem<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardTitle</span><span class="token punctuation">></span></span>Special title treatment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardTitle</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>With supporting text below as a natural lead-in to additional content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Go somewhere<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="text-alignment" tabindex="-1"><a class="header-anchor" href="#text-alignment" aria-hidden="true">#</a> Text alignment</h2>
<p>You can quickly change the text alignment of any card—in its entirety or specific parts—with bootstrap's
<a href="https://getbootstrap.com/docs/5.1/utilities/text/#text-alignment" target="_blank" rel="noopener noreferrer">text align classes<ExternalLinkIcon/></a></p>
<WCard style="width: 18rem;">
    <WCardTitle>Special title treatment</WCardTitle>
    <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</WCard>
<WCard style="width: 18rem;" class="text-center">
    <WCardTitle>Special title treatment</WCardTitle>
    <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</WCard>
<WCard style="width: 18rem;" class="text-end">
    <WCardTitle>Special title treatment</WCardTitle>
    <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</WCard>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 18rem<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardTitle</span><span class="token punctuation">></span></span>Special title treatment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardTitle</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>With supporting text below as a natural lead-in to additional content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Go somewhere<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 18rem<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardTitle</span><span class="token punctuation">></span></span>Special title treatment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardTitle</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>With supporting text below as a natural lead-in to additional content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Go somewhere<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 18rem<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-end<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardTitle</span><span class="token punctuation">></span></span>Special title treatment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardTitle</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>With supporting text below as a natural lead-in to additional content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Go somewhere<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="navigation" tabindex="-1"><a class="header-anchor" href="#navigation" aria-hidden="true">#</a> Navigation</h2>
<WCard class="text-center">
    <template #header>
        <WNav tabs class="card-header-tabs">
            <WNavItem active href="#">Active</WNavItem>
            <WNavItem href="#">Link</WNavItem>
            <WNavItem href="#" disabled>Disabled</WNavItem>
        </WNav>
    </template>
    <WCardTitle>Special title treatment</WCardTitle>
    <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</WCard>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nav</span> <span class="token attr-name">tabs</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card-header-tabs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavItem</span> <span class="token attr-name">active</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Active<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavItem</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavItem</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Nav</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardTitle</span><span class="token punctuation">></span></span>Special title treatment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardTitle</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>With supporting text below as a natural lead-in to additional content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Go somewhere<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><WCard class="text-center">
    <template #header>
        <WNav pills class="card-header-pills">
            <WNavItem active href="#">Active</WNavItem>
            <WNavItem href="#">Link</WNavItem>
            <WNavItem href="#" disabled>Disabled</WNavItem>
        </WNav>
    </template>
    <WCardTitle>Special title treatment</WCardTitle>
    <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</WCard>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nav</span> <span class="token attr-name">pills</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card-header-pills<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavItem</span> <span class="token attr-name">active</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Active<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavItem</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavItem</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Nav</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardTitle</span><span class="token punctuation">></span></span>Special title treatment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardTitle</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>With supporting text below as a natural lead-in to additional content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Go somewhere<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="card-styles" tabindex="-1"><a class="header-anchor" href="#card-styles" aria-hidden="true">#</a> Card styles</h2>
<p>Cards include various options for customizing their backgrounds, borders, and color.
<a href="https://getbootstrap.com/docs/5.1/utilities/colors/" target="_blank" rel="noopener noreferrer">text color<ExternalLinkIcon/></a> and
<a href="https://getbootstrap.com/docs/5.1/utilities/background/" target="_blank" rel="noopener noreferrer">background utilities<ExternalLinkIcon/></a>
are used under the hood to change the appearance of a card. You can directly use
<a href="https://getbootstrap.com/docs/5.1/utilities/colors/" target="_blank" rel="noopener noreferrer">text color<ExternalLinkIcon/></a> and
<a href="https://getbootstrap.com/docs/5.1/utilities/background/" target="_blank" rel="noopener noreferrer">background utilities<ExternalLinkIcon/></a> in this regard.</p>
<h2 id="solid" tabindex="-1"><a class="header-anchor" href="#solid" aria-hidden="true">#</a> Solid</h2>
<WCardGroup deck class="mt-3">
    <WCard bg-variant="primary" text-variant="white" header="Primary" class="text-center">
        <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
    <WCard bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">
        <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
    <WCard bg-variant="success" text-variant="white" header="Success" class="text-center">
        <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
</WCardGroup>
<WCardGroup deck class="mt-3">
    <WCard bg-variant="info" text-variant="white" header="Info" class="text-center">
        <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
    <WCard bg-variant="warning" text-variant="white" header="Warning" class="text-center">
        <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
    <WCard bg-variant="danger" text-variant="white" header="Danger" class="text-center">
        <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
</WCardGroup>
<WCardGroup deck class="mt-3">
    <WCard bg-variant="light" header="Light" class="text-center">
        <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
    <WCard bg-variant="dark" header="Dark" text-variant="white" class="text-center">
        <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
    <WCard header="Default" class="text-center">
        <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
</WCardGroup>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardGroup</span> <span class="token attr-name">deck</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">bg-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">text-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Primary<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">bg-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span> <span class="token attr-name">text-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Secondary<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">bg-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">text-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Success<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardGroup</span> <span class="token attr-name">deck</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">bg-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">text-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Info<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">bg-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">text-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Warning<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">bg-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">text-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Danger<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardGroup</span> <span class="token attr-name">deck</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">bg-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Light<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">bg-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Dark<span class="token punctuation">"</span></span> <span class="token attr-name">text-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Default<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardGroup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h2 id="bordered" tabindex="-1"><a class="header-anchor" href="#bordered" aria-hidden="true">#</a> Bordered</h2>
<div>
<div>
<WCardGroup deck>
<WCard border-variant="primary" header="Primary" header-bg-variant="primary" header-text-variant="white" align="center">
<WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
</WCard>
<WCard border-variant="secondary" header="Secondary" header-border-variant="secondary" align="center">
<WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
</WCard>
<WCard border-variant="success" header="Success" align="center">
<WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
</WCard>
</WCardGroup>
</div>
<div class="mt-3">
  <WCardGroup deck>
    <WCard border-variant="info" header="Info" align="center">
      <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
    <WCard border-variant="warning" header="Warning" header-bg-variant="transparent" align="center">
      <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
    <WCard border-variant="danger" header="Danger" header-border-variant="danger" header-text-variant="danger" align="center">
      <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
  </WCardGroup>
</div>
<div class="mt-3">
<WCardGroup deck class="mb-3">
<WCard border-variant="light" header="Light" class="text-center">
<WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
</WCard>
<WCard border-variant="dark" header="Dark" align="center">
<WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
</WCard>
</WCardGroup>
</div>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardGroup</span> <span class="token attr-name">deck</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span>
            <span class="token attr-name">border-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>
            <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Primary<span class="token punctuation">"</span></span>
            <span class="token attr-name">header-bg-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>
            <span class="token attr-name">header-text-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span>
            <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span>
            <span class="token attr-name">border-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span>
            <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Secondary<span class="token punctuation">"</span></span>
            <span class="token attr-name">header-border-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span>
            <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">border-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Success<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardGroup</span> <span class="token attr-name">deck</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">border-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Info<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span>
            <span class="token attr-name">border-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span>
            <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Warning<span class="token punctuation">"</span></span>
            <span class="token attr-name">header-bg-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transparent<span class="token punctuation">"</span></span>
            <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span>
            <span class="token attr-name">border-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span>
            <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Danger<span class="token punctuation">"</span></span>
            <span class="token attr-name">header-border-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span>
            <span class="token attr-name">header-text-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span>
            <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardGroup</span> <span class="token attr-name">deck</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">border-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Light<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">border-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Dark<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><h2 id="header-and-footer-variants" tabindex="-1"><a class="header-anchor" href="#header-and-footer-variants" aria-hidden="true">#</a> Header and footer variants</h2>
<p>You can also apply the solid and border variants individually to card headers and footers via the
<code>header-bg-variant</code>, <code>header-border-variant</code>, <code>header-text-variant</code>,
<code>footer-bg-variant</code>, <code>footer-border-variant</code>, and <code>footer-text-variant</code> props.</p>
<WCard header="Card Header"
header-text-variant="white"
header-tag="header"
header-bg-variant="dark"
footer="Card Footer"
footer-tag="footer"
footer-bg-variant="success" footer-border-variant="dark" title="Title" style="max-width: 20rem;">
<WCardText>Header and footers variants.</WCardText>
</WCard>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span>
    <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card Header<span class="token punctuation">"</span></span>
    <span class="token attr-name">header-text-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span>
    <span class="token attr-name">header-tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span>
    <span class="token attr-name">header-bg-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span>
    <span class="token attr-name">footer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card Footer<span class="token punctuation">"</span></span>
    <span class="token attr-name">footer-tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span>
    <span class="token attr-name">footer-bg-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span>
    <span class="token attr-name">footer-border-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">max-width</span><span class="token punctuation">:</span> 20rem<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>Header and footers variants.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><WCard border-variant="success" header-border-variant="success" header="Header" header-bg-variant="transparent" body-text-variant="success" title="Success card title" footer="Footer" footer-bg-variant="transparent" footer-border-variant="success" class="mb-3" style="max-width: 18rem;">
<WCardText>
Some quick example text to build on the card title and make up the bulk of the card's content.
</WCardText>
</WCard>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">border-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span>
      <span class="token attr-name">header-border-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span>
      <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Header<span class="token punctuation">"</span></span>
      <span class="token attr-name">header-bg-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transparent<span class="token punctuation">"</span></span>
      <span class="token attr-name">body-text-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Success card title<span class="token punctuation">"</span></span>
      <span class="token attr-name">footer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Footer<span class="token punctuation">"</span></span>
      <span class="token attr-name">footer-bg-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transparent<span class="token punctuation">"</span></span>
      <span class="token attr-name">footer-border-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-3<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">max-width</span><span class="token punctuation">:</span> 18rem<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>
    Some quick example text to build on the card title and make up the bulk of the card's content.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="card-groups" tabindex="-1"><a class="header-anchor" href="#card-groups" aria-hidden="true">#</a> Card groups</h2>
<p>In addition to styling the content within cards, wovoui includes a <code>&lt;CardGroup&gt;</code> component for laying out series of
cards. For the time being, these layout options are not yet responsive.</p>
<h3 id="default-card-group" tabindex="-1"><a class="header-anchor" href="#default-card-group" aria-hidden="true">#</a> Default card group</h3>
<p>Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use
display: flex; to achieve their uniform sizing.</p>
<p>When using card groups with footers, their content will automatically line up.</p>
<WCardGroup>
    <WCard title="Title" img-src="https://placekitten.com/g/300/200" img-alt="Image" img-top>
        <WCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
        </WCardText>
        <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
        </template>
    </WCard>
    <WCard title="Title" img-src="https://placekitten.com/g/300/200" img-alt="Image" img-top>
        <WCardText>
            This card has supporting text below as a natural lead-in to additional content.
        </WCardText>
        <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
        </template>
    </WCard>
    <WCard title="Title" img-src="https://placekitten.com/g/300/200" img-alt="Image" img-top>
        <WCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first to show that equal height action.
        </WCardText>
        <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
        </template>
    </WCard>
</WCardGroup>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardGroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://placekitten.com/g/300/200<span class="token punctuation">"</span></span> <span class="token attr-name">img-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Image<span class="token punctuation">"</span></span> <span class="token attr-name">img-top</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-muted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Last updated 3 mins ago<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://placekitten.com/g/300/200<span class="token punctuation">"</span></span> <span class="token attr-name">img-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Image<span class="token punctuation">"</span></span> <span class="token attr-name">img-top</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>
        This card has supporting text below as a natural lead-in to additional content.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-muted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Last updated 3 mins ago<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://placekitten.com/g/300/200<span class="token punctuation">"</span></span> <span class="token attr-name">img-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Image<span class="token punctuation">"</span></span> <span class="token attr-name">img-top</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-muted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Last updated 3 mins ago<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardGroup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h3 id="card-deck-groups" tabindex="-1"><a class="header-anchor" href="#card-deck-groups" aria-hidden="true">#</a> Card deck groups</h3>
<p>Need a set of equal width and height cards that aren't attached to one another? Use card decks by setting the
<code>deck</code> prop. And just like with regular card groups, card footers in decks will automatically line up.</p>
<WCardGroup deck>
    <WCard title="Title" img-src="https://picsum.photos/300/200/?image=41" img-alt="Image" img-top>
        <WCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
        </WCardText>
        <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
        </template>
    </WCard>
    <WCard title="Title" img-src="https://picsum.photos/300/200/?image=41" img-alt="Image" img-top>
        <WCardText>
            This card has supporting text below as a natural lead-in to additional content.
        </WCardText>
        <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
        </template>
    </WCard>
    <WCard title="Title" img-src="https://picsum.photos/300/200/?image=41" img-alt="Image" img-top>
        <WCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first to show that equal height action.
        </WCardText>
        <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
        </template>
    </WCard>
</WCardGroup>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardGroup</span> <span class="token attr-name">deck</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://picsum.photos/300/200/?image=41<span class="token punctuation">"</span></span> <span class="token attr-name">img-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Image<span class="token punctuation">"</span></span> <span class="token attr-name">img-top</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-muted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Last updated 3 mins ago<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://picsum.photos/300/200/?image=41<span class="token punctuation">"</span></span> <span class="token attr-name">img-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Image<span class="token punctuation">"</span></span> <span class="token attr-name">img-top</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>
        This card has supporting text below as a natural lead-in to additional content.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-muted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Last updated 3 mins ago<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://picsum.photos/300/200/?image=41<span class="token punctuation">"</span></span> <span class="token attr-name">img-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Image<span class="token punctuation">"</span></span> <span class="token attr-name">img-top</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-muted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Last updated 3 mins ago<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardGroup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="card-column-groups" tabindex="-1"><a class="header-anchor" href="#card-column-groups" aria-hidden="true">#</a> Card column groups</h3>
<p>Cards can be organized into Masonry-like columns with by wrapping them in a
<code>CardGroup</code> with the prop <code>columns</code> set. Cards are built with CSS column properties instead of flexbox for easier
alignment. Cards are ordered from top to bottom and left to right.</p>
<p>Heads up! Your mileage with card columns may vary. To prevent cards breaking across columns, we must set them to
display: inline-block as column-break-inside: avoid isn't a bulletproof solution yet.</p>
<WCardGroup columns>
    <WCard
        title="Card title that wraps to a new line"
        img-src="https://placekitten.com/g/400/450"
        img-alt="Image"
        img-top>
        <WCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
        </WCardText>
    </WCard>
    <WCard header="Quote">
        <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
        </blockquote>
    </WCard>
    <WCard title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
        <WCardText>
            This card has supporting text below as a natural lead-in to additional content.
        </WCardText>
        <WCardText class="small text-muted">Last updated 3 mins ago</WCardText>
    </WCard>
    <WCard bg-variant="primary" text-variant="white">
        <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>
                <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
            </footer>
        </blockquote>
    </WCard>
    <WCard>
        <WCardTitle>Title</WCardTitle>
        <WCardText>
            This card has supporting text below as a natural lead-in to additional content.
        </WCardText>
        <WCardText class="small text-muted">Last updated 3 mins ago</WCardText>
    </WCard>
    <WCard img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay></WCard>
    <WCard img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
        <WCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first.
        </WCardText>
        <template #footer>
            <small class="text-muted">Footer Text</small>
        </template>
    </WCard>
</WCardGroup>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardGroup</span> <span class="token attr-name">columns</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card title that wraps to a new line<span class="token punctuation">"</span></span>
    <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://placekitten.com/g/400/450<span class="token punctuation">"</span></span>
    <span class="token attr-name">img-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Image<span class="token punctuation">"</span></span>
    <span class="token attr-name">img-top</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Quote<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blockquote mb-0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blockquote-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Someone famous in <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cite</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Source Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Source Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cite</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://placekitten.com/500/350<span class="token punctuation">"</span></span> <span class="token attr-name">img-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Image<span class="token punctuation">"</span></span> <span class="token attr-name">img-top</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>
        This card has supporting text below as a natural lead-in to additional content.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small text-muted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Last updated 3 mins ago<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">bg-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">text-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card-blockquote<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">></span></span>Someone famous in <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cite</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Source Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Source Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cite</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardTitle</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardTitle</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>
        This card has supporting text below as a natural lead-in to additional content.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small text-muted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Last updated 3 mins ago<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://picsum.photos/400/400/?image=41<span class="token punctuation">"</span></span> <span class="token attr-name">img-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Image<span class="token punctuation">"</span></span> <span class="token attr-name">overlay</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://picsum.photos/400/200/?image=41<span class="token punctuation">"</span></span> <span class="token attr-name">img-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Image<span class="token punctuation">"</span></span> <span class="token attr-name">img-top</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CardText</span><span class="token punctuation">></span></span>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardText</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-muted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Footer Text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CardGroup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h2 id="component-reference" tabindex="-1"><a class="header-anchor" href="#component-reference" aria-hidden="true">#</a> Component reference</h2>
<WDataTable small hover bordered head-variant="dark" :fields="['property','type','default','description']" :items="componentReference"></WDataTable>
</template>

<script setup>
const componentReference= [
    {
        property: "align",
        type: "String",
        default: "",
        description: "Text alignment for the card's content: 'left', 'center' or 'right'",
    },
    {
        property: "bg-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the background",
    },
    {
        property: "body-bg-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the body background",
    },
    {
        property: "body-border-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the body border",
    },
    {
        property: "body-class",
        type: "Array or Object or String",
        default: "",
        description: "CSS class (or classes) to apply to the body",
    },
    {
        property: "body-tag",
        type: "String",
        default: "'div'",
        description: "Specify the HTML tag to render instead of the default tag for the body",
    },
    {
        property: "body-text-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the body text",
    },
    {
        property: "border-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the border",
    },
    {
        property: "footer",
        type: "String",
        default: "",
        description: "Text content to place in the footer",
    },
    {
        property: "footer-bg-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the footer background",
    },
    {
        property: "footer-border-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the footer border",
    },
    {
        property: "footer-class",
        type: "Array or Object or String",
        default: "",
        description: "CSS class (or classes) to apply to the footer",
    },
    {
        property: "footer-tag",
        type: "String",
        default: "'div'",
        description: "Specify the HTML tag to render instead of the default tag for the footer",
    },
    {
        property: "footer-text-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the footer text",
    },
    {
        property: "header",
        type: "String",
        default: "",
        description: "Text content to place in the header",
    },
    {
        property: "header-bg-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the header background",
    },
    {
        property: "header-border-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the header border",
    },
    {
        property: "header-class",
        type: "Array or Object or String",
        default: "",
        description: "CSS class (or classes) to apply to the header",
    },
    {
        property: "header-tag",
        type: "String",
        default: "'div'",
        description: "Specify the HTML tag to render instead of the default tag for the header",
    },
    {
        property: "header-text-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the header text",
    },
    {
        property: "img-alt",
        type: "String",
        default: "",
        description: "Value to set the image attribute 'alt'",
    },
    {
        property: "img-bottom",
        type: "Boolean",
        default: "false",
        description: "Set if the image should appear at the bottom of the card",
    },
    {
        property: "img-end",
        type: "Boolean",
        default: "false",
        description: "Set if the image should appear at the end (right) of the card",
    },
    {
        property: "img-height",
        type: "String or Number",
        default: "",
        description: "The value to set on the image's 'height' attribute",
    },
    {
        property: "img-left",
        type: "Boolean",
        default: "false.",
        description: "Set if the image should appear at the start (left) of the card. Synonym for the 'left' prop",
    },
    {
        property: "img-right",
        type: "Boolean",
        default: "",
        description: "Set if the image should appear at the end (right) of the card. Synonym for the 'right' prop",
    },
    {
        property: "img-src",
        type: "String",
        default: "",
        description: "URL for the optional image",
    },
    {
        property: "img-start",
        type: "Boolean",
        default: "",
        description: "Set if the image should appear at the start (left) of the card",
    },
    {
        property: "img-top",
        type: "Boolean",
        default: "",
        description: "Set if the image should appear at the top of the card",
    },

];
</script>

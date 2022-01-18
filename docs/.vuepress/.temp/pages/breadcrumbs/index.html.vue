<template><h1 id="breadcrumbs" tabindex="-1"><a class="header-anchor" href="#breadcrumbs" aria-hidden="true">#</a> Breadcrumbs</h1>
<p>Indicate the current page's location within a navigational hierarchy. Separators are automatically added in CSS
through <code>::before</code> and <code>content</code>.</p>
<WBreadcrumb :items="items1"/>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
  {
    text: <span class="token punctuation">'</span>Home<span class="token punctuation">'</span>,
    href: <span class="token punctuation">'</span>https://google.com<span class="token punctuation">'</span>
  },
  {
    text: <span class="token punctuation">'</span>Posts<span class="token punctuation">'</span>,
    to: { name: <span class="token punctuation">'</span>home<span class="token punctuation">'</span> }
  },
  {
    text: <span class="token punctuation">'</span>Another Story<span class="token punctuation">'</span>,
    active: true
  }
]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="breadcrumb-items" tabindex="-1"><a class="header-anchor" href="#breadcrumb-items" aria-hidden="true">#</a> Breadcrumb items</h2>
<p>Items are rendered using <code>:<code>items</code></code> prop. It can be an array of objects to provide link and active state.
Links can be href's for anchor tags, or to's for router-links. Active state of last element is automatically set if it
is undefined.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">'https://google.com'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Posts'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'home'</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Another Story'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="manually-placed-items" tabindex="-1"><a class="header-anchor" href="#manually-placed-items" aria-hidden="true">#</a> Manually placed items</h2>
<p>You may also manually place individual <code>&lt;BreadcrumbItem&gt;</code> child components in the default slot of the <code>&lt;Breadcrumb&gt;</code>
component, as an alternative to using the items prop, for greater control over the content of each item:</p>
<WBreadcrumb>
    <WBreadcrumbItem href="#home">
        <WIcon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></WIcon>
        Home
    </WBreadcrumbItem>
    <WBreadcrumbItem href="#foo">Foo</WBreadcrumbItem>
    <WBreadcrumbItem href="#bar">Bar</WBreadcrumbItem>
    <WBreadcrumbItem active>Baz</WBreadcrumbItem>
</WBreadcrumb>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BreadcrumbItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#home<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>house-fill<span class="token punctuation">"</span></span> <span class="token attr-name">scale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.25<span class="token punctuation">"</span></span> <span class="token attr-name">shift-v</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.25<span class="token punctuation">"</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Icon</span><span class="token punctuation">></span></span>
        Home
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BreadcrumbItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BreadcrumbItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#foo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BreadcrumbItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BreadcrumbItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#bar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Bar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BreadcrumbItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BreadcrumbItem</span> <span class="token attr-name">active</span><span class="token punctuation">></span></span>Baz<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BreadcrumbItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Remember to set the active prop on the last item.</p>
</template>

<script>
export default {
    data() {
        return {
            items1: [
                {
                    text: 'Admin',
                    href: '#'
                },
                {
                    text: 'Manage',
                    href: '#'
                },
                {
                    text: 'Library',
                    active: true
                }
            ]
        }
    }
}
</script>
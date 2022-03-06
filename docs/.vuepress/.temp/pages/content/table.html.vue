<template><h1 id="tables" tabindex="-1"><a class="header-anchor" href="#tables" aria-hidden="true">#</a> Tables</h1>
<p>Use same semantic table elements of HTML5 to make table. Just the difference is, in this case first character of name
syllable should be uppercase.</p>
<WTable>
    <WTHead>
    <WTr>
        <WTh scope="col">#</WTh>
        <WTh scope="col">First</WTh>
        <WTh scope="col">Last</WTh>
        <WTh scope="col">Handle</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr>
        <WTh scope="row">1</WTh>
        <WTd>Mark</WTd>
        <WTd>Otto</WTd>
        <WTd>@mdo</WTd>
    </WTr>
    <WTr>
        <WTh scope="row">2</WTh>
        <WTd>Jacob</WTd>
        <WTd>Thornton</WTd>
        <WTd>@fat</WTd>
    </WTr>
    <WTr>
        <WTh scope="row">3</WTh>
        <WTd colspan="2">Larry the Bird</WTd>
        <WTd>@twitter</WTd>
    </WTr>
    </WTBody>
</WTable>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>THead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>#<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>First<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Last<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Handle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>THead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TBody</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>Mark<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>Otto<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>@mdo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>Jacob<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>Thornton<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>@fat<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span> <span class="token attr-name">colspan</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Larry the Bird<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>@twitter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TBody</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="variants" tabindex="-1"><a class="header-anchor" href="#variants" aria-hidden="true">#</a> Variants</h2>
<p>Use prop <code>variant</code> to color tables, table rows or individual cells. Supported values:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ColorVariants</span> <span class="token operator">=</span> <span class="token string">'primary'</span> <span class="token operator">|</span> <span class="token string">'secondary'</span> <span class="token operator">|</span> <span class="token string">'success'</span> <span class="token operator">|</span> <span class="token string">'danger'</span> <span class="token operator">|</span> <span class="token string">'warning'</span> <span class="token operator">|</span> <span class="token string">'info'</span> <span class="token operator">|</span> <span class="token string">'light'</span> <span class="token operator">|</span> <span class="token string">'dark'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><WTable>
    <WTHead>
        <WTh>Variant</WTh>
        <WTh>Cell</WTh>
        <WTh>Cell</WTh>
    </WTHead>
    <WTBody>
    <WTr :variant="v" v-for="v in ['primary' , 'secondary' , 'success' , 'danger' , 'warning' , 'info' , 'light' , 'dark']">
        <WTd>{{v}}</WTd>
        <WTd>Cell</WTd>
        <WTd>Cell</WTd>
    </WTr>
    </WTBody>
</WTable>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>THead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Variant<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Cell<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Cell<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>THead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TBody</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span> <span class="token attr-name">:variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v<span class="token punctuation">"</span></span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v in [<span class="token punctuation">'</span>primary<span class="token punctuation">'</span> , <span class="token punctuation">'</span>secondary<span class="token punctuation">'</span> , <span class="token punctuation">'</span>success<span class="token punctuation">'</span> , <span class="token punctuation">'</span>danger<span class="token punctuation">'</span> , <span class="token punctuation">'</span>warning<span class="token punctuation">'</span> , <span class="token punctuation">'</span>info<span class="token punctuation">'</span> , <span class="token punctuation">'</span>light<span class="token punctuation">'</span> , <span class="token punctuation">'</span>dark<span class="token punctuation">'</span>]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{v}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>Cell<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>Cell<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TBody</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="striped-rows" tabindex="-1"><a class="header-anchor" href="#striped-rows" aria-hidden="true">#</a> Striped rows</h2>
<p>Use prop <code>striped</code> to true, to make striped tables.</p>
<WTable striped>
    <WTHead>
    <WTr>
        <WTh>One</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 3">
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">striped</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>THead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>THead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TBody</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TBody</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>At the same time <code>variant</code>s can be used too.</p>
<WTable striped variant="dark">
    <WTHead>
    <WTr>
        <WTh>One</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 3">
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">striped</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>THead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>THead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TBody</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TBody</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="hoverable-rows" tabindex="-1"><a class="header-anchor" href="#hoverable-rows" aria-hidden="true">#</a> Hoverable rows</h2>
<p>Use prop <code>hover</code> to make table rows hoverable.</p>
<WTable hover>
    <WTHead>
    <WTr>
        <WTh>One</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 3">
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">hover</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>THead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>THead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TBody</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TBody</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>These hoverable rows can also be combined with the striped variant:</p>
<WTable hover striped>
    <WTHead>
    <WTr>
        <WTh>One</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 3">
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">hover</span> <span class="token attr-name">striped</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>THead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>THead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TBody</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TBody</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="active-tables" tabindex="-1"><a class="header-anchor" href="#active-tables" aria-hidden="true">#</a> Active tables</h2>
<p>Highlight a table row or cell by adding <code>active</code> prop.</p>
<WTable>
    <WTHead>
    <WTr>
        <WTh>One</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 5" :active="i==3">
        <WTd>{{i}}</WTd>
        <WTd :active="i===5 || i===1">{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>THead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>THead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TBody</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 5<span class="token punctuation">"</span></span> <span class="token attr-name">:active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i==3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span> <span class="token attr-name">:active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i===5 || i===1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TBody</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="bordered-tables" tabindex="-1"><a class="header-anchor" href="#bordered-tables" aria-hidden="true">#</a> Bordered tables</h2>
<p>Use prop <code>bordered</code></p>
<WTable bordered>
    <WTHead>
    <WTr>
        <WTh>One</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 3">
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">bordered</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>THead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>THead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TBody</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TBody</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="border-variant" tabindex="-1"><a class="header-anchor" href="#border-variant" aria-hidden="true">#</a> Border Variant</h2>
<p>Use prop <code>border-variant</code> to apply border color variants.</p>
<WTable bordered border-variant="primary">
    <WTHead>
    <WTr>
        <WTh>One</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 3">
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">bordered</span> <span class="token attr-name">border-variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>THead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>THead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TBody</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Td</span><span class="token punctuation">></span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TBody</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="tables-without-borders" tabindex="-1"><a class="header-anchor" href="#tables-without-borders" aria-hidden="true">#</a> Tables without borders</h2>
<p>Use prop <code>borderless</code></p>
<WTable borderless>
    <WTHead>
    <WTr>
        <WTh>One</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 3">
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">borderless</span><span class="token punctuation">></span></span>
    ........
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="small-tables" tabindex="-1"><a class="header-anchor" href="#small-tables" aria-hidden="true">#</a> Small tables</h2>
<p>Use prop <code>small</code></p>
<WTable small>
    <WTHead>
    <WTr>
        <WTh>One</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 3">
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">small</span><span class="token punctuation">></span></span>
    ........
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="vertical-alignment" tabindex="-1"><a class="header-anchor" href="#vertical-alignment" aria-hidden="true">#</a> Vertical alignment</h2>
<p>Use prop <code>valign</code> with values <code>'middle' | 'bottom' | 'top'</code></p>
<h2 id="responsive-table" tabindex="-1"><a class="header-anchor" href="#responsive-table" aria-hidden="true">#</a> Responsive Table</h2>
<p>Use prop <code>responsive</code> to make Responsive Table</p>
<p>Supported values:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">sizes</span> <span class="token operator">=</span> <span class="token string">"sm"</span> <span class="token operator">|</span> <span class="token string">"md"</span> <span class="token operator">|</span> <span class="token string">"lg"</span> <span class="token operator">|</span> <span class="token string">"xl"</span> <span class="token operator">|</span> <span class="token string">"xxl"</span> <span class="token operator">|</span> <span class="token boolean">true</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><WTable v-for="s in ['sm' , 'md' , 'lg' , 'xl' , 'xxl', true]" :responsive="s">
    <WTHead>
    <WTr>
        <WTh>Responsive on {{s==true?'all breakpoints':s+' breakpoints'}}</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 3">
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>s in [<span class="token punctuation">'</span>sm<span class="token punctuation">'</span> , <span class="token punctuation">'</span>md<span class="token punctuation">'</span> , <span class="token punctuation">'</span>lg<span class="token punctuation">'</span> , <span class="token punctuation">'</span>xl<span class="token punctuation">'</span> , <span class="token punctuation">'</span>xxl<span class="token punctuation">'</span>, true]<span class="token punctuation">"</span></span> <span class="token attr-name">:responsive</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>s<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>THead</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tr</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Responsive on {{s==true?'all breakpoints':s+' breakpoints'}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Th</span><span class="token punctuation">></span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WTr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>THead</span><span class="token punctuation">></span></span>
    ........
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></template>

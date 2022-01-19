import{r as p,o as g,c as d,b as n,w as a,F as b,a as e,d as s,e as c}from"./app.28753c3e.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";const _={},h=e("h1",{id:"button-toolbar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#button-toolbar","aria-hidden":"true"},"#"),s(" Button Toolbar")],-1),v=e("p",null,"Group a series of button-groups and/or input-groups together on a single line, with optional keyboard navigation",-1),B=e("p",null,[e("strong",null,"Example 1:"),s(" with button groups & Keyboard navigation")],-1),q=s("\xAB"),f=s("\u2039"),x=s("Edit"),w=s("Undo"),y=s("Redo"),I=s("\u203A"),G=s("\xBB"),T=c(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonToolbar</span> <span class="token attr-name">key-nav</span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Toolbar with button groups<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonGroup</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mx-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span><span class="token entity named-entity" title="\xAB">&amp;laquo;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span><span class="token entity named-entity" title="\u2039">&amp;lsaquo;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ButtonGroup</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonGroup</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mx-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>Edit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>Undo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>Redo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ButtonGroup</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonGroup</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mx-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span><span class="token entity named-entity" title="\u203A">&amp;rsaquo;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span><span class="token entity named-entity" title="\xBB">&amp;raquo;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ButtonGroup</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ButtonToolbar</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><strong>Example 2:</strong> with mixture of small button group and small input group</p>`,2),W=s("Save"),D=s("Cancel"),E=c(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonToolbar</span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Toolbar with button groups and input groups<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonGroup</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>me-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>Save<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>Cancel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ButtonGroup</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputGroup</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prepend</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$<span class="token punctuation">&quot;</span></span> <span class="token attr-name">append</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.00<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-right<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputGroup</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ButtonToolbar</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>Example 3:</strong> with button groups and dropdown menu</p>`,2),z=s("New"),N=s("Edit"),S=s("Undo"),C=s("Item 1"),j=s("Item 2"),U=s("Item 3"),V=s("Save"),F=s("Cancel"),K=c(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonToolbar</span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Toolbar with button groups and dropdown menu<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonGroup</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mx-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>New<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>Edit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>Undo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ButtonGroup</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mx-1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">right</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownItem</span><span class="token punctuation">&gt;</span></span>Item 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownItem</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownItem</span><span class="token punctuation">&gt;</span></span>Item 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownItem</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownItem</span><span class="token punctuation">&gt;</span></span>Item 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownItem</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonGroup</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mx-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>Save<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>Cancel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ButtonGroup</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ButtonToolbar</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Feel free to mix input groups and dropdowns with button groups in your toolbars. Similar to the example above, you&#39;ll likely need some utility classes though to space things properly.</p><h2 id="sizing" tabindex="-1"><a class="header-anchor" href="#sizing" aria-hidden="true">#</a> Sizing</h2><p>Note, if you want smaller or larger buttons or controls, set the <code>size</code> prop directly on the <code>&lt;ButtonGroup&gt;</code>, <code>&lt;InputGroup&gt;</code>, and <code>&lt;Dropdown&gt;</code> components.</p><h2 id="justify" tabindex="-1"><a class="header-anchor" href="#justify" aria-hidden="true">#</a> Justify</h2><p>Make the toolbar span the maximum available width, by increasing spacing between the button groups, input groups and dropdowns, by setting the prop <code>justify</code>.</p><h2 id="keyboard-navigation" tabindex="-1"><a class="header-anchor" href="#keyboard-navigation" aria-hidden="true">#</a> Keyboard navigation</h2><p>Enable optional keyboard navigation by setting the prop <code>key-nav</code>.</p>`,9);function R($,J){const t=p("WButton"),o=p("WButtonGroup"),l=p("WButtonToolbar"),i=p("WInput"),k=p("WInputGroup"),u=p("WDropdownItem"),r=p("WDropdown");return g(),d(b,null,[h,v,B,n(l,{"key-nav":"","aria-label":"Toolbar with button groups"},{default:a(()=>[n(o,{class:"mx-1"},{default:a(()=>[n(t,null,{default:a(()=>[q]),_:1}),n(t,null,{default:a(()=>[f]),_:1})]),_:1}),n(o,{class:"mx-1"},{default:a(()=>[n(t,null,{default:a(()=>[x]),_:1}),n(t,null,{default:a(()=>[w]),_:1}),n(t,null,{default:a(()=>[y]),_:1})]),_:1}),n(o,{class:"mx-1"},{default:a(()=>[n(t,null,{default:a(()=>[I]),_:1}),n(t,null,{default:a(()=>[G]),_:1})]),_:1})]),_:1}),T,n(l,{"aria-label":"Toolbar with button groups and input groups"},{default:a(()=>[n(o,{size:"sm",class:"me-1"},{default:a(()=>[n(t,null,{default:a(()=>[W]),_:1}),n(t,null,{default:a(()=>[D]),_:1})]),_:1}),n(k,{size:"sm",prepend:"$",append:".00"},{default:a(()=>[n(i,{value:"100",class:"text-right"})]),_:1})]),_:1}),E,n(l,{"aria-label":"Toolbar with button groups and dropdown menu"},{default:a(()=>[n(o,{class:"mx-1"},{default:a(()=>[n(t,null,{default:a(()=>[z]),_:1}),n(t,null,{default:a(()=>[N]),_:1}),n(t,null,{default:a(()=>[S]),_:1})]),_:1}),n(r,{class:"mx-1",right:"",text:"menu"},{default:a(()=>[n(u,null,{default:a(()=>[C]),_:1}),n(u,null,{default:a(()=>[j]),_:1}),n(u,null,{default:a(()=>[U]),_:1})]),_:1}),n(o,{class:"mx-1"},{default:a(()=>[n(t,null,{default:a(()=>[V]),_:1}),n(t,null,{default:a(()=>[F]),_:1})]),_:1})]),_:1}),K],64)}var H=m(_,[["render",R]]);export{H as default};

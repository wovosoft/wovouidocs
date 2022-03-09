import{r as p,o as t,c as e,b as o,F as l,e as n}from"./app.71c6255d.js";const r=n('<h1 id="menu" tabindex="-1"><a class="header-anchor" href="#menu" aria-hidden="true">#</a> Menu</h1><p>It is made on top off <code>&lt;Accordion&gt;</code> plugin. So, all the props of <code>&lt;Accordion&gt;</code> component will be applicable to <code>&lt;Menu&gt;</code> component. Also be aware while changing styles for <code>.accordion</code> and its descendent classes, because <code>&lt;Menu&gt;</code> component has all the classes of <code>&lt;Accordion&gt;</code> component. For more details, You can inspect the example given below.This component is useful in making sidebar menu.</p>',2),c=n(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span>Menu<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@wovosoft/wovoui&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;One&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;#one&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Two&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;#one&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Three&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;#one&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Child Two&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;#one&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Child One&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;#one&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Child One&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;#one&quot;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Child Two&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;#one&quot;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Child Two&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;#one&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Child One&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;#one&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Child One&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;#one&quot;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Child Two&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;#one&quot;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Child Two&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;#one&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Four&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;#one&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Five&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;#one&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Child One&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;#one&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Child Two&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;#one&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br></div></div><h2 id="items-props" tabindex="-1"><a class="header-anchor" href="#items-props" aria-hidden="true">#</a> <code>items</code> props</h2><p><code>items</code> should be an array containing menu items of the type given below. <code>title</code> is used to set title for the link generated and <code>text</code> is used for <code>innerHTML</code> for that link. Now, if <code>text</code> is not present, then it will be used as <code>text</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">item</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    text<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> object
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>When <code>link</code> is string it generates an <code>&lt;a&gt;</code> element with provided <code>link</code> as <code>href</code> attribute value. And when <code>link</code> is object, it generates a <code>&lt;router-link&gt;</code> component and considers <code>link</code> as value for <code>to</code> prop.</p>`,5),m={setup(i){const s=[{text:"One",link:"#one"},{text:"Two",link:"#one"},{text:"Three",link:"#one",children:[{text:"Child Two",link:"#one"},{text:"Child One",link:"#one",children:[{text:"Child One",link:"#one"},{text:"Child Two",link:"#one"}]},{text:"Child Two",link:"#one"},{text:"Child One",link:"#one",children:[{text:"Child One",link:"#one"},{text:"Child Two",link:"#one"}]},{text:"Child Two",link:"#one"}]},{text:"Four",link:"#one"},{text:"Five",link:"#one",children:[{text:"Child One",link:"#one"},{text:"Child Two",link:"#one"}]}];return(u,k)=>{const a=p("WMenu");return t(),e(l,null,[r,o(a,{items:s}),c],64)}}};export{m as default};

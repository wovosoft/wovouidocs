<template><h1 id="form-tags" tabindex="-1"><a class="header-anchor" href="#form-tags" aria-hidden="true">#</a> Form Tags</h1>
<p>Lightweight custom tagged input form control, with options for customized interface rendering, duplicate tag detection
and optional tag validation.</p>
<p>Tags are arrays of short strings, used in various ways such as assigning categories. Use the default user interface, or
create your own custom interface via the use of the default scoped slot.</p>
<h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic usage</h2>
<p>Tags will have any leading and tailing whitespace removed, and duplicate tags are not permitted. Tags that contain
spaces are permitted by default.</p>
<p>Tags are added by clicking the Add button, pressing the Enter key or optionally when the change event fires on the new
tag input (i.e. when focus moves from the input). The Add button will only appear when the user has entered a new tag
value.</p>
<p><strong>Default render:</strong></p>
<WTags v-model="tag_values" remove-on-delete></WTags>
<p>{{tag_values}}</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tags</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tag_values<span class="token punctuation">"</span></span> <span class="token attr-name">remove-on-delete</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tags</span><span class="token punctuation">></span></span>

    {{tag_values}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Tags<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@wovosoft/wovoui"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>Tags<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">tag_values</span><span class="token operator">:</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'one'</span><span class="token punctuation">,</span> <span class="token string">'two'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>ou can disable adding a new tag when pressing Enter via the no-add-on-enter prop, and enable adding a tag on the input's
change event via the add-on-change prop.</p>
<h2 id="tag-creation-using-separators" tabindex="-1"><a class="header-anchor" href="#tag-creation-using-separators" aria-hidden="true">#</a> Tag creation using separators</h2>
<p>To auto create tags when a <code>separator</code> character is typed (i.e. Space, ,, etc.), set the <code>separator</code> prop to the character
that will trigger the tag to be added. If multiple separator characters are needed, then include them as a single
string (i.e. <code> ,;</code>), or an array of characters (i.e. <code>[' ', ',', ';']</code>), which will trigger a new tag to be added when
Space, ,, or ; are typed). Separators must be a single character.</p>
<p>The following example will auto create a tag when Space, ,, or ; are typed:</p>
</template>

<script>
import {reactive} from "vue"; 

export default {
    setup(props,context){
        return {
            tag_values:reactive(['one','two'])
        }
    }
}
</script>

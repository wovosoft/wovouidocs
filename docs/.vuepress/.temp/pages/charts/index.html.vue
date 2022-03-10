<template><h1 id="charts" tabindex="-1"><a class="header-anchor" href="#charts" aria-hidden="true">#</a> Charts</h1>
<p><code>Chart</code> component is implemented using <a href="https://www.chartjs.org/docs/latest/" target="_blank" rel="noopener noreferrer">Chart.js<ExternalLinkIcon/></a> javascript library.</p>
<h2 id="basic-example" tabindex="-1"><a class="header-anchor" href="#basic-example" aria-hidden="true">#</a> Basic Example</h2>
<select v-model="chartData.type">
<option v-for="op in ['bar','line','scatter','bubble','pie','doughnut','polarArea','radar']">
{{op}}
</option>
</select>
<WChart :data="chartData.data"
:type="chartData.type"
:options="chartData.options"></WChart>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Chart</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chartData.data<span class="token punctuation">"</span></span>
           <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chartData.type<span class="token punctuation">"</span></span>
           <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chartData.options<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span>Chart<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@wovosoft/wovoui"</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> chartData <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"bar"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Red'</span><span class="token punctuation">,</span> <span class="token string">'Blue'</span><span class="token punctuation">,</span> <span class="token string">'Yellow'</span><span class="token punctuation">,</span> <span class="token string">'Green'</span><span class="token punctuation">,</span> <span class="token string">'Purple'</span><span class="token punctuation">,</span> <span class="token string">'Orange'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'# of Votes'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">'rgba(255, 99, 132, 0.2)'</span><span class="token punctuation">,</span>
                    <span class="token string">'rgba(54, 162, 235, 0.2)'</span><span class="token punctuation">,</span>
                    <span class="token string">'rgba(255, 206, 86, 0.2)'</span><span class="token punctuation">,</span>
                    <span class="token string">'rgba(75, 192, 192, 0.2)'</span><span class="token punctuation">,</span>
                    <span class="token string">'rgba(153, 102, 255, 0.2)'</span><span class="token punctuation">,</span>
                    <span class="token string">'rgba(255, 159, 64, 0.2)'</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">'rgba(255, 99, 132, 1)'</span><span class="token punctuation">,</span>
                    <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
                    <span class="token string">'rgba(255, 206, 86, 1)'</span><span class="token punctuation">,</span>
                    <span class="token string">'rgba(75, 192, 192, 1)'</span><span class="token punctuation">,</span>
                    <span class="token string">'rgba(153, 102, 255, 1)'</span><span class="token punctuation">,</span>
                    <span class="token string">'rgba(255, 159, 64, 1)'</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">scales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">beginAtZero</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h2 id="chart-js-api" tabindex="-1"><a class="header-anchor" href="#chart-js-api" aria-hidden="true">#</a> Chart.js API</h2>
<p><code>Chart.js</code> API methods are exposed to apply reactivity to the chart easily. That means you can
use <code>Chart.js</code> <a href="https://www.chartjs.org/docs/latest/developers/api.html" target="_blank" rel="noopener noreferrer">API METHODS<ExternalLinkIcon/></a> using component refs like given
below example:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>$refs<span class="token punctuation">.</span>component_ref<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$refs<span class="token punctuation">.</span>component_ref<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Not all methods, properties of <code>Chart.js</code> are exposed. In case you want to have more control, You can use the <code>Chart.js</code>
instance directly. It's exposed.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>$refs<span class="token punctuation">.</span>component_ref<span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$refs<span class="token punctuation">.</span>component_ref<span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>

<script setup lang="ts">
import {reactive} from "vue"; 

const chartData = reactive({
    type: "bar",
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
</script>
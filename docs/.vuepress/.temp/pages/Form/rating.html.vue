<template><h1 id="form-rating" tabindex="-1"><a class="header-anchor" href="#form-rating" aria-hidden="true">#</a> Form Rating</h1>
<p><code>&lt;Rating&gt;</code> is a custom rating component, built with Bootstrap's icon classes. Internally it uses <code>&lt;Icon&gt;</code> component.</p>
<WRating v-model="rating" class="border p-1"/>
<br>
<WInput type="number" v-model="rating"/>
<h2 id="variant-and-color" tabindex="-1"><a class="header-anchor" href="#variant-and-color" aria-hidden="true">#</a> Variant and color</h2>
<p>Easily apply one of the Bootstrap theme color variants to the rating icon via the <code>variant</code> prop.
The default is to use the default form control text color.</p>
<div>
<WRating v-model="rating2" variant="warning" class="mb-1 border p-2"></WRating>
<WRating v-model="rating2" variant="success" class="mb-1 border p-2"></WRating>
<WRating v-model="rating2" variant="danger" class="mb-1 border p-2"></WRating>
<WRating v-model="rating2" variant="primary" class="mb-1 border p-2"></WRating>
<WRating v-model="rating2" variant="info" class="mb-1 border p-2"></WRating>
<p class="mt-2">Value: {{ rating2 }}</p>
</div>
</template>

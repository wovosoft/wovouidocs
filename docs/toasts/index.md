# Toasts

Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and
desktop operating systems. They’re built with flexbox, so they’re easy to align and position.

<WToast show>
<template #header>
<strong class="me-auto">Bootstrap</strong>
<small>11 mins ago</small>
</template>
Hello, world! This is a toast message.
</WToast>

```html

<Toast show>
    <template #header>
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
    </template>
    Hello, world! This is a toast message.
</Toast>
```

## Live example

<WButton variant="primary" @click="one=!one">Toggle Toast</WButton>

<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <WToast :show="one">
        <template #header>
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
        </template>
        Hello, world! This is a toast message.
    </WToast>
</div>

```html

<Button variant="primary" @click="one=!one">Toggle Toast</Button>

<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <Toast :show="one">
        <template #header>
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
        </template>
        Hello, world! This is a toast message.
    </Toast>
</div>
```

<script setup>
import {ref} from "vue"; 

const one=ref(false)
</script>
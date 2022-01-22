# Bootstrap Icons

Icons are imported from [Bootstrap 5 icons](https://icons.getbootstrap.com). There are almost 1522 icons. In future
there will be a separate package of these icons.

## Installation

### Using NPM

```shell
npm install @wovosoft/wovoui-icons 
```

### Using yarn

```shell
yarn add @wovosoft/wovoui-icons
```


## How to Use

```vue
<template>
    <Activity :size="10"/>
    <Alarm :size="10"/>
</template>
<script>
import {Activity,Alarm} from "@wovosoft/wovoui-icons";

export default {
    components:{Activity,Alarm}
}
</script>
```

<WCard>
<IconActivity :size="10" class="me-5"/>
<IconAlarm :size="10"/>
</WCard>

## List of Suppoerted Icons

<WInput type="search" v-model="filter" placeholder="Search Icons..."></WInput>
<div class="container">
<div class="row">
<div class="col-md-3 p-1 text-center" v-for="icon in theIcons">
<div class="border p-1">
<component :is="'Icon'+icon" :size="2"></component>
<div class="mt-2">{{icon}}</div>
</div>
</div>
</div>
</div>



<script setup>
import {computed, ref} from "vue"; 
import * as icons_list from "@wovosoft/wovoui-icons";

const icons = Object.entries(icons_list).map(i=>i[0]);
const filter=ref("");
const theIcons = computed(()=>icons.filter(icon=>icon.toLowerCase().includes(filter.value.toLowerCase())));
</script>
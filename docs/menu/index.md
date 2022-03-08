# Menu

It is made on top off `<Accordion>` plugin. So, all the props of `<Accordion>` component will be applicable to `<Menu>`
component.

<WMenu :items="items"></WMenu>

```html

<template>
    <Menu :items="items"></Menu>
</template>

<script setup lang="ts">
    import {Menu} from "@wovosoft/wovoui";

    const items = [
        {
            text: "One",
            link: "#one"
        },
        {
            text: "Two",
            link: "#one"
        },
        {
            text: "Three",
            link: "#one",
            children: [
                {
                    text: "Child Two",
                    link: "#one"
                },
                {
                    text: "Child One",
                    link: "#one",
                    children: [
                        {
                            text: "Child One",
                            link: "#one"
                        },
                        {
                            text: "Child Two",
                            link: "#one"
                        },
                    ]
                },
                {
                    text: "Child Two",
                    link: "#one"
                },
                {
                    text: "Child One",
                    link: "#one",
                    children: [
                        {
                            text: "Child One",
                            link: "#one"
                        },
                        {
                            text: "Child Two",
                            link: "#one"
                        },
                    ]
                },
                {
                    text: "Child Two",
                    link: "#one"
                },
            ]
        },
        {
            text: "Four",
            link: "#one"
        },
        {
            text: "Five",
            link: "#one",
            children: [
                {
                    text: "Child One",
                    link: "#one"
                },
                {
                    text: "Child Two",
                    link: "#one"
                },
            ]
        },

    ]
</script>

```

<script setup>
const items = [
    {
        text: "One",
        link: "#one"
    },
    {
        text: "Two",
        link: "#one"
    },
    {
        text: "Three",
        link: "#one",
        children:[
            {
                text: "Child Two",
                link: "#one"
            },
            {
                text: "Child One",
                link: "#one",
                children:[
                    {
                        text: "Child One",
                        link: "#one"
                    },
                    {
                        text: "Child Two",
                        link: "#one"
                    },
                ]
            },
            {
                text: "Child Two",
                link: "#one"
            },
            {
                text: "Child One",
                link: "#one",
                children:[
                    {
                        text: "Child One",
                        link: "#one"
                    },
                    {
                        text: "Child Two",
                        link: "#one"
                    },
                ]
            },
            {
                text: "Child Two",
                link: "#one"
            },
        ]
    },
    {
        text: "Four",
        link: "#one"
    },
    {
        text: "Five",
        link: "#one",
        children:[
            {
                text: "Child One",
                link: "#one"
            },
            {
                text: "Child Two",
                link: "#one"
            },
        ]
    },

]
</script>

This component is useful in making sidebar menu. `items` should be an array containing menu items of type

```ts
type item = {
    title?: string,
    text?: string,
    link?: string | object
}
```
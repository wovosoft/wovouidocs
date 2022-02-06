# Accordion

The accordion uses `Collapse` component internally to make it collapsible. To render an accordion that’s expanded, add
the `.open` class on the `.accordion`.

## Default Accordion

Click the accordions below to expand/collapse the accordion content.

<WAccordion>
  <WAccordionItem v-for="i in 5" :header="'Accordion Item #'+i">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
the appropriate classes that we use to style each element. These classes control the overall appearance,
as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or 
overriding our default variables. It's also worth noting that just about any HTML can go within the
<code>.accordion-body</code>, though the transition does limit overflow.
  </WAccordionItem>
</WAccordion>

```vue

<Accordion>
<AccordionItem v-for="i in 5" :header="'Accordion Item #'+i">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
    the appropriate classes that we use to style each element. These classes control the overall appearance,
    as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
    overriding our default variables. It's also worth noting that just about any HTML can go within the
    `.accordion-body`, though the transition does limit overflow.
</AccordionItem>
</Accordion>
```

## Flush

Add prop `flush` to remove the default `background-color`, some `borders`, and some rounded `corners` to render
accordions `edge-to-edge` with their parent container.

<WAccordion flush>
<WAccordionItem v-for="i in 5" :header="'Accordion Item # '+i">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
    the appropriate classes that we use to style each element. These classes control the overall appearance,
    as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
    overriding our default variables. It's also worth noting that just about any HTML can go within the
    `.accordion-body`, though the transition does limit overflow.
</WAccordionItem>
</WAccordion>

```vue

<Accordion flush>
<AccordionItem v-for="i in 5" :header="'Accordion Item # '+i">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
    the appropriate classes that we use to style each element. These classes control the overall appearance,
    as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
    overriding our default variables. It's also worth noting that just about any HTML can go within the
    `.accordion-body`, though the transition does limit overflow.
</AccordionItem>
</Accordion>
```

## Always open

Add prop `always-open` to the accordion itself to stay open its child items.


<WAccordion always-open>
<WAccordionItem v-for="i in 5" :header="'Accordion Item # '+i">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
    the appropriate classes that we use to style each element. These classes control the overall appearance,
    as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
    overriding our default variables. It's also worth noting that just about any HTML can go within the
    `.accordion-body`, though the transition does limit overflow.
</WAccordionItem>
</WAccordion>

```vue

<Accordion always-open>
<AccordionItem v-for="i in 5" :header="'Accordion Item # '+i">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
    the appropriate classes that we use to style each element. These classes control the overall appearance,
    as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
    overriding our default variables. It's also worth noting that just about any HTML can go within the
    `.accordion-body`, though the transition does limit overflow.
</AccordionItem>
</Accordion>
```

## `openAll`, `collapseAll`, `toggleAll` exposed methods

`<Accordion>` component has few exposed methods to toggle/collapse/open it's children. 

- openAll
- collapseAll
- toggleAll

<WButtonGroup class="mb-3">
    <WButton @click="$refs.acc.openAll()">Open All</WButton>
    <WButton @click="$refs.acc.collapseAll()">Collapse All</WButton>
    <WButton @click="$refs.acc.toggleAll()">Toggle All</WButton>
</WButtonGroup>


<WAccordion ref="acc" always-open>
<WAccordionItem v-for="i in 5" :header="'Accordion Item # '+i">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
    the appropriate classes that we use to style each element. These classes control the overall appearance,
    as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
    overriding our default variables. It's also worth noting that just about any HTML can go within the
    `.accordion-body`, though the transition does limit overflow.
</WAccordionItem>
</WAccordion>

```vue

<template>
    <ButtonGroup class="mb-3">
        <Button @click="$refs.acc.openAll()">Open All</Button>
        <Button @click="$refs.acc.collapseAll()">Collapse All</Button>
        <Button @click="$refs.acc.toggleAll()">Toggle All</Button>
    </ButtonGroup>

    <Accordion ref="acc" always-open>
        <AccordionItem v-for="i in 5" :header="'Accordion Item # '+i">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
            `.accordion-body`, though the transition does limit overflow.
        </AccordionItem>
    </Accordion>
</template>
<script setup>
import {ButtonGroup, Button, Accordion, AccordionItem} from "@wovosoft/wovoui";
</script>
```

## `modelValue`

Coming Later...
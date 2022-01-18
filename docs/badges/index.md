# Badges

Badges scale to match the size of the immediate parent element by using relative font sizing and em units. As of v5,
Badges no longer have focus or hover styles for links.

<h2>
    Headings
</h2>
<h1>Example heading
    <WBadge>New</WBadge>
</h1>
<h2>Example heading
    <WBadge>New</WBadge>
</h2>
<h3>Example heading
    <WBadge>New</WBadge>
</h3>
<h4>Example heading
    <WBadge>New</WBadge>
</h4>
<h5>Example heading
    <WBadge>New</WBadge>
</h5>
<h6>Example heading
    <WBadge>New</WBadge>
</h6>

```vue

<h1>
Example heading
<Badge>New</Badge>
</h1>
<h2>Example heading
<Badge>New</Badge>
</h2>
<h3>Example heading
<Badge>New</Badge>
</h3>
<h4>Example heading
<Badge>New</Badge>
</h4>
<h5>Example heading
<Badge>New</Badge>
</h5>
<h6>Example heading
<Badge>New</Badge>
</h6>
```

## In Buttons

Badges can be used as part of links or buttons to provide a counter.

<WButton variant="primary">
    Notifications
    <WBadge>4</WBadge>
</WButton>

```vue

<Button variant="primary">
Notifications
<Badge>4</Badge>
</Button>
```

Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive
technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be
presented with the content of the badge. Depending on the specific situation, these badges may seem like random
additional words or numbers at the end of a sentence, link, or button.

Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of
notifications), consider including additional context with a visually hidden piece of additional text.

## Contextual variations

Add any of the following variants via the variant prop to change the appearance of a `Badge`: `primary`, `secondary`
, `success`, `danger`, `warning`, `info`, `light` , `dark`. If no variant is specified default will be used.

<div class="child-m-2">
    <WBadge variant="primary">Primary</WBadge>
    <WBadge variant="secondary">Secondary</WBadge>
    <WBadge variant="success">Success</WBadge>
    <WBadge variant="danger">Danger</WBadge>
    <WBadge variant="warning">Warning</WBadge>
    <WBadge variant="info">Info</WBadge>
    <WBadge variant="light">Light</WBadge>
    <WBadge variant="dark">Dark</WBadge>
</div>

## Pill badges

Use the `pill` prop to make badges more rounded (with a larger border-radius and additional horizontal padding).

<div class="child-m-2">
    <WBadge pill variant="primary">Primary</WBadge>
    <WBadge pill variant="secondary">Secondary</WBadge>
    <WBadge pill variant="success">Success</WBadge>
    <WBadge pill variant="danger">Danger</WBadge>
    <WBadge pill variant="warning">Warning</WBadge>
    <WBadge pill variant="info">Info</WBadge>
    <WBadge pill variant="light">Light</WBadge>
    <WBadge pill variant="dark">Dark</WBadge>
</div>
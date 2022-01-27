# Carousel

A slideshow component for cycling through elements—images or slides of text—like a carousel

<WCarousel :indicators-enabled="true">
    <WCarouselItem :active="true" style="background: red !important;" class="bg-danger text-white" id="one">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 1
        </div>
    </WCarouselItem>
    <WCarouselItem style="background: blue !important;" class="bg-info text-white" id="two">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 2
        </div>
    </WCarouselItem>
    <WCarouselItem style="background: #0c4128 !important;" class="bg-warning text-white" id="three">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 3
        </div>
    </WCarouselItem>
</WCarousel>

```vue
<Carousel :indicators-enabled="true">
    <CarouselItem :active="true" style="background: red !important;" class="bg-danger text-white" id="one">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 1
        </div>
    </CarouselItem>
    <CarouselItem style="background: blue !important;" class="bg-info text-white" id="two">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 2
        </div>
    </CarouselItem>
    <CarouselItem style="background: #0c4128 !important;" class="bg-warning text-white" id="three">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 3
        </div>
    </CarouselItem>
</Carousel>
```
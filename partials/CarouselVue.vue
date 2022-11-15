<template>
  <section class="p-4 xl:p-10">
    <!-- Slider -->
    <div class="glide relative">
      <div data-glide-el="track" class="glide__track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="relative">
              <img class="slide-image block" src="carousel-images/c1.jpg" alt />
              <div
                class="absolute left-0 top-0 w-full h-full hidden xl:flex z-0"
                data-glide-el="controls"
              >
                <button
                  class="inline-block w-1/2 h-full cursor-none prev"
                  data-glide-dir="<"
                >
                  <span class="sr-only">Previous</span>
                </button>
                <button
                  class="inline-block w-1/2 h-full cursor-none next"
                  data-glide-dir=">"
                >
                  <span class="sr-only">Next</span>
                </button>
              </div>
            </div>
            <CarouselAccordion />
          </li>
          <li class="glide__slide">
            <div class="relative">
              <img
                class="slide-image block"
                src="carousel-images/c2.jpeg"
                alt
              />
              <div
                class="absolute left-0 top-0 w-full h-full hidden xl:flex z-0"
                data-glide-el="controls"
              >
                <button
                  class="inline-block w-1/2 h-full cursor-none prev"
                  data-glide-dir="<"
                >
                  <span class="sr-only">Previous</span>
                </button>
                <button
                  class="inline-block w-1/2 h-full cursor-none next"
                  data-glide-dir=">"
                >
                  <span class="sr-only">Next</span>
                </button>
              </div>
            </div>
            <CarouselAccordion />
          </li>
          <li class="glide__slide">
            <div class="relative">
              <img
                class="slide-image block"
                src="carousel-images/c3.jpeg"
                alt
              />
              <div
                class="absolute left-0 top-0 w-full h-full hidden xl:flex z-0"
                data-glide-el="controls"
              >
                <button
                  class="inline-block w-1/2 h-full cursor-none prev"
                  data-glide-dir="<"
                >
                  <span class="sr-only">Previous</span>
                </button>
                <button
                  class="inline-block w-1/2 h-full cursor-none next"
                  data-glide-dir=">"
                >
                  <span class="sr-only">Next</span>
                </button>
              </div>
            </div>
            <CarouselAccordion />
          </li>
          <li class="glide__slide">
            <div class="relative">
              <img
                class="slide-image block"
                src="carousel-images/c4.jpeg"
                alt
              />
              <div
                class="absolute left-0 top-0 w-full h-full hidden xl:flex z-0"
                data-glide-el="controls"
              >
                <button
                  class="inline-block w-1/2 h-full cursor-none prev"
                  data-glide-dir="<"
                >
                  <span class="sr-only">Previous</span>
                </button>
                <button
                  class="inline-block w-1/2 h-full cursor-none next"
                  data-glide-dir=">"
                >
                  <span class="sr-only">Next</span>
                </button>
              </div>
            </div>
            <CarouselAccordion />
          </li>
          <li class="glide__slide">
            <div class="relative">
              <img
                class="slide-image block"
                src="carousel-images/c5.jpeg"
                alt
              />
              <div
                class="absolute left-0 top-0 w-full h-full hidden xl:flex z-0"
                data-glide-el="controls"
              >
                <button
                  class="inline-block w-1/2 h-full cursor-none prev"
                  data-glide-dir="<"
                >
                  <span class="sr-only">Previous</span>
                </button>
                <button
                  class="inline-block w-1/2 h-full cursor-none next"
                  data-glide-dir=">"
                >
                  <span class="sr-only">Next</span>
                </button>
              </div>
            </div>
            <CarouselAccordion />
          </li>
        </ul>
      </div>
    </div>
    <CarouselCursor />
  </section>
</template>

<script>
import Glide from '@glidejs/glide'
import CarouselAccordion from '../components/CarouselAccordion.vue'
import CarouselCursor from '../components/CarouselCursor.vue'
export default {
  components: { CarouselCursor, CarouselAccordion },
  mounted() {
    new Glide('.glide').mount()
  },
  methods: {},
}
</script>

<style>
.glide {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}
.glide * {
  box-sizing: inherit;
}
.glide__track {
  overflow: hidden;
}
.glide__slides {
  position: relative;
  width: 100%;
  list-style: none;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  touch-action: pan-Y;
  overflow: hidden;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  will-change: transform;
}
.glide__slides--dragging {
  user-select: none;
}
.glide__slide {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  white-space: normal;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}
.glide__slide a {
  user-select: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.glide__arrows {
  -webkit-touch-callout: none;
  user-select: none;
}
.glide__bullets {
  -webkit-touch-callout: none;
  user-select: none;
}
.glide--rtl {
  direction: rtl;
}
</style>

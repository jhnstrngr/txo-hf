<template>
  <section class="p-4 xl:p-10">
    <!-- Slider -->
    <div class="glide relative">
      <div data-glide-el="track" class="glide__track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <img class="slide-image block" src="carousel-images/c1.jpg" alt />
          </li>
          <li class="glide__slide">
            <img class="slide-image block" src="carousel-images/c2.jpeg" alt />
          </li>
          <li class="glide__slide">
            <img class="slide-image block" src="carousel-images/c3.jpeg" alt />
          </li>
          <li class="glide__slide">
            <img class="slide-image block" src="carousel-images/c4.jpeg" alt />
          </li>
          <li class="glide__slide">
            <img class="slide-image block" src="carousel-images/c5.jpeg" alt />
          </li>
        </ul>
      </div>
      <div
        class="absolute left-0 top-0 w-full h-full hidden xl:flex"
        data-glide-el="controls"
      >
        <button class="inline-block w-1/2 h-full" data-glide-dir="<">
          <span class="sr-only">Previous</span>
        </button>
        <button class="inline-block w-1/2 h-full" data-glide-dir=">">
          <span class="sr-only">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Glide from '@glidejs/glide'
export default {
  mounted() {
    new Glide('.glide').mount()
  },
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

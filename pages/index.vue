<template>
  <div class="">
    <div class="above-menu-container block"></div>
    <MenuHeader />
    <div class="h-screen relative">
      <section class="h-screen flex flex-col justify-around p-4 xl:p-10">
        <h1 class="hero-title">
          We’re hands-on and commited to evolving your business to strive for
          better.
        </h1>
        <div class="flex flex-col">
          <h2 class="uppercase">Our Offering</h2>
          <p>
            We provide physical, pragmatic and personal business guidance.
            Success is never static. Neither are we. We’ll be your business
            partners for positive change.
          </p>
        </div>
      </section>
    </div>
    <section class="h-screen">
      <figure>
        <img class="w-auto mx-auto" src="carousel-images/c1.jpg" />
      </figure>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MenuHeader from '~/components/MenuHeader.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { MenuHeader },
})
</script>

<style>
.hero-title {
  font-size: 72px;
  line-height: 69px;
  letter-spacing: -0.05em;
}

.above-menu-container {
  height: calc(100vh - 156px);
}

@media (min-width: 764px) {
  .above-menu-container {
    height: calc(100vh - 340px);
  }
}

.hamburger-icon {
  width: 30px;
  height: 1px;
  background-color: #736357;
  display: block;
}

.hamburger-icon:not(:last-child) {
  margin-bottom: 10px;
}
</style>

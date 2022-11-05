<template>
  <main class="" role="main">
    <div class="above-menu-container block"></div>
    <MenuHeader />
    <section
      class="cropped-container flex flex-col justify-between p-4 xl:p-10"
      role="region"
    >
      <h1 class="text-mobileH1 xl:text-h1 pt-20">
        We’re hands-on and commited to evolving your business to strive for
        better.
      </h1>
      <div class="flex flex-col justify-end">
        <h2 class="uppercase text-mobileKicker xl:text-kicker xl:w-3/5">
          Our Offering
        </h2>
        <p class="text-mobileLargeBody xl:text-largeBody xl:w-3/5">
          We provide physical, pragmatic and personal business guidance. Success
          is never static. Neither are we. We’ll be your business partners for
          positive change.
        </p>
      </div>
    </section>
    <CarouselVue />
    <section class="p-4 xl:p-10" role="region">
      <h2 class="uppercase text-mobileKicker xl:text-kicker">Stay Updated</h2>
      <span class="text-mobileH1 xl:text-h1">Newsletter</span>
      <form role="form">
        <label class="sr-only" for="full-name">Full Name</label>
        <input
          id="full-name"
          type="text"
          name="Full Name"
          placeholder="Full Name"
          class="text-mobileH1 xl:text-h1 bg-transparent text-foreground-900 placeholder-foreground-300 max-w-full"
        />
        <label class="sr-only" for="company-name">Company Name</label>
        <input
          id="company-name"
          type="text"
          name="Company Name"
          placeholder="Company Name"
          class="text-mobileH1 xl:text-h1 bg-transparent text-foreground-900 placeholder-foreground-300 max-w-full"
        />
        <label class="sr-only" for="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="Email Address"
          placeholder="Email Address"
          class="text-mobileH1 xl:text-h1 bg-transparent text-foreground-900 placeholder-foreground-300 max-w-full"
        />
      </form>
    </section>
    <FooterVue />
  </main>
</template>

<script lang="js">
import Vue from 'vue'
import MenuHeader from '~/components/MenuHeader.vue'
import CarouselVue from '~/components/CarouselVue.vue'
import FooterVue from '~/components/FooterVue.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { MenuHeader, FooterVue, CarouselVue },
})
</script>

<style>
.hero-title {
  font-size: 49px;
  line-height: 47px;
  letter-spacing: -0.065em;
}

@media (min-width: 764px) {
  .hero-title {
    font-size: 144px;
    line-height: 138px;
    letter-spacing: -0.065em;
  }
}

.above-menu-container {
  min-height: calc(100vh - 156px);
}

@media (min-width: 764px) {
  .above-menu-container {
    min-height: calc(100vh - 340px);
  }
}

.cropped-container {
  height: calc(100vh - 68.53px);
}

@media (min-width: 764px) {
  .cropped-container {
    height: calc(100vh - 164.46px);
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

.bg-transparent {
  background-color: transparent;
}
</style>

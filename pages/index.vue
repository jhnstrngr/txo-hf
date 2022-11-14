<template>
  <main class="" role="main">
    <AboveMenuContainer />
    <MenuHeader />
    <MenuNav />
    <HeroSection />
    <CarouselVue />
    <section class="p-4 xl:p-10">
      <form>
        <fieldset class="flex flex-col items-start">
          <legend>
            <h2 class="uppercase text-mobileKicker xl:text-kicker mb-3">
              Stay Updated
            </h2>
          </legend>
          <span class="text-mobileH1 xl:text-h1 inline-block indent-h1"
            >Newsletter</span
          >
          <label class="sr-only" for="full-name">Full Name</label>
          <input
            id="full-name"
            type="text"
            name="Full Name"
            placeholder="Full Name"
            class="text-mobileH1 xl:text-h1 bg-transparent text-foreground-900 placeholder-foreground-300 w-full indent-h1"
          />
          <label class="sr-only" for="company-name">Company Name</label>
          <input
            id="company-name"
            type="text"
            name="Company Name"
            placeholder="Company Name"
            class="text-mobileH1 xl:text-h1 bg-transparent text-foreground-900 placeholder-foreground-300 w-full indent-h1"
          />
          <label class="sr-only" for="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="Email Address"
            placeholder="Email Address"
            class="text-mobileH1 xl:text-h1 bg-transparent text-foreground-900 placeholder-foreground-300 w-full indent-h1"
          />
          <input
            class="cursor-pointer text-mobileLargeBody xl:text-largeBody pt-5 xl:pt-[72px] hover:underline focus:underline"
            type="submit"
            value="Submit"
            role="button"
          />
        </fieldset>
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
import MenuNav from '~/components/MenuNav.vue'
import HeroSection from '~/components/HeroSection.vue'
import AboveMenuContainer from '~/components/AboveMenuContainer.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { MenuHeader, FooterVue, CarouselVue, MenuNav, HeroSection, AboveMenuContainer },
})
</script>

<style>
.bg-transparent {
  background-color: transparent;
}
</style>

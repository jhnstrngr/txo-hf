<template>
  <main class="" role="main">
    <div class="above-menu-container block"></div>
    <MenuHeader />
    <MenuNav />
    <section
      class="cropped-container flex flex-col justify-between p-4 xl:p-10"
    >
      <h1 class="text-mobileH1 xl:text-h1 pt-20 max-w-[1658px]">
        We’re hands-on and commited to evolving your business to strive for
        better.
      </h1>
      <div class="flex flex-col justify-end w-full items-end">
        <div class="max-w-[862px] xl:mr-[286px]">
          <h2 class="uppercase text-mobileKicker xl:text-kicker mb-[18px]">
            Our Offering
          </h2>
          <p class="text-mobileLargeBody xl:text-largeBody">
            We provide physical, pragmatic and personal business guidance.
            Success is never static. Neither are we. We’ll be your business
            partners for positive change.
          </p>
        </div>
      </div>
    </section>
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
            class="text-mobileH1 xl:text-h1 bg-transparent text-foreground-900 placeholder-foreground-300 max-w-full indent-h1"
          />
          <label class="sr-only" for="company-name">Company Name</label>
          <input
            id="company-name"
            type="text"
            name="Company Name"
            placeholder="Company Name"
            class="text-mobileH1 xl:text-h1 bg-transparent text-foreground-900 placeholder-foreground-300 max-w-full indent-h1"
          />
          <label class="sr-only" for="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="Email Address"
            placeholder="Email Address"
            class="text-mobileH1 xl:text-h1 bg-transparent text-foreground-900 placeholder-foreground-300 max-w-full indent-h1"
          />
          <input
            class="cursor-pointer text-mobileLargeBody xl:text-largeBody pt-5 xl:pt-[72px]"
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

export default Vue.extend({
  name: 'IndexPage',
  components: { MenuHeader, FooterVue, CarouselVue, MenuNav },
})
</script>

<style>
.above-menu-container {
  height: calc(100vh - 156px);
}

@media (min-width: 764px) {
  .above-menu-container {
    height: calc(100vh - 345px);
  }
}

.cropped-container {
  min-height: calc(100vh - 68px);
}

@media (min-width: 764px) {
  .cropped-container {
    min-height: calc(100vh - 180px);
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

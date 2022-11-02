<template>
  <div class="">
    <div class="above-menu-container block"></div>
    <div class="nav-spacer p-4 sticky top-0 bg-background z-10">
      <nav>
        <div class="flex">
          <div class="flex grow shrink-0">
            <MobileLogo />
            <SiteLogo />
          </div>
          <div class="flex grow shrink-0 justify-end xl:hidden">
            <button aria-expanded="false" class="flex">
              <span class="">
                <span class="hamburger-icon hamburger-icon__1"></span>
                <span class="hamburger-icon hamburger-icon__2"></span>
                <span class="hamburger-icon hamburger-icon__3"></span>
              </span>
              <span class="sr-only">Toggle mobile menu visibility</span>
            </button>
            <div class="menu invisible fixed">
              <div>
                <div>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="h-screen relative">
      <section class="h-3/5">
        <div class="hero-container h-screen flex items-center p-4">
          <h1 class="hero-title">
            We’re hands-on and commited to evolving your business to strive for
            better.
          </h1>
        </div>
        <div class="p-4 flex flex-col">
          <h2 class="uppercase">Our Offering</h2>
          <p>
            We provide physical, pragmatic and personal business guidance.
            Success is never static. Neither are we. We’ll be your business
            partners for positive change.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MobileLogo from '~/components/MobileLogo.vue'
import SiteLogo from '~/components/SiteLogo.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { MobileLogo, SiteLogo },
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

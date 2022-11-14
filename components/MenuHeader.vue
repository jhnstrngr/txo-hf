<template>
  <div class="p-4 xl:p-10 sticky top-0 bg-background z-10 xl:min-h-[162px]">
    <nav>
      <div class="flex">
        <div class="flex grow shrink-0">
          <MobileLogo />
          <SiteLogo />
        </div>
        <div class="flex grow shrink-0 justify-end xl:hidden">
          <button
            role="button"
            aria-expanded="false"
            class="transition-opacity duration-1000 flex"
            :class="{ opacity: showMenu, 'opacity-0': !showMenu }"
            @click="menuButton()"
          >
            <span class="">
              <span class="hamburger-icon hamburger-icon__1"></span>
              <span class="hamburger-icon hamburger-icon__2"></span>
              <span class="hamburger-icon hamburger-icon__3"></span>
            </span>
            <span class="sr-only">Toggle mobile menu visibility</span>
          </button>
          <div
            class="fixed bg-background top-[68px] left-0 right-0 w-full h-full mx-auto p-4 z-50 text-mobileNavigation pt-14"
            :class="{
              block: menuState,
              hidden: !menuState,
            }"
          >
            <hr />
            <div class="flex flex-col pt-[17px]">
              <span class="uppercase mb-2.5 text-mobileSmallText"
                >Enquiries</span
              >
              <div class="flex flex-col min-w-7">
                <span>General</span>
                <a href="tel:+4402036134733">+44 (0) 020 3613 4733</a>
                <a href="mailto:Info@txowork.com">Info@txowork.com</a>
              </div>
            </div>
            <div class="flex flex-col pb-[17px]">
              <span class="uppercase mb-2.5"></span>
              <div class="flex flex-col">
                <span>Sales</span>
                <a href="tel:+4402036134733">+44 (0) 020 3613 4733</a>
                <a href="mailto:Info@txowork.com">Info@txowork.com</a>
              </div>
            </div>
            <hr />
            <div class="flex flex-col py-[17px]">
              <span class="uppercase mb-2.5 text-mobileSmallText">Address</span>
              <div class="flex flex-col">
                <span>Morelands</span>
                <span>5-23 Old Street</span>
                <span>London EC1V 9HL</span>
              </div>
            </div>
            <hr />
            <div class="flex flex-col py-[17px]">
              <span class="uppercase mb-2.5 text-mobileSmallText">Connect</span>
              <div class="flex flex-col">
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
                <a href="#">Facebook</a>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="js">
import MobileLogo from '~/components/MobileLogo.vue'
import SiteLogo from '~/components/SiteLogo.vue'
export default {
    components: {
    MobileLogo, SiteLogo
  },
  data() {
    return {
      showMenu: false,
      menuState: false,
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.onScroll);
 },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll () {
      const value = window.innerHeight - 156;
      if (window.scrollY >= value) {
        return (this.showMenu = true);
      }
      else {
        return (this.showMenu = false);
      }
    },
    menuButton () {
      this.menuState = !this.menuState;
    }
  },

}
</script>

<style>
.hamburger-icon {
  width: 30px;
  height: 1px;
  background-color: #736357;
  display: block;
}

.hamburger-icon:not(:last-child) {
  margin-bottom: 11.4px;
}
</style>

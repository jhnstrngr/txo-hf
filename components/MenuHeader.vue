<template>
  <div class="nav-spacer p-4 xl:p-10 sticky top-0 bg-background z-10">
    <nav>
      <div class="flex">
        <div class="flex grow shrink-0">
          <MobileLogo />
          <SiteLogo />
        </div>
        <div class="flex grow shrink-0 justify-end xl:hidden">
          <button aria-expanded="false" :class="showMenu ? 'flex' : 'hidden'">
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
      showMenu: false
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
        return (this.showMenu = false)
      }
    }
  },

}
</script>

<template>
  <a href="/" class="logo-mobile xl:hidden">
    <svg
      id="logo"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      :width="width"
      height="100%"
      viewBox="0 0 684 303.5"
      style="overflow: visible; enable-background: new 0 0 684 303.5"
      xml:space="preserve"
    >
      <defs></defs>
      <polygon
        class="st0"
        points="248.5,58.4 151,58.4 151,303.5 96.3,303.5 96.3,58.4 0,58.4 0,6.7 248.5,6.7 "
      />
      <g>
        <path
          class="st0"
          d="M604.2,117.8c-21,0-38.1-17-38.1-38.1c0-21,17-38.1,38.1-38.1c21,0,38.1,17,38.1,38.1
		C642.3,100.8,625.2,117.8,604.2,117.8 M604.2,0c-44.1,0-79.8,35.7-79.8,79.8c0,44.1,35.7,79.8,79.8,79.8
		c44.1,0,79.8-35.7,79.8-79.8C684,35.7,648.3,0,604.2,0"
        />
      </g>
      <polygon
        class="st0"
        points="435.5,155.1 539.2,6.7 472.2,6.7 402.6,110.1 332.7,6.7 263.5,6.7 366.9,155.1 367.2,155.1 
	263.5,303.5 330.5,303.5 400.1,200.1 470.1,303.5 539.2,303.5 435.8,155.1 "
      />
    </svg>
    <span class="sr-only">Link to homepage</span>
  </a>
</template>

<script lang="js">
export default {
  data() {
    return {
      width: "280px"
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
      const maxWidth = 280;
      const maxHeight = window.innerHeight - 345;
      const current = window.scrollY;
      const percent = ((current / maxHeight) * 100);

      const value = maxWidth - (percent * 2);

      if (value <= 80) {
        return "80px";
      }

      return (this.width = value + "px");
    },
  },
}
</script>

<style type="text/css">
.st0 {
  fill: #736357;
}
.logo-link {
  display: flex;
}
</style>

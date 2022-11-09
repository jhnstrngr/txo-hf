<template>
  <div ref="customCursor" class="cursor text-largeBody"></div>
</template>

<script lang="js">
export default {
  data() {
    return {
      x: null,
      y: null,
      visible: false,
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.moveCursor)
  },
  methods: {
    moveCursor(e) {
      this.x = e.clientX
      this.y = e.clientY

      const customCursor = this.$refs.customCursor

      customCursor.style.transform = `translateX(${this.x}px) translateY(${this.y}px) translateZ(0) translate3d(0, 0, 0)`

    if (e.target.matches('.prev, .next')) {
        customCursor.style.visibility = 'visible';
        document.documentElement.style.setProperty("--cursor-before", "hidden");
        document.documentElement.style.setProperty("--cursor-after", "hidden");
    }

    if (!e.target.matches('.prev, .next')) {
        customCursor.style.visibility = 'hidden'
        document.documentElement.style.setProperty("--cursor-before", "hidden");
        document.documentElement.style.setProperty("--cursor-after", "hidden");
      }

    if (e.target.matches('.prev')) {
    document.documentElement.style.setProperty("--cursor-before", "visible");
    }

    if (e.target.matches('.next')) {
    document.documentElement.style.setProperty("--cursor-after", "visible");
    }
    },
  },
}
</script>

<style>
:root {
  --cursor-after: hidden;
  --cursor-before: hidden;
}
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  transform: translate(-100%, -100%);
  mix-blend-mode: difference;
  z-index: 200;
}

.cursor::after {
  content: 'Next';
  position: absolute;
  z-index: 100;
  visibility: var(--cursor-after);
}
.cursor::before {
  content: 'Previous';
  position: absolute;
  z-index: 100;
  visibility: var(--cursor-before);
}
</style>

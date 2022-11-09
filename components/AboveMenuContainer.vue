<template>
  <div class="above-menu-container block"></div>
</template>

<script>
export default {
  beforeMount() {
    function setContainerHeight() {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    setContainerHeight()
    window.addEventListener('resize', () => {
      setContainerHeight()
    })
  },
}
</script>

<style>
:root {
  --app-height: 100vh;
}

.above-menu-container {
  height: calc(var(--app-height) - 156px);
}

@media (min-width: 764px) {
  .above-menu-container {
    height: calc(var(--app-height) - 345px);
  }
}
</style>

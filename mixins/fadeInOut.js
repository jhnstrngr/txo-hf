export default {
  data() {
    return {
      opacity: 0,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const windowHeight = window.innerHeight - 345
      if (window.scrollY <= windowHeight) {
        return (
          (this.opacity = parseFloat(window.scrollY / windowHeight).toFixed(3))
        )
      } else {
        return 1
      }
    },
  },
}

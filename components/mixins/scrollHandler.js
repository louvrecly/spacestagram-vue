import throttle from 'raf-throttle'

// NOTE: a custom handleScroll method is required to use this mixin
export default {
  computed: {
    scrollHandler () {
      if (!this.handleScroll) {
        throw new Error('handleScroll is not defined')
      }
      return throttle(this.handleScroll)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollHandler)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}

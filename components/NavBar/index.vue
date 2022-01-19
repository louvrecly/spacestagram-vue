<template>
  <div class="nav-bar" :class="{ solid: !isOnTop }">
    <div class="container responsive-margins">
      <app-logo></app-logo>
    </div>
  </div>
</template>

<script>
import AppLogo from './Logo'

import scrollHandler from '~/components/mixins/scrollHandler'

export default {
  name: 'NavBar',
  components: { AppLogo },
  mixins: [scrollHandler],
  data () {
    return {
      isOnTop: true
    }
  },
  methods: {
    handleScroll () {
      this.isOnTop = (window.scrollY || window.pageYOffset) <= 40
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/typography
@import ~assets/css/utils/media
@import ~assets/css/components/section

.nav-bar
  width: 100%
  position: fixed
  z-index: 10
  transition: all .3s ease

  &.solid
    background-image: $background-gradient
    box-shadow: 0 5px 10px rgba(#000, 0.3)

    .container
      padding: 5px 0 10px

      @media #{$tablets-up}
        padding: 10px 0 15px

  .container
    padding: 15px 0 20px
    transition: padding .3s ease

    @media #{$tablets-up}
      padding: 20px 0 25px
</style>

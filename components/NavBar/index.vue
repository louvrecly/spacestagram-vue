<template>
  <div class="nav-bar" :class="{ solid: !isOnTop }">
    <div class="container responsive-margins">
      <h1 class="title text-bold">
        <span class="icon">&#129680;</span>
        <span class="text">spacestagram</span>
      </h1>
    </div>
  </div>
</template>

<script>
import scrollHandler from '~/components/mixins/scrollHandler'

export default {
  name: 'NavBar',
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

    .title
      color: goldenrod
      font-family: $font-family-logo

      .icon
        margin: 0 5px 0 0
        +font-size-normal

        @media #{$tablets-up}
          +font-size-large

      .text
        +font-size-large

        @media #{$tablets-up}
          +font-size-larger
</style>

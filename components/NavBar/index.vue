<template>
  <div class="nav-bar" :class="{ solid: !isOnTop }">
    <modal-base v-if="modalOpened" @close="toggleModalOpened(false)">
      filter
    </modal-base>

    <div class="container responsive-margins">
      <app-logo></app-logo>

      <button class="button icon-button" @click="toggleModalOpened(true)">
        <font-awesome-icon :icon="['fas', 'bars']"></font-awesome-icon>
      </button>
    </div>
  </div>
</template>

<script>
import AppLogo from './Logo'

import scrollHandler from '~/components/mixins/scrollHandler'

const ModalBase = () => import('~/components/ModalBase')

export default {
  name: 'NavBar',
  components: {
    AppLogo,
    ModalBase
  },
  mixins: [scrollHandler],
  data () {
    return {
      isOnTop: true,
      modalOpened: false
    }
  },
  methods: {
    handleScroll () {
      this.isOnTop = (window.scrollY || window.pageYOffset) <= 40
    },
    toggleModalOpened (opened) {
      this.modalOpened = opened
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
    display: flex
    justify-content: space-between
    align-items: center
    transition: padding .3s ease

    @media #{$tablets-up}
      padding: 20px 0 25px
</style>

<template>
  <div class="modal-base" @click.self="close">
    <div class="container">
      <button class="button icon-button" @click="close">
        <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
      </button>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalBase',
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/utils/media

.modal-base
  width: 100vw
  height: 100vh
  z-index: 50
  position: fixed
  display: flex
  justify-content: center
  align-items: center

  &:before
    content: ''
    width: 100%
    height: 100%
    background-color: #111
    opacity: 0.7
    position: absolute

  .container
    width: 100%
    height: 100%
    background-color: #333
    color: goldenrod
    position: absolute

    @media #{$tablets-up}
      width: 500px
      height: 500px
      border-radius: 8px

    .button
      position: absolute
      top: 20px
      right: 30px

      @media #{$tablets-up}
        top: 10px
        right: 20px
</style>

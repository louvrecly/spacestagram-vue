<template>
  <div class="spinner">
    <div class="spin-primary" :style="spinnerStyles"></div>
    <div class="spin-secondary" :style="spinnerStyles"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner'
}
</script>

<script>
  export default {
    props: {
      size: {
        type: String,
        default: '16px'
      },
      color: {
        type: String,
        default: '#fff'
      },
      width: {
        type: String,
        default: '2px'
      }
    },
    computed: {
      spinnerStyles () {
        return {
          height: this.size,
          width: this.size,
          borderTopColor: this.color,
          borderWidth: this.width
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
.spinner
  .spin
    &-primary,
    &-secondary
      position: absolute
      content: ''
      top: 0
      left: 0
      right: 0
      bottom: 0
      margin: auto
      width: 16px
      height: 16px
      border:
        radius: 100%
        color: #fff transparent transparent
        style: solid
        width: 2px
      animation-iteration-count: infinite

    &-primary
      animation: spinning 2.4s cubic-bezier(0.41, 0.36, 0.2, 0.62)
      animation-iteration-count: infinite

    &-secondary
      animation: spinning 2.4s cubic-bezier(0.51, 0.19, 0.21, 0.8)
      animation-iteration-count: infinite

  @keyframes spinning
    0%
      transform: rotate3d(0, 0, 1, 0)
    100%
      transform: rotate3d(0, 0, 1, 720deg)
</style>

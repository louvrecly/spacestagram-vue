<template>
  <button class="like-button" :class="{ liked }" @click="toggleLike">
    <font-awesome-icon :icon="[iconType, 'heart']"></font-awesome-icon>
  </button>
</template>

<script>
export default {
  name: 'LikeButton',
  props: {
    liked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconType () {
      return this.liked ? 'fas' : 'far'
    }
  },
  methods: {
    toggleLike () {
      this.$emit('toggleLike', this.liked)
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/typography
@import ~assets/css/utils/media

.like-button
  padding: 5px
  background-color: transparent
  border: none
  color: silver
  +font-size-normal
  line-height: 1em
  cursor: pointer
  transition: transform .3s ease

  @media #{$tablets-up}
    padding: 10px

  &:hover
    transform: scale(1.2)

  &.liked
    color: crimson
</style>

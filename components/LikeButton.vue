<template>
  <button class="like-button icon-button" :class="{ liked }" @click="toggleLike">
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
  &.liked
    color: crimson
</style>

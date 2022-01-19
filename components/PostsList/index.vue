<template>
  <ul class="posts-list">
    <image-post
      v-for="(post, idx) in posts"
      :key="idx"
      class="post"
      :title="post.title"
      :explanation="post.explanation"
      :url="post.url"
      :date="post.date"
    ></image-post>
  </ul>
</template>

<script>
import ImagePost from './ImagePost'

export default {
  name: 'PostsList',
  components: { ImagePost },
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/utils/media

.posts-list
  color: gold

  .post
    &:not(:last-of-type)
      margin: 0 0 50px

      @media #{$tablets-up}
        margin: 0 0 100px
</style>

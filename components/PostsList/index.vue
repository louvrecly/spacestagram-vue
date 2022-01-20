<template>
  <ul class="posts-list">
    <image-post
      v-for="(post, idx) in posts"
      :key="idx"
      class="post"
      :url="post.url"
      :media-type="post.media_type"
      :title="post.title"
      :date="post.date"
      :explanation="post.explanation"
      :copyright="post.copyright"
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

  @media #{$medium-up}
    display: flex
    justify-content: space-between
    flex-wrap: wrap

  .post
    @media #{$medium-up}
      width: 460px
      height: fit-content

    &:not(:last-of-type)
      margin: 0 0 50px

      @media #{$tablets-up}
        margin: 0 0 100px
</style>

<template>
  <ul class="posts-list">
    <image-post
      v-for="(post, idx) in posts"
      :key="idx"
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

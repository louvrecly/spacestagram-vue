<template>
  <div class="home">
    <section class="container responsive-margins">
      <h1 class="title">
        <i>spaces</i>tagram &#129680;
      </h1>

      <posts-list :posts="posts"></posts-list>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import PostsList from '~/components/PostsList'

export default {
  name: 'HomePage',
  components: { PostsList },
  async fetch () {
    await this.$store.dispatch('loadPosts')
  },
  computed: {
    ...mapGetters({ posts: 'getPosts' })
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/typography
@import ~assets/css/utils/media
@import ~assets/css/components/section

.home
  background-color: black

  .container
    padding: 50px 0

    @media #{$tablets-up}
      padding: 100px 0

    .title
      margin: 0 0 30px
      color: goldenrod
      +font-size-large

      @media #{$tablets-up}
        margin: 0 0 50px
        +font-size-larger
</style>

<template>
  <div class="home">
    <section class="container responsive-margins">
      <posts-list :posts="posts"></posts-list>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import PostsList from '~/components/PostsList'

import { validateStartDate } from '~/utils/nasaHelper'

export default {
  name: 'HomePage',
  components: { PostsList },
  async asyncData ({ store, route: { query } }) {
    const { start_date } = query // eslint-disable-line camelcase
    const validStartDate = validateStartDate(start_date)
    await store.dispatch('loadPosts', validStartDate)
  },
  computed: {
    ...mapGetters({ posts: 'getPosts' })
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/utils/media
@import ~assets/css/components/section

.home
  background-image: $background-gradient

  .container
    padding: 120px 0 100px

    @media #{$tablets-up}
      padding: 160px 0
</style>

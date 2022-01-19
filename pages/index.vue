<template>
  <div class="home">
    <section class="container responsive-margins">
      <h1 class="title text-bold">
        <span class="icon">&#129680;</span>
        <span class="text">spacestagram</span>
      </h1>

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
@import ~assets/css/base/typography
@import ~assets/css/utils/media
@import ~assets/css/components/section

.home
  background-image: linear-gradient(90deg, #151515 0%, #1D1D1D 10%, #1D1D1D 90%, #151515 100%)

  .container
    padding: 50px 0

    @media #{$tablets-up}
      padding: 100px 0

    .title
      margin: 0 0 30px
      color: goldenrod
      font-family: $font-family-logo

      @media #{$tablets-up}
        margin: 0 0 50px

      .icon
        margin: 0 5px 0 0
        +font-size-normal

        @media #{$tablets-up}
          +font-size-large

      .text
        +font-size-large

        @media #{$tablets-up}
          +font-size-larger
</style>

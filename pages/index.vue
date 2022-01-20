<template>
  <div class="home">
    <section class="container responsive-margins">
      <div v-if="filteredPosts.length" class="results">
        <posts-list :posts="filteredPosts"></posts-list>

        <button class="button text-button" @click="loadMorePosts">LOAD MORE POSTS</button>
      </div>

      <div v-else class="no-results">
        <p class="message">Oops... no posts seem to matched the filter criteria so far.</p>

        <button class="button text-button" @click="loadMorePosts">LOAD MORE POSTS</button>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import PostsList from '~/components/PostsList'

import { validateDateRange, getNextDateRange } from '~/utils/nasaHelper'

export default {
  name: 'HomePage',
  components: { PostsList },
  async asyncData ({ store, route: { query }, $config: { nasaApiKey } }) {
    const { start_date, end_date } = query // eslint-disable-line camelcase
    const { startDate, endDate } = validateDateRange({ startDate: start_date, endDate: end_date }) // eslint-disable-line camelcase
    await store.dispatch('loadPosts', { startDate, endDate, nasaApiKey })
  },
  data () {
    return {
      searchableFields: ['title', 'explanation', 'copyright']
    }
  },
  computed: {
    ...mapGetters({
      posts: 'getPosts',
      startDate: 'getStartDate'
    }),
    queryParams () {
      return this.$route.query
    },
    filteredPosts () {
      return this.queryParams.search
        ? this.posts.filter(this.comparePost(this.queryParams.search))
        : this.posts
    }
  },
  methods: {
    comparePost (search) {
      return post => {
        return this.searchableFields.some(field => post[field] && post[field].toLowerCase().includes(search.toLowerCase()))
      }
    },
    async loadMorePosts () {
      const { startDate, endDate } = getNextDateRange(this.startDate)
      const { nasaApiKey } = this.$config
      await this.$store.dispatch('loadPosts', { startDate, endDate, nasaApiKey })
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/typography
@import ~assets/css/utils/media
@import ~assets/css/components/section

.home
  min-height: 100vh
  background-image: $background-gradient

  .container
    padding: 120px 0 100px

    @media #{$tablets-up}
      padding: 160px 0

    .results
      .button
        margin: 100px auto
        display: block

    .no-results
      min-height: 500px
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center

      .message
        margin: 0 0 30px
        color: goldenrod
        +font-size-small
        text-align: center

        @media #{$tablets-up}
          +font-size-normal
</style>

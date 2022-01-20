<template>
  <div class="home">
    <section class="container responsive-margins">
      <posts-list v-if="filteredPosts.length" :posts="filteredPosts"></posts-list>

      <div v-else class="no-results">Oops... no posts seem to matched the filter criteria so far.</div>
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
  data () {
    return {
      searchableFields: ['title', 'explanation', 'copyright']
    }
  },
  computed: {
    ...mapGetters({ posts: 'getPosts' }),
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

    .no-results
      min-height: 500px
      color: goldenrod
      +font-size-small
      text-align: center
      display: flex
      justify-content: center
      align-items: center

      @media #{$tablets-up}
        +font-size-normal
</style>

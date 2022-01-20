<template>
  <div class="posts-filter">
    <h2 class="title text-bold">Filter Posts</h2>

    <form class="form" @submit.prevent="submitQuery">
      <search-bar v-model="query.search" class="search"></search-bar>

      <button class="button text-button" type="submit">GO!</button>
    </form>
  </div>
</template>

<script>
import SearchBar from './SearchBar'

export default {
  name: 'PostsFilter',
  components: { SearchBar },
  data () {
    return {
      query: {
        search: ''
      }
    }
  },
  methods: {
    submitQuery () {
      const query = Object.keys(this.query).reduce((subquery, key) => {
        const queryValue = this.query[key]
        return queryValue
         ? { ...subquery, [key]: queryValue }
         : subquery
      }, {})
      const route = { name: 'index', query }

      this.$router.push(route)
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/typography
@import ~assets/css/utils/media

.posts-filter
  padding: 100px 30px
  height: 100%

  @media #{$tablets-up}
    padding: 50px 60px

  .title
    margin: 0 0 20px
    +font-size-small

    @media #{$tablets-up}
      margin: 0 0 30px
      +font-size-normal

  .form
    .search
      margin: 0 0 20px

      @media #{$tablets-up}
        margin: 0 0 30px

    .button
      margin: 0 auto
      display: block
</style>

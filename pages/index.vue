<template>
  <div class="home">
    <section class="container responsive-margins">
      <h1 class="title text-larger">
        Welcome to Spacestagram! &#129680;
      </h1>

      <posts-list :posts="posts"></posts-list>
    </section>
  </div>
</template>

<script>
import PostsList from '~/components/PostsList'

export default {
  name: 'HomePage',
  components: { PostsList },
  data () {
    return { posts: [] }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/typography
@import ~assets/css/components/section

.home
  background-color: black
  color: gold
</style>

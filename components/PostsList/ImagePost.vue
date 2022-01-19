<template>
  <li class="post">
    <div class="wrapper">
      <img class="image" :src="url" :alt="title">
    </div>

    <div class="container">
      <div class="header">
        <div class="info">
          <h3 class="title">{{ title }}</h3>

          <p class="date">{{ date }}</p>
        </div>

        <like-button class="button" :liked="liked" @toggleLike="toggleLike"></like-button>
      </div>

      <div class="body">
        <p class="explanation" :class="{ collapsed }" @click="toggleCollapsed">{{ explanation }}</p>

        <p v-if="copyright" class="copyright text-italic">&#169; {{ copyright }}</p>
      </div>
    </div>
  </li>
</template>

<script>
import LikeButton from '~/components/LikeButton'

export default {
  name: 'ImagePost',
  components: { LikeButton },
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'Missing Title'
    },
    date: {
      type: String,
      default: 'Date Unknown'
    },
    explanation: {
      type: String,
      default: 'Missing Explanation'
    },
    copyright: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      liked: false,
      collapsed: true
    }
  },
  methods: {
    toggleLike (like) {
      this.liked = !like
    },
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/typography
@import ~assets/css/utils/media

.post
  border-radius: 8px
  box-shadow: 0 5px 10px rgba(#000, 0.3)
  overflow: hidden
  transition: transform .3s ease

  &:hover
    transform: scale(1.05)

  .wrapper
    display: flex

    .image
      width: 100%

  .container
    .header
      padding: 20px 20px 10px
      display: flex
      justify-content: space-between
      align-items: center

      @media #{$tablets-up}
        padding: 20px 30px 10px

      .info
        margin: 0 10px 0 0
        flex: 1

        .title
          +font-size-small

          @media #{$tablets-up}
            +font-size-normal

        .date
          color: rgba(gold, 0.6)
          +font-size-smaller

    .body
      padding: 10px 20px 20px
      color: rgba(gold, 0.6)
      +font-size-smaller

      @media #{$tablets-up}
        +font-size-small
        padding: 10px 30px 30px

      .explanation
        margin: 0 0 20px
        overflow: hidden
        transition: all .3s ease

        &.collapsed
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          cursor: pointer

      .copyright
        text-align: right
</style>

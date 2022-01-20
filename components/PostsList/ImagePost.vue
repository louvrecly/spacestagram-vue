<template>
  <li class="post">
    <div class="wrapper">
      <component
        :is="mediaComponent(mediaType)"
        class="media"
        :class="mediaComponent(mediaType)"
        v-bind="mediaProps(mediaType)"
      ></component>
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
    date: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    mediaType: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'Missing Title'
    },
    explanation: {
      type: String,
      default: 'Missing Explanation'
    },
    copyright: {
      type: String,
      default: ''
    },
    liked: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      collapsed: true
    }
  },
  methods: {
    mediaComponent (mediaType) {
      switch (mediaType) {
        case 'image':
          return 'img'
        case 'video':
          return 'iframe'
        default:
          return 'div'
      }
    },
    mediaProps (mediaType) {
      switch (mediaType) {
        case 'image':
          return { src: this.url, alt: this.title }
        case 'video':
          return { src: this.url, title: this.title }
        default:
          return {}
      }
    },
    toggleLike (like) {
      this.$emit('toggleLikePost', { date: this.date, like: !like })
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

    .media
      width: 100%
      border: none

      &.iframe,
      &.div
        height: 230px

        @media #{$tablets-up}
          height: 510px

        @media #{$medium-up}
          height: 770px

      &.div
        background-color: #222
        display: flex
        justify-content: center
        align-items: center

        &:before
          content: 'Invalid Media Type'

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

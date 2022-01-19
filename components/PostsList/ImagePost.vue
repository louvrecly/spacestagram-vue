<template>
  <li class="post">
    <div class="wrapper">
      <img class="image" :src="url" :alt="title">
    </div>

    <div class="container">
      <div class="info">
        <h3 class="title">{{ title }}</h3>

        <p class="date">{{ date }}</p>
      </div>

      <p class="explanation text-small">{{ explanation }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ImagePost',
  props: {
    title: {
      type: String,
      default: 'Missing Title'
    },
    explanation: {
      type: String,
      default: 'Missing Explanation'
    },
    url: {
      type: String,
      required: true
    },
    date: {
      type: String,
      default: 'Date Unknown'
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/typography
@import ~assets/css/utils/media

.post
  .wrapper
    border-radius: 8px
    overflow: hidden

    .image
      width: 100%

  .container
    .info
      padding: 20px 0

      @media #{$tablets-up}
        display: flex
        justify-content: space-between
        align-items: center

      .title
        +font-size-small

        @media #{$tablets-up}
          +font-size-normal

      .date
        +font-size-smaller

        @media #{$tablets-up}
          +font-size-normal

    .explanation
      color: rgba(gold, 0.7)
</style>

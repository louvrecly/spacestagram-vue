<template>
  <li class="post">
    <div class="wrapper">
      <img class="image" :src="url" :alt="title">
    </div>

    <div class="container">
      <div class="info">
        <h3 class="title text-large">
          {{ title }}
        </h3>

        <p class="date text-normal">{{ date }}</p>
      </div>

      <p class="explanation">{{ explanation }}</p>
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
.post
  .wrapper
    .image
      width: 100%

  .container
    .info
      display: flex
      justify-content: space-between
      align-items: center
</style>

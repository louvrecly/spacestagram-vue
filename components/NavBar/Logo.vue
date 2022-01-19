<template>
  <h1 class="logo">
    <span class="icon">&#129680;</span><span class="title">spacestagram</span>
  </h1>
</template>

<script>
export default {
  name: 'AppLogo'
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/typography
@import ~assets/css/utils/media

.logo
  color: goldenrod
  font-family: $font-family-logo

  .icon
    margin: 0 5px 0 0
    +font-size-normal

    @media #{$tablets-up}
      margin: 0 10px 0 0
      +font-size-large

  .title
    +font-size-large

    @media #{$tablets-up}
      +font-size-larger
</style>

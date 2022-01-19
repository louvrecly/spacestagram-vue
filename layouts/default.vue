<template>
  <div class="default-layout">
    <nav-bar></nav-bar>

    <nuxt></nuxt>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  name: 'DefaultLayout',
  components: { NavBar }
}
</script>

<template>
  <div class="search-bar">
    <label class="label" for="search">
      <font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon>
    </label>

    <input
      id="search"
      class="input"
      name="search"
      type="text"
      :value="value"
      placeholder="Type something here!"
      @input="updateValue"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateValue (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/typography

.search-bar
  .label
    margin: 0 10px 0 0

  .input
    background-color: transparent
    border: none
    color: goldenrod
    +font-size-small
    border-radius: 8px
    outline: none
</style>

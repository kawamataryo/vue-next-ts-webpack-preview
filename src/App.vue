<template>
  <div class="container">
    <img src="./logo.png">
    <h1>Modal demo</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  components: {},
  setup() {
  }
})
</script>

<style scoped>
  img {
    width: 200px;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
  }

  .container {
    max-width: 1200px;
    margin: 100px auto;
    text-align: center;
  }
</style>

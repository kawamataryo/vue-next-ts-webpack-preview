<template>
  <div class="container">
    <img src="./logo.png">
    <h1>Suspense demo</h1>
    <Suspense>
      <template #default>
        <AsyncUsers/>
      </template>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import {defineComponent, onErrorCaptured, ref, Ref} from 'vue'
import AsyncUsers from "./components/AsyncUsers.vue"

export default defineComponent({
  components: {
    AsyncUsers
  },
  setup() {
    const error: Ref<any> = ref(null);
    onErrorCaptured(e => {
      error.value = e;
      return true;
    })
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

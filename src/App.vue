<template>
  <img src="./logo.png">
  <h1>Suspense demo</h1>
  <Suspense>
    <template #default>
      <AsyncUsers/>
    </template>
    <template #fallback>
      User data loading...
    </template>
  </Suspense>
</template>

<script lang="ts">
import { ref, defineComponent, onErrorCaptured, Ref } from 'vue'
import AsyncUsers from "./components/AsyncUsers.vue"

export default defineComponent({
  components: {
    AsyncUsers
  },
  setup() {
    const error: Ref<any> = ref(null);
    onErrorCaptured( e => {
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
</style>

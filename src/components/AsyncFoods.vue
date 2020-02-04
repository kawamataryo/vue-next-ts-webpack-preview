<template>
  <ul>
    <li v-for="(food, i) in foods" :key="i">{{ food }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  async setup() {
    const fetchFoods = () => {
      return new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          reject("500 server error")
        }, 3000)
      })
    };
    const foods = await fetchFoods();

    return {
      foods
    }
  }
});
</script>

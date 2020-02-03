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
      return new Promise<string[]>(resolve => {
        setTimeout(() => {
          resolve(['Rice', 'Noodles', 'Pasta'])
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

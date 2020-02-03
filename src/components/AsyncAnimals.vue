<template>
  <ul>
    <li v-for="(animal, i) in animals" :key="i">{{ animal }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  async setup() {
    const fetchAnimals = () => {
      return new Promise<string[]>(resolve => {
        setTimeout(() => {
          resolve(['Dog', 'Cat', 'Elephant'])
        }, 2000)
      })
    };
    const animals = await fetchAnimals();

    return {
      animals
    }
  }
});
</script>

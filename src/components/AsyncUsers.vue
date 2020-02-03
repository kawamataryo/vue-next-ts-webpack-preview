<template>
  <ul>
    <li v-for="(user, i) in users" :key="i">{{ user }}</li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  async setup() {
    const fetchUsers = () => {
      return new Promise<string[]>(resolve => {
          setTimeout(()=> {
            resolve(['Jon', 'Bob', 'Nancy'])
          }, 2000)
      })
    };
    const users = await fetchUsers();

    return {
      users
    }
  }
});
</script>

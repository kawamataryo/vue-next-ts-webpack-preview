<template>
  <p>Hello World {{ message }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    message: {
      type: Number,
      default: ""
    }
  }
});
</script>

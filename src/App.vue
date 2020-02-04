<template>
  <div class="container">
    <img src="./logo.png" />
    <h1>Modal demo</h1>
    <button @click="toggleModal">toggle modal</button>
    <Portal target="#portal-target">
      <div v-if="isPortalShow" id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="toggleModal">&times;</span>
          <p>modall content</p>
        </div>
      </div>
    </Portal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isPortalShow = ref(false);

    const toggleModal = () => {
      isPortalShow.value = !isPortalShow.value;
    };
    return {
      isPortalShow,
      toggleModal
    };
  }
});
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

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  text-align: center;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>

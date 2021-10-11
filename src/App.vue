<template>
  <MyNav @clicked="setView" />
  <Suspense>
    <MyBody :view="view" />
  </Suspense>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MyBody from "./components/MyBody.vue";
import MyNav from "./components/MyNav.vue";

let view = ref("Thoughts");

function setView(viewValue) {
  console.log(view);
  view.value = viewValue;
}
</script>

<style></style>

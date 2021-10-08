<template>
  <MyNav @clicked="setView" />
  <Suspense>
    <MyBody :view="view" />
  </Suspense>
</template>

<script setup lang="ts">
import MyBody from "./components/MyBody.vue";
import MyNav from "./components/MyNav.vue";

let view = "Thoughts";

function setView(viewValue) {
  console.log(view);
  view = viewValue;
}
</script>

<style></style>

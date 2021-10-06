<template>
  <Display v-for="thought in thoughts" :title="thought"></Display>
  <h1>working?</h1>
  <h1>hi</h1>
</template>

<script setup>
import { onMounted } from "vue";
import apolloClient from "../apollo/client.ts";
import { ALL_THOUGHTS } from "../graphql";
import Display from "./Display.vue";

let thoughts = ["test"];

onMounted(async () => {
  thoughts = await apolloClient.query({
    query: ALL_THOUGHTS,
  });
});
</script>

<style></style>

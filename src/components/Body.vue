<template>
  <Display
    v-for="thought in thoughts.data.allThoughts.data"
    :title="thought.title"
    @click="selected = { type: thought.__typename, id: thought._id }"
  ></Display>
  {{}}
  <h1>{{ selected }}</h1>
</template>

<script setup>
import { onMounted, ref } from "vue";
import apolloClient from "../apollo/client.ts";
import { ALL_THOUGHTS } from "../graphql";
import Display from "./Display.vue";

let selected = ref({});

let thoughts = ["test"];

thoughts = await apolloClient.query({
  query: ALL_THOUGHTS,
});
console.log(thoughts);
</script>

<style></style>

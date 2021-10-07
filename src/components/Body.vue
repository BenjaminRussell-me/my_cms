<template>
  <Display
    v-for="thought in thoughts.data.allThoughts.data"
    :title="thought.title"
    @click="select(thought)"
  ></Display>
  {{}}
  <h1>{{ selected }}</h1>
  <h1>{{ item }}</h1>
</template>

<script setup>
import { onMounted, ref } from "vue";
import apolloClient from "../apollo/client.ts";
import { ALL_THOUGHTS, GET_BY_ID } from "../graphql";
import Display from "./Display.vue";
import { gql } from "@apollo/client/core";

let selected = ref({});

let item = ref({});

async function select(thought) {
  this.selected = { type: thought.__typename, id: thought._id };
  const item_query = await apolloClient.query({
    query: gql`
					query {
						findThoughtByID(id: ${this.selected.id}){
								title
								content
						}
					}
				`,
  });
  this.item = item_query.data.findThoughtByID;
}
let thoughts = ["test"];

thoughts = await apolloClient.query({
  query: ALL_THOUGHTS,
});
console.log(thoughts);
</script>

<style></style>

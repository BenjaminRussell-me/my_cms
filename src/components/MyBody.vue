<template>
  <Display
    v-for="item in vItems.data?.allThoughts?.data"
    :title="item.title"
    @click="select(item)"
  ></Display>
  {{}}
  <h1>{{ selected }}</h1>
  <h1>{{ test }}</h1>
</template>

<script setup lang="ts">
import { onMounted, watchEffect, ref, onBeforeMount, toRefs } from "vue";
import apolloClient from "../apollo/client.ts";
import { ALL_THOUGHTS, GET_BY_ID } from "../graphql";
import Display from "./Display.vue";
import { gql } from "@apollo/client/core";

interface Props {
  view: string;
}
const props = withDefaults(defineProps<Props>(), {
  view: "placeholder",
});
const { view } = toRefs(props);

let vItems = ref([]);
let selected = ref({});
let test = ref({});

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
  this.test = item_query.data.findThoughtByID;
}

async function setView(v) {
  console.log("hi");
  let query = "";
  switch (v) {
    case "Thoughts":
      break;
    case "Projects":
      break;
    case "Tags":
      break;
  }
  vItems.value = await apolloClient.query({
    query: ALL_THOUGHTS,
  });
}

watchEffect(() => setView(view.value));

console.log(view.value);
</script>

<style></style>

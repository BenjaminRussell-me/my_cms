<template>
  <Display
    v-for="item in viewArr?.data"
    :title="item.title"
    @click="select(item)"
  ></Display>
  {{}}
  <h1>{{ selected }}</h1>
  <h1>{{ test }}</h1>
</template>

<script setup lang="ts">
import {
  onMounted,
  watchEffect,
  computed,
  ref,
  onBeforeMount,
  toRefs,
} from "vue";
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
let queryName = ref("Thoughts");

async function select(thought) {
  this.selected = { type: thought.__typename, id: thought._id };
  const slicedName = queryName.value.slice(0, -1);
  const item_query = await apolloClient.query({
    query: gql`
					query {
						find${slicedName}ByID(id: ${this.selected.id}){
							_id	
						}
					}
				`,
  });
  this.test = item_query.data.findThoughtByID;
}

async function setView(v) {
  console.log("hi");
  switch (v) {
    case "Thoughts":
      queryName.value = "Thoughts";
      break;
    case "Projects":
      queryName.value = "Projects";
      break;
    case "Tags":
      queryName.value = "Tags";
      break;
  }
  vItems.value = await apolloClient.query({
    query: gql`
      query {
				all${queryName.value}(_size: 2) {
          data {
            _id
            title
          }
        }
      }
    `,
  });
}

const viewArr = computed(() => {
  if (vItems.value.data) {
    return vItems.value.data[`all${queryName.value}`];
  }
});

watchEffect(() => setView(view.value));

console.log(view.value + "hellllooo");
</script>

<style></style>

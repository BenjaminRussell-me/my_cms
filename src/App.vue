<script setup>
import { createApp, provide, h } from "vue";
import apolloClient from "./apollo/client.ts";
import { EXCHANGE_RATES } from "./graphql";

const data = await apolloClient.query({
  query: EXCHANGE_RATES,
});

console.log(data.data);
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

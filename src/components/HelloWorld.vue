<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
    const { result } = useQuery(gql`
      query getUsers {
        users {
          id
          firstname
          lastname
          email
        }
      }
    `);
};
</script>

<template>
  <h1>hi</h1>
  <ul>
    <li v-for="user of result.users" :key="user.id">
      {{ user.firstname }} {{ user.lastname }}
    </li>
  </ul>
</template>

<template>
  <nav>
    <button @click="$emit('clicked', item)" v-for="item in items">
      {{ item }}
    </button>
  </nav>
</template>

<script setup lang="ts">
let items = [`Thoughts`, `Projects`, `Tags`];
</script>

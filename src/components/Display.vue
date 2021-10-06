<template>
  <div class="item">
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
}
const props = withDefaults(defineProps<Props>(), {
  title: "placeholder",
});
</script>

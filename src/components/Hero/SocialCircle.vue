<template>
  <component
      :is="link ? 'a' : 'div'"
      :href="link"
      target="_blank"
      class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-5 border border-[#575757] hover:bg-opacity-20 hover:border-white transition-colors duration-300"
  >
    <slot></slot>
  </component>
</template>

<script setup>
const props = defineProps({
  link: {
    type: String,
    default: null,
  },
});
</script>

<style scoped>
</style>

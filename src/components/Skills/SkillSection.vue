<template>
  <div class="flex flex-col w-full">
    <h1 class="text-white mt-5 text-4xl font-extrabold">
      Skills
    </h1>
    <WebDevelopmentSection/>
    <DataScienceSection/>
  </div>
</template>

<script setup>
import DataScienceSection from "@/components/Skills/DataScienceSection.vue";
import WebDevelopmentSection from "@/components/Skills/WebDevelopmentSection.vue";
</script>

<style scoped>

</style>
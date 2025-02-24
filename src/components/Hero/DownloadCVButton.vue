<template>
  <a
      :href="cv"
      download="CV.pdf"
      class="
      px-4 py-2 text-[16px] font-bold rounded-[10px]
      sm:px-6 sm:py-3 sm:text-[20px] sm:rounded-[20px]
      lg:px-8 lg:py-4 lg:text-[23px] lg:rounded-[30px]
      xl:px-10 xl:py-5 xl:text-[30px] xl:rounded-[40px]
      text-white/70 bg-transparent border-2 border-white/60
      hover:bg-gray-800 transition-colors duration-300
    "
  >
    Download CV
  </a>
</template>

<script setup>
import cv from "@/assets/CV.pdf";
</script>

<style scoped>
</style>

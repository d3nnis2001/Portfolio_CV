<template>
  <button
      @click="navigateToContact"
      class="
      px-4 py-2 text-[18px] font-bold rounded-[10px]
      sm:px-6 sm:py-3 sm:text-[22px] sm:rounded-[20px]
      lg:px-8 lg:py-4 lg:text-[30px] lg:rounded-[30px]
      text-white/70 bg-transparent border-2 border-orange-500
      hover:bg-gray-800 transition-colors duration-300
    "
  >
    Contact Me
  </button>
</template>

<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

const navigateToContact = () => {
  router.push("contact");
};
</script>

<style scoped>
</style>

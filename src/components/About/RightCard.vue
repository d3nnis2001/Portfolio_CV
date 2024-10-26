<template>
  <div class="flex flex-col h-96 justify-around">
    <div class="flex flex-row items-center" v-for="(item, index) in texts" :key="index">
      <img src="../icons/Arrow.svg" alt="Arrow" class="w-5 h-5" />
      <p class="font-medium ml-4 text-white/90 text-3xl">
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script setup>

const texts = ["Dennis Schielke", "23 Years Old", "Software Engineer",
  "Born in Bielefeld, Germany", "Fluent in English and German", "23 Years Old",
    "Currently learning Dutch"
]
</script>

<style scoped>

</style>
<template>
  <div class="flex flex-col text-start justify-around">
    <h2 class="text-2xl lg:text-3xl xl:text-4xl color-orange font-bold mb-2 lg:mb-3 xl:mb-4">{{year}}</h2>
    <h3 class="text-2xl lg:text-3xl xl:text-3xl text-white/80 font-semibold mb-1 lg:mb-2 xl:mb-3">{{heading}}</h3>
    <p class="text-base lg:text-lg xl:text-xl text-white/60 font-semibold">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'WorkCard',
  props: {
    year: {
      type: String,
      required: true
    },
    heading: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.color-orange {
  color: #FD6F00;
}
</style>
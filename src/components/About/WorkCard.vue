<template>
  <div class="flex flex-col text-start justify-around">
    <h2 class="text-2xl color-orange font-bold mb-2">{{year}}</h2>
    <h3 class="text-2xl text-white/80 font-semibold mb-1">{{heading}}</h3>
    <p class="text-base text-white/60 font-semibold">{{text}}</p>
  </div>
</template>
<script>
export default {
  name: 'About2',
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
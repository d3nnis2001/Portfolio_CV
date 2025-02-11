<template>
  <div class="flex flex-row items-center">
    <slot></slot>
    <p class="mx-6 font-extrabold text-white/60 text-xl rounded-3xl lg:text-5xl">-</p>
    <p class="font-extrabold text-white/60 text-xl lg:text-3xl">{{name}}</p>
  </div>
</template>

<script>

export default {
  name: 'HobbyIconText',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}

</script>

<style scoped>
</style>
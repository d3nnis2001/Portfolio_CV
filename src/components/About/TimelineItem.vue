<template>
  <div class="w-full flex flex-col items-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
    <h1
        v-if="header"
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-extrabold text-white/80 mb-4 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 2xl:mb-20 text-center"
    >
      {{ header }}
    </h1>
    <div
        class="border-4 background-color background-color-low rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 h-full w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl flex items-center"
    >
      <WorkCard :text="item.desc" :heading="item.name" :year="item.year" />
    </div>
  </div>
</template>

<script setup>
import WorkCard from "@/components/About/WorkCard.vue";

defineProps({
  header: {
    type: String,
    default: null,
  },
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.background-color {
  border-color: rgba(253, 111, 0, 0.2);
}

.background-color-low {
  background: rgba(253, 111, 0, 0.02);
}
</style>
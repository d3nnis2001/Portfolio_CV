<template>
  <div class="w-full flex flex-col items-center text-sm sm:text-base">
    <h1
        v-if="header"
        class="text-3xl sm:text-4xl font-extrabold text-white/80 mb-4 sm:mb-14 text-center"
    >
      {{ header }}
    </h1>
    <div
        class="border-4 background-color background-color-low rounded-xl p-4 sm:p-6 h-full flex items-center"
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

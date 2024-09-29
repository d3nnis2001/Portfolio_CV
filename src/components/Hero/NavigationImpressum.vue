<template>
  <div class="flex items-center space-x-4">
    <span class="text-[25px] font-extrabold text-orange-500">Impressum</span>
    <div class="w-[3px] h-16 bg-white bg-opacity-25 rounded-full"></div>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="dot in 6" :key="dot"
           :class="[
             'w-4 h-4 rounded-full',
             filledDots.includes(dot)
               ? 'bg-orange-500'
               : 'border border-orange-500'
           ]">
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  filledDots: {
    type: Array,
    default: () => [],
    validator: (value) => value.every(v => v >= 1 && v <= 6)
  }
});
</script>
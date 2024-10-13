<template>
  <div
      class="fixed top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
      :class="{ 'left-4': direction === 'left', 'right-4': direction === 'right' }"
      @click="$emit('navigate')"
  >
    <div
        class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer"
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 text-white"
      >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="direction === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
defineProps({
  direction: {
    type: String,
    required: true,
    validator: (value) => ['left', 'right'].includes(value),
  },
});
defineEmits(['navigate']);
</script>
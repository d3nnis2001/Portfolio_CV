<template>
    <label for="theme-toggle" class="flex items-center cursor-pointer">
      <div class="relative">
        <input
            type="checkbox"
            id="theme-toggle"
            class="sr-only"
            v-model="isDarkMode"
            @change="toggleTheme"
        >
        <div
            class="w-20 h-10 bg-blue-100 dark:bg-transparent border-2 border-white/50 rounded-full shadow-inner transition-colors duration-300 ease-in-out flex items-center justify-between px-1"
        >
          <Sun class="text-white[.80] h-8 w-8 p-1" />
          <Moon class="text-gray-300 h-8 w-8 p-1" />
        </div>
        <div
            class="absolute left-0 top-0 w-10 h-10 bg-white dark:bg-gray-300 rounded-full shadow transition-transform duration-300 ease-in-out flex items-center justify-center"
            :class="{ 'translate-x-10': isDarkMode }"
        >
          <Sun v-if="!isDarkMode" class="text-orange-500 h-6 w-6" />
          <Moon v-else class="text-orange-500 h-6 w-6" />
        </div>
      </div>
    </label>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'

const isDarkMode = ref(false)

const toggleTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDarkMode.value = false
    document.documentElement.classList.remove('dark')
  }
})

watch(isDarkMode, (newValue) => {
  localStorage.theme = newValue ? 'dark' : 'light'
})
</script>
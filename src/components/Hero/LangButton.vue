<template>
  <button
      @click="toggleLanguage"
      class="lang-button bg-transparent border border-white border-opacity-70 rounded-[10px] text-white text-opacity-60 text-xl font-extrabold px-5 py-1.5 transition-colors duration-300 hover:bg-white hover:bg-opacity-10"
  >
    {{ languageName }}
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languageName = computed(() => (locale.value === 'en' ? 'ENG' : 'GER'))

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'de' : 'en'
}
</script>

<style scoped>
.lang-button {
  min-width: 90px;
  text-align: center;
}
</style>

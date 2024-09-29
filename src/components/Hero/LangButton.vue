<template>
  <button
      @click="toggleLanguage"
      class="bg-transparent border border-white border-opacity-70 rounded-[10px] text-white text-opacity-60 text-xl font-extrabold px-5 py-1.5 transition-colors duration-300 hover:bg-white hover:bg-opacity-10"
  >
    {{ language }}
  </button>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const language = ref('ENG')

    const toggleLanguage = () => {
      language.value = language.value === 'ENG' ? 'GER' : 'ENG'
    }

    return {
      language,
      toggleLanguage
    }
  }
}
</script>

<style scoped>

</style>
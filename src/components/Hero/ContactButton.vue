<template>
  <button
      @click="navigateToContact"
      class="
      px-4 py-2 text-[18px] font-bold rounded-[10px]
      sm:px-6 sm:py-3 sm:text-[22px] sm:rounded-[20px]
      lg:px-8 lg:py-4 lg:text-[30px] lg:rounded-[30px]
      xl:px-10 2xl:py-5 2xl:text-[40px] 2xl:rounded-[40px]
      text-white/70 bg-transparent border-2 border-orange-500
      hover:bg-gray-800 transition-colors duration-300
    "
  >
    {{ t('hero_text_1') }}
  </button>
</template>

<script setup>
import {useRouter} from 'vue-router';
import {useI18n} from "vue-i18n";
const { t } = useI18n();
const router = useRouter();

const navigateToContact = () => {
  router.push("contact");
};
</script>

<style scoped>
</style>

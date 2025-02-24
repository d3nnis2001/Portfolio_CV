<template>
  <div class="flex flex-col justify-center">
    <h3 class="text-xl lg:text-3xl lg:mb-2 xl:mb-4 xl:text-4xl 2xl:text-5xl font-medium text-white/40">{{ t("hero_text_4") }}</h3>
    <h2 class="text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl lg:mb-8 font-bold text-white/60">Dennis Schielke</h2>
    <h1 class="text-4xl lg:text-7xl xl:text-8xl lg:mb-1 font-extrabold text-orange-500">Software {{ t("hero_text_5") }} <br> Data Engineer</h1>
    <h4 class="lg:text-xl xl:text-2xl 2xl:text-3xl mt-1 font-extrabold text-white/20">{{ t("hero_text_6") }}</h4>
  </div>
</template>

<script setup>
import {useI18n} from "vue-i18n";
const { t } = useI18n();

</script>

<style scoped>

</style>
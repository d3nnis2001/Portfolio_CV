<template>
  <div class="flex flex-col lg:mt-8 xl:mt-10 2xl:mt-12">
    <h2 class="text-white text-2xl md:text-3xl xl:text-4xl 2xl:text-[2.75rem] mb-4 lg:mb-10 2xl:mb-12 font-semibold">
      {{ t('greeting') }}
    </h2>
    <div class="flex flex-row">
      <div class="color-bg-orange w-3 xl:w-6 rounded-lg mr-4 fade-flow"></div>
      <div class="flex flex-col">
        <p class="text-white/80 mb-6 lg:mb-10 2xl:mb-12 text-lg lg:text-3xl xl:text-4xl 2xl:text-[2.75rem]">
          {{ t('intro_text_1') }}
          <span class="text-lg lg:text-3xl xl:text-4xl 2xl:text-[2.75rem] color-orange font-semibold">
            {{ t('intro_text_2') }}
          </span>
        </p>
        <p class="text-white/80 text-lg lg:text-3xl xl:text-4xl 2xl:text-[2.75rem]">
          {{ t('intro_text_3') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
.color-orange {
  color: #FD6F00;
}
.color-bg-orange {
  background: rgba(253, 111, 0, 1);
}
@keyframes fadeFlow {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}

.fade-flow {
  animation: fadeFlow 7s infinite;
}
</style>

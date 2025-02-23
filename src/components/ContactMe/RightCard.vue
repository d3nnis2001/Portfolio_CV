<template>
  <div class="flex flex-col justify-center">
    <p class="text-4xl text-white/50 font-bold text-start lg:text-end mb-8">
      {{ t('contact_text_3') }}
    </p>
    <div class="background-c p-4 h-80 flex flex-col justify-around rounded-xl items-start lg:items-end">
      <div class="flex items-center gap-2 flex-row-reverse lg:flex-row">
        <p class="text-xl font-semibold">
          +49 1590 6741594
        </p>
        <SocialCircle>
          <img src="../icons/Phone.svg" alt="Phone" class="w-6 h-6" />
        </SocialCircle>
      </div>
      <div class="flex items-center gap-2 flex-row-reverse lg:flex-row">
        <p class="text-xl font-semibold">
          {{ t('contact_text_4') }}
        </p>
        <SocialCircle>
          <img src="../icons/GPS.svg" alt="GPS" class="w-6 h-6" />
        </SocialCircle>
      </div>
      <div class="flex items-center gap-2 flex-row-reverse lg:flex-row">
        <p class="text-base lg:text-xl font-semibold">
          dennis.schielke1@gmail.com
        </p>
        <SocialCircle>
          <img src="../icons/Mail.svg" alt="Mail" class="w-6 h-6" />
        </SocialCircle>
      </div>
    </div>
  </div>
</template>

<script setup>
import SocialCircle from "@/components/Hero/SocialCircle.vue";
import {useI18n} from "vue-i18n";
const { t } = useI18n()
</script>

<style scoped>
.background-c {
  background: rgba(255, 255, 255, 0.02);
}
</style>

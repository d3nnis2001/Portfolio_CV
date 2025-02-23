<template>
  <div class="flex flex-col w-screen items-center min-h-screen">
    <h1 class="font-extrabold text-white/90 text-5xl mt-16">
      {{t("contact_text_5")}}
    </h1>
    <p class="text-white/40 font-medium text-2xl mt-2">
      {{t("contact_text_6")}}
    </p>
    <div class="flex flex-col lg:flex-row justify-center items-stretch w-10/12 flex-grow mt-8">
      <LeftCard class="flex-1 w-full lg:max-w-[45%] lg:order-1 order-2" />
      <div class="hidden lg:flex flex-col justify-center lg: order-2 items-center mx-4">
        <p class="font-bold text-2xl text-white/50 mb-4">{{t("contact_text_7")}}</p>
        <div class="w-[3px] h-3/5 bg-white bg-opacity-25 rounded-full"></div>
      </div>
      <RightCard class="flex-1 w-full lg:max-w-[45%] lg:order-3 order-1" />
    </div>
    <NavigationImpressum :filled-dots="[6]" class="mb-8 mt-4" />
  </div>
</template>

<script setup>
import LeftCard from "@/components/ContactMe/LeftCard.vue";
import RightCard from "@/components/ContactMe/RightCard.vue";
import NavigationImpressum from "@/components/Hero/NavigationImpressum.vue";
import {useI18n} from "vue-i18n";
const { t } = useI18n()
</script>

<style scoped>
</style>

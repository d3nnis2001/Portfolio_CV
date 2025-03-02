<template>
  <div class="flex flex-col h-screen w-screen  items-center">
    <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:grid-rows-2 gap-x-6 mt-10 w-3/4 mb-6 lg:mb-0">
      <TimelineItem :header="t('about_text_10')" :item="education[0]" class="order-1" />
      <TimelineItem :header="t('about_text_11')" :item="work[0]" class="order-3 sm:order-2"/>
      <TimelineItem :item="education[1]" class="order-2 sm:order-3"/>
      <TimelineItem :item="work[1]" class="order-4"/>
    </div>
    <NavigationImpressum :filled-dots="[3]" class="mb-8 mt-auto" />
  </div>
</template>

<script setup>
import TimelineItem from "@/components/About/TimelineItem.vue";
import NavigationImpressum from "@/components/Hero/NavigationImpressum.vue";
import {useI18n} from "vue-i18n";
const { t } = useI18n()

const education = [
  {
    year: "2018-2021",
    name: "Abitur",
    desc: t('about_text_1'),
  },
  {
    year: "2021-2025",
    name: t('about_text_2'),
    desc: t('about_text_3'),
  },
];

const work = [
  {
    year: "2019-2022",
    name: t('about_text_4'),
    desc: t('about_text_5'),
  },
  {
    year: t('about_text_8'),
    name: t('about_text_6'),
    desc: t('about_text_7'),
  },
];
</script>

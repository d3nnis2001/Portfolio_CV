<template>
  <div class="flex flex-col text-center md:text-start items-center h-screen">
    <h1 class="text-white mt-5 text-4xl lg:text-5xl xl:text-6xl font-extrabold">
      Skills
    </h1>
    <div class="flex items-center justify-center w-screen lg:h-full">
      <div class="lg:ml-40 xl:ml-60 2xl:ml-80 flex flex-col sm:flex-row w-full justify-center items-center px-4">
        <ProjectCard
            v-bind="lastProject"
            class="w-1/2 max-w-md order-2 md:mr-20 xl:mr-24 2xl:mr-28 mt-10 sm:mt-0 sm:order-1"
        />
        <SkillSection
            class="w-1/2 lg:ml-20 xl:ml-24 2xl:ml-28 order-1 sm:order-2"
        />
      </div>
    </div>
    <NavigationImpressum :filled-dots="[5]" class="mt-auto mb-8" />
  </div>
</template>

<script setup>
import ProjectCard from "@/components/Projects/ProjectCard.vue";
import NavigationImpressum from "@/components/Hero/NavigationImpressum.vue";
import SkillSection from "@/components/Skills/SkillSection.vue";
import geoguesser from "@/assets/icons/GeoGuesser.svg";
import {useI18n} from "vue-i18n";

const {t} = useI18n();
const description = t("project_text_4");

const lastProject = {
  name: "GeoGuesser",
  link: "https://github.com/d3nnis2001/GeoGuessr",
  desc: description,
  picture: geoguesser,
  size: 337,
};
</script>

<style scoped>
</style>

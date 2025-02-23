<template>
  <div class="flex flex-col text-center md:text-start items-center h-screen w-screen">
    <div class="flex items-center justify-center">
      <div class="lg:ml-40 flex flex-col sm:flex-row w-full justify-center items-center px-4">
        <ProjectCard v-bind="lastProject" class="w-1/2 max-w-md order-2 md:mr-20 mt-10 sm:mt-0 sm:order-1" />
        <SkillSection class="w-1/2 lg:ml-20 order-1 sm:order-2"/>
      </div>
    </div>
    <NavigationImpressum :filled-dots="[5]" class="mt-auto mb-8" />
  </div>
</template>

<script setup>
import ProjectCard from "@/components/Projects/ProjectCard.vue";
import NavigationImpressum from "@/components/Hero/NavigationImpressum.vue";
import SkillSection from "@/components/Skills/SkillSection.vue";
import geoguesser from "@/assets/icons/GeoGuesser.svg"
import {useI18n} from "vue-i18n";
const { t } = useI18n()

const description = t("project_text_4");
const lastProject = {name: "GeoGuesser", link: "https://github.com/d3nnis2001/GeoGuessr", desc: description, picture: geoguesser, size: 337};

</script>

<style scoped>

</style>
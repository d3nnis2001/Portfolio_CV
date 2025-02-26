<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <div class="flex flex-col justify-center w-screen flex-grow">
      <div class="flex flex-col sm:flex-row justify-around">
        <ProjectCard v-bind="projects[0]" class="order-2 sm:order-1"/>
        <div class="flex flex-col justify-center order-1 sm:order-2 items-center">
          <h1 class="text-white/95 font-extrabold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-14 xl:mb-24 mt-10 sm:mt-0">{{ t("project_text_5") }}</h1>
          <ProjectCard v-bind="projects[1]" />
        </div>
        <ProjectCard v-bind="projects[2]" class="order-3" />
      </div>
    </div>
    <NavigationImpressum :filled-dots="[4]" class="mb-8"/>
  </div>
</template>

<script setup>
import ProjectCard from "@/components/Projects/ProjectCard.vue";
import NavigationImpressum from "@/components/Hero/NavigationImpressum.vue";
import chendless from "@/assets/icons/CHendLess.png";
import mmaps from "@/assets/icons/MMaps.png"
import gmlvqglvq from "@/assets/icons/GMLVQGLVQ.svg";
import {useI18n} from "vue-i18n";
const { t } = useI18n()

const descriptions = [t("project_text_1"),
                      t("project_text_2"),
                      t("project_text_3")
]
const projects = [{name: "Prototype-based sEMG signal classification", link: "https://github.com/d3nnis2001/Prototype-based-sEMG-signal-classification-with-CNet2D", desc: descriptions[0], picture: gmlvqglvq, size: 337},
                  {name: "M-Maps", link: "https://github.com/d3nnis2001/M-Maps", desc: descriptions[1], picture: mmaps, size: 280},
                  {name: "CHendLess", link: "https://github.com/d3nnis2001/CHendLess", desc: descriptions[2], picture: chendless, size: 300},
]
</script>

<style>

</style>
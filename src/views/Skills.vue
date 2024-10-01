<template>
  <div class="flex flex-col justify-around h-screen w-screen">
    <div class="flex flex-row w-full flex-grow justify-between items-start">
      <ProjectCard v-bind="lastProject" class="w-1/2 h-5/6 justify-end items-center text-start  "/>
      <SkillSection class="w-1/2"/>
    </div>
    <NavigationImpressum :filled-dots="[5]" class="mb-8 justify-center"/>
  </div>
</template>

<script setup>
import ProjectCard from "@/components/Projects/ProjectCard.vue";
import NavigationImpressum from "@/components/Hero/NavigationImpressum.vue";
import SkillSection from "@/components/Skills/SkillSection.vue";

const description = "Hello";
const lastProject = {name: "Algorithmic Trading", link: "https://www.github.com", desc: description, picture: "", size: 337};

</script>

<style scoped>

</style>
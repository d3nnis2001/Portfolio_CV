<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <div class="flex flex-col justify-center w-screen flex-grow">
      <div class="flex flex-col sm:flex-row justify-around">
        <ProjectCard v-bind="projects[0]" class="order-2 sm:order-1"/>
        <div class="flex flex-col justify-center order-1 sm:order-2 items-center">
          <h1 class="text-white/95 font-extrabold text-4xl mb-14 mt-10 sm:mt-0">Projects</h1>
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

const descriptions = ["This project uses CNet2D with GLVQ and GMLVQ to classify sEMG signals efficiently, optimized for few-shot learning with Ninapro and Nearlab datasets.",
                      "M-Maps is a university project developed in collaboration with Deutsche Bahn. It is a web application that records railway conditions and streamlines the creation and tracking of repair orders.",
                      "CHendLess is a web app that helps you find cheaper alternatives for any product. Just upload an image, and it shows you similar items at the best prices."
]
const projects = [{name: "Prototype-based sEMG signal classification", link: "https://github.com/d3nnis2001/Prototype-based-sEMG-signal-classification-with-CNet2D", desc: descriptions[0], picture: "../icons/GMLVQGLVQ.png", size: 337},
                  {name: "M-Maps", link: "https://github.com/d3nnis2001/M-Maps", desc: descriptions[1], picture: "../icons/Discord.svg", size: 280},
                  {name: "CHendLess", link: "https://github.com/d3nnis2001/CHendLess", desc: descriptions[2], picture: "", size: 300},
]
</script>

<style>

</style>
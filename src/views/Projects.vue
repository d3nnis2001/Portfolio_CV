<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <div class="flex flex-col justify-center w-screen flex-grow">
      <div class="flex flex-row justify-around">
        <ProjectCard v-bind="projects[0]" />
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-white/95 font-extrabold text-4xl mb-14">Projects</h1>
          <ProjectCard v-bind="projects[1]" />
        </div>
        <ProjectCard v-bind="projects[2]" />
      </div>
    </div>
    <NavigationImpressum :filled-dots="[4]" class="mb-8"/>
  </div>
</template>

<script setup>
import ProjectCard from "@/components/Projects/ProjectCard.vue";
import NavigationImpressum from "@/components/Hero/NavigationImpressum.vue";

const descriptions = ["No Code Workflow Environment where\n" +
                      "you can manage automate\n" +
                      "your jobs without much effort",
                      "Project from the Deutsche Bahn, where\n" +
                      "we build a Web application to track\n" +
                      "Gleislagedaten usw. ",
                      "Dropshipping destroyer where it searches\n" +
                      "for same product via feature distance\n" +
                      "mstching and so on and so on beautiful\n" +
                      "design and so on."
]
const projects = [{name: "Triggerflow", link: "https://www.github.com", desc: descriptions[0], picture: "", size: 337},
                  {name: "M-Maps", link: "https://www.github.com", desc: descriptions[1], picture: "Link to picturre", size: 280},
                  {name: "ChendLess", link: "https://www.github.com", desc: descriptions[2], picture: "Link to picturre", size: 300},
]
</script>

<style>

</style>
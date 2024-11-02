<template>
  <div class="flex flex-col h-screen w-screen">
    <div class="flex flex-row h-3/4 mt-10">
      <div class="flex flex-col justify-around w-1/2 text-start">
        <h1 class="text-3xl font-extrabold text-white/80 ml-40">Education</h1>
        <div v-for="(item, index) in education" :key="index" class="ml-40">
          <WorkCard :text="item.desc" :heading="item.name" :year="item.year" />
        </div>
        <h1 class="text-3xl font-extrabold text-white/80 ml-40">Work</h1>
        <div v-for="(item, index) in work" :key="index" class="ml-40">
          <WorkCard :text="item.desc" :heading="item.name" :year="item.year" />
        </div>
      </div>
      <HobbyCard class="w-1/2 justify-center items-end"/>
    </div>
    <NavigationImpressum :filled-dots="[3]" class="mb-8 mt-auto"/>
  </div>
</template>

<script setup>
import WorkCard from "@/components/About/WorkCard.vue";
import HobbyCard from "@/components/About/HobbyCard.vue";
import NavigationImpressum from "@/components/Hero/NavigationImpressum.vue";

const education = [
  {year: "2018-2021", name: "Abitur", desc: "Math and Computer Science | CSBWV"},
  {year: "2021-2025", name: "Bachelor of Science", desc: "Cognitive Computer Science | Universität Bielefeld"}
]

const work = [
  {year: "2019-2022", name: "Part-time Job  ", desc: "Marktkauf Oldentrup"},
  {year: "2022-Today", name: "Technical Consultant", desc: "Working Student | Triggeryou GmbH"}
];
</script>

<style scoped>

</style>

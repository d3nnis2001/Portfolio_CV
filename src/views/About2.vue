<template>
  <div class="flex flex-col h-screen w-screen justify-center items-center">
    <div class="grid grid-cols-2 grid-rows-2 gap-y-4 gap-x-6 mt-10 w-3/4">

      <div class="w-full flex flex-col items-center">
        <h1 class="text-4xl font-extrabold text-white/80 mb-14 text-center">Education</h1>
        <div class="border-4 background-color background-color-low rounded-xl p-6 h-full flex items-center">
          <WorkCard :text="education[0].desc" :heading="education[0].name" :year="education[0].year" />
        </div>
      </div>

      <div class="w-full flex flex-col items-center">
        <h1 class="text-4xl font-extrabold text-white/80 mb-14 text-center">Work</h1>
        <div class="border-4 background-color background-color-low rounded-xl p-6 h-full flex items-center">
          <WorkCard :text="work[0].desc" :heading="work[0].name" :year="work[0].year" />
        </div>
      </div>

      <div class="w-full flex items-center">
        <div class="border-4 background-color background-color-low rounded-xl p-6 h-full flex items-center">
          <WorkCard :text="education[1].desc" :heading="education[1].name" :year="education[1].year" />
        </div>
      </div>

      <div class="w-full flex items-center">
        <div class="border-4 background-color background-color-low rounded-xl p-6 h-full flex items-center">
          <WorkCard :text="work[1].desc" :heading="work[1].name" :year="work[1].year" />
        </div>
      </div>
    </div>
    <NavigationImpressum :filled-dots="[3]" class="mb-8 mt-auto"/>
  </div>
</template>

<script setup>
import WorkCard from "@/components/About/WorkCard.vue";
import NavigationImpressum from "@/components/Hero/NavigationImpressum.vue";

const education = [
  {
    year: "2018-2021",
    name: "Abitur",
    desc: "Major in Computer Science & Mathematics – My first exposure to object-oriented programming, SQL, and software development fundamentals. (Carl-Severing-Berufskolleg)"
  },
  {
    year: "2021-2025",
    name: "Bachelor of Science – Cognitive Computer Science",
    desc: "Gained in-depth knowledge of Data Science, AI, and Agile Software Engineering. Bachelor Thesis: Prototype-based Convolutional Neural Networks for EMG Signal Classification. (University of Bielefeld)"
  }
];

const work = [
  {
    year: "2019-2022",
    name: "Part-time Job – Marktkauf Oldentrup",
    desc: "Worked alongside my studies, gaining practical experience in teamwork and responsibility."
  },
  {
    year: "2022-Today",
    name: "Technical Consultant – Triggeryou GmbH (Working Student)",
    desc: "Developing interfaces and automation using a no-code environment from Diamont Software GmbH. Working extensively with REST APIs and SQL to optimize customer solutions."
  }
];

</script>

<style scoped>

.background-color {
  border-color: rgba(253, 111, 0, 0.2);
}
.background-color-low {
  background: rgba(253, 111, 0, 0.02);
}

</style>

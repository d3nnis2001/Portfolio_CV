<template>
  <div class="flex flex-col h-screen w-screen  items-center">
    <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:grid-rows-2 gap-x-6 mt-10 w-3/4 mb-6 lg:mb-0">
      <TimelineItem header="Education" :item="education[0]" class="order-1" />
      <TimelineItem header="Work" :item="work[0]" class="order-3 sm:order-2"/>
      <TimelineItem :item="education[1]" class="order-2 sm:order-3"/>
      <TimelineItem :item="work[1]" class="order-4"/>
    </div>
    <NavigationImpressum :filled-dots="[3]" class="mb-8 mt-auto" />
  </div>
</template>

<script setup>
import TimelineItem from "@/components/About/TimelineItem.vue";
import NavigationImpressum from "@/components/Hero/NavigationImpressum.vue";

const education = [
  {
    year: "2018-2021",
    name: "Abitur",
    desc: "Major in Computer Science & Mathematics – My first exposure to object-oriented programming, SQL, and software development fundamentals. (Carl-Severing-Berufskolleg)",
  },
  {
    year: "2021-2025",
    name: "Bachelor of Science – Cognitive Computer Science",
    desc: "Gained in-depth knowledge of Data Science, AI, and Agile Software Engineering. Bachelor Thesis: Prototype-based Convolutional Neural Networks for EMG Signal Classification. (University of Bielefeld)",
  },
];

const work = [
  {
    year: "2019-2022",
    name: "Part-time Job – Marktkauf Oldentrup",
    desc: "Worked alongside my studies, gaining practical experience in teamwork and responsibility.",
  },
  {
    year: "2022-Today",
    name: "Technical Consultant – Triggeryou GmbH (Working Student)",
    desc: "Developing interfaces and automation using a no-code environment from Diamont Software GmbH. Working extensively with REST APIs and SQL to optimize customer solutions.",
  },
];
</script>

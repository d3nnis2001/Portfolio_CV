<template>
  <div class="flex flex-col h-screen items-center">
    <h1 class="text-5xl font-extrabold text-white">About Me</h1>
    <div class="flex flex-row w-screen h-10">
      <img src="../components/icons/Person.svg" alt="Arrow" class="person w-1/2" />
      <RightCard class="w-1/2"/>
    </div>
    <NavigationImpressum class="mt-auto mb-8 flex justify-center" :filled-dots="[2]"/>
  </div>
</template>

<script setup>
import RightCard from "../components/About/RightCard.vue"
import NavigationImpressum from "@/components/Hero/NavigationImpressum.vue";

</script>

<style>

.person {
  height: 30rem;
}

</style>



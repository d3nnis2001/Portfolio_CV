<template>
  <div class="flex flex-col h-screen w-screen">
    <h1 class="text-4xl lg:text-5xl font-extrabold flex justify-center mt-10 text-white">About Me</h1>
    <div class="flex flex-col items lg:flex-row h-full w-screen">
      <div class="flex flex-col lg:w-1/2">
        <LeftCard class="w-10/12 mx-auto lg:mx-20"/>
      </div>
      <HobbyCard class="lg:w-1/2 h-full justify-center items-end"/>
    </div>
    <NavigationImpressum class="mt-auto mb-8 flex justify-center" :filled-dots="[2]"/>
  </div>
</template>

<script setup>
import LeftCard from "../components/About/LeftCard.vue"
import NavigationImpressum from "@/components/Hero/NavigationImpressum.vue";
import HobbyCard from "@/components/About/HobbyCard.vue";

</script>

<style>

.person {
  height: 35rem;
}

</style>



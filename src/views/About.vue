<template>
  <div class="flex flex-col h-screen items-center">
    <div class="flex flex-row w-screen">
      <div class="flex flex-col items-center w-1/2">
        <h1 class="text-5xl font-extrabold text-white">About Me</h1>
        <img src="../components/icons/Person.svg" alt="Arrow" class="person" />
      </div>
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
  height: 35rem;
}

</style>



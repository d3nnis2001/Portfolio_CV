<template>
  <div class="flex flex-col h-screen w-screen">
    <Navbar class="mt-10"/>
    <div class="flex-grow flex items-center justify-center">
      <MainSection />
    </div>
    <NavigationImpressum class="mb-8 ml-8 flex justify-center" :filledDots="[1]" />
  </div>
</template>

<script setup>
import Navbar from "@/components/Hero/Navbar.vue";
import MainSection from "@/components/Hero/MainSection.vue";
import NavigationImpressum from "@/components/Hero/NavigationImpressum.vue";

defineEmits(['navigate']);
</script>

<style>

</style>
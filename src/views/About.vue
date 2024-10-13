<template>
  <div class="flex flex-col h-screen items-center">
    <h1 class="text-5xl font-extrabold text-white">About Me</h1>
    <TimeLine class="w-screen h-screen"/>
    <NavigationImpressum class="mt-auto mb-8 flex justify-center" :filled-dots="[2]"/>
    <NavigationArrow direction="right" @navigate="$emit('navigate', 'right')" />
  </div>
</template>

<script setup>
import TimeLine from "@/components/About/TimeLine.vue";
import NavigationImpressum from "@/components/Hero/NavigationImpressum.vue";
import NavigationArrow from "@/components/NavigationArrow.vue";

defineEmits(['navigate']);

</script>

<style>
</style>



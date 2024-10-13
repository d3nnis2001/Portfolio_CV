<template>
  <div class="flex flex-col min-h-screen">
    <Navbar class="mt-5 mb-24" />
    <div class="flex-grow flex flex-col">
      <div class="flex flex-row justify-center flex-grow">
        <div class="flex flex-col">
          <TextPart />
          <Socials />
          <div class="flex flex-row items-center mt-14">
            <ContactButton class="mr-8" />
            <DownloadCVButton />
          </div>
        </div>
        <Picture class="ml-10" />
      </div>
      <NavigationImpressum class="mt-auto mb-8 flex justify-center" :filledDots="[1]" />
    </div>
    <NavigationArrow direction="right" @navigate="$emit('navigate', 'right')" />
  </div>
</template>

<script setup>
import Navbar from "@/components/Hero/Navbar.vue";
import DownloadCVButton from "@/components/Hero/DownloadCVButton.vue";
import Picture from "@/components/Hero/Picture.vue";
import Socials from "@/components/Hero/Socials.vue"
import TextPart from "@/components/Hero/TextPart.vue";
import ContactButton from "@/components/Hero/ContactButton.vue";
import NavigationImpressum from "@/components/Hero/NavigationImpressum.vue";
import NavigationArrow from "@/components/NavigationArrow.vue";

defineEmits(['navigate']);
</script>

<style>
</style>
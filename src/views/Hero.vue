<template>
  <div class="flex flex-col">
    <Navbar class="mt-5 mb-24 "/>
    <div class="flex flex-row justify-center">
      <div class="flex flex-col">
        <TextPart/>
        <Socials/>
        <div class="flex flex-row items-center mt-14">
          <ContactButton class="mr-8"/>
          <DownloadCVButton/>
        </div>
      </div>
      <Picture class="ml-10"/>
    </div>
    <NavigationImpressum class="flex justify-center" :filledDots="[1]"/>
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

</script>

<style>

</style>
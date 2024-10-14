<template>
  <div class="flex flex-col justify-center">
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
  </div>
</template>

<script setup>

import Picture from "@/components/Hero/Picture.vue";
import Socials from "@/components/Hero/Socials.vue";
import DownloadCVButton from "@/components/Hero/DownloadCVButton.vue";
import TextPart from "@/components/Hero/TextPart.vue";
import ContactButton from "@/components/Hero/ContactButton.vue";
</script>

<style scoped>

</style>
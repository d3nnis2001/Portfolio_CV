<template>
  <div class="flex flex-col justify-center">
    <div class="flex flex-col lg:flex-row justify-center items-center flex-grow">
      <div class="flex flex-col lg:items-start items-center">
        <div>
          <TextPart class="" />
          <Socials class=""/>
          <div class="flex flex-row items-center mt-8 lg:mt-14 xl:mt-20">
            <ContactButton class="mr-8 xl:mr-12" />
            <DownloadCVButton />
          </div>
        </div>
      </div>
      <Picture class="order-first lg:order-last lg:ml-10" />
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
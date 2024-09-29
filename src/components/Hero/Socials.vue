<template>
  <div class="flex flex-row mt-5">
    <SocialCircle class="circleOption">
      <img src="../icons/Linkedin.svg" alt="LinkedIn" class="w-5 h-5" />
    </SocialCircle>
    <SocialCircle class="circleOption">
      <img src="../icons/Instagram.svg" alt="Instagram" class="w-5 h-5" />
    </SocialCircle>
    <SocialCircle class="circleOption">
      <img src="../icons/Discord.svg" alt="Discord" class="w-5 h-5" />
    </SocialCircle>
    <SocialCircle class="circleOption">
      <img src="../icons/Xing.svg" alt="Xing" class="w-5 h-5" />
    </SocialCircle>
  </div>
</template>

<script setup>
import SocialCircle from "./SocialCircle.vue";

</script>

<style>
.circleOption {
  margin-right: 20px;
}
</style>
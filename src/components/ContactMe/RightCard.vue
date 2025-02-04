<template>
  <div class="flex flex-col justify-center">
    <p class="text-4xl text-white/50 font-bold text-end mb-8">Direct Contact</p>
    <div class="background-c p-4 h-80 justify-around flex flex-col rounded-xl items-end">
      <div class="divOptions">
        <p class="stand">
          +49 1590 6741594
        </p>
        <SocialCircle class="circleOption">
          <img src="../icons/Phone.svg" alt="Phone" class="w-6 h-6" />
        </SocialCircle>
      </div>
      <div class="divOptions">
        <p class="stand">
          Germany, Bielefeld
        </p>
        <SocialCircle class="circleOption">
          <img src="../icons/GPS.svg" alt="GPS" class="w-6 h-6" />
        </SocialCircle>
      </div>
      <div class="divOptions">
        <p class="stand">
          dennisschielke1@gmail.com
        </p>
        <SocialCircle class="circleOption">
          <img src="../icons/Mail.svg" alt="Mail" class="w-6 h-6" />
        </SocialCircle>
      </div>
    </div>
  </div>
</template>

<script setup>
import SocialCircle from "@/components/Hero/SocialCircle.vue";

</script>

<style>

.divOptions {
  display: flex;
  flex-direction: row;
}

.background-c {
  background: rgba(255,255,255,0.02);
}

.stand {
  font-size: 30px;
  font-weight: inherit;
  color: rgba(255,255,255,0.75);
  padding-right: 40px;
}

.circleOption {
  margin-right: 20px;
}

</style>
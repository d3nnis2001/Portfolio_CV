<template>
  <div class="flex flex-col">
    <div class="recback rounded-l-3xl w-3/5 flex flex-col height_test items-center p-6">
      <h2 class="orangeMain font-extrabold text-5xl hobby-title">Hobbies</h2>
      <div class="flex flex-col h-full justify-around">
        <div v-for="(hobby, index) in hobbies" :key="index" class="">
          <HobbyIconText :name="hobby.name">
            <img :src="hobby.picture" alt="" class="icon-image" />
          </HobbyIconText>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HobbyIconText from "@/components/About/HobbyIconText.vue";

import hobbyCodeImage from "@/assets/icons/hobby_code.svg";
import hobbyWeightImage from "@/assets/icons/hobby_weight.svg";
import hobbyGamingImage from "@/assets/icons/hobby_gaming.svg";
import hobby3DImage from "@/assets/icons/hobby_3d.svg";
import hobbyMusicImage from "@/assets/icons/hobby_music.svg";

const hobbies = [
  { name: "Coding", picture: hobbyCodeImage },
  { name: "Gym", picture: hobbyWeightImage },
  { name: "Gaming", picture: hobbyGamingImage },
  { name: "3D Printing", picture: hobby3DImage },
  { name: "Music", picture: hobbyMusicImage },
];
</script>

<style>

.recback {
  background: rgba(217,217,217,0.03);
  z-index: 1;
}
.hobby-title {
  position: relative;
  z-index: -10;
  margin-top: -50px;
}

.icon-image {
  width: 48px;
  height: 48px;
}

.height_test {
  height: 85%;
}

.orangeMain {
  color: #FD6F00;
}
</style>
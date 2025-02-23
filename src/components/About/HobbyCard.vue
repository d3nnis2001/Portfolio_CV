<template>
  <div class="flex flex-col">
    <div class="recback rounded-l-3xl lg:w-3/5 flex flex-col height_test items-center p-6">
      <h2 class="orangeMain font-extrabold text-3xl lg:text-5xl hobby-title">Hobbys</h2>
      <div class="flex flex-col h-full justify-around">
        <div v-for="(hobby, index) in hobbies" :key="index" class="">
          <HobbyIconText :name="hobby.name">
            <img :src="hobby.picture" alt="" class="h-8 md:h-10 lg:h-12 w-8 md:w-10 lg:w-12" />
          </HobbyIconText>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HobbyIconText from "@/components/About/HobbyIconText.vue";
import {useI18n} from "vue-i18n";
const { t } = useI18n()

import hobbyCodeImage from "@/assets/icons/hobby_code.svg";
import hobbyWeightImage from "@/assets/icons/hobby_weight.svg";
import hobbyGamingImage from "@/assets/icons/hobby_gaming.svg";
import hobby3DImage from "@/assets/icons/hobby_3d.svg";
import hobbyMusicImage from "@/assets/icons/hobby_music.svg";

const hobbies = [
  { name: t('hobby_code'), picture: hobbyCodeImage },
  { name: t('hobby_weight'), picture: hobbyWeightImage },
  { name: t('hobby_gaming'), picture: hobbyGamingImage },
  { name: t('hobby_3d'), picture: hobby3DImage },
  { name: t('hobby_music'), picture: hobbyMusicImage },
];
</script>

<style>

.recback {
  background: rgba(217,217,217,0.03);
}
.hobby-title {
  position: relative;
  margin-top: -50px;
}

.icon-image {
  width: 48px;
  height: 48px;
}

.icon-image-med {
  width: 40px;
  height: 40px;
}

.icon-image-small {
  width: 30px;
  height: 30px;
}

.height_test {
  height: 85%;
}

.orangeMain {
  color: #FD6F00;
}
</style>
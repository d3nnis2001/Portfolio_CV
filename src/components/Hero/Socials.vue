<template>
  <div class="flex flex-row mt-5">
    <SocialCircle class="circleOption" link="https://www.linkedin.com/in/dennis-schielke/">
      <img src="../icons/Linkedin.svg" alt="LinkedIn" class="w-5 h-5" />
    </SocialCircle>
    <SocialCircle class="circleOption" link="https://leetcode.com/u/d3nnis2001/">
      <img src="../icons/Leetcode.svg" alt="Leetcode" class="w-5 h-5" />
    </SocialCircle>
    <SocialCircle class="circleOption" @click="copyDiscordTag">
      <img src="../icons/Discord.svg" alt="Discord" class="w-5 h-5" />
    </SocialCircle>
    <SocialCircle class="circleOption" link="https://www.xing.com/profile/Dennis_Schielke3">
      <img src="../icons/Xing.svg" alt="Xing" class="w-5 h-5" />
    </SocialCircle>
  </div>
  <transition name="fade">
    <div v-if="copied" class="fixed bottom-5 right-5 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
      {{ t("hero_text_3") }}
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'
import SocialCircle from './SocialCircle.vue'
import {useI18n} from "vue-i18n";
const { t } = useI18n();

const discordTag = "descy"

const copied = ref(false)

function copyDiscordTag() {
  navigator.clipboard.writeText(discordTag)
      .then(() => {
        copied.value = true
        setTimeout(() => {
          copied.value = false
        }, 2000)
      })
      .catch(err => {
        console.error("Fehler beim Kopieren:", err)
      })
}
</script>

<style scoped>
.circleOption {
  margin-right: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
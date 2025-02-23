<template>
  <div class="grid grid-cols-[1fr,auto,1fr] items-center gap-4">
    <div class="flex justify-end">
      <span
          class="text-[20px] sm:text-[25px] font-extrabold text-orange-500 cursor-pointer hover:underline hover:text-orange-400 transition-colors duration-300"
          @click="navigateToImpressum"
      >
        Impressum
      </span>
    </div>
    <div class="w-[3px] h-10 sm:h-16 bg-white bg-opacity-25 rounded-full"></div>
    <div class="flex justify-start">
      <div class="grid grid-cols-3 gap-2 sm:gap-4">
        <div
            v-for="dot in 6"
            :key="dot"
            :class="[
            'w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 cursor-pointer hover:scale-110',
            filledDots.includes(dot)
              ? 'bg-orange-500'
              : 'border border-orange-500 hover:bg-orange-500 hover:border-transparent'
          ]"
            @click="navigateToDot(dot)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToImpressum = () => {
  router.push("/impressum");
};

const navigateToDot = (dot) => {
  if (dot === 1) {
    router.push("/");
  } else if (dot === 2) {
    router.push("/about");
  } else if (dot === 3) {
    router.push("/about2");
  } else if (dot === 4) {
    router.push("/projects");
  } else if (dot === 5) {
    router.push("/skills");
  } else {
    router.push("/contact")
  }
};

const props = defineProps({
  filledDots: {
    type: Array,
    default: () => [],
    validator: (value) => value.every(v => v >= 1 && v <= 6)
  }
});
</script>

<style scoped>
</style>

<template>
  <div>
    <div class="fixed top-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3 text-center transition-opacity duration-500"
         :class="{ 'opacity-0': hideIntro }"
         v-if="showIntro">
      <p class="text-sm md:text-base">
        {{ isMobile ? 'Tippen Sie die Bildschirmränder für Navigation' : 'Bewegen Sie die Maus zu den Bildschirmrändern für Navigationspfeile' }}
        <button @click="dismissIntro" class="ml-2 text-blue-300 underline">Verstanden</button>
      </p>
    </div>

    <div v-if="!isMobile" class="fixed inset-0 pointer-events-none">
      <Transition
          v-for="direction in directions"
          :key="direction"
          enter-active-class="transition-opacity duration-300 ease-in"
          leave-active-class="transition-opacity duration-300 ease-out"
          enter-from-class="opacity-0"
          leave-to-class="opacity-0"
      >
        <div
            v-if="isArrowVisible(direction)"
            :class="[
              'absolute flex items-center justify-center w-16 h-16 bg-black bg-opacity-30 text-white rounded-full cursor-pointer pointer-events-auto transition-transform duration-300 ease-in-out hover:scale-110',
              positionClasses(direction)
            ]"
            @click="navigate(direction)"
        >
          <component :is="arrowIcon(direction)" class="w-10 h-10"/>
        </div>
      </Transition>
    </div>

    <div v-if="isMobile" class="fixed inset-0 pointer-events-none">
      <div v-for="direction in directions"
           :key="direction"
           :class="[
             'absolute flex items-center justify-center pointer-events-auto transition-transform duration-300 ease-in-out active:scale-110',
             mobilePositionClasses(direction)
           ]"
           @click="navigate(direction)">
        <div class="w-12 h-12 flex items-center justify-center">
          <component :is="arrowIcon(direction)" class="w-8 h-8 text-white bg-black bg-opacity-30 p-1 rounded-full"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const props = defineProps({
  directions: {
    type: Array,
    default: () => ['up', 'down', 'left', 'right'],
    validator: (value) => value.every(dir => ['up', 'down', 'left', 'right'].includes(dir))
  },
  routes: {
    type: Object,
    required: true
  },
  introTimeout: {
    type: Number,
    default: 5000
  }
});

const router = useRouter();

const isMobile = ref(false);
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

const mouseX = ref(0);
const mouseY = ref(0);
const windowWidth = ref(window.innerWidth);
const windowHeight = ref(window.innerHeight);

const showIntro = ref(true);
const hideIntro = ref(false);
const dismissIntro = () => {
  hideIntro.value = true;
  setTimeout(() => {
    showIntro.value = false;
  }, 500);

  localStorage.setItem('navigationIntroSeen', 'true');
};

const updateMousePosition = (event) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};

const updateWindowSize = () => {
  windowWidth.value = window.innerWidth;
  windowHeight.value = window.innerHeight;
  checkMobile();
};

onMounted(() => {
  if (localStorage.getItem('navigationIntroSeen') === 'true') {
    showIntro.value = false;
  } else {
    setTimeout(() => {
      hideIntro.value = true;
      setTimeout(() => {
        showIntro.value = false;
      }, 500);
    }, props.introTimeout);
  }

  window.addEventListener('mousemove', updateMousePosition);
  window.addEventListener('resize', updateWindowSize);
  checkMobile();
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMousePosition);
  window.removeEventListener('resize', updateWindowSize);
});

const isArrowVisible = (direction) => {
  const fifthWidth = windowWidth.value / 5;
  const fifthHeight = windowHeight.value / 5;

  switch (direction) {
    case 'up':
      return mouseY.value < fifthHeight;
    case 'down':
      return mouseY.value > windowHeight.value - fifthHeight;
    case 'left':
      return mouseX.value < fifthWidth;
    case 'right':
      return mouseX.value > windowWidth.value - fifthWidth;
    default:
      return false;
  }
};

const positionClasses = (direction) => {
  switch (direction) {
    case 'up':
      return 'top-5 left-1/2 -translate-x-1/2';
    case 'down':
      return 'bottom-5 left-1/2 -translate-x-1/2';
    case 'left':
      return 'left-5 top-1/2 -translate-y-1/2';
    case 'right':
      return 'right-5 top-1/2 -translate-y-1/2';
    default:
      return '';
  }
};

const mobilePositionClasses = (direction) => {
  switch (direction) {
    case 'up':
      return 'top-0 left-0 right-0 h-20';
    case 'down':
      return 'bottom-0 left-0 right-0 h-20';
    case 'left':
      return 'left-0 top-0 bottom-0 w-20';
    case 'right':
      return 'right-0 top-0 bottom-0 w-20';
    default:
      return '';
  }
};

const arrowIcon = (direction) => {
  switch (direction) {
    case 'up':
      return ChevronUp;
    case 'down':
      return ChevronDown;
    case 'left':
      return ChevronLeft;
    case 'right':
      return ChevronRight;
    default:
      return null;
  }
};

const navigate = (direction) => {
  const route = props.routes[direction];
  if (route) {
    router.push(route);
  }
};
</script>
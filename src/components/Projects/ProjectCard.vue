<template>
  <div class="flex flex-col items-center" :style="cardStyle">
    <div class="project-card-image border-4 rounded-2xl border-orange-500 mb-10 overflow-hidden">
      <img :src="picture" :alt="name" class="w-full h-full object-cover" />
    </div>
    <div class="w-full max-w-[var(--card-size)]">
      <h1 class="relative font-extrabold text-2xl sm:text-4xl text-white/80 mb-5">
        <a
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            class="float-right ml-4 transition-transform duration-300 hover:scale-125"
        >
          <img src="../icons/Github.svg" alt="Github" class="w-6 h-6 sm:w-10 sm:h-10" />
        </a>
        {{ name }}
      </h1>
    </div>
    <p class="project-card-desc font-medium text-sm sm:text-base text-white/60 text-left">
      {{ desc }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    name: String,
    link: String,
    desc: String,
    picture: String,
    size: {
      type: Number,
      default: 320
    }
  },
  computed: {
    cardStyle() {
      return {
        '--card-size': `${this.size}px`
      }
    }
  }
}
</script>

<style scoped>
.project-card-image {
  width: var(--card-size);
  height: var(--card-size);
  border-color: #f97316;
  animation: pulseBorder 5s ease-in-out infinite;
  transition: transform 0.3s ease;
}

.project-card-image:hover {
  transform: scale(1.05);
}

.project-card-desc {
  width: var(--card-size);
}

@keyframes pulseBorder {
  0%, 100% {
    border-color: rgba(249, 170, 22, 1);
  }
  50% {
    border-color: rgba(249, 100, 22, 0.5);
  }
}

@media (max-width: 640px) {
  .project-card-image {
    width: calc(var(--card-size) * 0.75);
    height: calc(var(--card-size) * 0.75);
  }
  .project-card-desc {
    width: calc(var(--card-size) * 0.75);
  }
}
</style>

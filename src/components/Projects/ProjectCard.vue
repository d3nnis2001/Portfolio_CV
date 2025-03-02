<template>
  <div class="flex flex-col items-center" :style="cardStyle">
    <div class="project-card-image-wrapper bg-white/5 mb-4 lg:mb-6 relative">
      <div class="project-card-image cursor-pointer" @click="navigateToGithub">
        <img :src="picture" :alt="name" class="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
      </div>
      <div class="border-effect"></div>
      <div class="glow-effect"></div>
    </div>
    <div class="project-card-text">
      <h1 class="relative font-extrabold text-2xl sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-white/80 mb-2 lg:mb-3">
        <a
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            class="float-right ml-4 transition-transform duration-300 hover:scale-125"
        >
          <img src="../icons/Github.svg" alt="Github" class="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 2xl:h-12 2xl:w-12" />
        </a>
        {{ name }}
      </h1>
      <p class="project-card-desc font-medium text-sm sm:text-base lg:text-lg xl:text-lg 2xl:text-xl text-white/60 text-left mb-10 lg:mb-0">
        {{ desc }}
      </p>
    </div>
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
        '--card-size': `${this.size}px`,
        '--lg-card-size': `${this.size * 1.1}px`,
        '--xl-card-size': `${this.size * 1.14}px`,
        '--2xl-card-size': `${this.size * 1.21}px`
      }
    }
  },
  methods: {
    navigateToGithub() {
      if (this.link) {
        window.open(this.link, '_blank', 'noopener,noreferrer');
      }
    }
  }
}
</script>

<style scoped>
.project-card-image-wrapper {
  width: var(--card-size);
  height: var(--card-size);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  position: relative;
}

.project-card-image {
  width: var(--card-size);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.project-card-image img {
  width: 80%;
  height: auto;
  object-fit: cover;
  display: block;
  transform-origin: center;
  transition: transform 0.7s;
}

.border-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(253, 111, 0, 0.3);
  border-radius: 8px;
  z-index: 2;
  pointer-events: none;
}

.glow-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(253, 111, 0, 0.15), transparent 70%);
  opacity: 0;
  transition: opacity 0.8s ease;
  z-index: 0;
}

.project-card-image-wrapper:hover .glow-effect {
  opacity: 1;
  animation: pulse 3s infinite;
}

.project-card-image-wrapper:hover .border-effect {
  animation: borderPulse 3s infinite;
}

@keyframes pulse {
  0% {
    opacity: 0.2;
    transform: scale(0.95);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
  100% {
    opacity: 0.2;
    transform: scale(0.95);
  }
}

@keyframes borderPulse {
  0% {
    border-color: rgba(253, 111, 0, 0.3);
  }
  50% {
    border-color: rgba(253, 111, 0, 0.7);
  }
  100% {
    border-color: rgba(253, 111, 0, 0.3);
  }
}

.project-card-text {
  width: var(--card-size);
}

.project-card-desc {
  width: 100%;
}

@media (max-width: 640px) {
  .project-card-image-wrapper {
    width: calc(var(--card-size) * 0.75);
    height: calc(var(--card-size) * 0.75);
  }
  .project-card-text {
    width: calc(var(--card-size) * 0.75);
  }
}

@media (min-width: 1024px) {
  .project-card-image-wrapper {
    width: var(--lg-card-size);
    height: var(--lg-card-size);
  }
  .project-card-image {
    width: var(--lg-card-size);
    height: auto;
  }
  .project-card-text {
    width: var(--lg-card-size);
  }
}

@media (min-width: 1280px) {
  .project-card-image-wrapper {
    width: var(--xl-card-size);
    height: var(--xl-card-size);
  }
  .project-card-image {
    width: var(--xl-card-size);
    height: auto;
  }
  .project-card-text {
    width: var(--xl-card-size);
  }
}

@media (min-width: 1536px) {
  .project-card-image-wrapper {
    width: var(--2xl-card-size);
    height: var(--2xl-card-size);
  }
  .project-card-image {
    width: var(--2xl-card-size);
    height: auto;
  }
  .project-card-text {
    width: var(--2xl-card-size);
  }
}
</style>
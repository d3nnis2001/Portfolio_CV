<template>
  <div class="flex flex-col items-center" :style="cardStyle">
    <div class="project-card-image-wrapper bg-white/5 mb-4 lg:mb-10 relative">
      <div class="project-card-image overflow-hidden">
        <img :src="picture" :alt="name" class="w-full h-full object-cover" />
      </div>
      <svg class="animated-border" viewBox="0 0 100 100" preserveAspectRatio="none">
        <rect x="0" y="0" width="100" height="100" />
      </svg>
    </div>
    <div class="project-card-text">
      <h1 class="relative font-extrabold text-2xl sm:text-4xl text-white/80 mb-2 lg:mb-5">
        <a
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            class="float-right ml-4 transition-transform duration-300 hover:scale-125"
        >
          <img src="../icons/Github.svg" alt="Github" class="w-8 h-8 sm:w-10 sm:h-10" />
        </a>
        {{ name }}
      </h1>
      <p class="project-card-desc font-medium text-sm sm:text-base text-white/60 text-left mb-10 lg:mb-0">
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
        '--card-size': `${this.size}px`
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
  overflow: hidden;
}

.project-card-image {
  width: var(--card-size);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-card-image img {
  width: 80%;
  height: auto;
  object-fit: cover;
  display: block;
}


.animated-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.animated-border rect {
  fill: none;
  stroke: rgba(253, 111, 0, 0.7);
  stroke-width: 4;
  stroke-dasharray: 100;
  animation: svgAnimation 45s linear infinite;
}

@keyframes svgAnimation {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 1000;
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
</style>

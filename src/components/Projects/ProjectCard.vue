<template>
  <!-- Setze die CSS-Variable --card-size per inline style aus der Prop -->
  <div class="flex flex-col items-center" :style="cardStyle">
    <div class="project-card-image border-4 rounded-2xl border-orange-500 mb-10 overflow-hidden">
      <img :src="picture" :alt="name" class="w-full h-full object-cover" />
    </div>
    <div class="flex flex-row items-center">
      <h1 class="font-extrabold text-2xl sm:text-4xl text-white/80 mr-4 sm:mr-10 mb-5">
        {{ name }}
      </h1>
      <a :href="link" target="_blank" rel="noopener noreferrer">
        <img src="../icons/Github.svg" alt="Github" class="w-6 h-6 sm:w-10 sm:h-10" />
      </a>
    </div>
    <p class="project-card-desc font-medium text-sm sm:text-base text-white/60 text-center">
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
      default: 320 // Standardgröße für größere Bildschirme
    }
  },
  computed: {
    // Setze die CSS-Variable, die in den Styles verwendet wird
    cardStyle() {
      return {
        '--card-size': `${this.size}px`
      }
    }
  }
}
</script>

<style scoped>
/* Nutze die CSS-Variable für die Bild- und Textbreite */
.project-card-image {
  width: var(--card-size);
  height: var(--card-size);
}
.project-card-desc {
  width: var(--card-size);
}

/* Mobile Anpassung: z.B. 75% der Größe */
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

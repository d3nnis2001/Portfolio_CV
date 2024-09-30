<template>
  <div class="flex flex-col">
    <div
        class="border-4 rounded-2xl border-orange-500 mb-10 overflow-hidden"
        :style="{ width: `${size}px`, height: `${size}px` }"
    >
      <img :src="picture" :alt="name" class="w-full h-full object-cover" />
    </div>
    <div class="flex flex-row">
      <h1 class="font-extrabold text-4xl text-white/80 mr-10 mb-5">{{ name }}</h1>
      <a :href="link" target="_blank" rel="noopener noreferrer">
        <img src="../icons/Github.svg" alt="Github" class="w-10 h-10" />
      </a>
    </div>
    <p :style="{ width: `${size}px` }" class="font-medium text-base text-white/60" >{{ desc }}</p>
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
      default: 320 // Default size of 320px (equivalent to w-80 and h-80)
    }
  }
}
</script>
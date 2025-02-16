<template>
  <div class="flex flex-col">
    <h2 class="text-white text-2xl md:text-3xl lg:custom_fontsize mb-4 lg:mb-10 font-semibold">
    Hello There! 👋
    </h2>
    <div class="flex flex-row">
      <div class="color-bg-orange w-3 rounded-lg mr-4"></div>
      <div class="flex flex-col">
        <p class="text-white/80 mb-10 text-xl lg:text-3xl">
          Hi, I’m Dennis – an aspiring AI enthusiast and software engineer.
          I recently graduated from university and am now actively looking for
          opportunities in
          <span class=" text-xl lg:text-3xl color-orange font-semibold">AI, Data Science, or Software Engineering</span>
        </p>
        <p class="text-white/80 text-xl lg:text-3xl">
          Currently, I’m open to exciting job opportunities and collaborations.
          Feel free to connect with me!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.color-orange {
  color: #FD6F00;
}
.color-bg-orange {
  background: rgba(253, 111, 0, 0.5);
}

.custom_fontsize {
  font-size: 40px;
}
</style>
<template>
  <div class="flex flex-col lg:mt-8 xl:mt-10">
    <h2 class="text-white text-2xl md:text-3xl lg:custom_fontsize xl:custom_fontsize_xl mb-4 lg:mb-10 font-semibold">
      Hello There! 👋
    </h2>
    <div class="flex flex-row">
      <div class="color-bg-orange w-3 rounded-lg mr-4 fade-flow"></div>
      <div class="flex flex-col">
        <p class="text-white/80 mb-6 lg:mb-10 text-lg lg:text-3xl xl:text-4xl">
          Hi, I’m Dennis – an aspiring AI enthusiast and software engineer.
          I recently graduated from university and am now actively looking for
          opportunities in
          <span class="text-lg lg:text-3xl xl:text-4xl color-orange font-semibold">
            AI, Data Science, or Software Engineering
          </span>
        </p>
        <p class="text-white/80 text-lg lg:text-3xl xl:text-4xl">
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
  background: rgba(253, 111, 0, 1);
}
@keyframes fadeFlow {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}

.fade-flow {
  animation: fadeFlow 7s infinite;
}
.custom_fontsize {
  font-size: 40px;
}
.custom_fontsize_xl {
  font-size: 48px;
}
</style>

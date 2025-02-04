<template>
  <div class="flex flex-col justify-center items-start relative">
    <p class="text-4xl text-white/50 font-bold mb-8">
      Leave a message
    </p>
    <input
        :placeholder='title'
        class="w-80 pl-4 font-bold h-12 text-lg bg-white/5 mb-8 rounded-xl"
    />
    <div class="relative w-full">
      <textarea
          :placeholder='text'
          class="w-full width-custom bg-white/5 rounded-xl p-4 resize-none text-lg"
      ></textarea>
      <button class="absolute bottom-4 right-4 bg-white/5 text-white/50 font-bold px-6 py-3 rounded-xl">
        Submit
      </button>
    </div>
  </div>
</template>

<script setup>
const title = "Author"
const text = "Message"
</script>

<style scoped>
.width-custom {
  height: 248px;
}

textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
</style>
<template>
  <div class="flex flex-col justify-center items-start relative">
    <p class="text-2xl text-white/50 font-bold mb-8">
      Leave a message
    </p>
    <input :placeholder='title' class="w-80 pl-4 font-bold h-10 text-start bg-white/5 mb-8 rounded-xl"/>
    <div class="relative w-full">
      <textarea
          :placeholder='text'
          class="w-full width-custom bg-white/5 rounded-xl p-4 resize-none"
      ></textarea>
      <button class="absolute bottom-4 right-4 bg-white/5 text-white/50 px-4 py-2 rounded-xl">
        Submit
      </button>
    </div>
  </div>
</template>

<script setup>
const title = "Title"
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
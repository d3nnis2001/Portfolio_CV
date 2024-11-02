<template>
  <div class="flex flex-col justify-around">
    <div class="flex flex-row" v-for="(item, index) in texts" :key="index">
      <img src="../icons/Arrow.svg" alt="Arrow" class="w-5 h-5" />
      <div class="flex flex-col">
        <p class="font-bold ml-4 text-white/90 text-3xl">
          {{ item }}
        </p>
        <ul v-if="item ==='Who?'" class="text-white/80 text-xl space-y-2 list-disc list-inside">
          <li>Dennis Schielke</li>
          <li>23 years old</li>
          <li>Software Developer</li>
        </ul>
        <ul v-if="item ==='What?'" class="text-white/80 text-xl space-y-2 list-disc list-inside">
          <li >Looking for a job in
            <ul class="text-white/80 text-xl space-y-1 list-disc list-inside">
              <li>Software Development</li>
              <li>Data Science</li>
            </ul>
          </li>
        </ul>
        <ul v-if="item ==='Where and When?'" class="text-white/80 text-xl space-y-2 list-disc list-inside">
          <li>All around Germany
            <ul class="text-white/80 text-xl space-y-1 list-disc list-inside">
              <li>Preferably near Bielefeld</li>
            </ul>
          </li>
          <li>Right now</li>
        </ul>
        <ul v-if="item ==='Why Me?'" class="text-white/80 text-xl space-y-2 list-disc list-inside">
          <li>I get the job done</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>

const texts = ["Who?", "What?", "Where and When?", "Why Me?"];
const desc = [""];
</script>

<style scoped>

</style>
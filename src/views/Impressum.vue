<script setup>
</script>

<template>
  <div class="impressum-wrapper">
    <div class="impressum-container p-6 text-white">
      <h1 class="text-3xl font-bold mb-4">Impressum</h1>
      <div class="content text-base leading-relaxed">
        <p>
          Dennis Schielke<br />
          Uelzener Str. 16<br />
          33719 Bielefeld<br />
          Deutschland
        </p>
        <p class="mt-4">
          Telefon: +49 1590 6741594<br />
          E-Mail: <a href="mailto:dennisschielke1@gmail.com" class="underline text-orange-500">dennisschielke1@gmail.com</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.impressum-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.impressum-container {
  background-color: #111;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
}

a {
  color: #ff8c00;
}
</style>

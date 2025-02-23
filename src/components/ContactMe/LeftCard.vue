<template>
  <div class="flex flex-col justify-center items-start relative">
    <p class="text-4xl text-white/50 font-bold mb-8">{{ t('contact_text_1') }}</p>

    <input v-model="form.author" :placeholder="t('contact_text_8')" class="w-80 pl-4 font-bold h-10 text-lg bg-white/5 mb-4 rounded-xl focus:ring-2 focus:ring-white/40 transition" />
    <input v-model="form.recipient" :placeholder="t('contact_text_9')" class="w-80 pl-4 font-bold h-10 text-lg bg-white/5 mb-4 rounded-xl focus:ring-2 focus:ring-white/40 transition" />

    <div class="relative w-full">
      <textarea v-model="form.message" :placeholder="t('contact_text_10')" class="w-full width-custom bg-white/5 rounded-xl p-4 resize-none text-lg focus:ring-2 focus:ring-white/40 transition"></textarea>

      <button
          @click="sendMessage"
          class="absolute bottom-4 right-4 bg-white/5 text-white/50 font-bold px-6 py-3 rounded-xl
               transition-all duration-300 ease-in-out
               hover:bg-white/20 hover:text-white
               active:bg-white/30 active:scale-95"
      >
        {{ t('contact_text_2') }}
      </button>
    </div>

    <p v-if="statusMessage" class="text-white/50 font-bold mt-4">{{ statusMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";
import {useI18n} from "vue-i18n";
const { t } = useI18n()

const form = ref({
  author: "",
  recipient: "",
  message: "",
});

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const statusMessage = ref("");

const sendMessage = () => {
  if (!form.value.author || !form.value.recipient || !form.value.message) {
    statusMessage.value = "All fields are required.";
    return;
  }

  emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: form.value.author,
        reply_to: form.value.recipient,
        message: form.value.message,
      },
      EMAILJS_PUBLIC_KEY
  )
      .then(() => {
        statusMessage.value = "✅ Email sent successfully!";
        form.value = {author: "", recipient: "", message: ""};
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        statusMessage.value = "❌ Failed to send email.";
      });
};
</script>

<style scoped>
.width-custom {
  height: 210px;
}

textarea, input {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
</style>

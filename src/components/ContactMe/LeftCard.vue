<template>
  <div class="flex flex-col justify-center items-start relative">
    <p class="text-4xl text-white/50 font-bold mb-8">Leave a message</p>

    <input v-model="form.author" placeholder="Your Name" class="w-80 pl-4 font-bold h-10 text-lg bg-white/5 mb-4 rounded-xl" />
    <input v-model="form.recipient" placeholder="Your Email" class="w-80 pl-4 font-bold h-10 text-lg bg-white/5 mb-4 rounded-xl" />

    <div class="relative w-full">
      <textarea v-model="form.message" placeholder="Your Message" class="w-full width-custom bg-white/5 rounded-xl p-4 resize-none text-lg"></textarea>
      <button @click="sendMessage" class="absolute bottom-4 right-4 bg-white/5 text-white/50 font-bold px-6 py-3 rounded-xl">
        Submit
      </button>
    </div>

    <p v-if="statusMessage" class="text-white/50 font-bold mt-4">{{ statusMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

const form = ref({
  author: "",
  recipient: "",
  message: "",
});

const statusMessage = ref("");

const sendMessage = () => {
  if (!form.value.author || !form.value.recipient || !form.value.message) {
    statusMessage.value = "All fields are required.";
    return;
  }

  emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        from_name: form.value.author,
        reply_to: form.value.recipient,
        message: form.value.message,
      },
      "YOUR_PUBLIC_KEY"
  )
      .then(() => {
        statusMessage.value = "Email sent successfully!";
        form.value = { author: "", recipient: "", message: "" };
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        statusMessage.value = "Failed to send email.";
      });
};
</script>

<style scoped>
.width-custom {
  height: 210px;
}
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
</style>

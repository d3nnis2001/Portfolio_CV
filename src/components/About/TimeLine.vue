<template>
  <div class="card flex flex-col gap-4">
    <Timeline :value="events" layout="horizontal" align="alternate">
      <template #opposite> &nbsp; </template>
      <template #content="slotProps">
        {{ slotProps.item }}
      </template>
    </Timeline>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Timeline from 'primevue/timeline';

const events = ref(['2001', '2007', '2018', '2021']);
</script>

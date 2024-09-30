<template>
  <div class="card flex flex-col gap-8 w-screen">
    <Timeline :value="events" layout="horizontal" align="alternate" class="orange-timeline">
      <template #marker="slotProps">
        <span class="custom-marker text-white/80 font-extrabold p-2 shadow-1 rounded-full">{{ slotProps.item.year }}</span>
      </template>
      <template #opposite> &nbsp; </template>
      <template #content="slotProps">
        <div class="event-content">
          <p class="text-2xl text-white/80 font-bold">{{ slotProps.item.title }}</p>
          <p class="text-base text-white/60 font-medium">{{ slotProps.item.description }}</p>
        </div>
      </template>
    </Timeline>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Timeline from 'primevue/timeline';

const events = ref([
  { year: '2001', title: 'Born', description: 'In Bielefeld, Germany on \n' +
        'the 22nd of Oktober' },
  { year: '2007', title: 'Math', description: 'Even in my young age, I \n' +
        'already took a big interest\n' +
        'in math and already knew \n' +
        'that I have a good hand with\n' +
        'numbers' },
  { year: '2018', title: 'Comp. Science', description: 'After finishing Middle School, \n' +
        'i moved on to the Carl-Severing \n' +
        'Berufskolleg which offered a major \n' +
        'in Computer Science and Math. \n' +
        'It was my first real touch point\n' +
        'with Programming' },
  { year: '2021', title: 'University', description: 'I still enjoyed math but computer\n' +
        'science was way more fun. I immatriculated\n' +
        'in the University of Bielefeld to study\n' +
        'Cognitive Computer Science' },
  { year: '2023', title: 'More than just a job', description: 'Besides learning mostly theory in \n' +
        'university, i started building \n' +
        'projects since i loved applying the \n' +
        'theory and also wanted to build \n '+
        'stuff' },
]);

</script>


<style>


.p-timeline .p-timeline-event-connector {
  background-color: #FD6F00;
}

.p-timeline .p-timeline-event-marker {
  border-color: #FD6F00;
  border-width: 10px;
}

.p-timeline .p-timeline-event-content {
  width: 20vw;
}

.orange-timeline {
  padding: 0 5rem; /* Adjust this value to control the space at the start and end */
}

.orange-timeline ::v-deep(.p-timeline-event:first-child) .p-timeline-event-connector {
  width: 50%;
  left: 50%;
}

.orange-timeline ::v-deep(.p-timeline-event:last-child) .p-timeline-event-connector {
  width: 50%;
  right: 50%;
}

.orange-timeline ::v-deep(.p-timeline-event-connector) {
  background-color: #FD6F00;
  height: 2px; /* Adjust the thickness of the line if needed */
}

.orange-timeline ::v-deep(.p-timeline-event-marker) {
  border-color: #FD6F00;
  border-width: 2px;
  background-color: #FD6F00;
}

.custom-marker {
  background-color: #FD6F00;
  font-size: 0.75rem;
}

</style>
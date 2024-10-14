<template>
  <div class="app-container">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <NavigationArrow
        v-if="$route.path === '/'"
        :directions="['right', 'down']"
        :routes="{
        right: '/about',
        down: '/projects',
      }"
    />
    <NavigationArrow
        v-if="$route.path === '/about'"
        :directions="['right', 'down', 'left']"
        :routes="{
        right: '/about2',
        down: '/skills',
        left: '/',
      }"
    />
    <NavigationArrow
        v-if="$route.path === '/about2'"
        :directions="['left', 'down']"
        :routes="{
        left: '/about',
        down: '/contact',
      }"
    />
    <NavigationArrow
        v-if="$route.path === '/projects'"
        :directions="['up', 'right']"
        :routes="{
        up: '/',
        right: '/skills',
      }"
    />
    <NavigationArrow
        v-if="$route.path === '/skills'"
        :directions="['up', 'right', 'left']"
        :routes="{
        up: '/about',
        right: '/contact',
        left: 'projects',
      }"
    />
    <NavigationArrow
        v-if="$route.path === '/contact'"
        :directions="['up', 'left']"
        :routes="{
        up: '/about2',
        left: '/skills',
      }"
    />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavigationArrow from '../src/components/NavigationArrow.vue'
</script>

<style>
.app-container {
  position: relative;
  min-height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
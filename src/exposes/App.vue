<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue';
import { MacosWindow, useAppStore } from 'tsnh-macos-kernel';

const store = useAppStore();
</script>

<template>
  <HelloWorld msg="PKM Main App" />
  <h1>PKM Count: {{ store.count }}</h1>
  <h1 @click="() => store.increment()">PKM Increase</h1>
  <MacosWindow msg="PKM Macos Window" />
</template>

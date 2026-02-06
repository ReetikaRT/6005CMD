<script setup>
import { ref } from 'vue'

// "ref" makes a variable reactive.
// If this changes, the HTML updates automatically.
const count = ref(0)

function increment() {
  count.value++ // Notice: In script, we use .value
}
</script>

<template>
  <h1>My Counter</h1>
 <p>Current count: {{ count }}</p>
 <button @click="increment">Add 1</button>
</template>

<style scoped>
  /* CSS goes here */
</style>

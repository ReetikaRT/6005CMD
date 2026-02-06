<script setup>

import { ref, onMounted } from 'vue'
// 2. Create a
// reactive box to hold the list
const articles = ref([])
// 3. Fetch data ONLY
// when the component mounts
onMounted(async () => {
 try {
 const response = await fetch('http://localhost:3000/api/v1/articles')
 const data = await response.json()
 articles.value = data // Update the reactive
// variable
 } catch (error) {
 console.error('Error fetching articles:', error)
 }
})

</script>

<template>

 <h1>Latest Articles</h1>

 <div v-for="article in articles" :key="article.id" class="article-card">
 <h2>{{ article.title }}</h2>
 <p>{{ article.fullText }}</p>
  </div>
</template>

<style scoped>

.article-card {
 border: 1px solid #ccc;
 padding: 10px;
 margin: 10px 0;
 border-radius: 8px;
 background-color: #f9f9f9;
}
</style>

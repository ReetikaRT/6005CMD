<script setup>

import { ref, onMounted } from 'vue'
// 2. Create a
// reactive box to hold the list
const articles = ref([])
const loading = ref(true)
// 3. Fetch data ONLY
// when the component mounts
onMounted(async () => {
 try {
 const response = await fetch('http://localhost:3000/api/v1/articles')
 const data = await response.json()
 loading.value = false
 articles.value = data // Update the reactive
// variable
 } catch (error) {
 console.error('Error fetching articles:', error)
 }
})

</script>


<template>
 <div style="padding: 50px;">
 <h1>Design System Test</h1>
 <a-button type="primary">My First Ant Button</a-button>
 <br /><br />
 <a-button type="dashed" danger>Dangerous Button</a-button>
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

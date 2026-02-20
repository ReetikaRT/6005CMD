<script setup>
import { Layout, LayoutHeader, LayoutContent, LayoutFooter } from 'ant-design-vue'
import BlogGrid from './components/BlogGrid.vue'
</script>
<template>
 <a-layout class="layout">
 <a-layout-header>
 <div class="logo">My Blog</div>
 <div style="color: white; float: right;">Welcome User</div>
 </a-layout-header>

 <a-layout-content style="padding: 0 50px">
 <div class="site-layout-content">
 <h1>Latest Posts</h1>
 <BlogGrid />
 </div>
 </a-layout-content>

 <a-layout-footer style="text-align: center">
 Web API Development ©2026 Created by You
 </a-layout-footer>
 </a-layout>
</template>
<style scoped>
/* Specific overrides for Ant Design components */
.site-layout-content {
 background: #fff;
 padding: 24px;
 min-height: 280px;
 margin-top: 24px;
}
.logo {
 float: left;
 width: 120px;
 height: 31px;
 color: white;
 font-size: 1.5rem;
 font-weight: bold;
 line-height: 64px; /* Vertically center in header */
}
</style>
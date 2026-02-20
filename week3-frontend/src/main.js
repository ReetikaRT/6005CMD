import { createApp } from 'vue'
import App from './App.vue'
// 1. Import the library
import Antd from 'ant-design-vue'
// 2. Import the CSS (The styling)
import 'ant-design-vue/dist/reset.css'
const app = createApp(App)
// 3. Tell Vue to use it
app.use(Antd)
app.mount('#app')
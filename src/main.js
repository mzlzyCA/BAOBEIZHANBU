import { createApp } from 'vue'
import Vant from 'vant'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import 'vant/lib/index.css' 

// const plugins = ["Vant", "router"]
// const app = createApp(App);
// app.use(registerPlugins(plugins))
// app.mount("#app")
createApp(App).use(Vant).use(router).mount('#app')
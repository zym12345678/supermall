//import { createApp } from 'vue'
import  Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
Vue.config.productionTip = false

//createApp(App).mount('#app')
new Vue({
    render:h => h(App),
    router
}).$mount("#app")

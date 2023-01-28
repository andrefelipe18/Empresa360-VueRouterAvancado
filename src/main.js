import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//Importando o router
import router from './router'

//Usando o router
app.use(router)


app.mount('#app')

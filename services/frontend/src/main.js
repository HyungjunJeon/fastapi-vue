import Vue from "vue"
import { createApp } from "vue"
import axios from "axios"
import App from "./App.vue"
import router from "./router"
import vuetify from "./plugins/vuetify"
import { loadFonts } from "./plugins/webfontloader"

loadFonts()

axios.defaults.withCredentials = true
axios.defaults.baseURL = "http://localhost:5050/"

createApp(App).use(router).use(vuetify).mount("#app")

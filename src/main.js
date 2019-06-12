import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Repos from './views/Repos.vue'
import Repo from './views/Repo.vue'
import Home from './views/Home.vue'
import SavedRepos from './views/SavedRepos.vue'
import store from './utils/store'

const router = new VueRouter({
  routes: [
    { path : '/', component: Home },
    { path: '/saved-repos', component: SavedRepos },
    { path: '/repos', component: Repos },
    { path: '/repos/:name', component: Repo }
  ],
  mode: 'history'
})

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

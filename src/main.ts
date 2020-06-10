import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store, {GET_INITIAL_DATA_ACTION} from './store'
import vuetify from './plugins/vuetify'
import './firebase'

Vue.config.productionTip = false

store.dispatch(GET_INITIAL_DATA_ACTION).then(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
}).catch(e => {
  console.log('Failed to get application config:')
  console.log(e)
})

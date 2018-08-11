// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store'
import axios from 'axios'
import mycredientials from '../env'
import * as firebase from 'firebase'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VCarousel,
  VCard,
  VTextField,
  VForm,
  VAlert,
  VProgressLinear,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VCarousel,
    VCard,
    VTextField,
    VForm,
    VAlert,
    VProgressLinear,
    transitions
  },
  theme: {
    primary: colors.blue.darken1,
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  iconfont: 'fa4' // 'md' || 'mdi' || 'fa' || 'fa4'
})

Vue.config.productionTip = false
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  created(){firebase.initializeApp()
  this.$store.dispatch('loadplaces');
},
  template: '<App/>'
})

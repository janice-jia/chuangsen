import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import 'lib-flexible'
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
import './plugins/element.js'


Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueDirectiveImagePreviewer) 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
;(function(){
var rem = document.createElement('script');
rem.src = './rem.js';
document.body.appendChild(rem)
})()

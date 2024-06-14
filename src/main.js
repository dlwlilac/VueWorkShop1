import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Swal from "sweetalert2";

Vue.prototype.$swal = Swal

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

// ตัดข้อความที่ยาว ๆ ให้เหลือตามที่กำหนด
var filter = function(text, length, clamp){
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

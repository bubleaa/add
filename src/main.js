// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from 'axios'

Vue.prototype.$http = axios
/*组件 */
Vue.config.productionTip = false
//import movie from'./components/movie/movie.vue'
/*初始化CSS样式*/
const globalCSS = require('./assets/css/common.css');

/*引入辅助函数*/
const tools = require('./assets/js/tools.js');

/*设置html页面字体大小*/
tools.setHtmlFontsize(16);





//import name,{aa} from './assets/js/mod.js'
//console.log(name);

 //var root = require('./assets/js/mod2.js');
//console.log(root.b(1,2),root.a)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },

})

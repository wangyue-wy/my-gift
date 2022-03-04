// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
Vue.use(Element);



//Vue.config.productionTip = false

/* eslint-disable no-new */
//初始化预言环境，有从官网带入语言状态
let lan_init = 'zh'
if(window.location.search.indexOf("language")!= -1){
	lan_init = window.location.search.split("language=")[1].slice(0,2)
	//console.log(lan_init)
}
//刷新页面时候，保留刷新前的语言环境
if(sessionStorage.getItem("lan")){
    lan_init = sessionStorage.getItem("lan")
}
const i18n = new VueI18n({
	locale: lan_init,
	messages: {
		'zh': Object.assign(require('./assets/js/lang/zh.js') ),
		'en': Object.assign(require('./assets/js/lang/en.js'))
	}
})


// 引入样式
import '@/assets/less/wy-pc.less'
import '@/assets/less/wd.less'

new Vue({
  el: '#app',
  router,
  i18n
  
})

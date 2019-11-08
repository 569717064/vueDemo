 import $ from 'jquery';
import '../css/index.css';
import 'bootstrap3/dist/css/bootstrap.min.css';
import layer from 'layui-layer';
import axios from 'axios';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';

import login from '../vue/login.vue';
import register from '../vue/register.vue';
import App from '../vue/App.vue';


axios.defaults.baseURL = "http://192.168.174.1:8888";


window.$ = $;
window.jQuery = $;
window.axios = axios;
window.Vue = Vue;
window.VueRouter = VueRouter;
Vue.use(VueRouter);



$(function(){
	$("ul li:even").css("color","black");
	$("ul li:odd").css("color","red");
	
	$("#btn").click(function(){
		$(".dd").slideToggle(2000);
	});
});








// 以下代码是专门用于48_vue.html页面的
// 所以，你要测试其他页面，请把底下代码注释！

// 定义路由
var router = new VueRouter({
	routes:[
		{path:"/login", component:login},
		{path:"/register", component:register}
	]
});
   
var app = new Vue({
	el:"#app",
	render(createElements){
		return createElements(App)
	},
	// components:{
	// 	"login": {
	// 		template: login
	// 	 }
	// }, 
	router
});
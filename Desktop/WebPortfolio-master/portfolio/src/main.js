// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import axios from 'axios'
// 부트스트랩 테스트 
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//import 'node_modules/bootstrap/scss/bootstrap.scss';
//import 'node_modules/bootstrap-vue/src/index.scss';
// 부트스트랩 테스트 닫음


Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueRouter);


// 페이지 목록
import {
  MainPage, 
  LoginPage,
  ReadingPage,
  WritingPage,
  ModalView,
  PortfolioListPage,
  PortfolioListPage1,
  PortfolioListPage2,
  PortfolioListPage3,
  Study,
} from './components';

import vuetify from './plugins/vuetify'

// 페이지 링크 연결
const routes = [
    {
      path: '/',
      name: "MainPage",
      component: MainPage
   },
   {
      path: '/Login',
      name: "Login",
      component: LoginPage
   },
   {
      path: '/Reading',
      name: "Reading",
      component: ReadingPage
   },
   {
      path: '/Writing',
      name: "Writing",
      component: WritingPage
   },
   {
      path: '/ModalView',
      name: "ModalView",
      component: ModalView
   },
   {
      path: '/PortfolioList',
      name: "PortfolioList",
      component: PortfolioListPage
   },
   {
      path: '/PortfolioList1',
      name: "PortfolioList1",
      component: PortfolioListPage1
   },
   {
      path: '/PortfolioList2',
      name: "PortfolioList2",
      component: PortfolioListPage2
   },
   {
      path: '/PortfolioList3',
      name: "PortfolioList3",
      component: PortfolioListPage3
   },
   {
      path: '/Study',
      name: "Study",
      component: Study
   },
  ];

const router = new VueRouter({routes
});


new Vue({
   el: '#app',
   router,
   components: { App },
   vuetify,
   template: '<App/>'
})





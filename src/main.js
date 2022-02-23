import Vue from "vue";
import App from "./App.vue";
import router from "./router"; 
import jQuery from 'jquery';
import {fb} from './firebase';
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore)


window.$ = window.jQuery = jQuery;

import 'popper.js'; 
import 'bootstrap'; 
import './assets/app.scss';

Vue.component('Navbar', require('./components/NavBar').default);

Vue.config.productionTip = false;

fb.auth().onAuthStateChanged(function(user) {

  let app = '';

  if(!app){
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
    
  }

});


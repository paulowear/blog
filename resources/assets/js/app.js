
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vuex from 'Vuex';
Vue.use(Vuex);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 //Vuex

 const store = new Vuex.Store({
  state:{
    item:{}
  },
  mutations:{
    setItem(state,obj){
      state.item = obj;
    }
  }
});
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('topo-v', require('./components/Topo.vue'));
Vue.component('painel-v', require('./components/Painel.vue'));
Vue.component('caixa-v', require('./components/Caixa.vue'));
Vue.component('pagina-v', require('./components/Pagina.vue'));
Vue.component('tabela-lista', require('./components/TabelaLista.vue'));
Vue.component('migalha-v', require('./components/Migalha.vue'));
Vue.component('modal-v', require('./components/modal/Modal.vue'));
Vue.component('modal-link', require('./components/modal/ModalLink.vue'));
Vue.component('formulario-v', require('./components/Formulario.vue'));
//Vue.component('ckeditor-v', require('ckeditor'));
Vue.component('artigocard-v', require('./components/ArtigoCard.vue'));
const app = new Vue({
    el: '#app',
    store,
    mounted: function(){
      console.log("ok");
      document.getElementById('app').style.display = "block";
    }
});

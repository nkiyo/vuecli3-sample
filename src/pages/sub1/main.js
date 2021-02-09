import Vue from 'vue';
import Sub1 from './Sub1.vue';
import '@/plugins/element';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Sub1),
}).$mount('#app');

import Vue from 'vue'
import App from './App.vue'

Vue.filter('tolowercase',(value)=> value.toLowerCase());

Vue.mixin({
  created()
  {
    console.log('Global Mixin - Created Hook');
  }
});


new Vue({
  el: '#app',
  render: h => h(App)
})

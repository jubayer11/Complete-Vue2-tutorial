import Vue from 'vue'
import App from './App.vue'
import {routes} from "./routes";
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const router=new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition)
  {
    //for saved position for back
    if(savedPosition)
    {
      return savedPosition;
    }
    if (to.hash)
    {
      return {
        selector: to.hash
      }
    }
    return{
      x:0,
      y:0,
    }
  },
});

router.beforeEach((to,from,next)=>{
  console.log('global beforeEach');
  next(true);
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

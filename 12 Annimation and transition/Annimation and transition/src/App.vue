<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
              <hr>
              <button @click="show=!show" class="btn btn-primary">Show alert</button>
              <br>
              <br>
              <transition name="fade">
              <div v-if="show" class="alert alert-info">this is a some info</div>
              </transition>
              <transition name="slide" type="transition">
                <div v-if="show" class="alert alert-info">this is a some info</div>
              </transition>
              <transition
                  appear
                  enter-class=""
                  enter-active-class="animate tada"
                  leave-class=""
                  leave-active-class="animate tada"
              >
                <div v-show="show" class="alert alert-info">this is a some info</div>
              </transition>
              <transition name="fade" mode="out-in">
                <div class="alert alert-info" v-if="show" key="info">This is some info</div>
                <div class="alert alert-warning" v-else key="warning"> This is some warning</div>
              </transition>
              <hr>
              <button class="btn btn-primary" @click="load=!load">Load/remove element</button>
              <br>
              <br>
              <transition
                  @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterEnter"
                  @enter-cancelled="enterCancel"

                  @before-leave="beforeLeave"
                  @leave="leave"
                  @after-leave="afterLeave"
                  @leave-cancelled="leaveCancel"
                  :css="false"
              >
                <div style="width: 300px;height: 100px;background-color: lightblue" v-if="load"> </div>
              </transition>
              <hr>

              <button class="btn btn-primary" @click="selectedComponent=='app-success-alert'?selectedComponent='app-danger-alert':selectedComponent='app-success-alert'">Toggle Components
              </button>
              <br>
              <br>
              <transition name="fade" mode="out-in">
                <component :is="selectedComponent"></component>
              </transition>
              <hr>

              <button class="btn btn-primary" @click="addItem">ADD ITEM</button>
              <br>
              <br>
              <ul class="list-group">
              <transition-group mode="out-in" name="fade">
                  <li class="list-group-item"
                      style="cursor: pointer"
                      v-for="(num,index) in nums"
                      @click="removeItem(index)"
                      :key="nums"
                  >{{num}}
                  </li>
              </transition-group>
              </ul>
            </div>
        </div>
    </div>
</template>

<script>
import appDangerAlert from "./DangerAlert.vue"
import appSuccessAlert from "./SuccessAlert.vue"
    export default {
      components:{appDangerAlert,appSuccessAlert},
        data() {
            return {
              show:false,
              alertAnimation:false,
              load:false,
              elementWidth:100,
              selectedComponent:'app-success-alert',
              nums:[1,2,3,4,5],
            }
        },
      methods:{
          beforeEnter(el)
          {
            console.log(el,'beforeEnter')
            this.elementWidth=100;
            el.style.width=this.elementWidth+'px';
          },
        enter(el,done)
        {
          console.log(el,done,'enter');
          let round=1;
          const interval=setInterval(()=>
          {
            el.style.width = (this.elementWidth+round*10)+'px';
            round++;
            if(round>20)
            {
              clearInterval(interval)
              {
                done();
              }
            }
          },20);

        },
        afterEnter(el)
        {
          console.log(el,'afterEnter')
        },
        enterCancel(el)
        {
           console.log(el,'enterCancelled');
        },
        beforeLeave(el) {
            console.log(el,'beforeLeave');
          this.elementWidth=300;
          el.style.width=this.elementWidth+'px';
        },
        leave(el,done)
        {
          console.log(el,done,'leave');
          let round=1;
          const interval=setInterval(()=>
          {
            el.style.width = (this.elementWidth-round*10)+'px';
            round++;
            if(round>20)
            {
              clearInterval(interval)
              {
                done();
              }
            }
          },20);
        },
        afterLeave(el)
        {
          console.log(el,'afterLeave');
        },
        leaveCancel(el)
        {
          console.log(el,'leaveCancel');
        },

        addItem()
        {
          const pos=Math.floor(Math.random()*this.nums.length);
          this.nums.splice(pos,0,this.nums.length+1)
        },
        removeItem(index)
        {
          this.nums.splice(index,1);
        }

      }
    }
</script>

<style>

.fade-enter
{
  opacity: 0;
  margin-top: 100px;
}
.fade-enter-active
{
  transition: all 1s;
}
.fade-leave
{

}
.fade-leave-active
{
  margin-top: 100px;
  transition: all 1s;
  opacity: 0;
}

.slide-enter
{
  opacity: 0;
}

.slide-enter-active
{
   animation: slide-in 1s ease-out forwards;
  transition: opacity .5s;
}

.slide-leave
{

}
.slide-leave-active
{
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}
.slide-move
{
  transition: transform 1s;
}

@keyframes slide-in {
  from
  {
    transform: translateY(20px);
  }
  to
  {
    transform: translateY(0);
  }

}
@keyframes slide-out {
  from
  {
    transform: translateY(0px);
  }
  to
  {
    transform: translateY(20px);
  }

}
</style>

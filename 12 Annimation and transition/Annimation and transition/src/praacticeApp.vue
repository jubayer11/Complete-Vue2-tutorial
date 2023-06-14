<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="addItem">ADD ITEM</button>
        <br>
        <br>
        <ul class="list-group">
          <transition-group name="slide">
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


export default {
  data() {
    return {
      show: false,
      nums:[1,2,3,4,5],
    }
  },

  methods:{
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

<style scoped>

.alert-info
{
  position: absolute!important;
}
.slide-enter
{
  opacity: 0;
}

.slide-enter-active
{
  animation: slide-in 2s ease-out forwards;
  transition: opacity .5s;
}

.slide-leave
{

}
.slide-leave-active
{
  animation: slide-out 2s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  0%   {top: 0px; left: 0px; background: red;}
  25%  {top: 0px; left: 100px; background: blue;}
  50%  {top: 100px; left: 100px; background: yellow;}
  75%  {top: 100px; left: 0px; background: green;}
  100% {top: 0px; left: 0px; background: red;}

}

@keyframes slide-out {
  100%   {top: 0px; left: 0px; background: red;}
  75%  {top: 0px; left: 100px; background: blue;}
  50%  {top: 100px; left: 100px; background: yellow;}
  25%  {top: 100px; left: 0px; background: green;}
  0% {top: 0px; left: 0px; background: red;}
}

</style>
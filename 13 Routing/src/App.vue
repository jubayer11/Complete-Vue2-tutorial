<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
<!--        <app-header></app-header>-->
<!--        <hr>-->
        <router-view name="header-top"></router-view>
        <transition name="slide">
          <router-view></router-view>
        </transition>
        <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from './components/header.vue'
    export default {
  components:{appHeader},
    }
</script>

<style>
</style>

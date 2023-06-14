<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
              <p>{{text | toUppercase | tolowercase}}</p>
              <hr>
              <input v-model="filterText">
              <ul>
                <li v-for="fruit in filteredFruits">
                  {{fruit}}
                </li>
              </ul>
            </div>
        </div>
      <appList></appList>
    </div>
</template>

<script>
import appList from "./List.vue"
import {fruitMixin} from "./assets/fruitMixin";
    export default {
  components:{appList},
      mixins:[fruitMixin],
      data:()=>
      {
        return{
          text:'Hello there!',
        }
      },
      created()
      {
        console.log('Vue instance life cycle method');
      },
    }
</script>

<style>

</style>

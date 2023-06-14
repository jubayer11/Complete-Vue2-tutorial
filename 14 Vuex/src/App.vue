<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result ></app-result>
              <another-results></another-results>
              <hr>
                <app-counter ></app-counter>
              <hr>
              <input type="text" v-model="value">
              <p>{{value}}</p>
              
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import anotherResults from "./components/anotherResults.vue";
    export default {
        data() {
            return {
                counter: 0
            }
        },

      computed:{
          value:
          {
            get() {
              return this.$store.getters.getValue;
            },
            set(value)
            {
              this.$store.dispatch('updateValue',value);

            }
          }
      },
      methods:{
          updatedValue(event)
          {
            this.$store.dispatch('updateValue',event.target.value);
          }
      },
        components: {
            appCounter: Counter,
            appResult: Result,
            anotherResults,
        }
    }
</script>


<template>
    <div>
        <button class="btn btn-primary" @click="increment({by:100,duration:5000})">Increment</button>
        <button class="btn btn-primary" @click="decrement(5)">Decrement</button>
    </div>
</template>

<script>
    import {mapMutations,mapActions} from "vuex";

    export default {

        methods: {

          ...mapActions([
              'increment',
              'decrement'
          ]),
          // ...mapMutations([
          //     'increment',
          //     'decrement',
          // ]),
            increment(x) {
                this.$store.dispatch('asyncIncrement',x);
            },
            decrement(x) {
              this.$store.dispatch('decrement',x);
            }
        }
    }
</script>
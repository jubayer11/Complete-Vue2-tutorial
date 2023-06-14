<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <button @click="selectedComponent='appQuote'">Quote</button>
              <button @click="selectedComponent='appAuthor'">Author</button>
              <button @click="selectedComponent='appNew'">New</button>
              <hr>
              <p>{{selectedComponent}}</p>

              <keep-alive>
                <component :is="selectedComponent">
                  <p>Default Component</p>
                </component>
              </keep-alive>

<!--               <app-quote>-->
<!--                 <h2>{{quoteTitle}}</h2>-->
<!--                 <p slot="content">A wonderful Quote</p>-->
<!--               </app-quote>-->
              <hr>

            </div>
        </div>
    </div>
</template>

<script>
import Quote from "./components/Quote.vue"
import Author from "./components/Auther.vue"
import New from "./components/New.vue"

    export default {
  components:
      {
        appQuote:Quote,
        appAuthor:Author,
        appNew:New,
      },
      data:()=>
          {
            return{
              quoteTitle:'The Quote',
              selectedComponent:'appQuote'
            }

          },
      deactivated() {
        console.log('deactivated');
      },
      activated() {
       console.log('activated');
      }


    }
</script>

<style scoped>
h2
{
  color: darkred;
}
</style>

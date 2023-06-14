<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
      <p>{{name}}</p>
      <p>Age: {{userAge}}</p>
      <button @click="changeName">Chanage Name</button>
    </div>
</template>

<script>
import {eventBus} from "../main";
export default
{
  props:{
    name:
        {
          type:String

        },
    changeName:Function,
    userAge:Number,
  },
  methods:{
    resetName()
    {
      this.name='ahmedfghyd';
      this.$emit('nameWasReset',this.name);
    }
  },
  created() {
    eventBus.$on('ageWasEdited',(age)=>
    {
      this.userAge=age;
    });
  }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

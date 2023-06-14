<template>
  <div>
    <h1>The User Page</h1>
    <hr>
      <button @click="navigateToHome">
        Go to Home
      </button>
    <hr>
    <router-view></router-view>

<!--    <div>{{userId}}</div>-->
  </div>


</template>

<script>
export default
{
  data()
  {
    return{
      // userId: this.$route.params.id,
    }

  },
  // watch:{
  //   '$route'(to, from)
  //   {
  //      this.userId=to.params.id;
  //
  //   }
  // },
  methods:{
    navigateToHome()
    {
      //this.$router.push('/');
      this.$router.push({name:'Home'});
    }
  }
}
</script>
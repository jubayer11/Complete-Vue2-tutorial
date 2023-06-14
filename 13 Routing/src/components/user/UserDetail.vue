<template>
  <div>
    <h3>Some User Details</h3>
    <h1>User loaded Id: {{$route.params.id}}</h1>

<!--    <router-link tag="button" class="btn btn-primary" :to="'/user/'+$route.params.id +'edit'" > Edit User</router-link>-->
    <router-link tag="button" class="btn btn-primary" :to="link" > Edit User</router-link>

  </div>

</template>

<script>
export default
{
  data()
  {
    return{
      link:
      {
        name:'userEdit',
        params:{
          id:this.$route.params.id
        },
        query:{
          local:'en',
          q:100
        },
        hash:'#data'


      }
    }
  },
  beforeRouteEnter(to,from,next)
  {
     next();
    // if (true)
    // {
    //   next();
    // }
    // else
    // {
    //   next(false);
    // }
  }



}
</script>
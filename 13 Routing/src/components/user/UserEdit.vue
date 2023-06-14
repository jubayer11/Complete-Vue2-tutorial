<template>
  <div>
    <h3>Edit the User</h3>
    <p>Local: {{$route.query.local}}</p>
    <p>Analytics:{{$route.query.q}}</p>
    <hr>
    <button @click="confirmed=true" class="btn btn-primary">Confirm</button>

    <div style="height: 700px"></div>
    <p id="data">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque aut consequatur error eum exercitationem hic inventore laboriosam maiores odit. Eos fuga incidunt iusto laboriosam nam praesentium quaerat rem vitae.</p>


  </div>
</template>

<script>
export default
{
  data()
  {
    return{
      confirmed:false,
    }
  },
beforeRouteLeave(to,from,next)
{
  console.log('hello');
  if (this.confirmed)
  {
    next();
  }
  else
  {
    if(confirm('Are you sure?'))
    {
      next();
    }
    else
    {
      next(false);
    }
  }
}

}

</script>
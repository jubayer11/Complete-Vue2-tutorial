<template>
  <ul class="nav nav-pills">
<!--    <li role="presentation"> <router-link to="/home">Home</router-link></li>-->
<!--    <li role="presentation"><router-link to="/user"> User</router-link></li>-->

   <router-link tag="li" to="/" active-class="active" exact><a>Home</a></router-link>
  <router-link tag="li" to="/user?a=2&b=hello"  > <a>User</a> </router-link>

<!--    <router-link tag="li" to="/user/11"  > <a>User 11</a> </router-link>-->

  </ul>
</template>

<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
           <router-link to="/user/1/detail" class="list-group-item" style="cursor: pointer" tag="li">User 1</router-link>
          <router-link to="/user/2/detail" class="list-group-item" style="cursor: pointer" tag="li">User 2</router-link>
          <router-link to="/user/3/detail" class="list-group-item" style="cursor: pointer" tag="li">User 3</router-link>
        </ul>
    </div>
</template>
<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
      <button @click="changeName">Chanage Name</button>
      <h1>{{name}}</h1>
      <h1>{{age}}</h1>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
<!--                <app-user-detail :name="name" @nameWasReset="name=$event"></app-user-detail>-->
              <app-user-detail :name="name" :changeName="resetName" :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" @ageWasEdited="age=$event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';


    export default {

      components: {
        appUserDetail: UserDetail,
        appUserEdit: UserEdit
      },
      data()
      {
        return{
          name:'jubayer',
          age:27
        }
      },
      methods:{
        changeName()
        {
          this.name='ahmed';
        },
        resetName() {
          this.name='not ahmed';
        }
      }



    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>

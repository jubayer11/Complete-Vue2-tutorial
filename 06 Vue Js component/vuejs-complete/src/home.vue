<template>
  <div>
    <app-server-status v-for="server in 5"></app-server-status>

  </div>
</template>

<script>
import appServerStatus from "./ServerStatus";
export default {
  components:{
    appServerStatus
  }
}
</script>



<template>
  <div>
    <h1>Mixins</h1>

    <input v-model="filterText">
    <ul>
      <li v-for="fruit in filteredFruits">
        {{fruit | toUppercase}}
      </li>
    </ul>
  </div>

</template>

<script>
import {fruitMixin} from "./assets/fruitMixin";

export default {
  mixins:[fruitMixin],


}
</script>
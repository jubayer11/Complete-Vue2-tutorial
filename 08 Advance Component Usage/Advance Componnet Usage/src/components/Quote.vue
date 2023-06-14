<template>
<div>
  <div class="title">
    <slot></slot>
    <span>
      <slot name="subtitle">
      <h4>The subtitle</h4>
    </slot>
    </span>
  </div>
  <hr>
  <div>
    <slot name="content"></slot>
  </div>
</div>
</template>
<script>

</script>
<style scoped>
div
{
  border:1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding:30px;
  margin: 30px auto;
  text-align: center;
}
h2
{
  color: darkred;
}
</style>
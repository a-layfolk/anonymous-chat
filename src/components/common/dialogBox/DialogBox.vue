<template>
  <div id="dialog-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DialogBox'
}
</script>

<style>
#dialog-box {
  display: flex;
  background-color: rgb(255, 255, 255);

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
}
</style>
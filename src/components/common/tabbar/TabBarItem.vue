<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"> <slot name="item-icon"></slot> </div>
    <div v-else> <slot name="item-icon-active"></slot> </div>
    <div :style="activeStyle"> <slot name="item-text"></slot> </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem', 
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'rgb(44, 151, 75)'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {};
      }
    },
    methods: {
      itemClick() {
        // console.log(this.path);
        this.$router.replace(this.path);
      }
    }
  }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 8vh;
    font-size: 2vh;
  }

  .tab-bar-item img {
    width: 25vw;
    height: 4vh;
  }

  .active {
    color: rgb(44, 151, 75);
  }
</style>
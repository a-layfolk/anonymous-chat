<template>
<div class="about">
<nav-bar>
  <p slot="left">关于</p>
  <p slot="right">返回 《</p>
</nav-bar>
<el-collapse accordion>
  <el-collapse-item title="关于开发者" name="1">
    <div>本作品由北京理工大学的两名学生开发</div>
    <div>下面是两个学生的 GitHub 地址：</div>
    <div>a-layfolk: <a href="https://github.com/a-layfolk">https://github.com/a-layfolk</a></div>
    <div>WuS-bit: <a href="https://github.com/WuS-bit">https://github.com/WuS-bit</a></div>
  </el-collapse-item>
  <el-collapse-item title="关于作品" name="2">
    <div>作品采用前后端分离的方式开发</div>
    <div>其中用到的技术有：Vue, Node, axios, Websocket, Element-ui, SpringBoot, Mybatis, Shiro</div>
  </el-collapse-item> 
</el-collapse>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
export default {
  components: { NavBar },
}
</script>

<style>
.el-collapse-item__header {
  font-size: 1.5vw !important;
  padding-left: 2vw !important;
  height: 10vh;
}
.el-collapse-item__content {
  font-size: 1vw !important;
  padding-left: 2vw !important;
  height: 20vh;
}
</style>
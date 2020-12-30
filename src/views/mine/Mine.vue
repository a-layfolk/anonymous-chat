<template>
  <div>
    <nav-bar>
      <p slot="left">我</p>
    </nav-bar>
    <tool-box>
      <img slot="left" src="~assets/img/toolBox/set_icon.svg"/>
      <p slot="center">账号与安全</p>
      <img slot="right" src="~assets/img/toolBox/array.svg"/>
    </tool-box>
    <tool-box>
      <img slot="left" src="~assets/img/toolBox/about_icon.svg"/>
      <p slot="center">关于</p>
      <img slot="right" src="~assets/img/toolBox/array.svg"/>
    </tool-box>
    <tool-box>
      <img slot="left" src="~assets/img/toolBox/help_icon.svg"/>
      <p slot="center">帮助</p>
      <img slot="right" src="~assets/img/toolBox/array.svg"/>
    </tool-box>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import ToolBox from 'components/common/toolBox/ToolBox.vue'
export default {
  components: { 
    NavBar,
    ToolBox
  }
}
</script>

<style>

</style>
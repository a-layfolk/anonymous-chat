<template>
  <div>
    <nav-bar>
      <p slot="left">授权</p>
    </nav-bar>

    <el-form>
      <el-form-item
        label="子用户数量"
      >
        <el-input></el-input>
      </el-form-item>

      <el-form-item
        label="子用户密码"
      >
        <el-input ></el-input>
      </el-form-item>


      <el-form-item>
        <el-button type="primary">提交</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>

    <el-card>
      <div>授权部分还没有开发完成</div>
      <br/>
      <div>按照我们的设想, 授权界面只有主用户能够访问, 子用户无法访问。</div>
      <br/>
      <div>在授权界面主用户可以设置子用户的昵称和密码。</div>
      <br/>
      <div>但由于时间所限, 目前我们仅完成了子用户匿名聊天的功能。</div>
      <br/>
      <div>敬请期待</div>
    </el-card>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue';
import NavBar from 'components/common/navbar/NavBar.vue';
export default {
  name: 'Empowerment',
  components: { 
    MainTabBar,
    NavBar
  }
}
</script>

<style>
.el-form {
  background-color: rgb(241, 248, 255);
}
.el-form-item__label, .el-form-item__content {
  padding: 0 5vw;
  font-size: 2vh;
}
.el-card {
  margin: 0 5vw;
  font-size: 2vh;
}
</style>
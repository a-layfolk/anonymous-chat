<template>
  <div>
    <div class="login-container">
      <div class="login-box">

        <el-alert title="此处是子用户的登录界面" type="warning"></el-alert>

        <el-form class="login-form" :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
          <!--用户名-->
          <el-form-item prop="username">
            <el-input placeholder="请输入用户号" v-model="loginForm.username"></el-input>
          </el-form-item>
          <!--密码-->
          <el-form-item prop="password">
            <el-input type="password" placeholder="请输入密码" v-model="loginForm.password"></el-input>
          </el-form-item>
          <!--按钮区域-->
          <el-form-item class="btns">
            <div><el-button type="primary" @click="login">登录</el-button></div>
            <div><el-button type="info" @click="resetLoginform">重置</el-button></div>
          </el-form-item>
        </el-form>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'SubuserLogin',
  methods: {
    // 重置表单, 取消校验
    resetLoginform: function() {
      this.$refs.loginFormRef.resetFields();
    },

    login: function() {

      // 验证
      this.$refs.loginFormRef.validate(valid => {
        if(valid) {
          const _this = this;   // 到 this.$axios 之后 this 就指向了 this.$axios
          this.$axios.post('/subuser/login', this.loginForm)
          .then(res => {
            // 获取 token
            const token = res.data.data.token;
            const username = res.data.data.username;
            // console.log(res);
            // console.log(res.data);
            // 把数据共享到 全局
            _this.$store.commit("SET_TOKEN", token);
            _this.$store.commit("SET_USERNAME", username);

            // console.log(_this.$store.getters.getUserInfo);

            // 跳转到主页面
            _this.$router.push('/message');
          })
        }
        else {
          console.log("error!");
        }
      })
    },
  },
  data: function() {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: '',
        password: ''
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 11, message: '用户名应为 2 - 11 位字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '密码应为 6 - 12 位字符', trigger: 'blur' }
        ]
      },
      status: 0
    }
  },

}


</script>

<style>

.login-container {
  background: url(https://cdn.jsdelivr.net/gh/a-layfolk/FigureBed/img/avatar/20210206050942.svg);
  background-size: 100vw;
  height: 100vh;
}
.login-box {

  background-color: rgb(241, 248, 255);
  border-radius: 5px;
  width: 50vw;
  height: 50vh;

  /*绝对定位实现居中*/
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login-form {
  padding: 8vh 2vw 0 2vw;
}
.btns{
  padding-top: 5vh;
  display: flex;
  flex-direction: row-reverse;
}
.el-button {
  margin-top: 1vh;
}
#tip {
  color: rgb(255, 0, 0);
}

/* 修改 Element-ui 的样式 */
.el-form{
  background-color: rgb(241, 248, 255) !important;
}
</style>
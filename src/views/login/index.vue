<template>
  <div class="container">
    <div class="loginBg">
      这是一个测试系统
    </div>
    <el-form
      ref="loginForm"
      :model="loginForm"
      label-width="80px"
      :rules="rules"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input v-model.trim="loginForm.userName" />
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input
          v-model.trim="loginForm.passWord"
          type="password"
          @keyup.enter.native="onLogin"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      loginForm: {
        userName: '',
        passWord: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        passWord: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  computed: {},
  mounted() {
    console.log(121212)
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    onLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          const params = this.loginForm
          this.login(params)
            .then(_ => {
              // 登录成功回调
              this.$router.push('/dashboard')
            })
            .catch(error => {
              throw new Error(error)
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  display: flex;
  height: 100%;
  min-height: 700px;

  .loginBg {
    width: 900px;
    background: url("../../static/img/loginBg.jpg") no-repeat;
    background-size: 100% 100%;
    opacity: 0.7;
    color: #ffffff;
    padding: 50px 150px;
  }
  // width: 500px;
  // margin: 100px auto 0;
}
</style>

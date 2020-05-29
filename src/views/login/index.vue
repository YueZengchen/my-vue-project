<template>
  <div class="container">
    <el-form ref="loginForm" :model="loginForm" label-width="80px" :rules="rules">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model.trim="loginForm.userName" />
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input v-model.trim="loginForm.passWord" type="password" @keyup.enter.native="onLogin" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>
<script>
import { mapActions } from 'vuex';

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
        userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        passWord: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    };
  },
  computed: {},
  mounted() {},
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    onLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          const params = this.loginForm;
          this.login(params).then(_ => {
            // 登录成功回调
            this.$router.push('/dashboard');
          }).catch(error => {
            throw new Error(error);
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
.container{
  width: 500px;
  margin: 100px auto 0;
}
</style>

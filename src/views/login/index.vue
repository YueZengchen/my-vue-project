<template>
  <div class="container">
    <el-form ref="loginForm" :model="loginForm" label-width="80px" :rules="rules">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model.trim="loginForm.userName" />
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input v-model.trim="loginForm.passWord" @keyup.enter.native="onLogin" />
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
import { login } from '@/api/login';

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
      setname: 'user/setname'
    }),
    onLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          const params = this.loginForm;
          login(params).then(res => {
            // 登录成功回调 存储用户信息
            this.$router.push('/dashboard');
            this.setname(this.loginForm.userName);
          }).catch(_ => {
            // 登录失败处理
            throw new Error('用户名或密码错误');
            // console.log(error);
          });
        } else {
          return false;
        }
      });
    },
    testFn() {
      console.log('test');
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

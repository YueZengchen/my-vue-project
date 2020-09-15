<template>
  <div class="nav-header">
    <header>
      欢迎用户:{{ userInfo.userName }} &nbsp; 性别:{{ userInfo.sex }} &nbsp; 年龄{{ userInfo.age }}
    </header>
    <el-button @click="logOut">登出</el-button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { removeUserInfo } from '@/utils/auth'
export default {
  name: 'Navbar',
  components: {},
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.auth.userInfo
    })
  },
  mounted() {},
  methods: {
    logOut() {
      removeUserInfo().then(_ => {
        this.$router.push('/login')
      })
    }
  }
}
</script>
<style scoped lang="scss">
// .nav-header{
//   background-color: #409EFF;
// }
</style>

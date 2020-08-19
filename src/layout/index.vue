<template>
  <el-container>
    <navbar />
    <el-container>
      <el-aside>
        menu
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
    <el-footer>
      footer
    </el-footer>
  </el-container>
</template>
<script>
import { mapState } from 'vuex'
import Navbar from '@/components/Navbar'

export default {
  name: '',
  components: { Navbar },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.auth.userInfo
    })
  },
  mounted () {},
  methods: {}
}
</script>
<style scoped lang="scss">
.nav-header{
  background-color: #409EFF;
}
</style>

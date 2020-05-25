<template>
  <div>
    <header>
      欢迎用户:{{ userInfo.name }} &nbsp; 性别:{{ userInfo.sex }} &nbsp; 年龄{{ userInfo.age }}
    </header>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'Navbar',
  components: {},
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.auth.userInfo
    })
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="scss">
</style>

<template>
  <div>
    test
    <router-view />
    test
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: '',
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
  mounted() {
    if (!this.userInfo) {
      this.$router.push('/login');
    }
  },
  methods: {}
};
</script>
<style scoped lang="scss">
</style>

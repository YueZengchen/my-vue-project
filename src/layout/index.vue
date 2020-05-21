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
      name: state => state.user.name
    })
  },
  mounted() {
    if (!this.name) {
      this.$router.push('/login');
    }
  },
  methods: {}
};
</script>
<style scoped lang="scss">
</style>

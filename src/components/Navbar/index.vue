<template>
  <div>
    <header>
      欢迎用户:{{ name }}
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
      name: state => state.user.name
    })
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="scss">
</style>

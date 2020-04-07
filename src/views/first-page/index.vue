<template>
  <div class="container">
    {{ name }}
    <input type="button" name="改变name1" value="改变name1" @click="changeName">
    <input type="button" name="改变name2" value="改变name2" @click="changeName2">
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: '',
  components: {},
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'name'
    ]),
    info() {
      return process;
      // return process.env.NODE_ENV;
    }
  },
  mounted() {
    console.log(process);
    console.log(process.argv);
    console.log(process.features);
    console.log(process.env);
  },
  methods: {
    ...mapActions({
      setname: 'user/setname'
    }),
    changeName() {
      this.setname('yuezengchen');
      // console.log(111);
    },
    changeName2() {
      this.$store.dispatch('user/setname', 'zhangfei');
    }
  }
};
</script>
<style scoped lang="scss">

</style>

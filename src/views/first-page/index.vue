<template>
  <div class="container">
    {{ name }}
    <input type="button" name="改变name1" value="改变name1" @click="changeName">
    <input id="121212121212" type="button" name="改变name2" value="改变name2" @click="changeName2">
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
    // console.log(process);
    // console.log(process.argv);
    // console.log(process.features);
    // console.log(process.env);
    // setTimeout(_ => {
    //   console.log(_);
    //   console.log('我在两秒前执行的');
    // }, 2000);
    function Star(name, age) {
      this.name = name;
      this.age = age;
    }
    Star.sex = '女';
    const stars = new Star('小红', 18);
    console.log(stars);
    console.log(stars.age);
    const p = new Promise((resolve, reject) => {
      // resolve(1);
      setTimeout(() => resolve(1), 1000); // (*)
    }).then(result => {
      return result * 2;
    }).then(result => {
      console.log(result);
      return result * 2;
    }).then(result => {
      return result * 2;
    });
    p.then(res => {
      console.log(res);
    });
  },
  methods: {
    ...mapActions({
      setname: 'user/setname'
    }),
    changeName() {
      this.setname('yuezengchen');
    },
    changeName2() {
      this.$store.dispatch('user/setname', 'zhangfei');
    },
    testFn() {
      const a = { a: 1 };
      a.a = 2;
    }
  }
};
</script>
<style scoped lang="scss">
.a {
  .b {
    .c {
      color: red;
    }
  }
}
</style>

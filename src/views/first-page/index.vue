<template>
  <div class="abc">
    <div class="def">
      1111
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
    };
  },
  computed: {
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
  methods: {}
};
</script>
<style scoped lang="scss">
.abc{
  .def{
    color: red;
  }
}
</style>

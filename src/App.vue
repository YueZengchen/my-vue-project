<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    };
  },
  methods: {
    testFn() {
      console.log(111);
    }
  }
};
</script>

<style>
</style>

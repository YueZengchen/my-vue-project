<template>
  <div>
    <input id="name" type="text">
    <br>
    <span id="text" />
    <input type="button" value="点我">
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      arr: [1, 2, 3, 4, 5]
    };
  },
  computed: {},
  mounted() {
    var nameEle = document.getElementById('name');
    var textEle = document.getElementById('text');
    var obj = {};
    Object.defineProperty(obj, 'name', {
      enumerable: true,
      configurable: true,
      get: function() {
        return textEle.value;
      },
      set: function(newName) {
        textEle.innerText = newName;
      }
    });
    nameEle.onkeyup = function() {
      obj.name = event.target.value;
    };
    obj.name = 6;
  }
};
</script>
<style scoped lang="scss">
</style>

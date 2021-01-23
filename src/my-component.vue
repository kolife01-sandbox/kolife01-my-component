<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Hello Sample Component</h3>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({
    counter: 0
  }),
  methods: {
    // increase: function (step, event) {
    //   // eslint-disable-next-line no-plusplus
    //   this.counter += step;
    //   console.log(event);
    // },
    increase (step, event) {
      // eslint-disable-next-line no-plusplus
      this.counter += step
      console.log(event)
    },
    resetCounter () {
      this.counter = 0
    },
    blur () {
      console.log('blur')
    },
    focus () {
      console.log('focus')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

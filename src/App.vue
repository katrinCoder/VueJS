<template>
  <div id="app">
    <header class="header">
      <nav>
        <router-link class="router-link" to="dashboard">Dashboard</router-link>
        <router-link class="router-link" to="about">About</router-link>
      </nav>
    </header>
    <button @click="goToPage('notfound')">Go to NotFound</button>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    page: 'dashboard'
  }),
  methods: {
    goToPage (pageName) {
      this.$router.push(pageName)
    }
  },
  computed: {
  },
  created () {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 100px;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.router-link {
  margin: 0 5px;
}
</style>

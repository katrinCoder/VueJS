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
    <transition name="fade">
      <ModalWindow
        v-if="showModal"
        :settings="modalSettings"
      />
    </transition>
  </div>
</template>

<script>
import ModalWindow from '@/components/ModalWindow.vue'

export default {
  name: 'App',
  components: {
    ModalWindow
  },
  data: () => ({
    page: 'dashboard',
    showModal: false,
    modalSettings: {}
  }),
  methods: {
    goToPage (pageName) {
      this.$router.push(pageName)
    },
    modalOpen (settings) {
      this.modalSettings = settings
      this.showModal = true
    },
    modalClose () {
      this.showModal = false
      this.modalSettings = {}
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.modalOpen)
    this.$modal.EventBus.$on('hide', this.modalClose)
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
.fade-enter-active, .fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
  transform: translateY(-200px);
  opacity: 0;
}
</style>

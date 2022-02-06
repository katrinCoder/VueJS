<template>
<div>
  <div class="element title">
    <div>#</div>
    <div>Date</div>
    <div>Category</div>
    <div>Value</div>
  </div>
  <div class="element" v-for="(item) in items" :key="item.id">
    <div>{{ item.id }}</div>
    <div>{{ item.date }}</div>
    <div>{{ item.category }}</div>
    <div>{{ item.value }}</div>
    <div class="menuButton" @click="openMenu(item)">...</div>
    <transition class="menuList" name="fade">
      <ModalMenu
        v-if="showMenu"
        :settings="menuSettings"
      />
    </transition>
  </div>
</div>
</template>

<script>
import ModalMenu from '@/components/ModalMenu.vue'

export default {
  name: 'PaymentDisplay',
  components: {
    ModalMenu
  },
  data: () => ({
    showMenu: false,
    menuSettings: {}
  }),
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    openMenu (item) {
      this.$menu.show({
        item: item
      })
    },
    menuOpen (settings) {
      this.menuSettings = settings
      this.showMenu = true
    },
    menuClose () {
      this.showMenu = false
      this.menuSettings = {}
    }
  },
  mounted () {
    this.$menu.EventBus.$on('show', this.menuOpen)
    this.$menu.EventBus.$on('hide', this.menuClose)
    this.$menu.show({})
    this.$menu.hide()
  }
}
</script>

<style scoped>
.element {
  height: 50px;
  width: 500px;
  display: grid;
  grid-template-columns: 30px 200px 200px 50px 20px;
  align-items: center;
  border-bottom: 1px solid lightgray;
  font: 300 15px sans-serif;
}
.title{
  font: 700 15px sans-serif;
}
.menuButton {
  position: relative;
}
.menuList {
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>

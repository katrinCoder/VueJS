<!--<template>
  <div class="pagination" v-if="pages > 0">
    <button class="pagButton" @click="pageDown">&lt;</button>
    <button class="pagButton" @click="chosePage(page)" v-for="page in pages" :key="page" v-bind="length">{{ page }}</button>
    <button class="pagButton" @click="pageUp">&gt;</button>
  </div>
</template>-->

<template>
  <div class="pagination" v-if="numOfPages > 0">
    <button class="pagButton" @click="pageDown">&lt;</button>
    <button class="pagButton" @click="chosePage(page)" v-for="page in numOfPages" :key="page">{{ page }}</button>
    <button class="pagButton" @click="pageUp">&gt;</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'PaginationComp',
  methods: {
    ...mapMutations([
      'SET_NEW_PAGE',
      'SET_PAYMENTS_LIST'
    ]),
    pageDown () {
      if (this.currentPage > 1) {
        this.SET_NEW_PAGE(this.currentPage - 1)
        this.SET_PAYMENTS_LIST(this.currentPage)
      }
    },
    pageUp () {
      if (this.currentPage < this.numOfPages) {
        this.SET_NEW_PAGE(this.currentPage + 1)
        this.SET_PAYMENTS_LIST(this.currentPage)
      }
    },
    chosePage (page) {
      this.SET_NEW_PAGE(page)
      this.SET_PAYMENTS_LIST(this.currentPage)
    }
  },
  computed: {
    ...mapGetters([
      'currentPage',
      'numOfPages'
    ])
  }
}
</script>

<style scoped>
:root {
  choseColor: LightSeaGreen
}
.pagination {
  height: 50px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  margin-top: -1px;
  padding: 0 5px;
}
.pagButton {
  margin: 0 10px;
  background: transparent;
  border: none;
  font: 700 15px sans-serif;
}
.pagButton:active {
  color: LightSeaGreen;
}
</style>

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
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'PaginationComp',
  methods: {
    ...mapMutations(['SET_NEW_PAGE']),
    ...mapActions([
      'fetchData'
    ]),
    pageDown () {
      if (this.currentPage > 1) {
        this.SET_NEW_PAGE(this.currentPage - 1)
        this.fetchData({ page: this.currentPage })
      }
    },
    pageUp () {
      if (this.currentPage < this.numOfPages) {
        this.SET_NEW_PAGE(this.currentPage + 1)
        this.fetchData({ page: this.currentPage })
      }
    },
    chosePage (page) {
      this.SET_NEW_PAGE(page)
      this.fetchData({ page: this.currentPage })
    }
  },
  computed: {
    ...mapGetters([
      'currentPage',
      'numOfPages'
    ])
  },
  updated () {
    // this.pages = Math.ceil(this.length / this.numPagesOnPage)
    // this.currentPage = this.pages
    // this.$emit('getCurrentPage', this.currentPage)
  }
}
</script>

<style scoped>
:root {
  choseColor: LightSeaGreen
}
.pagination {
  height: 50px;
  width: 480px;
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

<template>
  <div class="pagination" v-if="pages > 0">
    <button class="pagElem" @click="pageDown">&lt;</button>
    <div class="pagElem" v-for="page in pages" :key="page" v-bind="length">{{ page }}</div>
    <button class="pagElem" @click="pageUp">&gt;</button>
  </div>
</template>

<script>
export default {
  name: 'PaginationComp',
  data: () => ({
    pages: 1,
    currentPage: 1,
    numPagesOnPage: 5
  }),
  props: {
    length: {
      type: Number,
      default: 3
    }
  },
  methods: {
    pageDown () {
      if (this.currentPage > 1) {
        this.currentPage -= 1
      }
      this.$emit('getCurrentPage', this.currentPage)
    },
    pageUp () {
      if (this.currentPage < this.pages) {
        this.currentPage += 1
      }
      this.$emit('getCurrentPage', this.currentPage)
    }
  },
  updated () {
    this.pages = Math.ceil(this.length / this.numPagesOnPage)
    this.currentPage = this.pages
    this.$emit('getCurrentPage', this.currentPage)
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
  font: 700 15px sans-serif;
}
.pagElem {
  margin: 0 10px;
}
.pagElem:active {
  color: LightSeaGreen;
}
</style>

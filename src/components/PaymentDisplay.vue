<template>
<div>
  <div class="element title">
    <div>#</div>
    <div>Date</div>
    <div>Category</div>
    <div>Value</div>
  </div>
  <div class="element" v-for="(item, index) in items" :key="index">
    <div>{{ (currentPage - 1) * 5 + index + 1 }}</div>
    <div>{{ item.date }}</div>
    <div>{{ item.category }}</div>
    <div>{{ item.value }}</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PaymentDisplay',
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    currentPage: {
      type: Number,
      default: () => (1)
    }
  }
}
</script>

<style scoped>
.element {
  height: 50px;
  width: 480px;
  display: grid;
  grid-template-columns: 30px 200px 200px 50px;
  align-items: center;
  border-bottom: 1px solid lightgray;
  font: 300 15px sans-serif;
}
.title{
  font: 700 15px sans-serif;
}
</style>

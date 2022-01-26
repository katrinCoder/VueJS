<template>
  <div class="addContainer" v-if="show">
    <label for="newCategory">
      <input class="input" id="newCategory" type="text" pattern="\w+" placeholder="Category" v-model="newCategory">
    </label>
    <button class="button" @click="addCategory">Add    +</button>
  </div>
</template>

<script>
export default {
  name: 'AddCategoryForm',
  props: {
    categoryList: {
      type: Array,
      default: () => []
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    newCategory: ''
  }),
  methods: {
    addCategory () {
      if (this.newCategory !== '') {
        this.$emit('add-category', this.newCategory)
        this.newCategory = ''
      }
    }
  }
}
</script>

<style scoped>
  .addContainer{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 150px;
    width: 200px;
    margin-top: 5px;
  }
  .input{
    height: 30px;
    font: 300 15px gray sans-serif;
  }
  #newCategory {
    width: 199px;
    height: 33px;
  }
</style>

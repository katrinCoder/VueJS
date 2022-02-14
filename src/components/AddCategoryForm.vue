<template>
  <div class="addContainer">
    <label for="newCategory">
      <input class="input" id="newCategory" type="text" pattern="\w+" placeholder="Category" v-model="newCategory">
    </label>
    <button class="button" @click="addCategory">Add    +</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AddCategoryForm',
  // props: {
  //   categoryList: {
  //     type: Array,
  //     default: () => []
  //   }
  // },
  data: () => ({
    newCategory: ''
  }),
  methods: {
    ...mapMutations(['ADD_CATEGORY']),
    addCategory () {
      if (this.newCategory !== '') {
        this.ADD_CATEGORY(this.newCategory)
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
    height: 80px;
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

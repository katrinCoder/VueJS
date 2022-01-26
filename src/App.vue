<template>
  <div id="app">
    <header>
      <div class="header">My personal costs</div>
    </header>
    <main>
      <div class="containerAddForms">
        <div>
          <button class="button" @click="showPayment = !showPayment">Add new cost  +</button>
          <AddPaymentForm @add-payment="addPayment" :categoryList="categoryList" :show="showPayment"/>
        </div>
        <div>
          <button class="button" @click="showCategory = !showCategory">Add new category  +</button>
          <AddCategoryForm @add-category="addCategory" :categoryList="categoryList" :show="showCategory"/>
        </div>
      </div>
      <!--<div>Total: {{ paymentsListTotalAmount }}</div>-->
      <PaymentDisplay :items="paymentsList"/>
      <PaginationComp/>
    </main>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import PaymentDisplay from '@/components/PaymentDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import AddCategoryForm from '@/components/AddCategoryForm.vue'
import PaginationComp from '@/components/Pagination.vue'

export default {
  name: 'App',
  components: {
    AddPaymentForm,
    AddCategoryForm,
    PaymentDisplay,
    PaginationComp
  },
  data: () => ({
    showPayment: false,
    showCategory: false
  }),
  methods: {
    ...mapMutations([
      'ADD_PAYMENT_DATA',
      'ADD_CATEGORY'
    ]),
    ...mapActions([
      'fetchData',
      'fetchCategoryList'
    ]),
    addPayment (data) {
      this.ADD_PAYMENT_DATA(data)
    },
    addCategory (category) {
      this.ADD_CATEGORY(category)
    }
  },
  computed: {
    ...mapGetters([
      'paymentsList',
      // 'paymentsListTotalAmount',
      'categoryList',
      'currentPage'
    ])
  },
  created () {
    this.fetchData({ page: this.currentPage })
    this.fetchCategoryList()
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
  font: 600 40px sans-serif;
  margin-bottom: 10px;
}
.containerAddForms {
  display: flex;
  width: 480px;
  justify-content: space-between;
}
.button {
  width: 150px;
  padding: 5px 10px;
  background: LightSeaGreen;
  color: white;
  border-color: Teal;
}
</style>

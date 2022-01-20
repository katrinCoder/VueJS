<template>
  <div id="app">
    <header>
      <div class="header">My personal costs</div>
    </header>
    <main>
      <button class="button" @click="show = !show">Add new cost  +</button>
      <AddPaymentForm @add-payment="addPayment" :categoryList="categoryList" :show="show"/>
      <div>Total: {{ paymentsListTotalAmount }}</div>
      <PaymentDisplay :items="paymentsList"/>
      <!--<PaymentDisplay :items="currentList" :currentPage="currentPage"/>-->
      <!--<PaginationComp @getCurrentPage="getCurrentPage" :length="paymentsList.length"/>-->
      <PaginationComp @getCurrentPage="getCurrentPage"/>
    </main>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import PaymentDisplay from '@/components/PaymentDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import PaginationComp from '@/components/Pagination.vue'

export default {
  name: 'App',
  components: {
    AddPaymentForm,
    PaymentDisplay,
    PaginationComp
  },
  data: () => ({
    show: false
    // paymentsList: [],
    // currentList: [],
    // currentPage: 1
  }),
  methods: {
    ...mapMutations(['ADD_PAYMENT_DATA']),
    ...mapActions([
      'fetchData',
      'fetchCategoryList'
    ]),
    addPayment (data) {
      this.ADD_PAYMENT_DATA(data)
      // this.fillCurrentList(this.paymentsList, this.currentPage)
    },
    // fillCurrentList (data, page) {
    //   const firstIndex = (this.currentPage - 1) * 5
    //   this.currentList = data.slice(firstIndex, firstIndex + 5)
    // },
    getCurrentPage (data) {
      this.currentPage = data
      // this.fillCurrentList(this.paymentsList, this.currentPage)
    }
  },
  computed: {
    ...mapGetters([
      'paymentsList',
      'paymentsListTotalAmount',
      'categoryList',
      'currentPage'
    ])
  },
  created () {
    this.fetchData()
    this.fetchCategoryList()
    // this.fillCurrentList(this.paymentsList, 1)
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
.button {
  width: 150px;
  padding: 5px 10px;
  background: LightSeaGreen;
  color: white;
  border-color: Teal;
}
</style>

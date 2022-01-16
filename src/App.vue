<template>
  <div id="app">
    <header>
      <div class="header">My personal costs</div>
    </header>
    <main>
      <button class="button" @click="show = !show">Add new cost  +</button>
      <AddPaymentForm @add-payment="addPayment" :show="show"/>
      <PaymentDisplay :items="currentList" :currentPage="currentPage"/>
      <PaginationComp @getCurrentPage="getCurrentPage" :length="paymentsList.length"/>
    </main>
  </div>
</template>

<script>
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
    show: false,
    counter: 0,
    paymentsList: [],
    currentList: [],
    currentPage: 1
  }),
  methods: {
    fetchData () {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532
        }
      ]
    },
    addPayment (data) {
      this.paymentsList.push(data)
      this.fillCurrentList(this.paymentsList, this.currentPage)
    },
    fillCurrentList (data, page) {
      const firstIndex = (this.currentPage - 1) * 5
      this.currentList = data.slice(firstIndex, firstIndex + 5)
    },
    getCurrentPage (data) {
      this.currentPage = data
      this.fillCurrentList(this.paymentsList, this.currentPage)
    }
  },
  created () {
    this.paymentsList = this.fetchData()
    this.fillCurrentList(this.paymentsList, 1)
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

<template>
  <div>
    <div class="header">My personal costs</div>
    <main>
      <div class="containerAddForms">
        <button class="button" @click="addPayment">Add new cost  +</button>
        <button class="button" @click="addCategory">Add new category  +</button>
      </div>
      <PaymentDisplay :items="paymentsList"/>
      <PaginationComp/>
    </main>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import PaymentDisplay from '@/components/PaymentDisplay.vue'
import PaginationComp from '@/components/Pagination.vue'

export default {
  name: 'App',
  components: {
    PaymentDisplay,
    PaginationComp
  },
  data: () => ({
    showModal: false,
    modalSettings: {}
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
    addPayment () {
      this.$modal.show({
        title: 'Add new payment',
        content: 'addPaymentForm'
      })
    },
    addCategory () {
      this.$modal.show({
        title: 'Add new category',
        content: 'addCategoryForm'
      })
    }
  },
  computed: {
    ...mapGetters([
      'paymentsList',
      'categoryList',
      'currentPage',
      'numOfPages'
    ])
  },
  created () {
    this.fetchData()
    this.fetchCategoryList()
  },
  mounted () {
    this.$modal.show({})
    this.$modal.hide()
  }
}
</script>

<style lang="scss">
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

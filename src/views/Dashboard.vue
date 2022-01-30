<template>
  <div>
    <div class="header">My personal costs</div>
    <main>
      <div class="containerAddForms">
        <div>
          <button class="button" @click="showPayment = !showPayment">Add new cost  +</button>
          <!--<AddPaymentForm
            @add-payment="addPayment"
            :categoryList="categoryList"
            :formData="{type: this.$route.params.type, value: 1000}"
          />-->
          <AddPaymentForm
            @add-payment="addPayment"
            :categoryList="categoryList"
            :formData="{category: this.$route.params.category, value: Number(this.$route.query.value)}"
            :show="showPayment"
          />
        </div>
        <div>
          <button class="button" @click="showCategory = !showCategory">Add new category  +</button>
          <AddCategoryForm @add-category="addCategory" :categoryList="categoryList" :show="showCategory"/>
        </div>
      </div>
      <PaymentDisplay :items="paymentsList"/>
      <!--<PaginationComp :routePage="+this.$route.params.page"/>-->
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
      console.log('Вызов ADD_PAYMENT_DATA')
      this.ADD_PAYMENT_DATA(data)
    },
    addCategory (category) {
      this.ADD_CATEGORY(category)
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
    // this.fetchData({ page: this.numOfPages })
    this.fetchData()
    this.fetchCategoryList()
    console.log('created')
  },
  mounted () {
    if (this.$route.params.category) this.showPayment = true
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

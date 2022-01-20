<template>
  <div class="addContainer" v-if="show">
    <label for="value">
      <input class="input" id="value" type="number" pattern="\d+" placeholder="Amount" v-model="value">
    </label>
    <label for="category">
      <select id="category" v-model="category">
        <option
            v-for="category of categoryList"
            :value="category"
            :key="category"
        >
          {{ category }}
        </option>
      </select>
      <!--<input class="input" id="category" type="text" placeholder="Type" v-model="category">-->
    </label>
    <label for="date">
      <input class="input date" id="date" type="date" pattern="\d{2}.\d{2}.\d{4}" placeholder="Date" v-model="date">
    </label>
    <button class="button" @click="addPayment">Add    +</button>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
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
    value: '',
    category: '',
    date: ''
  }),
  methods: {
    checkInputs () {
      const {
        value, category
      } = this
      if (value !== '' && category !== '') {
        return true
      } else return false
    },
    addPayment () {
      const {
        value, category, date, paymentDay
      } = this
      const data = {
        value,
        category,
        date: date || paymentDay
      }
      if (this.checkInputs() === true) {
        this.$emit('add-payment', data)
        this.value = this.category = this.date = ''
      }
    }
  },
  computed: {
    paymentDay () {
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()

      return `${day}.${month}.${year}`
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
  .date{
    width: 194px;
  }
  #category {
    width: 199px;
    height: 33px;
  }
</style>

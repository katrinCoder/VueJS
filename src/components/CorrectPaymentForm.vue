<template>
  <!--<div class="addContainer" v-if="show">-->
  <div class="addContainer">
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
      <input class="input date" id="date" type="date" pattern="\d{2}.\d{2}.\d{4}" placeholder="Date" v-model="dateFormatInput">
    </label>
    <button class="button" @click="correctPayment">Correct    +</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'AddPaymentForm',
  data: () => ({
    dateFormatInput: '',
    value: '',
    category: '',
    date: ''
  }),
  props: {
    formData: {
      category: {
        type: String,
        default: () => ''
      },
      value: {
        type: Number,
        default: () => 0
      }
    },
    itemCorrect: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapMutations(['CORRECT_PAYMENT_DATA']),
    checkInputs () {
      const {
        value, category
      } = this.itemCorrect
      if (value !== '' && category !== '') {
        return true
      } else return false
    },
    correctPayment () {
      const {
        value, category
      } = this
      const id = this.itemCorrect.id
      const date = this.dateInputToStore(this.dateFormatInput)
      const data = {
        id,
        value,
        category,
        date
      }
      if (this.checkInputs() === true) {
        this.CORRECT_PAYMENT_DATA(data)
        this.$modal.hide()
      }
    },
    dateStoreToInput (date) {
      const dateMass = date.split('.')
      return dateMass[2] + '-' + dateMass[1] + '-' + dateMass[0]
    },
    dateInputToStore (date) {
      const dateMass = date.split('-')
      return dateMass[2] + '.' + dateMass[1] + '.' + dateMass[0]
    }
  },
  computed: {
    ...mapGetters(['categoryList']),
    paymentDay () {
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()

      return `${day}.${month}.${year}`
    }
  },
  created () {
    this.dateFormatInput = this.dateStoreToInput(this.itemCorrect.date)
    this.value = this.itemCorrect.value
    this.category = this.itemCorrect.category
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

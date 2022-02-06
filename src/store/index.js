import Vue from 'vue'
import Vuex from 'vuex'
import category from '@/store/category'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: {},
    paymentsListCurrent: [],
    currentPage: 1,
    numOfPages: 2
  },
  mutations: {
    FETCH_PAYMENTS_LIST (state, paymentsList) {
      state.paymentsList = paymentsList
      state.paymentsListCurrent = state.paymentsList['page' + state.currentPage]
    },
    SET_PAYMENTS_LIST (state, page) {
      state.paymentsListCurrent = state.paymentsList['page' + page]
    },
    ADD_PAYMENT_DATA (state, payment) {
      console.log('Пришли в store в мутацию ADD_PAYMENT_DATA')
      if (Object.keys(state.paymentsList['page' + state.numOfPages]).length < 3) {
        state.paymentsList['page' + state.numOfPages][Object.keys(state.paymentsList['page' + state.numOfPages]).length] = payment
      } else {
        state.numOfPages += 1
        state.paymentsList['page' + state.numOfPages] = []
        state.paymentsList['page' + state.numOfPages].push(payment)
        state.currentPage = state.numOfPages
      }
      state.paymentsList['page' + state.numOfPages][Object.keys(state.paymentsList['page' + state.numOfPages]).length - 1].id = (state.numOfPages - 1) * 3 + Object.keys(state.paymentsList['page' + state.numOfPages]).length
      state.paymentsListCurrent = state.paymentsList['page' + state.currentPage]
    },
    CORRECT_PAYMENT_DATA (state, payment) {
      state.paymentsListCurrent.find(item => item.id === payment.id).value = payment.value
      state.paymentsListCurrent.find(item => item.id === payment.id).category = payment.category
      state.paymentsListCurrent.find(item => item.id === payment.id).date = payment.date
    },
    DELETE_PAYMENT (state, payment) {
      state.paymentsListCurrent.splice(state.paymentsListCurrent.indexOf(state.paymentsListCurrent.find(item => item.id === payment.id)), 1)
    },
    SET_NEW_PAGE (state, currentPage) {
      state.currentPage = currentPage
    }
  },
  getters: {
    currentPage: (state) => state.currentPage,
    paymentsList: (state) => state.paymentsListCurrent,
    numOfPages: (state) => state.numOfPages
  },
  actions: {
    fetchData ({ commit }) {
      setTimeout(() => {
        const paymentsList = {
          page1: [
            { id: 1, date: '20.03.2020', category: 'Food', value: 169 },
            { id: 2, date: '21.03.2020', category: 'Navigation', value: 50 },
            { id: 3, date: '22.03.2020', category: 'Sport', value: 450 }
          ],
          page2: [
            { id: 4, date: '23.03.2020', category: 'Entertaiment', value: 969 },
            { id: 5, date: '24.03.2020', category: 'Education', value: 1500 },
            { id: 6, date: '25.03.2020', category: 'Food', value: 200 }
          ]
        }
        commit('FETCH_PAYMENTS_LIST', paymentsList)
      }, 1000)
    }
  },
  modules: {
    category
  }
})
// ({ commit }, page) {

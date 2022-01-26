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
    SET_PAYMENTS_LIST (state, paymentsListCurrent) {
      if (!state.paymentsList['page' + state.currentPage]) {
        state.paymentsList['page' + state.currentPage] = paymentsListCurrent
        state.paymentsListCurrent = paymentsListCurrent
      } else {
        state.paymentsListCurrent = state.paymentsList['page' + state.currentPage]
      }
    },
    ADD_PAYMENT_DATA (state, payment) {
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
    SET_NEW_PAGE (state, currentPage) {
      state.currentPage = currentPage
    }
  },
  getters: {
    currentPage: (state) => state.currentPage,
    paymentsList: (state) => state.paymentsListCurrent,
    numOfPages: (state) => state.numOfPages
    // paymentsListTotalAmount: ({ paymentsList }) => Object.keys(paymentsList).reduce((total, { value }) => total + value, 0)
  },
  actions: {
    fetchData ({ commit }, { page }) {
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
        commit('SET_PAYMENTS_LIST', paymentsList['page' + page])
      }, 1000)
    }
  },
  modules: {
    category
  }
})
// ({ commit }, page) {

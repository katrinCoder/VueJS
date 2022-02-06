<template>
  <!--<div class="wrapper">-->
    <div class="content">
      <button class="menuButton" @click="CorrectPayment(settings.item)">
        <img
          src="../assets/pencil.png"
          alt="pencil"
          height="10px"
          width="10px"/>
        Редактировать
      </button>
      <button class="menuButton" @click="DeletePayment(settings.item)">
        <img
          src="../assets/trash.png"
          alt="trash"
          height="10px"
          width="10px"/>
        Удалить
      </button>
    </div>
  <!--</div>-->
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ModalMenu',
  props: {
    settings: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    ...mapMutations(['DELETE_PAYMENT']),
    CorrectPayment (item) {
      this.close()
      this.$modal.show({
        title: 'Correct payment',
        content: 'correctPaymentForm',
        itemCorrect: item
      })
    },
    DeletePayment (item) {
      this.close()
      this.DELETE_PAYMENT(item)
    },
    close () {
      this.$menu.hide()
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 150px;
  height: 60px;
  top: 300px;
  left: 600px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
.menuButton {
  width: 100%;
  height: 30px;
  background-color: transparent;
  border: none;
}
.menuButton:hover {
  background-color: lightgray;
  text-decoration: underline;
}
.small {
  width: 30px;
}
</style>

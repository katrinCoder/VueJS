<template>
  <div class="wrapper">
    <div class="content">
      <div>{{ title }}</div>
      <div class="content">
        <component :is="settings.content" :itemCorrect="settings.itemCorrect"/>
      </div>
      <div class="footer">
        <button class="button small" @click="close">X</button>
      </div>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import AddCategoryForm from '@/components/AddCategoryForm.vue'
import CorrectPaymentForm from '@/components/CorrectPaymentForm.vue'

export default {
  name: 'ModalWindow',
  props: {
    settings: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    AddPaymentForm,
    AddCategoryForm,
    CorrectPaymentForm
  },
  methods: {
    close () {
      this.$modal.hide()
    }
  },
  computed: {
    title () {
      return this.settings.title
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
}
.content {
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
}
.small {
  width: 30px;
}
</style>

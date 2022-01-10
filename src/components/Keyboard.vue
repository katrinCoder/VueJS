<template>
    <div class="keyboard">
        <button class="key" v-for="number in numbers" :key="number" @click="write(number)">{{ number }}</button>
    </div>
</template>

<script>
export default {
  name: 'Keyboard',
  data: () => ({
    toggle: '',
    numbers: ['', '', 'C', '7', '8', '9', '4', '5', '6', '1', '2', '3', '', '0', ''],
    keyValue: ''
  }),
  methods: {
    write (number) {
      if (number !== '') {
        this.keyValue = number
      }
    }
  }
}
</script>

<style>
.keyboard {
  display: grid;
  width: 150px;
  height: 250px;
  grid-template-rows: repeat(5, 50px);
  grid-template-columns: repeat(3, 50px);
  margin-top: 5px;
  margin-left: 4px;
}
.longKey {
  grid-column: span 2;
}
</style>

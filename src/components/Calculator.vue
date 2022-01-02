<template>
  <div>
    <div class="main">
<!--        <input v-bind:class="[numberClass, marginTopClass]" id="op1" type="number" v-model.number="op1">-->
        <input class="numbers" v-bind:style="{marginTop: setMargin}" id="op1" type="number" v-model.number="op1">
        <div class="keyboard">
            <button class="button" @click="add">+</button>
            <button class="button" @click="sub">-</button>
            <button class="button" @click="div">/</button>
            <button class="button" @click="mult">*</button>
            <button class="button" @click="deg">^</button>
            <button class="button" @click="intDiv">/-%</button>
        </div>
        <input class="numbers" v-bind:style="{marginTop: setMargin}" id="op2" type="number" v-model.number="op2">
        <output class="numbers" v-bind:style="{marginTop: setMargin}" id="result" type="number"> = {{ result }} </output>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalculatorComp',
  data: () => ({
    op1: 0,
    op2: 0,
    result: 0,
    setMargin: '10px'
  }),
  methods: {
    add () {
      this.result = this.op1 + this.op2
      this.setMargin = '10px'
    },

    sub () {
      this.result = this.op1 - this.op2
      this.setMargin = '60px'
    },

    div () {
      this.result = this.op1 / this.op2
      this.setMargin = '110px'
    },

    mult () {
      this.result = this.op1 * this.op2
      this.setMargin = '160px'
    },

    deg () {
      this.result = this.op1 ** this.op2
      this.setMargin = '210px'
    },

    intDiv () {
      this.result = parseInt(this.op1 / this.op2)
      this.setMargin = '260px'
    }
  }
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.keyboard {
    display: flex;
    flex-direction: column;
    margin: 0 20px;
}
.button {
    width: 50px;
    height: 50px;
    font-size: 15px;
}
.numbers {
    height: 30px;
    font-size: 20px;
}
.button:focus {
    background: darkgray;
    color: black;
    font-weight: bold;
}
</style>

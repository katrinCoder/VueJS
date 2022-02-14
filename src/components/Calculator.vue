<template>
  <div>
    <input
      id="showKey"
      type="checkbox"
      v-model="toggle"
      true-value="yes"
      false-value="no"
    >
    <label for="showKey">Показать экранную клавиатуру</label>
    <div class="main">
      <div>
        <input class="numbers" v-bind:style="{marginTop: setMargin}" id="op1" type="number" v-model.number="op1" @click="keyboardOp='1'">
        <div class="keyboard" v-if="toggle === 'yes' && keyboardOp === '1'">
          <button></button>
          <button class="key longKey" @click="writeNumber('C')">C</button>
          <button class="key" v-for="number in numbers" :key="number" @click="writeNumber(number)">{{ number }}</button>
          <button class="key longKey" @click="writeNumber('0')">0</button>
          <button></button>
        </div>
      </div>
      <div class="calc">
          <button
            class="button"
            v-for="operator in operators"
            @click="calculate(operator)"
            :title="operator"
            :key="operator"
          >
          {{ operator }}
          </button>
      </div>
      <div>
        <input class="numbers" v-bind:style="{marginTop: setMargin}" id="op2" type="number" v-model.number="op2" @click="keyboardOp='2'">
        <div class="keyboard" v-if="toggle === 'yes' && keyboardOp === '2'">
          <button></button>
          <button class="key longKey" @click="writeNumber('C')">C</button>
          <button class="key" v-for="number in numbers" :key="number" @click="writeNumber(number)">{{ number }}</button>
          <button class="key longKey" @click="writeNumber('0')">0</button>
          <button></button>
        </div>
        <!--<Keyboard v-if="toggle === 'yes'"></Keyboard>-->
      </div>
      <output class="numbers output" v-bind:style="{marginTop: setMargin}" id="result" type="number"> = {{ result }} </output>
    </div>
    <div class="error" v-if="error">Ошибка: {{ error }}</div>
  </div>
</template>

<script>
// import Keyboard from '@/components/Keyboard.vue'

export default {
  name: 'CalculatorComp',
  // components: {
  //   Keyboard
  // },
  data: () => ({
    op1: 0,
    op2: 0,
    result: 0,
    error: '',
    toggle: 'no',
    keyboardOp: '1',
    operators: ['+', '-', '/', '*', '^', '/-%'],
    numbers: ['7', '8', '9', '4', '5', '6', '1', '2', '3'],
    setMargin: '10px',
    numberKey: ''
  }),
  methods: {
    add () {
      this.setMargin = '10px'
      const { op1, op2 } = this
      this.result = op1 + op2
    },

    sub () {
      this.setMargin = '60px'
      const { op1, op2 } = this
      this.result = op1 - op2
    },

    div () {
      this.setMargin = '110px'
      const { op1, op2 } = this
      if (op2 === 0) {
        this.error = 'На ноль делить нельзя'
        return
      }
      this.result = op1 / op2
    },

    mult () {
      this.setMargin = '160px'
      const { op1, op2 } = this
      this.result = op1 * op2
    },

    deg () {
      this.setMargin = '210px'
      const { op1, op2 } = this
      this.result = op1 ** op2
    },

    intDiv () {
      this.setMargin = '260px'
      const { op1, op2 } = this
      if (op2 === 0) {
        this.error = 'На ноль делить нельзя'
        return
      }
      this.result = parseInt(op1 / op2)
    },

    calculate (operation) {
      this.error = ''
      switch (operation) {
        case '+': this.add(); break
        case '-': this.sub(); break
        case '/': this.div(); break
        case '*': this.mult(); break
        case '^': this.deg(); break
        case '/-%': this.intDiv(); break
      }
    },

    writeNumber (number) {
      var operand
      this.keyboardOp === '1' ? operand = this.op1 : operand = this.op2
      operand = String(operand)
      switch (number) {
        case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
          if (operand !== '0') {
            operand += number
          } else operand = number
          break
        case 'C':
          if (operand.length > 1) {
            operand = operand.slice(0, -1)
          } else operand = '0'
          break
      }
      operand = Number(operand)
      this.keyboardOp === '1' ? this.op1 = operand : this.op2 = operand
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 150px;
}
.calc {
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
  width: 150px;
  height: 30px;
  font-size: 20px;
}
.output {
  text-align: left;
  margin-left: 20px;
  padding-top: 6px;
}
.button:focus {
  background: darkgray;
  color: black;
  font-weight: bold;
}
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
.error {
  color: red;
}
</style>

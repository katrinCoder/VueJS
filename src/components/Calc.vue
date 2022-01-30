<template>
  <div>
    <div class="main">
      <label for="op1">
        <input id="op1" type="number" v-model.number="op1">
      </label>

      <label for="op2">
        <input id="op2" type="number" v-model.number="op2">
      </label>
      = {{ result }} <br/>
      Fibonacci-1 = {{ fib1 }} <br/>
      Fibonacci-2 = {{ fib2() }}
    </div>
<!--    <div class="error" v-if="error">-->
<!--      Ошибка: {{ error }}-->
<!--    </div>-->
<!--    <div class="error" v-show="error">-->
<!--      Ошибка: {{ error }}-->
<!--    </div>-->
<!--    <div class="messages">-->
<!--      <template v-if="result < 0">Отрицательный результат</template>-->
<!--      <template v-else-if="result < 100">Результат в первой сотне</template>-->
<!--      <template v-else>Простое условие</template>-->
<!--    </div>-->
<!--    <div class="keyboard">-->
<!--      <button @click="calculate('+')">+</button>-->
<!--      <button @click="calculate('-')">-</button>-->
<!--      <button @click="calculate('/')">/</button>-->
<!--      <button @click="calculate('*')">*</button>-->
<!--    </div>-->
<!--    <div v-for="(item, index) in collection" :key="item">-->
<!--      {{ index }} - {{ item }}-->
<!--    </div>-->
    <div class="keyboard">
      <button
          v-for="operator in operators"
          @click="calculate(operator)"
          :title="operator"
          :key="operator"
      >
        {{ operator }}
      </button>
    </div>
    <div class="logs">
      {{ logs }}
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
    error: '',
    operators: ['+', '-', '/', '*'],
    collection: [1, 2, 3, 4],
    logs: {},
  }),
  methods: {
    sum() {
      const { op1, op2 } = this;

      this.result = op1 + op2;
    },

    sub() {
      const { op1, op2 } = this;

      this.result = op1 - op2;
    },

    div() {
      const { op1, op2 } = this;

      if (op2 === 0) this.error = 'На ноль делить нельзя.';
      else this.result = op1 / op2;
    },

    mult() {
      const { op1, op2 } = this;

      this.result = op1 * op2;
    },

    calculate(operation) {
      this.error = '';
      const { op1, op2 } = this;
      // eslint-disable-next-line default-case
      switch (operation) {
        case '+': this.sum(); break;
        case '-': this.sub(); break;
        case '/': this.div(); break;
        case '*': this.mult(); break;
      }

      // this.logs[Date.now()] = `${op1} ${operation} ${op2}`;
      // this.logs = { ...this.logs, [Date.now()]: `${op1} ${operation} ${op2}` };
      // Vue.set();
      this.$set(this.logs, Date.now(), `${op1} ${operation} ${op2}`);
    },

    fib(n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    },

    fib2() {
      console.log('method');
      const { op2 } = this;

      return this.fib(op2);
    },
  },

  computed: {
    fib1() {
      console.log('computed');
      const { op1 } = this;

      return this.fib(op1);
    },
    // fib2() {
    //   console.log('computed');
    //   const { op2 } = this;
    //
    //   return this.fib(op2);
    // },
  },
};
</script>

<style scoped>

</style>

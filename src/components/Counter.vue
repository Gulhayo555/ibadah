<template>
  <p class="count">
    <span v-show="is_comma">{{ count | addComma }}</span>
    <span v-show="!is_comma">{{ count }}</span>
  </p>
</template>
<script>
export default {
  data: {
    num: 1000,
    count: 0,   
    is_comma: true,
  },
  watch: {
    num(val) {
      this.setCount(val);
    },
  },
  methods: {
    addVal(n) {
      this.num += n;
    },
    doubleVal() {
      this.num *= 2;
    },
    resetVal() {
      this.num = 0;
      this.count = 0;
    },
    setCount(val) {
      const obj = { n: this.count };
      anime({
        targets: obj,
        n: val,
        round: 1,
        duration: 500,
        easing: "linear",
        update: () => {
          this.count = obj.n;
        },
      });
    },
  },
  filters: {
    addComma(val) {
      return val.toLocaleString();
    },
  },
  mounted() {
    this.setCount(this.num);
  },
};
</script>

<style scoped>
.item {
  height: 200px; /* Adjust as per your layout */
  margin-top: 500px; /* Adjust as per your layout */
  background-color: lightblue;
  padding: 20px;
  font-size: 24px;
  text-align: center;
}

.timer {
  margin: 20px;
  padding: 10px;
  font-size: 18px;
  text-align: center;
  border: 1px solid #ccc;
}
</style>

let app = new Vue({
  el: '#app',
  data: {
    // コース表示
    course1: true,
    course2: true,
    course3: true,
    course4: true,
    // 料金計算
    course1weight: 'noselect',
    course1Option: false,
    course2weight: 'noselect',
    course2Option: false,
    course3menu: 'noselect',
    course4Option: false,
    price: 0
  },
  filters: {
    number_format: function (num) {
      return num.toLocaleString()
    }
  },
  methods: {
    /*-------------------------
      コース料金
    -------------------------*/
    courseCalc: function (val, price, add, add2) {
      let addPrice = 0

      // 3kg以下（シャンプー・カットなし）
      if (val == 0) {
        addPrice = price
      }
      // 4kg～7kg（シャンプー無し・カットあり）
      if (val == 1) {
        addPrice = price + add
      }
      // 7kg以上（シニアわんトリミング シャンプー＆カット）
      if (val == 2) {
        addPrice = price + add2
      }
      return addPrice;
    },
    /*-------------------------
      オプション料金
    -------------------------*/
    optionCalc: function (val, price) {
      let addOption = 0

      // オプションあり
      if (val) {
        addOption = price
      }
      // オプションなし
      else {
        addOption = 0
      }
      return addOption;
    },
    /*-------------------------
      合計金額
    -------------------------*/
    totalPrice: function () {
      // コース料金
      let course1Price = this.courseCalc(this.course1weight, 13000, 4000, 7000)
      let course2Price = this.courseCalc(this.course2weight, 25000, 5000 , 10000)
      let course3Price = this.courseCalc(this.course3menu, 10000, 10000, 5000)
      // オプション料金
      let option1Price = this.optionCalc(this.course1Option, 3000)
      let option2Price = this.optionCalc(this.course2Option, 3000)
      let option4Price = this.optionCalc(this.course4Option, 10000)
      // 合計
      this.price = course1Price + course2Price + course3Price + option1Price + option2Price + option4Price
    }
  }
})

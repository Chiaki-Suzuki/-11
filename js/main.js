let app = new Vue({
  el: '#app',
  data: {
    course1: true,
    course2: true,
    course3: true,
    course4: true,
    course1Hair: 'noselect',
    course1weight: 'noselect',
    course1Option: false,
    course2Hair: 'noselect',
    course2weight: 'noselect',
    course2Option: false,
    course3menu: 'noselect',
    course4Option: false,
    price: 0
  },
  methods: {
    // コース１
    test: function () {
      let addPrice = 0

      // 3kg以下
      if (this.course1weight == 0) {
        addPrice = 13000
      }
      // 4kg～7kg
      if (this.course1weight == 1) {
        addPrice = 17000
      }
      // 7kg以上
      if (this.course1weight == 2) {
        addPrice = 20000
      }
      return addPrice;
    },
    // コース２
    test2: function() {
      let addPrice = 0

      // 3kg以下
      if (this.course2weight == 0) {
        addPrice = 25000
      }
      // 4kg～7kg
      else if (this.course2weight == 1) {
        addPrice = 30000
      }
      // 7kg以上
      else if (this.course2weight == 2) {
        addPrice = 35000
      }
      return addPrice;
    },
    // コース３
    test3: function() {
      let addPrice = 0

      // シャンプー・カットなし
      if (this.course3menu == 0) {
        addPrice = 10000
      }
      // シャンプー無し・カットあり
      else if (this.course3menu == 1) {
        addPrice = 20000
      }
      // シニアわんトリミング シャンプー＆カット
      else if (this.course3menu == 2) {
        addPrice = 15000
      }
      return addPrice;
    },
    // コース１オプション
    test1option: function () {
      let addOption = 0
      if (this.course1Option) {
        addOption = 3000
      } else {
        addOption = 0
      }
      return addOption;
    },
    // コース２オプション
    test2option: function () {
      let addOption = 0
      if (this.course2Option) {
        addOption = 3000
      } else {
        addOption = 0
      }
      return addOption;
    },
    // コース４オプション
    test4option: function () {
      let addOption = 0
      if (this.course4Option) {
        addOption = 10000
      } else {
        addOption = 0
      }
      return addOption;
    },
    totalPrice: function () {
      let course1Price = this.test()
      let course2Price = this.test2()
      let course3Price = this.test3()
      let optionPrice = this.test1option()
      let option2Price = this.test2option()
      let option4Price = this.test4option()
      this.price = course1Price + course2Price + course3Price + optionPrice + option2Price + option4Price
    }
  }
})

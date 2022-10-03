<template>
  <div class="simulation">
      <h3 class="font-digital">料金シミュレーション</h3>
      <p>ご希望の内容をお選びください。</p>
      <div class="step">
          <h4 class="font-digital"><span>STEP1</span>コース選択</h4>
          <p>必要なコースを選択してください。</p>
          <ul class="step1box">
              <li>
                  <p><span>course1</span>シャンプーコース</p>
                  <div class="switch">
                      <label for="s1" class="switch__label">
                          <input type="checkbox"
                              id="s1"
                              class="switch__input"
                              v-model="course1">
                          <span class="switch__content"></span>
                          <span class="switch__circle"></span>
                      </label>
                  </div>
              </li>
              <li>
                  <p><span>course2</span>トリミングコース</p>
                  <div class="switch">
                      <label for="s2" class="switch__label">
                          <input type="checkbox"
                              id="s2"
                              class="switch__input"
                              v-model="course2">
                          <span class="switch__content"></span>
                          <span class="switch__circle"></span>
                      </label>
                  </div>
              </li>
              <li>
                  <p><span>course3</span>シニアトリミング・<br>グルーミングコース</p>
                  <div class="switch">
                      <label for="s3" class="switch__label">
                          <input type="checkbox"
                              id="s3"
                              class="switch__input"
                              v-model="course3">
                          <span class="switch__content"></span>
                          <span class="switch__circle"></span>
                      </label>
                  </div>
              </li>
              <li>
                  <p><span>course4</span>麻酔無しで行う<br>『困ったにゃん』コース</p>
                  <div class="switch">
                      <label for="s4" class="switch__label">
                          <input type="checkbox"
                              id="s4"
                              class="switch__input"
                              v-model="course4">
                          <span class="switch__content"></span>
                          <span class="switch__circle"></span>
                      </label>
                  </div>
              </li>
          </ul>
      </div>
      <div class="step">
          <h4 class="font-digital"><span>STEP2</span>情報入力</h4>
          <p>猫ちゃんの状態や追加オプションを選択してください。</p>
          <ul class="step2box">
              <transition name="course">
                  <li class="color1" v-if="course1">
                      <p class="course-title">course1</p>
                      <p>毛の長さ</p>
                      <select>
                          <option value="noselect">選択してください</option>
                          <option value="0">短毛</option>
                          <option value="1">長毛</option>
                      </select>
                      <p>体重</p>
                      <select v-model="course1weight" @change="totalPrice">
                          <option value="noselect">選択してください</option>
                          <option value="0">3kg以下</option>
                          <option value="1">4kg~7kg以下</option>
                          <option value="2">7kg以上</option>
                      </select>
                      <p>オプション追加</p>
                      <label class="btn active" for="o1">
                          <input id="o1" type="checkbox" v-model="course1Option" @change="totalPrice"><i class="fa fa-check-square-o fa-2x"></i>
                          <span>抜け毛・毛玉処理</span>
                      </label>
                  </li>
              </transition>
              <transition name="course">
                  <li class="color2" v-if="course2">
                      <p class="course-title">course2</p>
                      <p>毛の長さ</p>
                      <select>
                          <option value="noselect">選択してください</option>
                          <option value="0">短毛</option>
                      </select>
                      <p>体重</p>
                      <select v-model="course2weight" @change="totalPrice">
                          <option value="noselect">選択してください</option>
                          <option value="0">3kg以下</option>
                          <option value="1">4kg~7kg以下</option>
                          <option value="2">7kg以上</option>
                      </select>
                      <p>オプション追加</p>
                      <label class="btn active" for="o2">
                          <input id="o2" type="checkbox" v-model="course2Option" @change="totalPrice"><i class="fa fa-check-square-o fa-2x"></i>
                          <span>抜け毛・毛玉処理</span>
                      </label>
                  </li>
              </transition>
              <transition name="course">
                  <li class="color3" v-if="course3">
                      <p class="course-title">course3</p>
                      <p>メニュー</p>
                      <select v-model="course3menu" @change="totalPrice">
                          <option value="noselect">選択してください</option>
                          <option value="0">シャンプー・カットなし</option>
                          <option value="1">シャンプー無し・カットあり</option>
                          <option value="2">シニアわんトリミング シャンプー＆カット</option>
                      </select>
                  </li>
              </transition>
              <transition name="course">
                  <li class="color4" v-if="course4">
                      <p class="course-title">course4</p>
                      <p>オプション追加</p>
                      <label class="btn active" for="o4">
                          <input id="o4" type="checkbox" v-model="course4Option" @change="totalPrice"><i class="fa fa-check-square-o fa-2x"></i>
                          <span>『困ったにゃん』コース</span>
                      </label>
                  </li>
              </transition>
          </ul>
      </div>
      <div class="sum">
          <h4 class="font-digital">合計<span>{{ price | number_format }}</span>円 ～</h4>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Simulation',
  data: () => {
    return {
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
    }
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
}
</script>

<style>

</style>

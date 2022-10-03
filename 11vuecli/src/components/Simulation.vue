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
/* 料金シミュレーション */
.simulation {
  position: relative;
  background: #f8dcdc80;
  padding: 60px 30px 30px;
  margin: 40px 0 40px 0;
  border-radius: 10px;
}

.simulation h3 {
  position: absolute;
  display: inline-block;
  top: -55px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 25px;
  padding: 10px 50px;
  color: #fff;
  background-color: #fda1ba;
  box-sizing: border-box;
}

.simulation h3::before {
  position: absolute;
  content: '';
  top: 100%;
  left: 0;
  border: none;
  border-bottom: 15px solid transparent;
  border-right: 20px solid #c87f93;
}
.simulation h3::after {
  position: absolute;
  content: '';
  top: -15px;
  right: 0;
  border: none;
  border-top: 15px solid transparent;
  border-left: 20px solid #c87f93;
}

.simulation .step {
  margin: 40px 0 60px;
}

.simulation .step h4 {
  margin: 10px auto;
  font-size: 20px;
  border-bottom: 1px dashed #976546;
  width: 60%;
}

.simulation .step h4 span {
  display: inline-block;
  color: #976546;
  margin: 0 10px 0 0;
}

.simulation .step h4::before {
  content: '';
  display: inline-block;
  width: 25px;
  height: 25px;
  margin: 0 10px 0 0;
  background: url("../assets/img/nikukyustep.png") 0 0 / cover no-repeat;
  vertical-align: top;
}

.simulation .step1box,
.simulation .step2box {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
}

.simulation .step1box li,
.simulation .step2box li {
  position: relative;
  width: 100%;
  border: 3px solid #976546;
  border-radius: 5px;
  padding: 20px;
  margin: 0 10px 0 0;
  box-sizing: border-box;
  background: #fbf5f2;
}

.simulation .step1box li:last-of-type,
.simulation .step2box li:last-of-type {
  margin: 0 0 0 0;
}

.simulation .step1box li {
  padding: 10px 10px 60px 10px;
}

.simulation .step1box li p span {
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: #976546;
  margin: 10px;
}

.simulation .step1box li p span::after {
  content: '';
  display: block;
  width: 25px;
  height: 4px;
  background-color: #ff8181;
  margin: 3px auto;
}
.simulation .step1box li:nth-of-type(1) p span::after {
  content: '';
  background-color: #fda1ba;
}
.simulation .step1box li:nth-of-type(3) p span::after {
  content: '';
  background-color: #ffbb77;
}
.simulation .step1box li:nth-of-type(4) p span::after {
  content: '';
  background-color: #ffd73c;
}

.simulation .step2box li {
  margin: 40px 10px 0 0;
  text-align: left;
}
.simulation .step2box li:last-of-type {
  margin: 40px 0 0 0;
}

.simulation .step2box li p.course-title {
  position: absolute;
  top: -30px;
  left: -3px;
  padding: 0 10px;
  border-radius: 5px 5px 0 0;
}

.simulation .step2box li select {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 0 20px 0;
}

.simulation .step2box li p:not(.course-title) {
  font-size: 14px;
  font-weight: bold;
  color: #976546;
}

.simulation .step2box li p:not(.course-title)::before {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #ff8181;
  border-radius: 3px;
  margin: 0 5px 0 0;
}
.simulation .step2box li.color1 p:not(.course-title)::before {
  content: '';
  background-color: #fda1ba;
}
.simulation .step2box li.color3 p:not(.course-title)::before {
  content: '';
  background-color: #ffbb77;
}
.simulation .step2box li.color4 p:not(.course-title)::before {
  content: '';
  background-color: #ffd73c;
}

.sum h4 {
  background: #fff;
  margin: 0 auto 30px;
  padding: 15px;
  width: 40%;
  border-radius: 50em;
  border: 2px dashed #fda1ba;
  outline: 8px solid #fff;
}

.sum h4 span {
  display: inline-block;
  font-size: 24px;
  color: #ff8181;
  margin: 0 3px 0 5px;
}

/* オプションチェック */
.simulation .step2box li label {
  cursor: pointer;
  display: block;
  border-radius: 5px;
  padding: 5px;
}
.simulation .step2box li label:hover {
  background-color: #fdd3dd61;
}
.simulation .step2box li label input[type="checkbox"] {
  display: none;
}
.simulation .step2box li label input[type="checkbox"] ~ i.fa.fa-check-square-o{
  /* display: none; */
  color: #c8c8c8;
  display: inline;
  vertical-align: sub;
}
.simulation .step2box li label input[type="checkbox"]:checked ~ i.fa.fa-check-square-o{
  color: #976546;
  display: inline;
  vertical-align: sub;
}
/* オプションチェックここまで */

/* スイッチ */
.switch {
  bottom: 15px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.switch__label {
	width: 80px;
	position: relative;
	display: inline-block;
	padding-top: 3px;
  cursor: pointer;
}
.switch__content {
	display: block;
  cursor: pointer;
  position: relative;
  border-radius: 50em;
  height: 24px;
  background-color: rgb(143 143 143 / 26%);
	transition: all .1s .3s;
	overflow: hidden;
}

.switch__content::before {
  content: '不要';
  position: absolute;
  font-size: 13px;
  color: #aaa;
  top: 3px;
}

.switch__content:after {
	content: "";
	display: block;
	position: absolute;
	width: 0;
	height: 100%;
	top: 0;
	left: 0;
	border-radius: 7px;
	transition: all .3s;
}
.switch__input {
	display: none;
}
.switch__circle {
	display: block;
	top: 0px;
	left: 0px;
	position: absolute;
	width: 30px;
	height: 30px;
	border-radius: 50em;
	background-color: #F1F1F1;
	transition: all .3s;
	box-shadow: 0 2px 2px #ccc;
}
.switch__input:checked ~ .switch__circle {
	left: 50px;
	background-color: #ff8181;
}
.switch__input:checked ~ .switch__content {

	border-color: transparent;
	transition: all 0s;
}

.switch__input:checked ~ .switch__content:before {
  content: '必要';
  color: #fff;
  z-index: 2;
  left: 16px;
  font-weight: bold;
}

.switch__input:checked ~ .switch__content:after {
	background-color: #f5a9a9;
	width: 100%;
}
/* スイッチここまで */

/* コース内容表示・非表示の動き */
.course-enter-active {
  transition: all .5s ease;
}

.course-leave-active {
  transition: all .3s ease;
  position: absolute;
}

.course-enter,
.course-leave-to {
  opacity: 0;
}
/* コース内容表示・非表示の動き ここまで */
/* 料金シミュレーションここまで */

/*-------------------------
  sp
-------------------------*/
@media (max-width: 768px) {
  /* 料金シミュレーション */
  .simulation {
    margin: 80px 0 40px 0;
    padding: 60px 20px 20px;
  }
  .simulation h3,
  .simulation .step h4,
  .sum h4 {
    width: 90%;
  }
  .simulation h3{
    font-size: 18px;
    padding: 10px;
  }
  .simulation .step h4 {
    font-size: 16px;
  }
  .simulation .step1box,
  .simulation .step2box {
  flex-wrap: wrap;
  }
  .simulation .step1box li,
  .simulation .step2box li {
    width: 48%;
    padding: 10px;
    margin: 0 0 10px 0 !important;
  }
  .simulation .step1box li {
    padding: 10px 10px 60px 10px;
  }
  .simulation .step2box li {
    width: 100%;
    margin: 40px 0 0 0 !important;
    text-align: left;
  }
  .simulation .step2box li p.course-title {
    top: -35px;
  }
  .sum h4 {
    font-size: 18px;
    padding: 5px;
  }
  .switch__content::before {
    top: 0;
  }
}
</style>

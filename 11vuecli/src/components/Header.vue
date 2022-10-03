<template>
  <header>
    <!-- メイン -->
    <section class="top-title overflow">
      <div class="flexslider">
        <ul class="slides">
          <li class="transition">
            <img src="../assets/img/top02.png" />
          </li>
          <li class="transition">
            <img src="../assets/img/top03.png" />
          </li>
          <li class="transition">
            <img class="first-view" src="../assets/img/top01.png" />
          </li>
        </ul>
        <ul class="message">
          <li class="">
            <img class="" src="../assets/img/サロン嫌いな.png" alt="サロン嫌いな" />
          </li>
          <li class="">
            <img
              class="hoge"
              src="../assets/img/困ったにゃん.png"
              alt="サロン嫌いな"
            />
          </li>
          <li class="">
            <img
              class=""
              src="../assets/img/お任せください.png"
              alt="サロン嫌いな"
            />
          </li>
        </ul>
        <img
          id="hanko"
          class="checkmark"
          src="../assets/img/checkmark.png"
          alt="チェックマーク"
        />
      </div>
    </section>
    <div id="box"></div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>
/* トップ画像 */
header {
  position: relative;
}

.top-title {
  background-repeat: no-repeat;
  background-size: 95%;
  position: relative;
  padding: 0;
  width: 100%;
  margin: auto;
}
.flexslider {
  background: none !important;
  border: none !important;
  margin-top: 1% !important;
}
/* sliderの確認の際に表示 */
.top-title div ol {
  display: none;
}
.transition {
  transition: opacity 3s ease 0s !important;
}
.top-title .message li:first-of-type {
  position: absolute;
  top: 18%;
  left: 65%;
  width: 4%;
  z-index: 10;
}
.top-title .message li:nth-of-type(2) {
  position: absolute;
  top: 2%;
  left: 42%;
  width: 20%;
  z-index: 10;
}
.top-title ul li {
  position: absolute;
  top: 21%;
  left: 35%;
  width: 4%;
  z-index: 10;
}
.top-title .slides li {
  left: 7%;
  width: 88% !important;
}

.top-title ul li img {
  width: 75%;
}

.checkmark {
  position: absolute;
  width: 23%;
  top: 74%;
  left: 72%;
  opacity: 0;
  z-index: 10;
  /* opacity: 0; */
}
/*-------------------------
  sp
-------------------------*/
@media (max-width: 768px) {
  .checkmark {
    position: absolute;
    left: 79%;
    top: 70%;
    width: 19%;
  }
}
</style>

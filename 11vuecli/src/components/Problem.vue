<template>
  <section class="title2 clear-float">
    <h1><img src="../assets/img/title2.png" alt="困っていませんか？" /></h1>
    <div class="woman-size">
      <img class="woman" src="../assets/img/woman.png" alt="困り女性" />
    </div>
    <img
      class="hukidasi pc fadeInUp"
      src="../assets/img/feelings.png"
      alt="困りごと内容"
    />
    <img
      class="hukidashi-right sp"
      src="../assets/img/sp/hukidasshiRight.png"
      alt="「出来ないと断られた」"
    />
    <img
      class="hukidashi-left sp"
      src="../assets/img/sp/hukidashiLeft.png"
      alt="「出来ないと断られた」"
    />
  </section>
</template>

<script>
export default {
  name: 'Problem',
}
</script>

<style>
/* 猫ちゃんシニアさんの困りごと */
.title2 {
  background-image: url(../assets/img/pinkBack.png);
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
}
.title2 h1 img {
  margin-top: 150px;
}
.woman {
  margin: 25px auto 10px;
  width: 100%;
}
/* 吹き出しの動作 */
.fadeInUp {
  opacity: 0;
  transform: translateY(50px);
  transition: 1.5s;
}
.hukidasi {
  position: absolute;
  left: 6%;
  width: 90%;
  top: 275px;
}
/*-------------------------
  sp
-------------------------*/
@media (max-width: 768px) {
  /* 猫ちゃんシニアさんの困りごと */
  .woman {
    margin: 25px auto 10px;
    width: 218%;
    margin: 55px 0px 51px -45%;
  }
  .hukidashi-right {
    position: absolute;
    width: 44%;
    top: 50%;
    left: 54%;
  }
  .hukidashi-left {
    position: absolute;
    width: 44%;
    top: 27%;
    left: 2%;
  }
  .title2 h1 img {
    margin-top: 25%;
    width: 100%;
  }
  .brand-decision {
    width: 100%;
  }
  .woman-size {
    overflow: hidden;
    width: 100%;
    position: relative;
  }
}
</style>

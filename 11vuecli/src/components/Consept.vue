<template>
  <section class="title1 overflow">
    <img class="brand-consept" src="../assets/img/brandConsept.png" alt="" />
    <p class="letterSpacing">CONSEPT</p>
    <hr class="mini-hr" />
    <h2>
      <img
        class="fadeInUp"
        src="../assets/img/title1.png"
        alt="出張トリミング文言"
      />
    </h2>

    <div class="shop-explain ">
      <div class="sample"></div>

      <p class="fadeInUp">
        猫ちゃん、シニアの飼い主様。<br />
        お困りのことがあったら、一人で悩まず、まずはFelienにご相談ください。その子にとって一番良いホリスティックケアを一緒に見つけてあげましょう。
      </p>
      <div class="sample2"></div>
      <p class="fadeInUp">
        シニアさんやボケちゃったお年寄りさんだって私たち人を癒してくれる家族。<br />
        いつまでも元気に長生きしてほしいから、後悔しないように今からでもしてあげられることをはじめてあげませんか？
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Consept',
}
</script>

<style>
/* コンセプト */

.sample {
  height: 4rem;
  background-color: rgb(254, 95, 149, 0.5);
  /* float: left; */
  width: 10%;
  position: absolute;
  transform: skewX(15deg);
  left: -51px;
  border-radius: 15px;
}
.sample2 {
  height: 4rem;
  background-color: rgb(254, 95, 149, 0.5);
  /* float: left; */
  width: 150%;
  position: absolute;
  transform: skewX(15deg);
  left: 971px;
  border-radius: 15px;
}

.title1 {
  background-image: url(../assets/img/cats1.png);
  background-size: contain;
  background-repeat: no-repeat, repeat;
  background-position: -19% 86px;
  position: relative;
}
/* sliderの確認の際に表示 */
.flex-direction-nav {
  display: none;
}

.brand-consept {
  margin-bottom: 1%;
  width: 20%;
}
.letterSpacing {
  letter-spacing: 5px;
}
.cats-cover {
  position: absolute;
  left: -155px;
  width: 110%;
  top: 37px;
}
.title1 h2 img {
  width: 48%;
}

.shop-explain {
  width: 45%;
  margin: 6% auto 15%;
}
.shop-explain p {
  margin: 60px auto;
}
/*-------------------------
  sp
-------------------------*/
@media (max-width: 768px) {
  /* コンセプト */
  .title1 {
    background-size: 236%;
    background-repeat: no-repeat, repeat;
    background-position: 87%;
  }

  .brand-consept {
    margin-bottom: 2%;
    width: 50%;
  }
  .title1 h2 img {
    width: 80%;
  }
  .shop-explain {
    width: 100%;
    width: 90%;
  }
}
</style>

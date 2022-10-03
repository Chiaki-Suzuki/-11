<template>
  <section class="title4">
    <div>
      <img
        class="title"
        src="../assets/img/threeFeatureTitle.png"
        alt="三つの特徴"
      />
    </div>
    <div class="fadeInUp waku three-feature float-l">
      <h2 class="font-digital">
        <img src="../assets/img/catHand.png" alt="猫の手１" />
        無麻酔
      </h2>
      <p class="font-variable vm">
        経験豊富なトリマーが麻酔を使わずにケアを行います。猫ちゃんに負担がかからず安心です。
      </p>
    </div>
    <div class="fadeInUp waku three-feature float-l">
      <h2 class="font-digital">
        <img src="../assets/img/catHand2.png" alt="猫の手2" />
        猫・シニア専門
      </h2>
      <p class="font-variable vm">
        猫ちゃんだけではなく、病気や寝たきりになったシニア犬・シニア猫ちゃんも担当します。
      </p>
    </div>
    <div class="fadeInUp waku three-feature float-l">
      <h2 class="font-digital">
        <img src="../assets/img/catHand2.png" alt="猫の手2" />
        ご自宅まで出張
      </h2>
      <p class="font-variable vm">
        外出が苦手な猫ちゃんやシニアには、慣れているご自宅お環境でトリミングが受けられます。
      </p>
    </div>
    <div class="swing cat three-feature float-l"></div>
    <div class="zzz pc"><img src="../assets/img/zzz.gif" alt="zzz" /></div>
  </section>
</template>

<script>
export default {
  name: 'Feature',
}
</script>

<style>
/* 三つの特徴 */

.title4 {
  background-image: url(../assets/img/backPicture.png), url(../assets/img/back1.png);
  height: 1168px;
  background-repeat: no-repeat, repeat;
  background-size: cover, contain;
  background-position: bottom;
}
.title4 .title {
  margin-top: 7%;
}
.title4 h2 {
  color: #f0576c;
  margin-top: 11%;
  margin-left: 25px;
  text-align: left;
  font-size: 3.3vw;
}
.title4 h2 img {
  float: left;
  margin: -6.5% 3.5% 0 0%;
  width: 18.5%;
}
.title4 p {
  width: 56%;
  margin: 5.2% 0 0 22%;
  line-height: 2;
  text-align: left;
}
.title4 .three-feature {
  width: 48%;
  margin-top: 80px;
}
.title4 .waku {
  background-image: url(../assets/img/kumowaku.png);
  background-repeat: no-repeat;
  background-size: contain;
  height: 29%;
}
.title4 .cat {
  background-image: url(../assets/img/catPicture.png);
  background-repeat: no-repeat;
  background-size: contain;
  height: 420px;
}

@media (min-width: 1230px) {
  .vm {
    font-size: 15px;
  }
  .title4 h2 {
    margin-top: 69px;
    margin-left: 25px;
    font-size: 200%;
  }
  .title4 h2 img {
    margin: -36px 20px 0 0px;
    width: 100px;
  }
  .title4 p {
    width: 320px;
    margin: 30px 0 0 110px;
    line-height: 2;
  }
  .title4 .three-feature {
    width: 40%;
    margin-top: 40px;
    margin-left: 8%;
  }
}
/* zzz */
.zzz {
  position: absolute;
  left: 48%;
  margin-top: 360px;
}
/* 猫ゆらゆら */
.swing {
  margin: 10px;
  -moz-animation: swing linear 5s infinite;
  -moz-transform-origin: center -30px 0;
  -webkit-animation: swing linear 5s infinite;
  -webkit-transform-origin: center -30px 0;
  -ms-animation: swing linear 5s infinite;
  -ms-transform-origin: center -30px 0;
  -o-animation: swing linear 5s infinite;
  -o-transform-origin: center -30px 0;
  animation: swing linear 5s infinite;
  transform-origin: center -30px 0;
  display: block;
  float: left;
}

@-moz-keyframes swing {
  0% {
    -moz-transform: rotate(0deg);
  }
  25% {
    -moz-transform: rotate(5deg);
  }
  50% {
    -moz-transform: rotate(0deg);
  }
  75% {
    -moz-transform: rotate(-5deg);
  }
  100% {
    -moz-transform: rotate(0deg);
  }
}
@-webkit-keyframes swing {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(5deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
  }
  75% {
    -webkit-transform: rotate(-5deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
  }
}
@-o-keyframes swing {
  0% {
    -o-transform: rotate(0deg);
  }
  25% {
    -o-transform: rotate(5deg);
  }
  50% {
    -o-transform: rotate(0deg);
  }
  75% {
    -o-transform: rotate(-5deg);
  }
  100% {
    -o-transform: rotate(0deg);
  }
}
@-ms-keyframes swing {
  0% {
    -ms-transform: rotate(0deg);
  }
  25% {
    -ms-transform: rotate(5deg);
  }
  50% {
    -ms-transform: rotate(0deg);
  }
  75% {
    -ms-transform: rotate(-5deg);
  }
  100% {
    -ms-transform: rotate(0deg);
  }
}
@keyframes swing {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
/*-------------------------
  sp
-------------------------*/
@media (max-width: 768px) {
  /* 三つの特徴 */
  .title4 {
    background-image: url(../assets/img/backPicture.png), url(../assets/img/back1.png);
    height: 100%;
    background-repeat: no-repeat, repeat;
    background-size: cover, contain;
    padding-bottom: 1px;
  }
  .title4 .title {
    width: 80%;
    margin-top: 15%;
  }

  .title4 .three-feature:nth-of-type(4) {
    margin: 0 0 30% 0;
  }

  .title4 h2 {
    margin-top: 10%;
    margin-left: 1%;
    text-align: left;
    font-size: 2em;
    padding: 40px 0px 0px 0;
  }
  .title4 h2 img {
    float: none;
    margin-bottom: -30px;
    width: 85px;
  }
  .title4 .waku {
    background-position: 40% 5px;
    background-size: 85% 255px;
  }

  .title4 .three-feature {
    width: 100%;
    height: 19em;
    margin: 35px 0 0 0;
  }

  .title4 p {
    width: 65%;
    margin: 6vw 0 0 20%;
    font-size: 14px;
  }
  .title4 .cat {
    background-image: none;
  }
  .swing {
    display: none;
  }
}
</style>

<template>
  <section class="title6 overflow">
    <h2 class="mini-title">
      <img src="../assets/img/custemersInterview.png" alt="みんなの声" />
    </h2>
    <p class="letterSpacing">VOICE</p>
    <hr class="mini-hr" />
    <!-- 麻酔無しで行う『困ったにゃん』コース -->
    <div class=" customer float-l">
      <img class="waku1" src="../assets/img/waku.png" alt="" />
      <div class="questionnaire">
        <img class="cat-picture float-l" src="../assets/img/cat1.png" alt="" />
        <div class="custemers-interview float-r">
          <p class="font-digital dotted-bottom">
            リンちゃん（トリミングコース）
          </p>
          <p>
            奇跡です！12年の猫性の中で初めて麻酔もなく、途中で返されることなく出来、綺麗にしてあげられて本当に良かった！
          </p>
        </div>
      </div>
    </div>
    <div class="customer float-l">
      <img class="waku2" src="../assets/img/waku.png" alt="" />
      <div class="questionnaire">
        <img class="cat-picture float-l" src="../assets/img/cat2.png" alt="" />
        <div class="custemers-interview float-r">
          <p class="font-digital  dotted-bottom">
            エリザベスちゃん（シャンプーコース）
          </p>
          <p>
            斎藤さんと相性がいいのね♥私にはダッコなかなかさせてくれないのに、なすがままなんてビックリです。
          </p>
        </div>
      </div>
    </div>
    <div class="customer float-l">
      <img class="waku1" src="../assets/img/waku.png" alt="" />
      <div class="questionnaire">
        <img class="cat-picture float-l" src="../assets/img/cat3.png" alt="" />
        <div class="custemers-interview float-r">
          <p class="font-digital dotted-bottom">
            ダビィちゃん（グルーミングコース）
          </p>
          <p>
            初めて飼うので全く何もわからなく悩んでいたところ、斎藤さんを探し当て、しかもご近所なので毎月グルーミングして貰え本当にラッキーです。
          </p>
        </div>
      </div>
    </div>
    <div class="customer float-l">
      <img class="waku2" src="../assets/img/waku.png" alt="" />
      <div class="questionnaire">
        <img class="cat-picture float-l" src="../assets/img/cat4.png" alt="" />
        <div class="custemers-interview float-r">
          <p class="font-digital  dotted-bottom">
            マハロくん（シャンプーコース）
          </p>
          <p>
            こんなに毛が抜けるなんて？！と驚きました。見た目も触り心地も全然違う！！この次から定期的にお願いしたいです！
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Voice',
}
</script>

<style>
/* お客様の声 */

.title6 {
  background-image: url(../assets/img/whiteback.png);
  background-size: contain;
  padding-bottom: 6%;
}
.customer {
  width: 45%;
  margin: 3% 7% 4% 0;
  text-align: left;
}
.customer:nth-child(odd) {
  margin-right: 0;
}

.title6 .waku1 {
  position: absolute;
  left: 3%;
  width: 47%;
}
.title6 .waku2 {
  position: absolute;
  left: 52%;
  width: 47%;
}
.custemers-interview {
  width: 60%;
  font-size: 1.2vw;
}

p.dotted-bottom {
  border-bottom: dotted 4px #a98169;
  margin-bottom: 3%;
  line-height: 2;
  font-weight: bold;
}

.questionnaire {
  padding: 9% 0% 0 6%;
  overflow: hidden;
}
.cat-picture {
  padding-right: 10px;
  width: 36%;
}
.btn-flat-border {
  display: inline-block;
  padding: 8px 95px;
  text-decoration: none;
  border: solid 2px #936244;
  border-radius: 6px;
  color: #494949;
  transition: 0.4s;
  margin: 3% auto;
}

.btn-flat-border:hover {
  background: #936244;
  color: white;
}
/*-------------------------
  sp
-------------------------*/
@media (max-width: 768px) {
/* お客様の声 */
  .title6 {
    background-size: 465%;
    padding-top: 30%;
  }
  .customer {
    width: 100%;
    margin: 17% 7% 4% 0;
    text-align: center;
  }
  .customer img {
    height: 38%;
  }
  .title6 .waku1 {
    width: 97%;
    height: 24rem;
  }
  .cat-picture {
    width: 240px;
  }
  .custemers-interview {
    font-size: unset;
    width: 90%;
    margin: auto;
  }
  .title6 .waku2 {
    left: 3%;
    width: 97%;
    height: 24rem;
  }
  .questionnaire {
    padding: 6% 7% 0 4%;
  }
}
</style>

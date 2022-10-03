<template>
  <section class="title7 fadeInUp">
    <h1 class="font-digital">
      当店のトリマーは猫のことを知り尽くしたベテランです！
    </h1>

    <div class="representative overflow">
      <img class="picture" src="../assets/img/representative.png" alt="" />
      <div class="Interview float-l">
        <h2>Falien・代表　斎藤　美香</h2>
        <img src="../assets/img/line.png" alt="下線" />
        <p>
          ペットショップ店長として働き続け25年。
          <br />長い間お客様に携わっていく中で、寝たきりになってしまったシニアさん、どこもやってくれる所が無く困っている猫ちゃんのオーナー様からの『こちらでやって貰えませんか？』の問い合わせにお答えしているうち、ショップに出せずに困っているお客様が意外と多いことがわかり、そんな困っているペットさん＆オーナー様のために『ノンストレスであるお家で出来るトリミング＝出張スタイルを！』と思い独立。現在、幅広く活動中。
        </p>
        <a href="#" class="btn-flat-border float-r">ブログを見る</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Message',
}
</script>

<style>
/* 代表挨拶 */
.title7 {
  background-color: rgba(255, 255, 255, 0.55);
  width: 80%;
  margin: 6% auto;
  border-radius: 50px 60px;
}
.title7 h1 {
  font-size: 2vw;
  padding: 5% 0;
  font-weight: unset;
}
.representative {
  margin: auto;
  text-align: left;
}
.representative .picture {
  float: left;
  width: 37%;
  padding-bottom: 2%;
}
.Interview {
  width: 634px;
  padding-left: 6%;
  padding-top: 2%;
}
@media (max-width: 1420px) {
  .btn-flat-border {
    margin: 3% 27%;
  }
  .representative {
    padding: 0px 0 12% 0;
    text-align: center;
    overflow: unset;
  }
  .representative .picture {
    width: 37%;
  }
  .representative .picture {
    float: none;
  }
  .Interview {
    width: 634px;
    padding-left: 0;
    float: none !important;
    margin: auto;
  }
}
/*-------------------------
  sp
-------------------------*/
@media (max-width: 768px) {
  /* 代表挨拶 */
  .title7 h1 {
    font-size: xx-large;
    margin: 10% auto;
  }
  .representative {
    width: 100%;
    margin-bottom: 0;
  }
  .representative .picture {
    width: 100%;
    margin-bottom: 10%;
  }
  .Interview {
    overflow: hidden;
    width: 100%;
  }
  .Interview p {
    text-align: left;
    width: 90%;
    margin: auto;
  }
  .btn-flat-border {
    margin: 50px auto;
  }
  .btn-flat-border {
    padding: 20px 35%;
  }
  .btn-circle-3d {
    height: 120px;
    width: 120px;
    left: 81%;
    top: 75%;
  }
}
</style>

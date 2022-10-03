<template>
  <article class="background">
    <section class="button">
      <a href="#" class="btn-square-pop font-digital"
        >ご予約・お問い合わせはこちらから
        <!-- TODO:これを使えるようにする -->
        <i class="fa fa-chevron-right"></i>
      </a>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Reserve',
}
</script>

<style>
.btn-square-pop {
  margin-top: 43px;
  position: relative;
  display: inline-block;
  width: 39vw;
  padding: 3% 8%;
  text-decoration: none;
  color: #fff;
  background: #f0576c;
  border-radius: 80px;
  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.2),
    0 2px 2px rgba(0, 0, 0, 0.19);
  transition: 0.4s;
  font-size: 30px;
}
.btn-square-pop:hover {
  background: #ffb0bb;
}
.btn-square-pop:active {
  border-bottom: solid 2px #f0576c;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
}
.fa .fa-chevron-right {
  position: absolute;
  left: 90%;
}

.button {
  background-image: url(../assets/img/silhouette.png);
  background-repeat: no-repeat;
  background-size: contain;
  height: 190px;
  background-position: center;
  position: relative;
}
.fa-chevron-right {
  position: absolute;
  left: 90%;
  top: 33%;
}
.background {
  background-position: bottom;
  padding: 3% 0 3%;
}
/*-------------------------
  sp
-------------------------*/
@media (max-width: 768px) {
  /* ボタン */

  .btn-square-pop {
    width: 86%;
    padding: 4%;
    font-size: calc(56.5% + 2.5vw);
  }
  .fa-chevron-right {
    position: absolute;
    left: 93%;
    top: 38%;
  }
  .background {
    background-position: unset;
    padding: 0;
  }
  .button {
    background-image: unset;
    height: 120px;
  }
}
</style>

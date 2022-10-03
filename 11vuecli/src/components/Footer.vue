<template>
  <footer>
    <div class="icon">
      <a href=""><i class="fab fa-facebook-square fa-2x"></i></a>
      <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
    </div>

    <p>代表ブログ | アニマルケアサロン・フローラ</p>
    <p>Copyright 2017 Feilien 無麻酔出張トリミング・猫ちゃん＆シニア専門</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
/* フッター */
footer {
  background-image: url(../assets/img/pinkBack.png);
  padding-top: 130px;
  padding-bottom: 3%;
}

.icon a i {
  color: #936244;
}
.fa-facebook-square {
  margin-right: 40px;
}

footer p {
  margin-top: 2%;
}
footer p:last-of-type {
  font-size: 11px;
}

#loader-bg {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: rgb(255, 174, 174);
  z-index: 1;
}
#loader {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  margin-top: -100px;
  margin-left: -100px;
  text-align: center;
  color: #fff;
  z-index: 2;
}
/*-------------------------
  sp
-------------------------*/
@media (max-width: 768px) {

}
</style>

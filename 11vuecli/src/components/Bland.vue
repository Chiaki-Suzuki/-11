<template>
  <section id="gradient" class="title3">
    <div class="brand-color-left"></div>
    <div class="brand-color-right"></div>

    <h2>
      <img class="brand-decision" src="../assets/img/brandDecision.png" alt="" />
    </h2>
  </section>
</template>

<script>
export default {
  name: 'Bland',
}
</script>

<style>
/* ブランド名 */
#gradient {
  /* width: 100%; */
  /* padding: 0px; */
  margin: auto;
  position: relative;
  overflow: hidden;
}
.brand-color-left {
  height: 100%;
  background-color: rgba(133, 210, 255, 0.5);
  width: 11%;
  position: absolute;
  transform: skewX(15deg);
  left: -20px;
  border-radius: 15px;
  top: 0%;
}
.brand-color-right {
  height: 100%;
  background-color: rgba(253, 254, 95, 0.2);
  /* float: left; */
  width: 150%;
  position: absolute;
  transform: skewX(15deg);
  left: 971px;
  border-radius: 15px;
}

/* ブランド名 */
.brand-decision {
  margin: 3% auto;
  position: relative;
}
</style>

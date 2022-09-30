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

</style>

<template>
  <div id="app">
    <div id="loader-bg">
      <div id="loader">
        <img
          src="./assets/img/cat1.png"
          width="80"
          height="80"
          alt="Now Loading..."
        />
        <p>Now Loading...</p>
      </div>
    </div>

    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
  text-align: center;
  font-family: 'メイリオ', sans-serif;
  line-height: 1.5;
}
h2,
h1,
ul,
p {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.vw {
  font-size: 1.3vw;
}
.font-variable {
  font-size: calc(56.5% + 0.5vw);
}
.font-digital {
  font-family: 'UD デジタル 教科書体 NK-R';
}
.float-l {
  float: left;
}
.float-r {
  float: right;
}
.clear-float {
  clear: both;
}
.overflow {
  overflow: hidden;
}
.sp {
  display: none;
}
.pc {
  display: block;
}

/*-------------------------
  sp
-------------------------*/
@media (max-width: 768px) {
  /*画面幅が768pxまでの時*/
  .float-l,
  .float-r {
    float: none;
  }
  .sp {
    display: block;
  }
  .pc {
    display: none;
  }
}
</style>

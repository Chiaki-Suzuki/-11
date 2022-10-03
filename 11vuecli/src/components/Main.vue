<template>
  <main>
    <Consept></Consept>
    <Problem></Problem>
    <Bland></Bland>
    <Feature></Feature>
    <Price></Price>
    <Reserve></Reserve>
    <Voice></Voice>
    <Message></Message>
    <Reserve></Reserve>
    <p id="page-top"><a href="#wrap"></a></p>
  </main>
</template>

<script>
import Consept from '../components/Consept'
import Problem from '../components/Problem'
import Bland from '../components/Bland'
import Feature from '../components/Feature'
import Price from '../components/Price'
import Reserve from '../components/Reserve'
import Voice from '../components/Voice'
import Message from '../components/Message'

export default {
  name: 'Main',
  components: {
    Consept,
    Problem,
    Bland,
    Feature,
    Price,
    Reserve,
    Voice,
    Message
  }
}
</script>

<style>
section {
  padding: 0 50px;
}
/* トップへ戻るボタン */

#page-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 77%;
  color: #fff;
}
#page-top a {
  background: #ff8181;
  text-decoration: none;
  text-align: center;
  display: block;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  transition: 0.4s;
}
#page-top::before {
  content: '';
  width: 20px;
  height: 20px;
  display: block;
  border-top: solid 2px;
  border-right: solid 2px;
  transform: rotate(-45deg);
  position: absolute;
  top: 10px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
#page-top a:hover {
  text-decoration: none;
  background: #f5a9a9;
  color: #fff;
}

/*-------------------------
  sp
-------------------------*/
@media (max-width: 768px) {
    section {
      padding: 0 10px;
    }
    main {
      font-size: 14px;
      /* letter-spacing: 0.1em; */
      line-height: 2;
    }
    #page-top a {
    background: #ff8181;
    text-decoration: none;
    text-align: center;
    display: block;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    transition: 0.4s;
  }
  #page-top::before {
    width: 15px;
    height: 15px;
    top: 5px;
  }
}
</style>

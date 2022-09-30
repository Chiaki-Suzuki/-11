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

</style>

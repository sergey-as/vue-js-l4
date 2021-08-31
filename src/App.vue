<template>
  <div id="app">
    <h1>{{ counterFormatted }}</h1>
    <h1>Counter is: {{ counter }}</h1>
    <h1>Counter2 is: {{ counter2 }}</h1>
    <button @click="inc">inc</button>
    <button @click="incCustom(10)">inc custom</button>
    <br>
    <br>
    <router-link to="/">HOME</router-link>
    <br>
    <router-link to="/foo">Перейти к Foo</router-link>
    <br>
    <router-link to="/bar">Перейти к Bar</router-link>
    <br>
    <router-link to="/posts">Posts</router-link>
    <br>
    <router-link to="/posts/1">Post</router-link>
    <br>
    <br>

    <router-view></router-view>
  </div>
</template>

<script>

import {mapState, mapGetters, mapActions} from 'vuex';


export default {
  name: 'App',
  created() {
    console.log(this)
    // console.log(this.$store)
  },
  components: {},
  computed: {
    ...mapState({
      counter: state => state.counter1.count,
      counter2: state => state.counter2.count,
    }),
    ...mapGetters('counter1', ['counterFormatted']),
  },
  methods: {
    ...mapActions('counter1', ['inc', 'incCustom'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

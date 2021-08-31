<template>
  <div>
    <h1>
      Posts:
    </h1>

    <ul :style="{maxHeight: '200px', overflow: 'auto'}">
      <!--      <li v-for="post of posts" :key="post.id">-->
      <li v-for="{id,title} of posts" :key="id">
        <router-link :to="`/posts/${id}`">{{ title }}</router-link>
      </li>
    </ul>

    <hr>

    <router-view></router-view>

  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
  name: "Posts",
  created() {
    this.fetchPosts()
  },
  computed: mapState('posts', ['posts']),
  methods: mapActions('posts', ['fetchPosts']),

  // data() {
  //   return {
  //     posts: []
  //   }
  // },
  // methods: {
  //   async fetchPosts() {
  //     try {
  //       this.posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
  //       // console.log(this.posts);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   },
  // },
}
</script>

<style scoped>

</style>
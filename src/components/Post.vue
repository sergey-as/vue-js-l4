<template>
  <div>
    <h1>single post with id {{ $route.params.id }}</h1>

    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <span v-if="post.author">Author is: {{ post.author.name }} ({{ post.author.username }})</span>
      <span v-else>Author is not known</span>
    </div>

    <button @click="$router.back()">go back</button>
  </div>
</template>

<script>
export default {
  name: "Post",
  created() {
    // console.log(this.$route);
    // console.log(this.$router);
    this.fetchPost()
  },
  data() {
    return {
      post: null,
    }
  },
  watch: {
    '$route.params.id'(){
      this.fetchPost()
    }
  },
  methods: {
    async fetchPostAuthor(userId) {
      let author;
      try {
        author = await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json();
        if (!Object.keys(author).length) {
          throw new Error('no user found')
        }

      } catch (e) {
        author = {
          name: 'No Name',
          username: 'No Nickname'
        }
      }
      return author
    },
    async fetchPost() {
      try {
        const {params: {id}} = this.$route;
        if (!id) return;

        const post = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
        const author = await this.fetchPostAuthor(post.userId);
        // const author = await this.fetchPostAuthor(9999);
        this.post = {...post, author};

      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>

</style>
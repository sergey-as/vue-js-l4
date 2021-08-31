export const postsModule = {
    namespaced: true,
    state: () => ({
        posts: []
    }),
    mutations: {
        setPosts(state, posts){
            state.posts = posts;
        }
    },
    actions: {
        async fetchPosts(context) {
            try {
                const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
                context.commit('setPosts', posts)
            } catch (e) {
                console.log(e);
            }
        },
    },
    getters: {
    }
}

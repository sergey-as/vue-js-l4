export const counter1Module = {
    namespaced: true,
    state: () => ({
        count: 0
    }),
    mutations: {
        increment(state, arg) {
            console.log(state, 'mutations')
            // state.count++
            // state.count = arg ? state.count + arg : state.count + 1
            state.count += arg || 1
        }
    },
    actions: {
        inc() {
            this.commit('counter1/increment')
        },
        incCustom(context, val) {
            context.commit('increment', val)
        }
    },
    getters: {
        // counterFormatted(store, getters) {
        //     console.log(store, getters)
        counterFormatted(store) {
            return `Current Counter value is ${store.count}`
        }
    }
}

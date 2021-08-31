import Vuex from "vuex";
import {counter1Module, counter2Module, postsModule} from "./modules";

export const createStore = () => new Vuex.Store({
    modules: {
        counter1: counter1Module,
        counter2: counter2Module,
        posts: postsModule,
    }
})
import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state : {
        member : null,
        token : null,
    },
    mutations: {
        setMember(state, member) {
            state.member = member;
        },
        setToken(state, token) {
            state.token = token;
        }
    },
    getters: {
        getMember(state) {
            return state.member;
        },
        getToken(state) {
            return state.token;
        }
    },
    plugins : [
        createPersistedState({
            paths: ["token", "member"]
        })
    ]
})

export default store
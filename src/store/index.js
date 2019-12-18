import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogin: false,
        permissions: [],
    },
    mutations: {
        setUserPermission(state, permissions) {
            state.isLogin = true
            state.permissions = permissions
        },
        clearUserPermission(state) {
            state.isLogin = false
            state.permissions = []
        }
    },
})
/*eslint no-console: 0*/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        saved_repos: []
    },
    mutations: {
        saveRepo(state, repo) {
            if(!state.saved_repos.find(_repo => _repo.id == repo.id)) {
                state.saved_repos.push(repo)
            }
        },
        deleteRepo(state, repo_id) {
            state.saved_repos = state.saved_repos.filter(repo => repo.id !== repo_id)
        }
    }
})

export default store
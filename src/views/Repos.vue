<template>
    <div class="container">
        <Header />
        <div class="col-md-6 offset-md-3">
            <h2>Repos</h2>
            <table class="table">
                <tr v-for="repo in repos" v-bind:key="repo.id">
                    <td>
                        <router-link :to="`/repos/${repo.name}`">{{ repo.name }}</router-link>    
                        <button v-on:click="saveRepo(repo)" class="ml-2 btn btn-primary btn-sm">Add</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Header from '../components/Header'
import { fetchRepos } from '../utils/api'

export default {
    name: 'Repos',
    data() {
        return {
            repos: [],
        }
    },
    async beforeRouteEnter(to, from, next) {
        const response = await fetchRepos()
        next(vm => vm.setRepos(response.data))
    },
    methods: {
        setRepos(repos) {
            this.repos = repos
        },

        ...mapMutations([
            'saveRepo'
        ])
    },
    computed: {
        ...mapState([
            'saved_repos'
        ])
    },
    components: {
        Header
    }
}
</script>

<style scoped>

</style>

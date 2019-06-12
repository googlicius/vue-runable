<template>
    <div class="container">
        <Header />
        <div class="col-md-6 offset-md-3">
            <h2>Saved repos</h2>
            <table class="table">
                <tr v-for="repo in saved_repos" v-bind:key="repo.id">
                    <td>
                        <router-link :to="`/repos/${repo.name}`">{{ repo.name }}</router-link>    
                        <button v-on:click="deleteRepo(repo.id)" class="ml-2 btn btn-danger btn-sm">Remove</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Header from '../components/Header'

export default {
    computed: {
        ...mapState(['saved_repos'])
    },
    methods: {
        ...mapMutations([
            'deleteRepo'
        ])
    },
    components: {
        Header
    }
}
</script>

<style>

</style>

<template>
    <h2>{{ repo.full_name }}</h2>
</template>

<script>
import { fetchRepo } from './../utils/api'

export default {
    data() {
        return {
            repo: {}
        }
    },
    async beforeRouteEnter(to, from, next) {
        const response = await fetchRepo(to.params.name)
        next(vm => vm.setRepo(response.data))
    },
    methods: {
        setRepo(repo) {
            this.repo = repo
        }
    }
}
</script>

<style>

</style>

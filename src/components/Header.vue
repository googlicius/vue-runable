<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to='/'>My Repos</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-bind:class="{ active: isActive('/repos') }">
                    <router-link class="nav-link" to='/repos'>Repos</router-link>
                </li>
                <li class="nav-item" v-bind:class="{ active: isActive('/saved-repos') }">
                    <router-link class="nav-link" to='/saved-repos'>Saved repos</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        isActive(path) {
            const paths = Array.isArray(path) ? path : [path]
            return paths.some(path => this.$route.path.indexOf(path) === 0)
        }
    }
}
</script>

<style>

</style>

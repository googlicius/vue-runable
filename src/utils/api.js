import axios from './axios'

export function fetchRepos() {
    return axios.get('/users/googlicius/repos')
}

export function fetchRepo(name) {
    return axios.get('/repos/googlicius/' + name)
}
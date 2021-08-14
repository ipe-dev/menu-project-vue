import axios from 'axios'
export default {
    namespaced: true,
   
    actions: {
        async request ({dispatch, rootState}, {url, data}) {
            const headers = {}
            headers['Content-Type'] = 'application/json'
            if (rootState.auth.token) {
                headers['Authorization'] = `Token ${rootState.auth.token}`
            }
            const options = {
                headers,
                timeout: 15000
            }
            return axios.post(`${url}`, data, options)
            .then(res => res.data)
        }
    }
}
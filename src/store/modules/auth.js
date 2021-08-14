export default {
    namespaced: true,
    state: {
        token: ''
    },
    mutations: {
        create(state, payload) {
            state.token = payload
        },
        delete(state) {
            state.token = '';
        }
    },
    actions: {
        login ({commit, dispatch}, data) {
            dispatch(
                'http/request',
                {url: '/api/login', data},
                {root: true}
            ).then(function(res) {
                console.log(res)
                commit('create', res.token)
            })
        }
    }
}
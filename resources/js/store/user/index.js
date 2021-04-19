import axios from 'axios';
import router from '../../routes';

const state = {
    user: {},
}

const getters = {
    user: state => {
        return state.user;
    },
    isWriter: state => {
        return state.user?.isWriter;
    },
    auth: state => {
        return state.user.hasOwnProperty('id');
    },
}

const mutations = {
    UPDATE_USER(state, payload) {
        state.user = payload;
    },
}

const actions = {
    login({commit}, data) {
        return new Promise((resolve, reject) => {
            axios.post('api/login', data)
                .then((response) => {
                    commit('UPDATE_USER', response.data.user);
                    resolve(response);
                }).catch((response) => reject(response));
        });
    },
    register({commit}, data) {
        return new Promise((resolve, reject) => {
            axios.post('api/register', data)
                .then((response) => {
                    commit('UPDATE_USER', response.data.user);
                    resolve(response);
                }).catch((response) => reject(response));
        });
    },
    logout({commit}) {
        axios.post('api/logout')
            .then(() => {
                commit('UPDATE_USER', {});
                router.push('/');
            });
    },
    addNewsletterSubscription({}, data) {
        return new Promise((resolve, reject) => {
            axios.post('/api/newsletter-subscription/subscribe', data)
                .then((response) => resolve(response))
                .catch((error) => reject(error));
        });
    },
    removeNewsletterSubscription({}, data) {
        return new Promise((resolve, reject) => {
            axios.post('/api/newsletter-subscription/unsubscribe', data)
                .then((response) => resolve(response))
                .catch((error) => reject(error));
        });
    },
    addSubscription({commit}) {
        return new Promise((resolve, reject) => {
            axios.post('/api/subscription/subscribe')
                .then((response) => {
                    commit('UPDATE_USER', response.data.user)
                    resolve(response)
                })
                .catch((error) => reject(error));
        });
    },
    removeSubscription({commit}) {
        return new Promise((resolve, reject) => {
            axios.post('/api/subscription/unsubscribe')
                .then((response) => {

                    commit('UPDATE_USER', response.data.user)
                    resolve(response)
                })
                .catch((error) => reject(error));
        });
    },

}

const userModule = {
    state,
    getters,
    mutations,
    actions,
}

export default userModule;

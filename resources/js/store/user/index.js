import axios from 'axios';
import router from '@/routes';

const state = {
    user: {},
    userBlogs: [],
}

const getters = {
    user: state => {
        return state.user;
    },
    isWriter: state => {
        return state.user?.role === '1';
    },
    auth: state => {
        return state.user.hasOwnProperty('id');
    },
    userBlogs: state => {
        return state.userBlogs;
    }
}

const mutations = {
    UPDATE_USER(state, payload) {
        state.user = payload;
    },
    UPDATE_BLOGS(state, payload) {
        state.userBlogs = payload;
    }
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
    logout({commit}) {
        axios.post('api/logout')
            .then(() => {
                commit('UPDATE_USER', {});
                router.push('/');
            });
    },
    getBlogsFromAuthUser({commit, getters},) {
        console.log(getters.user.id);
        if (getters.user.id) {
            axios.get(`/api/users/${getters.user.id}/blogs`)
                .then((response) => commit('UPDATE_BLOGS', response.data))
        }
    },
}

const userModule = {
    state,
    getters,
    mutations,
    actions,
}

export default userModule;

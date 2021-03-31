import axios from 'axios';

const state = {
    categories: [],
}

const getters = {
    categories: state => {
        return state.categories;
    }
};

const mutations = {
    UPDATE_CATEGORIES(state, payload) {
        state.categories = payload;
    }
};

const actions = {
    getCategories({commit}) {
        axios.get('/api/categories')
            .then((response) => commit('UPDATE_CATEGORIES', response.data));
    },
    addCategory({commit}, data) {
        return new Promise((resolve, reject) => {
            axios.post('/api/categories', data)
                .then((response) => resolve(response))
                .catch((error) => reject(error));
        });
    }
};

const categoryModule = {
    state,
    getters,
    mutations,
    actions,
};

export default categoryModule;

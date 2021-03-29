import axios from 'axios';

const state = {
    categories: [],
}

const getters = {};

const mutations = {};

const actions = {
    addCategory({commit}, data) {
        return new Promise((resolve, reject) => {
            axios.post('/api/categories', data)
                .then((response) => {
                    resolve(response);
                }).catch((response) => reject(response));
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

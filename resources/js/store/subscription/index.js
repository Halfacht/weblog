import axios from 'axios';

const state = {}

const getters = {};

const mutations = {};

const actions = {

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
    addSubscription({}, data) {
        return new Promise((resolve, reject) => {
            axios.post('/api/subscription/subscribe', data)
                .then((response) => resolve(response))
                .catch((error) => reject(error));
        });
    },
    removeSubscription({}, data) {
        return new Promise((resolve, reject) => {
            axios.post('/api/subscription/unsubscribe', data)
                .then((response) => resolve(response))
                .catch((error) => reject(error));
        });
    },
};

const subscriptionModule = {
    state,
    getters,
    mutations,
    actions,
};

export default subscriptionModule;

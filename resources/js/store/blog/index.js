import axios from 'axios';
import Blog from "../../models/Blog";
import BlogCollection from "../../collections/BlogCollection";

const state = {
    blogs: new BlogCollection(),
}

const getters = {
    blogs(state, getters, rootState) {
        return state.blogs.withPremium(rootState.user.user.canSeePremiumContent);
    },
    blogById: (state) => (id) => {
        if (typeof id === 'string') {
            id = parseInt(id)
        }

        return state.blogs[id] ?? new Blog();
    },
    userBlogs(state, getters, rootState) {
        return state.blogs.byUser(rootState.user.user.id);
    },
}

const mutations = {
    UPDATE_BLOGS(state, payload) {
        state.blogs = new BlogCollection(payload);
    },
    ADD_BLOG(state, payload) {
        state.blogs.add(new Blog(payload))
    },
    UPDATE_BLOG(state, payload) {
        state.blogs.update(payload.id, new Blog(payload));
    },
    DELETE_BLOG(state, id) {
        state.blogs.delete(id);
    },
}

const actions = {
    getBlogs({commit}) {
        axios.get('/api/blogs')
            .then((response) => commit('UPDATE_BLOGS', response.data));
    },
    // getBlogsFromAuthUser({commit, getters},) {
    //     if (getters.user.id) {
    //         axios.get(`/api/users/${getters.user.id}/blogs`)
    //             .then((response) => commit('UPDATE_BLOGS', response.data))
    //     }
    // },
    getBlog({commit}, id) {
        return new Promise((resolve, reject) => {

            axios.get('/api/blogs/' + id)
                .then((response) => {
                    commit('ADD_BLOG', response.data);
                    resolve(response);
                });
        })
    },
    addBlog({commit}, data) {
        return new Promise((resolve, reject) => {
            axios.post('/api/blogs', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((response) => {
                    commit('ADD_BLOG', response.data.blog);
                    resolve(response);
                }).catch((response) => reject(response));
        });
    },
    updateBlog({commit}, data) {
        return new Promise((resolve, reject) => {
            axios.put(`/api/blogs/${data.id}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((response) => {
                    commit('UPDATE_BLOG', response.data.blog);
                    resolve(response);
                }).catch((response) => reject(response));
        });
    },
    deleteBlog({commit}, id) {
        return new Promise((resolve, reject) => {
            axios.delete(`/api/blogs/${id}`)
                .then((response) => {
                    commit('DELETE_BLOG', id);
                    resolve(response);
                }).catch((response) => reject(response));
        });
    },
    addComment({commit}, data) {
        return new Promise((resolve, reject) => {
            axios.post(`/api/blogs/${data.blog_id}/comments`, data)
                .then((response) => {
                    commit('UPDATE_BLOG', response.data.blog);
                    resolve(response);
                }).catch((response) => reject(response));
        });
    },
}

const blogModule = {
    state,
    getters,
    mutations,
    actions,
}

export default blogModule;

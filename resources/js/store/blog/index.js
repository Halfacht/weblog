import axios from 'axios';
import Blog from "../../models/Blog";

const state = {
    blogs: [],
    userBlogs: [],
}

const getters = {
    blogs: state => {
        return state.blogs;
    },
    blogById: (state) => (id) => {
        if (typeof id === 'string') {
            id = parseInt(id)
        }

        return state.blogs.find(blog => blog.id === id) ?? new Blog();
    },
    userBlogs: state => {
        return state.userBlogs;
    },
}

const mutations = {
    UPDATE_BLOGS(state, payload) {
        state.blogs = payload;
    },
    UPDATE_USER_BLOGS(state, payload) {
        state.userBlogs = payload;
    },
    ADD_BLOG(state, payload) {
        state.blogs = [...state.blogs, new Blog(payload)];
    },
    UPDATE_BLOG(state, payload) {
        state.blog = payload;
    },
    DELETE_BLOG(state, id) {
        state.blogs = state.blogs.filter((blog) => blog.id !== id);
        state.userBlogs = state.userBlogs.filter((blog) => blog.id !== id);
    },
    ADD_COMMENT(state, payload) {
        state.blog.comments = [...state.blog.comments, payload];
    },
}

const actions = {
    getBlogs({commit}) {
        axios.get('/api/blogs')
            .then((response) => commit('UPDATE_BLOGS', response.data));
    },
    getBlogsFromAuthUser({commit, getters},) {
        if (getters.user.id) {
            axios.get(`/api/users/${getters.user.id}/blogs`)
                .then((response) => commit('UPDATE_USER_BLOGS', response.data))
        }
    },
    getBlog({commit}, id) {
        return new Promise((resolve, reject) => {

            axios.get('/api/blogs/' + id)
                .then((response) => {
                    commit('ADD_BLOG', response.data);
                    // commit('UPDATE_BLOG', response.data);
                    resolve(response);
                });
        })
    },
    addBlog({commit}, data) {
        return new Promise((resolve, reject) => {
            axios.post('/api/blogs', data)
                .then((response) => {
                    commit('ADD_BLOG', response.data.blog);
                    resolve(response);
                }).catch((response) => reject(response));
        });
    },
    updateBlog({commit}, data) {
        return new Promise((resolve, reject) => {
            axios.put(`/api/blogs/${data.id}`, data)
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
                    commit('ADD_COMMENT', response.data.comment);
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

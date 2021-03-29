import axios from 'axios';

const state = {
    blogs: [],
    blog: {},
}

const getters = {
    blogs: state => {
        return state.blogs;
    },
    blog: state => {
        return state.blog;
    },
    blogById: (state) => (id) => {
        return state.blogs.find((blog) => blog.id === id);
    }
}

const mutations = {
    UPDATE_USER_BLOGS(state, payload) {
        state.blogs = payload;
    },
    UPDATE_BLOG(state, payload) {
        state.blog = payload;
    },
    ADD_BLOG(state, payload) {
        state.blogs = [...state.blogs, payload];
    },
    ADD_COMMENT(state, payload) {
        state.blogs.comments = [...state.blogs.comments, payload];
    },
}

const actions = {
    getBlogs({commit}) {
        axios.get('/api/blogs')
            .then((response) => commit('UPDATE_USER_BLOGS', response.data));
    },
    getBlog({commit}, id) {
        axios.get('/api/blogs/' + id)
            .then((response) => {
                commit('UPDATE_BLOG', response.data)
            });
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

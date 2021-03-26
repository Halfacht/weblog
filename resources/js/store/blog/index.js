import axios from 'axios';

const state = {
	blogs: []
}

const getters = {
	blogs: state => {
		return state.blogs
	},
}

const mutations = {
	UPDATE_BLOGS (state, payload) {
		state.blogs = payload;
	},
	ADD_BLOG(state, payload) {
		state.blogs = [...state.blogs, payload];
	}
}

const actions = {
	getBlogs ({ commit }) {
		axios.get('/api/blogs')
			.then((response) => commit('UPDATE_BLOGS', response.data));
	},
	addBlog({ commit }, data) {
		return new Promise((resolve, reject) => {
			axios.post('/api/blogs', data)
				.then((response) => {
					commit('ADD_BLOG', response.data.blog);
					resolve(response);
				}).catch((response) => reject(response));
		});
	}
}

const blogModule = {
	state,
	getters,
	mutations,
	actions,
}

export default blogModule;
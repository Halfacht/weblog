import axios from "axios";

export default class Blog {
	static all(then) {
		return axios.get('/api/blogs')
			.then(({data}) => then(data));
	}
}
import { createStore } from 'vuex';
import userModule from '@/store/user';
import blogModule from '@/store/blog';

export default createStore({
	modules: {
		user: userModule,
		blog: blogModule,

	}
})
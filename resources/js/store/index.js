import {createStore} from 'vuex';
import userModule from './user';
import blogModule from './blog';
import categoryModule from "./category";
import subscriptionModule from "./subscription"

export default createStore({
    modules: {
        user: userModule,
        blog: blogModule,
        category: categoryModule,
        subscription: subscriptionModule,
    }
})

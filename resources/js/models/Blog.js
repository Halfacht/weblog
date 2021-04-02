import moment from "moment";
import CategoryCollection from "../collections/CategoryCollection";

const defaultData = {
    title: '',
    content: '',
    image: null,
    is_premium: false,
    user_id: null,
    user: {},
    categories: [],
    comments: [],
};

export default class Blog {

    constructor(blog = defaultData) {
        Object.assign(this, blog);
        this.categories = new CategoryCollection(blog.categories);

        console.log('in blog')
        console.log(this)
        console.log(this.categories)
        console.log(this.categories.toString())
    }

    static get defaultData() {
        return defaultData;
    }

    get momentAgo() {
        return moment(this.created_at).fromNow();
    }
}


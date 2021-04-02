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
    }

    static get defaultData() {
        return defaultData;
    }

    get momentAgo() {
        return moment(this.created_at).fromNow();
    }

    get categoriesAsString() {
        return this.categories.map((category) => category.name).join(', ');
    }
}


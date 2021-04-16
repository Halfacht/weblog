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

    get is_premium() {
        return this._is_premium;
    }

    set is_premium(value) {
        this._is_premium = !/^(?:f(?:alse)?|no?|0+)$/i.test(value) && !!value;
    }

    get momentAgo() {
        return moment(this.created_at).fromNow();
    }
}


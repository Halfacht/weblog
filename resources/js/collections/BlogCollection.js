import Collection from "./Collection";
import Blog from "../models/Blog";

export default class BlogCollection extends Collection {
    constructor(blogs = []) {
        super(blogs.map((blog) => new Blog(blog)));
    }

    byUser(id) {
        let result = new this.constructor(this.toArray());

        for (let key in this) {
            if (this[key].user.id !== id) {
                delete result[key];
            }
        }

        return result;
    }

    withCategories(categoryIds) {
        if (categoryIds.length > 0) {
            let result = new this.constructor(this.toArray());

            for (let key in this) {
                if (!categoryIds.some(id => this[key].categories.includesId(id))) {
                    delete result[key];
                }
            }

            return result;
        }
        return this;
    }

    orderedByLatest() {
        return this.toArray()
            .sort((a, b) => b.created_at.localeCompare(a.created_at));
    }
}

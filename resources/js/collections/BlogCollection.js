import Collection from "./Collection";
import Blog from "../models/Blog";

export default class BlogCollection extends Collection {
    constructor(blogs = []) {
        super(blogs.map((blog) => new Blog(blog)));
    }

    byUser(id) {
        return this.filter((blog) => blog.user.id === id)
    }

    filteredBy(filters) {
        let categoryFiltersIds = Object.keys(filters).filter(key => filters[key]).map(key => parseInt(key));

        return this.filter((blog) => {
            return categoryFiltersIds.some(id => blog.categories.includesId(id));
        })
    }
}

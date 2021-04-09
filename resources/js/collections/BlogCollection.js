import Collection from "./Collection";
import Blog from "../models/Blog";

export default class BlogCollection extends Collection {
    constructor(blogs = []) {
        super(blogs.map((blog) => new Blog(blog)));
    }

    byUser(id) {
        return this.filter((blog) => blog.user.id === id)
    }

    filteredBy(filterIds) {

        console.log('filterids', filterIds);
        return this;
        if (filterIds.length > 0) {
            return this.filter((blog) => {
                return filterIds.some(id => blog.categories.includesId(id));
            })

        }
        return this;
    }
}

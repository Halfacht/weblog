import Collection from "./Collection";
import Blog from "../models/Blog";

export default class BlogCollection extends Collection {
    constructor(blogs = []) {
        super(blogs.map((blog) => new Blog(blog)));
    }

    byUser(id) {
        return this.filter(([key, blog]) => blog.user.id === id)
    }
}

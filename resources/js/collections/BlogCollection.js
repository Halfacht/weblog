import Collection from "./Collection";
import Blog from "../models/Blog";

export default class BlogCollection extends Collection {
    constructor(blogs = []) {
        super(blogs);
    }

    static fromArray(blogs) {
        return new this(blogs.map((blog) => new Blog(blog)));
    }
}

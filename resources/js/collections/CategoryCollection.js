import Collection from "./Collection";
import Category from "../models/Category";

export default class CategoryCollection extends Collection {
    constructor(categories = []) {
        super(categories);
    }

    static fromArray(categories) {
        return new CategoryCollection(categories.map((category) => new Category(category)));
    }

    toString() {
        return this.toArray().map((category) => category.name).join(', ');
    }
}

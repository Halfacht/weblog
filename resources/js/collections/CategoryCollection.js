import Collection from "./Collection";

export default class CategoryCollection extends Collection {
    constructor(categories) {
        super(categories);
    }

    toString() {
        return Object.values(this).map((category) => category.name).join(', ');
    }
}

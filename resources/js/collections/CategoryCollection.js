export default class CategoryCollection extends Map {
    constructor(categories) {
        super(categories);
    }

    toString() {
        return [...this].map((category) => category.name).join(', ');
    }
}

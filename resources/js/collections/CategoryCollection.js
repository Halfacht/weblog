import Collection from "./Collection";

export default class CategoryCollection extends Collection {
    constructor(categories) {
        super(categories);
    }

    toString() {
        return 'a string';
        // @todo: map over this object.
        let tmp = this.map((category) => category.name);
        console.log('tostring')
        console.log(tmp)
        return tmp.join(', ');
    }
}

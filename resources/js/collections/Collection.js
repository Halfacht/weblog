export default class Collection {

    constructor(items) {
        Object.assign(this, items.reduce(
            (obj, item) => (obj[item.id] = item, obj), {})
        );
    }
}

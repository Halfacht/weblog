export default class Collection {

    constructor(items) {
        Object.assign(this, items.reduce(
            (obj, item) => (obj[item.id] = item, obj), {})
        );
    }

    toArray() {
        return Object.values(this);
    }

    add(item) {
        Object.assign(this, {[item.id]: item});
    }

    update(id, item) {
        this[id] = item;
    }

    delete(id) {
        delete this[id];
    }

    filter(predicate) {
        return Object.fromEntries(
            Object.entries(this).filter(predicate)
        )
    }
}

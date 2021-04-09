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
        let result = Object.assign({}, this);
        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                if (!predicate(this[key])) {
                    delete result[key];
                }
            }
        }
        return result;
    }

    includesId(id) {
        return this.hasOwnProperty(id);
    }
}

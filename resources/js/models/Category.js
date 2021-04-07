const defaultData = {
    name: '',
};

export default class Category {

    constructor(category = defaultData) {
        Object.assign(this, category);
    }

    static get defaultData() {
        return defaultData;
    }
}


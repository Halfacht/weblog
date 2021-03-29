import Errors from "./Errors.js";

export default class Form {
    constructor(data) {
        this.errors = new Errors();

        this.originalData = data;
        this.successMessage = '';
        this.isSubmitting = false;
        this.wasValidated = false;

        // Data to properties
        for (let field in data) {
            this[field] = data[field];
        }
    }

    /**
     * Data Properties to data object
     *
     * @returns Object
     */
    data() {
        let data = {};

        for (let field in this.originalData) {
            data[field] = this[field];
        }

        return data;
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = this.originalData[field];
        }
    }

    action(store, action) {
        return new Promise((resolve, reject) => {
            this.isValidated();
            this.isSubmitting = true;

            store.dispatch(action, this.data())
                .then((response) => {
                    this.onSuccess.bind(this);
                    resolve(response);
                })
                .catch((error) => {
                    this.onFail.bind(this);
                    reject(error);
                });
        });
    }

    onSuccess(response) {
        this.successMessage = response.data.message;
        this.isSubmitting = false;

        this.errors.clear();
        this.reset();
    }

    onFail(error) {
        this.isSubmitting = false;

        this.errors.record(error.response.data.errors);
    }

    isValidated(validated = true) {
        this.wasValidated = validated;
    }
}
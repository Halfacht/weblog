import Errors from "./Errors.js";

export default class Form {
    constructor(data) {
        this.errors = new Errors();

        this.originalData = data;
		this.successMessage = '';
		this.isSubmitting = false;
        this.wasValidated = false;

        for (let field in data) {
            this[field] = data[field];
        }
    }

    data() {
        let data = Object.assign({}, this);

        delete data.errors;
        delete data.originalData;
        delete data.wasValidated;

        return data;
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = this.originalData[field];
        }
    }

    post(url) {
        this.submit("post", url);
    }

    submit(requestType, url) {
		this.isValidated();
		this.isSubmitting = true;

        axios[requestType](url, this.data())
            .then(this.onSuccess.bind(this))
            .catch(this.onFail.bind(this));
    }

    onSuccess(response) {
        this.successMessage = response.data.message;
		this.isSubmitting = fase;

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

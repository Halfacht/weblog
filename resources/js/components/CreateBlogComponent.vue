<template>
    <success-message
        v-if="form.successMessage"
        v-text="form.successMessage"
    ></success-message>

    <form class="row g-3" @keydown="form.errors.clear($event.target.name)">
        <div class="col">
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input
                    type="text"
                    class="form-control"
                    name="title"
                    aria-describedby="title"
                    v-model="form.title"
                    :class="{ 'is-invalid': form.errors.has('title') }"
                />
                <div
                    class="invalid-feedback"
                    v-if="form.errors.has('title')"
                    v-text="form.errors.get('title')"
                ></div>
            </div>

            <div class="mb-3">
                <label for="content" class="form-label">Content</label>
                <input
                    type="text"
                    class="form-control"
                    name="content"
                    aria-describedby="content"
                    v-model="form.content"
                    :class="{ 'is-invalid': form.errors.has('content') }"
                />
                <div
                    class="invalid-feedback"
                    v-if="form.errors.has('content')"
                    v-text="form.errors.get('content')"
                ></div>
            </div>

            <button
                class="btn btn-success"
                @click.prevent="storeBlog"
                :disabled="formDisabled"
            >
                Store Blog
            </button>
        </div>
    </form>

    <div class="row">
        <div class="col">
            <li v-for="error in form.errors" v-text="error"></li>
        </div>
    </div>
</template>

<script>
import Form from "../classes/Form.js";
import SuccessMessage from "./parts/SuccessMessage.vue";

export default {
    components: { SuccessMessage },
    data() {
        return {
            form: new Form({
                title: "",
                content: "",
                user_id: 1,
                image: null,
                is_premium: false,
            }),
        };
    },

    computed: {
        formDisabled() {
            return this.form.errors.hasErrors() || this.form.isSubmitting;
        },
    },

    methods: {
        storeBlog() {
            this.form.post("/api/blogs");
        },
    },
};
</script>

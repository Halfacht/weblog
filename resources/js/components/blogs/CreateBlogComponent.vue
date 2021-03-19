<template>
    <success-message
        v-if="form.successMessage"
        v-text="form.successMessage"
    ></success-message>

    <form class="row g-3" @keydown="form.errors.clear($event.target.name)">
        <div class="col">
            <text-input
                name="title"
                v-model="form.title"
                :error="form.errors.get('title')"
            ></text-input>

            <text-input
                name="content"
                v-model="form.content"
                :error="form.errors.get('content')"
            ></text-input>

            <button
                class="btn btn-success"
                @click.prevent="storeBlog"
                :disabled="formDisabled"
            >
                Store Blog
            </button>
        </div>
    </form>
</template> 

<script>
import Form from "../../classes/Form.js";
import TextInput from "../form-parts/TextInput.vue";
import SuccessMessage from "../parts/SuccessMessage.vue";

export default {
    components: { TextInput, SuccessMessage },
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

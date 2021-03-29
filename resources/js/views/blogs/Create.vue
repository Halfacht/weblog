<template>
    <div class="container">
        <success-message :message="form.successMessage"></success-message>

        <form class="row g-3" @keydown="form.errors.clear($event.target.name)">
            <div class="col">
                <input-field
                    v-model="form.title"
                    :error="form.errors.get('title')"
                    name="title"
                ></input-field>

                <text-area-field
                    v-model="form.content"
                    :error="form.errors.get('content')"
                    name="content"
                ></text-area-field>

                <button
                    :disabled="formDisabled"
                    class="btn btn-success"
                    @click.prevent="storeBlog"
                >
                    {{ id ? 'Update Blog' : 'Store Blog' }}
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import InputField from "@/components/form-parts/InputField.vue";
import TextAreaField from "@/components/form-parts/TextAreaField.vue";
import SuccessMessage from "@/components/parts/SuccessMessage.vue";

export default {
    components: {InputField, TextAreaField, SuccessMessage},

    props: ['id'],

    data() {
        return {
            form: new Form({
                title: "",
                content: "",
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
            this.form.action(this.$store, 'addBlog')
                .then((response) => {
                    this.form.onSuccess(response);
                });
        },
    },
};
</script>

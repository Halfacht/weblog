<template>
    <success-message :message="form.successMessage"></success-message>

    <form class="row g-3" @keydown="form.errors.clear($event.target.name)">
        <div class="col">
            <text-area-field
                v-model="form.content"
                :error="form.errors.get('content')"
                name="content"
            ></text-area-field>

            <button
                :disabled="formDisabled"
                class="btn btn-success"
                @click.prevent="storeComment"
            >
                Store Comment
            </button>
        </div>
    </form>
</template>

<script>
import TextAreaField from "@/components/form-parts/TextAreaField.vue";
import SuccessMessage from "@/components/parts/SuccessMessage.vue";

export default {
    components: {TextAreaField, SuccessMessage},

    props: ['blogId'],

    data() {
        return {
            form: new Form({
                content: "",
                blog_id: this.blogId,
            }),
        };
    },

    computed: {
        formDisabled() {
            return this.form.errors.hasErrors() || this.form.isSubmitting;
        },
    },

    methods: {
        storeComment() {
            this.form.action(this.$store, 'addComment');
        },
    },
}
</script>

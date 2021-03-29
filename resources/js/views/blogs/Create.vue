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
                    @click.prevent="submit"
                >
                    {{ id ? 'Update Blog' : 'Store Blog' }}
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import InputField from "@/components/form-parts/InputField.vue";
import TextAreaField from "@/components/form-parts/TextAreaField.vue";
import SuccessMessage from "@/components/parts/SuccessMessage.vue";

export default {
    components: {InputField, TextAreaField, SuccessMessage},

    props: ['id'],

    data() {
        return {
            defaultData: {
                title: '',
                content: '',
                image: null,
                is_premium: false,
            },
            form: new Form(this.defaultData),
        };
    },

    computed: {
        formDisabled() {
            return this.form.errors.hasErrors() || this.form.isSubmitting;
        },
        blog() {
            if (this.id) {
                return this.$store.getters.blog;
            } else {
                return this.defaultData;
            }
        },
    },

    methods: {
        submit() {
            this.id ? this.updateBlog() : this.storeBlog();
        },
        storeBlog() {
            this.form.action(this.$store, 'addBlog')
                .then((response) => {
                    this.form.onSuccess(response);
                });
        },
        updateBlog() {
            this.form.action(this.$store, 'updateBlog')
                .then((response) => {
                    this.form.onSuccess(response);
                });
        }
    },


    watch: {
        blog: function () {
            this.form = new Form(this.blog);
        }
    },

    created() {
        if (this.id) {
            this.$store.dispatch('getBlog', this.id);
        }
    },
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>Create new Blog</h1>
            </div>
        </div>

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

                <select-field
                    v-model="form.categories"
                    :error="form.errors.get('categories')"
                    :options="categories"
                    aria-describedby="categories"
                    name="categories"
                >
                </select-field>

                <input-field
                    :error="form.errors.get('image')"
                    accept="image"
                    name="image"
                    type="file"
                    @change="setImage($event)"
                ></input-field>

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
import SuccessMessage from "@/components/parts/SuccessMessage.vue";
import InputField from "@/components/form-parts/InputField.vue";
import TextAreaField from "@/components/form-parts/TextAreaField.vue";
import SelectField from "@/components/form-parts/SelectField.vue";

const defaultData = {
    title: '',
    content: '',
    categories: [],
    image: null,
    is_premium: false,
};

export default {
    components: {InputField, TextAreaField, SelectField, SuccessMessage},

    props: ['id'],

    data() {
        return {
            form: new Form(defaultData),
        };
    },

    computed: {
        ...mapGetters(['categories']),
        formDisabled() {
            return this.form.errors.hasErrors() || this.form.isSubmitting;
        },
    },

    methods: {
        submit() {
            this.id ? this.updateBlog() : this.storeBlog();
        },
        storeBlog() {
            this.form.action(this.$store, 'addBlog');

        },
        updateBlog() {
            this.form.action(this.$store, 'updateBlog');

        },
        setImage(event) {
            this.form.errors.clear('image');
            this.form.image = event.target.files[0];
            console.log(this.form.image)
        }
    },

    created() {
        // this.$store.dispatch('getCategories');

        // Load Blog for Update
        if (this.id) {
            this.$store.dispatch('getBlog', this.id)
                .then(() =>
                    this.form = new Form(this.$store.getters.blog)
                );
        }
    },
};
</script>

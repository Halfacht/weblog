<template>
    <div class="container">
        <success-message :message="form.successMessage"></success-message>

        <div class="row">
            <div class="col">
                <h1>Create new Category</h1>
            </div>
        </div>

        <form class="row g-3" @keydown="form.errors.clear($event.target.name)"> <!-- auto clear error -->
            <div class="col">

                <input-field
                    v-model="form.name"
                    :error="form.errors.get('name')"
                    name="name"
                ></input-field> <!-- show error -->

                <button
                    :disabled="formDisabled"
                    class="btn btn-success"
                    @click.prevent="storeCategory"
                >Store Category
                </button>

            </div>
        </form>
    </div>
</template>

<script>
import SuccessMessage from "@/components/parts/SuccessMessage.vue";
import InputField from "@/components/form-parts/InputField.vue";


export default {
    components: {SuccessMessage, InputField},

    data() {
        return {
            form: new Form({
                name: '',
            })
        }
    },

    methods: {
        storeCategory() {
            this.form.action(this.$store, 'addCategory');
        }
    },

    computed: {
        formDisabled() {
            return this.form.errors.hasErrors() || this.form.isSubmitting;
        },
    }
}
</script>

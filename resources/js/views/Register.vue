<template>
    <div class="container">
        <success-message :message="form.successMessage"></success-message>

        <form class="row g-3" @keydown="form.errors.clear($event.target.name)">
            <div class="col">
                <input-field
                    v-model="form.name"
                    :error="form.errors.get('name')"
                    name="name"
                ></input-field>

                <input-field
                    v-model="form.email"
                    :error="form.errors.get('email')"
                    name="email"
                    type="email"
                ></input-field>

                <input-field
                    v-model="form.password"
                    :error="form.errors.get('password')"
                    name="password"
                    type="password"
                ></input-field>

                <input-field
                    v-model="form.password_confirmation"
                    :error="form.errors.get('password_confirmation')"
                    name="password_confirmation"
                    type="password"
                ></input-field>

                <button
                    :disabled="formDisabled"
                    class="btn btn-success"
                    @click.prevent="register"
                >
                    Register
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import InputField from "@/components/form-parts/InputField.vue";
import SuccessMessage from "@/components/parts/SuccessMessage.vue";

export default {
    components: {InputField, SuccessMessage},

    data() {
        return {
            form: new Form({
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
            }),
        };
    },

    computed: {
        formDisabled() {
            return this.form.errors.hasErrors() || this.form.isSubmitting;
        },
    },

    methods: {
        register() {
            this.form.action(this.$store, "/api/register");
        },
    },
};
</script>

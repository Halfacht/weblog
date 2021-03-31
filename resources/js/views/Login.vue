<template>
    <div class="container">
        <form class="row g-3" @keydown="form.errors.clear($event.target.name)">
            <div class="col">
                <input-field
                    v-model="form.email"
                    :error="form.errors.get('email')"
                    name="email"
                    type="email"
                >
                </input-field>

                <input-field
                    v-model="form.password"
                    :error="form.errors.get('password')"
                    name="password"
                    type="password"
                >
                </input-field>

                <button
                    :disabled="formDisabled"
                    class="btn btn-success"
                    @click.prevent="login"
                >
                    Login
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import router from '@/routes';
import InputField from "@/components/form-parts/InputField.vue";
import SuccessMessage from "@/components/parts/SuccessMessage.vue";

export default {
    components: {InputField, SuccessMessage},

    data() {
        return {
            form: new Form({
                email: "alwin@mail.com", // @todo: make empty string after testing
                password: "testtest",
            }),
        };
    },

    computed: {
        formDisabled() {
            return this.form.errors.hasErrors() || this.form.isSubmitting;
        },
    },

    methods: {
        login() {
            this.form.action(this.$store, 'login')
                .then(() => router.push('/dashboard'));
        },
    },
};
</script>

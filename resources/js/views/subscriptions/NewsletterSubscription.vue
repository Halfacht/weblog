<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>Fill in your email to subscribe to our weekly digest</h1>
            </div>
        </div>
        <success-message :message="form.successMessage"></success-message>
        <div class="row">
            <form class="col" @keydown="form.errors.clear($event.target.name)">
                <input-field
                    v-model="form.email"
                    :error="form.errors.get('email')"
                    name="email"
                    type="email"
                ></input-field>

                <button
                    :disabled="formDisabled"
                    class="btn btn-success"
                    @click.prevent="submit"
                >Subscribe
                </button>
                <button
                    :disabled="formDisabled"
                    class="btn btn-danger float-end"
                    @click.prevent="unsubscribe"
                >Unsubscribe
                </button>

            </form>
        </div>
    </div>
</template>

<script>
import SuccessMessage from "@/components/parts/SuccessMessage.vue";
import InputField from '../../components/form-parts/InputField';

export default {
    components: {InputField, SuccessMessage},

    data() {
        return {
            form: new Form({
                email: '',
            })
        }
    },

    computed: {
        formDisabled() {
            return this.form.errors.hasErrors() || this.form.isSubmitting;
        },
    },

    methods: {
        submit() {
            this.form.action(this.$store, 'addNewsletterSubscription');
        },
        unsubscribe() {
            this.form.action(this.$store, 'removeNewsletterSubscription');
        },
    }
}
</script>

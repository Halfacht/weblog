<template>
  <div class="container">
    <success-message :message="form.successMessage"></success-message>

    <form class="row g-3" @keydown="form.errors.clear($event.target.name)">
      <div class="col">
        <input-field
          name="name"
          v-model="form.name"
          :error="form.errors.get('name')"
        ></input-field>

        <input-field
          name="email"
          type="email"
          v-model="form.email"
          :error="form.errors.get('email')"
        ></input-field>

        <input-field
          name="password"
          type="password"
          v-model="form.password"
          :error="form.errors.get('password')"
        ></input-field>

        <input-field
          name="password_confirmation"
          type="password"
          v-model="form.password_confirmation"
          :error="form.errors.get('password_confirmation')"
        ></input-field>

        <button
          class="btn btn-success"
          @click.prevent="register"
          :disabled="formDisabled"
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
  components: { InputField, SuccessMessage },

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
      this.form.post("/api/register");
    },
  },
};
</script>
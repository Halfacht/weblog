<template>
  <div class="container">
    <form class="row g-3" @keydown="form.errors.clear($event.target.name)">
      <div class="col">
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

        <button
          class="btn btn-success"
          @click.prevent="login"
          :disabled="formDisabled"
        >
          Login
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
        email: "",
        password: "",
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
    //   this.form.post("/api/login");
	  this.form.action(this.$store, 'login');
    },
  },
};
</script>
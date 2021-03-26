<template>
  <div class="container">
    <success-message :message="form.successMessage"></success-message>

    <form class="row g-3" @keydown="form.errors.clear($event.target.name)">
      <div class="col">
        <input-field
          name="title"
          v-model="form.title"
          :error="form.errors.get('title')"
        ></input-field>

        <text-area-field
          name="content"
          v-model="form.content"
          :error="form.errors.get('content')"
        ></text-area-field>

        <button
          class="btn btn-success"
          @click.prevent="storeBlog"
          :disabled="formDisabled"
        >
          Store Blog
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
  components: { InputField, TextAreaField, SuccessMessage },
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

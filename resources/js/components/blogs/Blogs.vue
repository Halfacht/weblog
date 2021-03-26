<template>
    <blog-component v-for="blog in blogs" :blog="blog"></blog-component>
</template>

<script>
import BlogComponent from "./Blog";
import { mapGetters } from "vuex";

export default {
  components: { BlogComponent },

  computed: {
    ...mapGetters(["blogs"]),
  },

  created() {
    this.$store.dispatch("getBlogs");
  },
};
</script>

<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col">
        <h1 class="h1">Home Page</h1>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <blogs></blogs>
      </div>
    </div>
  </div>
</template>

<script>
import Blogs from "@/components/blogs/Blogs.vue";

export default {
  components: { Blogs },
};
</script>

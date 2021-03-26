<template>
  <div class="card mb-3">
    <div class="card-header">
      <p>{{ blog.title }}</p>
      <p class="float-start">By: {{ blog.user.name }}</p>
      <span class="float-end">{{ createdOn }}</span>
    </div>
    <div class="card-body">
      {{ blog.content }}
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: ["blog"],

  computed: {
    createdOn() {
        return moment(this.blog.created_at).fromNow();
    },
  },
};
</script>

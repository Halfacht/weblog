<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <blog :blog="blog"></blog>
            </div>
        </div>

        <div class="row mb-5">
            <div class="col">
                <create-comment :blogId="id"></create-comment>
            </div>
        </div>

        <comment v-for="comment in blog.comments" :comment="comment"></comment>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import Blog from "../../components/blogs/Blog";
import Comment from "../../components/blogs/Comment.vue";
import CreateComment from "../../components/blogs/CreateComment.vue";

export default {
    components: {Blog, Comment, CreateComment},

    props: ["id"],

    computed: {
        ...mapGetters(["blogCategories"]),

        blog() {
            return this.$store.getters.blogById(this.id);
        },
    },

    mounted() {
        this.$store.dispatch("getBlog", this.id);
    },
};
</script>

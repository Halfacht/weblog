<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card mb-3">
                    <div class="card-header">
                        <div class="float-start">
                            <h3 class="h3">
                                {{ blog.title }}
                            </h3>
                            <p>Categories: {{ blog.categoriesAsString }}</p>
                        </div>

                        <div class="float-end">
                            <p>By: {{ blog.user?.name }}</p>
                            <p>{{ blog.momentAgo }}</p>

                        </div>
                    </div>
                    <div class="card-body">
                        {{ blog.content }}
                    </div>
                </div>
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
import moment from "moment";
import Comment from "@/components/blogs/Comment.vue";
import CreateComment from "@/components/blogs/CreateComment.vue";

export default {
    components: {Comment, CreateComment},

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

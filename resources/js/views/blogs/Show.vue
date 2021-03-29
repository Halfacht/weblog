<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card mb-3">
                    <div class="card-header">
                        <h3 class="h3">
                            {{ blog.title }}
                        </h3>

                        <p class="float-start">By: {{ blog.user?.name }}</p>
                        <span class="float-end">{{ momentAgo }}</span>
                    </div>
                    <div class="card-body">
                        {{ blog.content }}
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-3">
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
        ...mapGetters(["blog"]),

        momentAgo() {
            return moment(this.blog.created_at).fromNow();
        },
    },

    created() {
        this.$store.dispatch("getBlog", this.id);
    },
};
</script>

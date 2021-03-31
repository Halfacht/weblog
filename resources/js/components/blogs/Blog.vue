<template>
    <div class="card mb-3">
        <div class="card-header">
            <div class="float-start">
                <h3 class="h3">
                    <router-link
                        :to="{
                        name: 'blogs.show',
                        params: { id: blog.id },
                     }"
                        class="link-dark text-decoration-none"
                    >
                        {{ blog.title }}
                    </router-link>
                </h3>
                <p>Categories: {{ categories }}</p>
            </div>

            <div class="float-end">
                <p>By: {{ blog.user.name }}</p>
                <p>{{ createdOn }}</p>

            </div>
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
        categories() {
            return this.blog.categories.map((category) => category.name).join(', ');
        }
    },
};
</script>

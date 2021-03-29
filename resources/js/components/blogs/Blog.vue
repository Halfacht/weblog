<template>
    <div class="card mb-3">
        <div class="card-header">
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

            <!--            <p class="float-start">By: {{ blog.user.name }}</p>-->
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

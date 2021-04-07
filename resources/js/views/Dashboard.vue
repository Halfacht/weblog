<template>
    <div class="container">
        <div class="row mb-4">
            <div class="col">
                <h1 class="h1">{{ user.name }}'s Dashboard</h1>
            </div>
        </div>

        <blog-list></blog-list>
    </div>
</template>

<script>
import BlogList from "../components/blogs/BlogList";
import {mapGetters} from "vuex";

export default {
    components: {BlogList},

    computed: {
        ...mapGetters(['user']),
    },
};
</script>

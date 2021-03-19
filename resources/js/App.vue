<template>
    <div class="container">
        <create-blog-component></create-blog-component>

        <div class="row">
            <div class="col">
                <ul>
                    <li v-for="blog in blogs" v-text="blog.title"></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import CreateBlogComponent from "./components/CreateBlogComponent.vue";

export default {
    components: { CreateBlogComponent },

    data() {
        return {
            skills: [],
            blogs: [],
        };
    },

    mounted() {
        axios
            .get("/api/skills")
            .then((response) => (this.skills = response.data));

        axios.get("/api/blogs").then((response) => {
            this.blogs = response.data;
        });
    },
};
</script>

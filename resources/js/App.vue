<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light mb-4">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Weblog</a>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'home' }"
                        >Home</router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'blogs.create' }"
                        >New Blog</router-link
                    >
                </li>
            </ul>
        </div>
    </nav>

    <router-view></router-view>
</template>

<script>
export default {
    components: {},

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

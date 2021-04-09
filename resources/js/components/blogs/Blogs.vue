<template>
    <blogs-filter v-model="filter"></blogs-filter>
    <blog-component v-for="blog in blogs" :blog="blog"></blog-component>
</template>

<script>
import {mapGetters} from "vuex";
import BlogComponent from "./Blog";
import BlogsFilter from "./BlogsFilter";

export default {
    components: {BlogComponent, BlogsFilter},

    data() {
        return {
            filter: [],
        }
    },

    computed: {
        blogs() {
            return this.$store.getters.blogs.filteredBy(this.filter);
        }
    },
};
</script>

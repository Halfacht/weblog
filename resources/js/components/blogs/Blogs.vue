<template>
    <blogs-filter @updateFilter="updateFilter"></blogs-filter>
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
            filters: [],
        }
    },

    computed: {
        blogs() {
            return this.$store.getters.blogs.filteredBy(this.filters);
        }
    },

    methods: {
        updateFilter(value) {
            this.filters = value;
        },
    }
};
</script>

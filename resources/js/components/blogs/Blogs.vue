<template>
    <blogs-filter v-model="filters" @clearFilters="clearFilters" @updateFilter="updateFilter"></blogs-filter>
    <p>Filters: {{ filters }}</p>
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
            filters: {
                2: true,
                3: true,
            },
        }
    },

    computed: {
        blogs() {
            return this.$store.getters.blogs.filteredBy(this.filters);
        }
    },

    methods: {
        updateFilter(id, value) {
            this.filters[id] = value;
        },
        clearFilters() {
            this.filters = {};
        },
    }
};
</script>

<template>
    <blogs-filter v-model="filters" @updateFilter="updateFilter"></blogs-filter>
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
            filters: {},
        }
    },

    computed: {
        ...mapGetters(["blogs"]),
    },

    methods: {
        updateFilter(id, value) {
            // @todo: remove key from object.
            this.filters[id] = value;
        }
    }
};
</script>

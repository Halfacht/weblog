<template>
    <div class="row">
        <div class="col">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Date</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>

                </tr>
                </thead>
                <tbody>

                <tr v-for="blog in userBlogs">
                    <th scope="row">{{ blog.id }}</th>
                    <td>{{ blog.title }}</td>
                    <td>{{ formatDate(blog.created_at) }}</td>
                    <td>
                        <router-link :to="{ name: 'blogs.edit', params: { id: blog.id}}" class="btn btn-warning">
                            Edit
                        </router-link>
                    </td>
                    <td>
                        <button class="btn btn-danger" @click="remove(blog)">Delete</button>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import moment from 'moment';
import Blog from "@/components/blogs/Blog.vue";

export default {
    components: {Blog},

    computed: {
        ...mapGetters([
            "user",
            "userBlogs",
        ]),
    },

    methods: {
        formatDate(date) {
            return moment(date).format('DD-MMMM-yyyy');
        },
        remove(blog) {
            if (confirm(`Are you sure you want to delete: "${blog.title}"`)) {
                this.$store.dispatch('deleteBlog', blog.id);
            }
        }
    },

    watch: {
        'user': function () {
            this.$store.dispatch('getBlogsFromAuthUser');
        },
    },
};
</script>

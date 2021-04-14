<template>
    <div class="card mb-3">
        <div class="card-header">
            <div class="float-start">
                <h3 class="h5">
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
                <p>Categories: {{ blog.categories?.toString() }}</p>
            </div>

            <div class="float-end">
                <p>By: {{ blog.user?.name }}</p>
                <p>{{ blog.momentAgo }}</p>

            </div>
        </div>
        <div class="card-body">
            {{ blog.content }}
        </div>
    </div>
</template>

<script>

export default {
    props: ["blog"],
};
</script>

<template>
    <navigation></navigation>

    <router-view></router-view>
</template>

<script>
import Navigation from "./components/navigation.vue";

export default {
    components: {Navigation},
};
</script>

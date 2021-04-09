<template>
    <div class="row mb-4">
        <div class="col">
            <p>Category Filters:</p>

            <div v-for="category in categories" class="form-check form-check-inline form-switch">
                <input
                    :id="category.name"
                    :checked="modelValue[category.id]"
                    class="form-check-input"
                    type="checkbox"
                    @change="updateFilter(category.id)"
                >
                <label :for="category.name" class="form-check-label">{{ category.name }}</label>
            </div>
            <div>
                <button class="btn btn-outline-secondary" @click="clearFilters">X Clear filters</button>
            </div>
        </div>
    </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
    props: ['modelValue'],
    emits: ['updateFilter', 'clearFilters'],

    data() {
        return {
            allSwitch: true,
        }
    },

    computed: {
        ...mapGetters(['categories']),


    },

    methods: {
        updateFilter(id) {
            this.$emit('updateFilter', id, !this.modelValue[id]);
        },
        clearFilters() {
            this.$emit('clearFilters');
        }
    },

}
</script>

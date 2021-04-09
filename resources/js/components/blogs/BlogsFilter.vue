<template>
    <div class="row mb-4">
        <div class="col">
            <p>Category Filters:</p>

            <div v-for="category in categories" class="form-check form-check-inline form-switch">
                <input
                    :id="category.name"
                    v-model="filters"
                    :value="category.id"
                    class="form-check-input"
                    type="checkbox"
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
    emits: ['updateFilter'],
    data() {
        return {
            filters: [],
        }
    },
    computed: {
        ...mapGetters(['categories']),
    },
    methods: {
        clearFilters() {
            this.filters = [];
        }
    },
    watch: {
        filters(newFilters, oldFilters) {
            this.$emit('updateFilter', newFilters);
        }
    }
}
</script>

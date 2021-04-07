<template>
    <div class="row mb-4">
        <div class="col">
            <p>Category Filters:</p>
            <!--            <div class="form-check form-check-inline form-switch">-->
            <!--                <input id="allSwitch" v-model="allSwitch" class="form-check-input" type="checkbox">-->
            <!--                <label class="form-check-label" for="allSwitch">All</label>-->
            <!--            </div>-->

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
                X clear filters // @todo: clear filter button. Show everything when there is no filter.
            </div>
        </div>
    </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
    props: ['modelValue'],
    emits: ['updateFilter'],

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
    },
}
</script>

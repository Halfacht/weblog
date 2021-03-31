<template>
    <div class="mb-3">
        <label :for="name" class="form-label">
            {{ toTitle(name) }}
        </label>
        <input
            :aria-describedby="name"
            :class="{ 'is-invalid': error }"
            :name="name"
            :type="type"
            :value="modelValue"
            class="form-control"
            @input="updateValue($event.target.value)"
        />
        <div v-if="error" class="invalid-feedback" v-text="error"></div>
    </div>
</template>

<script>
import {titleCase} from "../../functions.js";

export default {
    props: {
        type: {default: 'text'},
        modelValue: String,
        name: String,
        error: String,
    },
    emits: ['update:modelValue'],

    methods: {
        toTitle: titleCase,
        updateValue(value) {
            this.$emit("update:modelValue", value);
        },
    },
};
</script>

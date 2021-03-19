<template>
    <div class="mb-3">
        <label for="name" class="form-label">{{
            capitalizeFirstLetter(name)
        }}</label>
        <input
            type="text"
            class="form-control"
            name="name"
            aria-describedby="name"
            :class="{ 'is-invalid': error }"
            :value="modelValue"
            @input="updateValue($event.target.value)"
        />
        <div class="invalid-feedback" v-if="error" v-text="error"></div>
    </div>
</template>

<script>
import { capitalizeFirstLetter } from "../../functions.js";

export default {
    props: {
        modelValue: String,
        name: String,
        error: String,
    },
	emits: ['update:modelValue'],

    methods: {
        capitalizeFirstLetter: capitalizeFirstLetter,
        updateValue(value) {
            this.$emit("update:modelValue", value);
        },
    },
};
</script>

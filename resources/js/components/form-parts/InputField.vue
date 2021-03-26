<template>
    <div class="mb-3">
        <label for="name" class="form-label">{{
            toTitle(name)
        }}</label>
        <input
            class="form-control"
            :type="type"
            :name="name"
            :aria-describedby="name"
            :class="{ 'is-invalid': error }"
            :value="modelValue"
            @input="updateValue($event.target.value)"
        />
        <div class="invalid-feedback" v-if="error" v-text="error"></div>
    </div>
</template>

<script>
import { titleCase } from "../../functions.js";

export default {
    props: {
		type: { default: 'text'},
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

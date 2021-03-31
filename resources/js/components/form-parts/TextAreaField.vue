<template>
    <div class="mb-3">
        <label :for="name" class="form-label">
            {{ toTitle(name) }}
        </label>
        <textarea
            :aria-describedby="name"
            :class="{ 'is-invalid': error }"
            :name="name"
            :value="modelValue"
            class="form-control"
            @input="updateValue($event.target.value)"
        ></textarea>
        <div v-if="error" class="invalid-feedback" v-text="error"></div>
    </div>
</template>

<script>
import {titleCase} from "../../functions.js";

export default {
    props: {
        modelValue: String,
        name: String,
        error: String,
    },
    emits: ["update:modelValue"],

    methods: {
        toTitle: titleCase,
        updateValue(value) {
            this.$emit("update:modelValue", value);
        },
    },
};
</script>

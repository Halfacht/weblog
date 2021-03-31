<template>
    <div class="mb-3">
        <label :for="name" class="form-label">
            {{ toTitle(name) }}
        </label>
        <slot>
            <!--            <select-->
            <!--                :aria-describedby="name"-->
            <!--                :class="{ 'is-invalid': error }"-->
            <!--                :name="name"-->
            <!--                :value="modelValue"-->
            <!--                class="form-control"-->
            <!--                multiple-->
            <!--                @update="updateValue($event.target.value)"-->
            <!--            >-->
            <!--                <option v-for="option in options" :value="option.id">-->
            <!--                    {{ option.name }}-->
            <!--                </option>-->
            <!--            </select>-->
        </slot>
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
        options: Array,
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

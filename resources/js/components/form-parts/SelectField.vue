<template>
    <div class="mb-3">
        <label :for="name" class="form-label">
            {{ toTitle(name) }}
        </label>
        <slot>
            <select
                :aria-describedby="name"
                :class="{ 'is-invalid': error }"
                :name="name"
                :value="modelValue"
                class="form-select"
                multiple
                @input="updateValue($event.target)"
            >
                <option v-for="option in options" :value="option.id">
                    {{ option.name }}
                </option>
            </select>
        </slot>
        <div v-if="error" class="invalid-feedback" v-text="error"></div>
    </div>
</template>

<script>
import {titleCase} from "../../functions.js";

export default {
    props: {
        modelValue: Array,
        name: String,
        error: String,
        options: Array,
        multiple: String,
    },
    emits: ['update:modelValue'],

    methods: {
        toTitle: titleCase,
        updateValue(select) {
            let value = [...select.selectedOptions].map(option => option.value);
            console.log(value)

            this.$emit("update:modelValue", value); // @todo: this unselects current options, because of that only 2 options can be stored in the model
        },
    },
};
</script>

<template>
    <div class="mb-3">
        <label for="{{ name }}" class="form-label">{{ name.capitalize()}}</label>
        <input
            type="text"
            class="form-control"
            name="{{ name }}"
            aria-describedby="{{ name }}"
            :class="{ 'is-invalid': error }"
            :value="name"
			@input="updateInput($event.target.value)"
        />
        <div
            class="invalid-feedback"
            v-if="error"
            v-text="error"
        ></div>
    </div>
</template>

<script>
export default {
	props: ['name', 'error'],
	methods: {
		updateInput(value) {
			this.$emit('input', value);
		}
	}
};
</script>

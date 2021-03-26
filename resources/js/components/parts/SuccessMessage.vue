<template>
	<div class="row justify-content-center" v-show="message">
		<div class="col-6">
			{{ message }}
		</div>
	</div>
</template>

<script>
export default {
	props: ['message']
}
</script>
<template>
    <p>List Items Component</p>
    <ul>
        <item-component v-for="task in tasks">{{
            task.description
        }}</item-component>
    </ul>
</template>

<script>
import ItemComponent from "./ItemComponent.vue";
export default {
    components: { ItemComponent },
	props: [],
    data() {
        return {
			isVisable: true,
            tasks: [
                { description: "Go to the zoo" },
                { description: "Go to the mall" },
            ],
        };
    },
	methods: {
		hideModal() {
			this.isVisable = false;
		}
	}
};
</script>

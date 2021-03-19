<template>
    <div>Example Component</div>
    <div>Another div</div>
    <input type="text" v-model="state.todoFromInput" />
    <button @click="addTodo">Add Todo</button>
    <ul>
        <li v-for="todo in state.todos" v-text="todo.description"></li>
    </ul>
</template>

<script>
import { reactive } from "vue";


export default {
    setup() {
        const state = reactive({
            todoId: 2,
            todoFromInput: "",
            todos: [
                { id: 1, description: "Finish Vue course", isComplete: false },
            ],
        });


        function addTodo() {
            state.todos.push({
                id: state.todoId,
                description: state.todoFromInput,
                isComplete: false,
            });

            state.todoId++;
            state.todoFromInput = "";
        }

        return {
            state,
            addTodo,
        };
    },
};
</script>

<style></style>

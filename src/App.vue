<script setup>
import { ref } from "vue";

import TheTemplate from "@/components/TheTemplate.vue";
import AppInput from "@/components/AppInput.vue";
import AppTasks from "@/components/AppTasks.vue";

const tasks = ref([
    { taskText: "some text" },
    { taskText: "some text 2" },
    { taskText: "some text 3" },
]);
const inputeValue = ref("");

const addTask = (value) => {
    if (value) {
        tasks.value.unshift({ taskText: value });
        inputeValue.value = "";
    }
};

const deleteTask = (id) => {
    tasks.value = tasks.value.filter((i, index) => index != id);
    // tasks.value.splice(id, 1);
    // console.log(id);
};
</script>

<template>
    <TheTemplate>
        <template v-slot:header>
            <AppInput
                :modelValue="inputeValue"
                @update:modelValue="($event) => (inputeValue = $event)"
                @add="addTask"
        /></template>
        <template v-slot:tasks>
            <AppTasks :listItems="tasks" @delTask="deleteTask"
        /></template>
    </TheTemplate>
</template>

<style scoped></style>

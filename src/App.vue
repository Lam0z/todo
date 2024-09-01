<script setup>
import { ref } from "vue";

import TheTemplate from "@/components/TheTemplate.vue";
import AppInput from "@/components/AppInputGroup.vue";
import AppTasks from "@/components/AppTasks.vue";

const input = ref();

const tasks = ref([
    // { taskText: "some text" },
    // { taskText: "some text 2" },
    // { taskText: "some text 3" },
]);
const addTaskItem = (value) => {
    tasks.value.push({ taskText: value });
    input.value = "";
};
</script>

<template>
    <div>{{ input }}</div>
    <TheTemplate>
        <template v-slot:header>
            <AppInput v-model="input" @add="addTaskItem"
        /></template>
        <template v-slot:tasks> <AppTasks :listItems="tasks" /></template>
    </TheTemplate>
</template>

<style scoped></style>

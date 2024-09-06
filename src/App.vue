<script setup>
import { ref, computed } from "vue";

import TheTemplate from "@/components/TheTemplate.vue";
import Decoration from "@/components/Decoration.vue";
import AppInput from "@/components/AppInputGroup.vue";
import AppTasks from "@/components/AppTasks.vue";

const input = ref("");

const tasks = ref([
    // {
    //     id: Date.now(),
    //     taskText: "some text",
    //     isCompleted: false,
    //     isEdit: false,
    // },
]);
const tasksItems = computed(() => {
    return tasks.value.filter((i) => i.isCompleted == false);
});
const tasksItemsCompleted = computed(() => {
    const filteredCompleted = tasks.value.filter((i) => i.isCompleted == true);
    return filteredCompleted.sort((a, b) => {
        if (a.id > b.id) {
            return 1;
        }
        if (a.id < b.id) {
            return -1;
        }
        return 0;
    });
});

const addTaskItem = (value) => {
    if (value != "") {
        tasks.value.unshift({
            id: Date.now(),
            taskText: value,
            isCompleted: false,
            isEdit: false,
        });
        input.value = "";
    }
};
const changeActive = (item) => {
    const findedItem = tasks.value.find((i) => i.id == item.id);
    findedItem.isCompleted = !findedItem.isCompleted;
};
const delItem = (item) => {
    const findedIndex = tasks.value.findIndex((i) => i.id == item.id);
    tasks.value.splice(findedIndex, 1);
};
const editeTaskText = (item) => {
    const findItem = tasks.value.find((i) => i.id == item.id);

    findItem.isEdit = !findItem.isEdit;
    console.log(findItem);
};
</script>

<template>
    <Decoration />
    <TheTemplate>
        <template v-slot:header>
            <AppInput v-model="input" @add="addTaskItem"
        /></template>
        <template v-slot:tasks>
            <AppTasks
                :listItems="tasksItems"
                :listItemsCompleted="tasksItemsCompleted"
                @active="changeActive"
                @delete="delItem"
                @edit="editeTaskText"
        /></template>
    </TheTemplate>
</template>

<style scoped></style>

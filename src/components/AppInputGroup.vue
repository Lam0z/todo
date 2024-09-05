<script setup>
import { ref } from "vue";
const emit = defineEmits(["add"]);
const model = defineModel();
const addTask = () => emit("add", model.value);
</script>

<template>
    <div class="input-group">
        <input
            type="text"
            class="form-control"
            placeholder="Write a new task 👀"
            aria-label="Input your task"
            aria-describedby="button-addon1"
            v-model="model"
            @keyup.enter="addTask"
        />

        <button class="btn" type="button" id="button-addon1" @click="addTask">
            Add
        </button>
    </div>
</template>

<style lang="scss" scoped></style>

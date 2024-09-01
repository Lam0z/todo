<script setup>
import { ref } from "vue";
const props = defineProps(["modelValue"]);
const emit = defineEmits(["add"]);
const model = defineModel();
const addTask = () => emit("add", model.value);
</script>

<template>
    <div class="input-group">
        <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Input your task"
            aria-describedby="button-addon1"
            v-model="model"
        />

        <button class="btn" type="button" id="button-addon1" @click="addTask">
            Button
        </button>
    </div>
</template>

<style lang="scss" scoped></style>

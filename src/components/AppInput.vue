<script setup>
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue", "add"]);
const submit = (value) => {
    emit("add", value);
    // console.log(value);
};
</script>

<template>
    <div class="input-group">
        <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Input your task"
            aria-describedby="button-addon1"
            :value="modelValue"
            @input="emit('update:modelValue', $event.target.value)"
            @keyup.enter="submit(modelValue)"
        />
        <button
            class="btn btn-primary"
            type="button"
            id="button-addon1"
            @click="submit(modelValue)"
        >
            Button
        </button>
    </div>
</template>

<style lang="scss" scoped></style>

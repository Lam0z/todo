<template>
    <div class="count">
        {{ completed ? "Number of completed tasks" : "Number of tasks" }}:
        {{ tasksCount }}
    </div>
</template>

<script setup>
const props = defineProps({
    tasksCount: Number,
    completed: Boolean,
});
</script>

<style lang="scss" scoped>
.count {
    margin-top: 1rem;
}
</style>

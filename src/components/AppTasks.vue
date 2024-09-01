<script setup>
const props = defineProps(["listItems"]);
</script>
<template>
    <div class="tasks" v-if="listItems.length">
        <h2 class="text-center">Tasks</h2>
        <ul class="tasks__list list-unstyled d-grid row-gap-2 m-0">
            <li
                v-for="(item, idx) in listItems"
                :key="idx"
                class="tasks__item border border-primary d-flex justify-content-between rounded-2 text-truncate"
            >
                {{ item.taskText }}
            </li>
        </ul>
    </div>
    <div class="empty" v-else>Task list is empty 😞</div>
</template>

<style lang="scss" coped>
.tasks {
    padding: 1.25rem;
    border-radius: 0.3125rem;
    background: white;
    &__list {
        // display: grid;
        // row-gap: 10px;
    }
    &__item {
        position: relative;
        padding: 0.625rem;
        padding-right: 1.25rem;
        &:hover {
            .tasks__close {
                opacity: 1;
                transform: rotate(0) translateY(-50%);
            }
        }
    }
}
.empty {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--mainSecondColor);
    font-size: 3rem;
}
</style>

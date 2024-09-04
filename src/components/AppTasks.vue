<script setup>
const emit = defineEmits(["active", "delete"]);
const props = defineProps(["listItems", "listItemsCompleted"]);

const getActiveItem = (item) => emit("active", item);
const deleteItem = (item) => emit("delete", item);
</script>
<template>
    <div class="tasks" v-show="listItems.length">
        <h2 class="text-center">Tasks</h2>
        <ul class="tasks__list list-unstyled d-grid row-gap-2 m-0">
            <li v-for="(item, idx) in listItems" :key="idx" class="tasks__item">
                <div
                    class="tasks__item-text"
                    :class="
                        item.isCompleted ? 'text-decoration-line-through' : ''
                    "
                >
                    {{ item.taskText }}
                </div>
                <div class="tasks__item-controls">
                    <button
                        class="btn btn--success"
                        @click="getActiveItem(item)"
                    >
                        &#10003;
                    </button>
                    <button class="btn btn--delete" @click="deleteItem(item)">
                        &#10006;
                    </button>
                </div>
            </li>
        </ul>
    </div>
    <div class="tasks" v-show="listItemsCompleted.length">
        <h2 class="text-center">Completed</h2>
        <ul class="tasks__list list-unstyled d-grid row-gap-2 m-0">
            <li
                v-for="(item, idx) in listItemsCompleted"
                :key="idx"
                class="tasks__item"
            >
                <div
                    class="tasks__item-text"
                    :class="
                        item.isCompleted ? 'text-decoration-line-through' : ''
                    "
                >
                    {{ item.taskText }}
                </div>
                <div class="tasks__item-controls">
                    <button
                        class="btn btn--success"
                        @click="getActiveItem(item)"
                    >
                        &#10003;
                    </button>
                    <button class="btn btn--delete" @click="deleteItem(item)">
                        &#10006;
                    </button>
                </div>
            </li>
        </ul>
    </div>
    <div class="empty" v-show="!listItems.length && !listItemsCompleted.length">
        Task list is empty 😞
    </div>
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid var(--mainColor);
        border-radius: 0.5rem;
        position: relative;
        padding: 0.625rem;
        // padding-right: 1.25rem;
        &:hover {
            .tasks__close {
                opacity: 1;
                transform: rotate(0) translateY(-50%);
            }
        }
        &-text {
            text-transform: uppercase;
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

<script setup>
import Count from "./Count.vue";

const emit = defineEmits(["active", "delete", "edit"]);
const props = defineProps(["listItems", "listItemsCompleted"]);

const getActiveItem = (item) => emit("active", item);
const deleteItem = (item) => emit("delete", item);
const editItemText = (item) => emit("edit", item);
</script>
<template>
    <div class="tasks" v-show="listItems.length">
        <h2 class="text-center">Tasks</h2>

        <ul class="tasks__list list-unstyled d-grid row-gap-2 m-0">
            <TransitionGroup name="list">
                <li
                    v-for="(item, idx) in listItems"
                    :key="item.id"
                    class="tasks__item"
                >
                    <div
                        class="tasks__item-text"
                        :class="
                            item.isCompleted
                                ? 'text-decoration-line-through'
                                : ''
                        "
                    >
                        <div v-if="!item.isEdit">{{ item.taskText }}</div>
                        <textarea
                            v-else
                            type="text"
                            class="form-control"
                            v-model="item.taskText"
                        />
                    </div>
                    <div class="tasks__item-controls">
                        <button
                            class="btn btn--success"
                            @click="getActiveItem(item)"
                            title="Toggle complete"
                            v-show="!item.isEdit"
                        >
                            <font-awesome-icon
                                :icon="['far', 'circle-check']"
                            />
                        </button>
                        <button
                            class="btn btn--edit"
                            title="Change task text"
                            @click="editItemText(item)"
                        >
                            <font-awesome-icon
                                :icon="['fas', 'pen-to-square']"
                                v-if="!item.isEdit"
                            />
                            <font-awesome-icon
                                :icon="['fas', 'check']"
                                v-else
                            />
                        </button>
                        <button
                            class="btn btn--delete"
                            @click="deleteItem(item)"
                            title="Delete task"
                            v-show="!item.isEdit"
                        >
                            <font-awesome-icon :icon="['fas', 'xmark']" />
                        </button>
                    </div>
                </li>
            </TransitionGroup>
        </ul>

        <Count :tasksCount="listItems.length" :completed="false" />
    </div>
    <div class="tasks" v-show="listItemsCompleted.length">
        <h2 class="text-center">Completed</h2>
        <ul class="tasks__list list-unstyled d-grid row-gap-2 m-0">
            <TransitionGroup name="list">
                <li
                    v-for="(item, idx) in listItemsCompleted"
                    :key="item.id"
                    class="tasks__item"
                    :class="{ 'tasks__item--completed': item.isCompleted }"
                >
                    <div
                        class="tasks__item-text"
                        :class="
                            item.isCompleted
                                ? 'text-decoration-line-through'
                                : ''
                        "
                    >
                        {{ item.taskText }}
                    </div>
                    <div class="tasks__item-controls">
                        <button
                            class="btn btn--success"
                            @click="getActiveItem(item)"
                        >
                            <font-awesome-icon
                                :icon="['far', 'circle-check']"
                            />
                        </button>
                        <button
                            class="btn btn--delete"
                            @click="deleteItem(item)"
                        >
                            <font-awesome-icon :icon="['fas', 'xmark']" />
                        </button>
                    </div>
                </li>
            </TransitionGroup>
        </ul>
        <Count :tasksCount="listItemsCompleted.length" completed />
    </div>
    <div class="empty" v-show="!listItems.length && !listItemsCompleted.length">
        Task list is empty 😞
    </div>
</template>

<style lang="scss" coped>
.tasks {
    padding: 1.25rem;
    border-radius: 0.3125rem;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    background: white;
    &:nth-child(2) {
        border-radius: 0 0 0.3125rem 0.3125rem;

        // background: green;
        // display: none;
    }
    &__list {
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
            flex-grow: 1;
            text-transform: uppercase;
        }
        &-controls {
            // grid-template-columns: repeat(3, 1fr);
            display: flex;
            justify-content: space-between;
            column-gap: 0.125rem;
            align-items: start;
            margin-left: 0.625rem;
            button {
                border: 1px solid var(--colorSuccess);
            }
        }
        &--completed {
            color: var(--colorSuccess);
            border: 1px solid var(--colorSuccess);
        }
    }
}
.empty {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--mainSecondColor);
    font-size: 1rem;
    @media (min-width: 768px) {
        font-size: 3rem;
    }
}
</style>

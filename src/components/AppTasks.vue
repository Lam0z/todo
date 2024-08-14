<script setup>
const props = defineProps(["listItems"]);
const emits = defineEmits(["delTask"]);
const items = [];
const getDelId = (id) => emits("delTask", id);
</script>
<template>
    <div class="tasks">
        <ul class="tasks__list list-unstyled mt-3 d-grid row-gap-2">
            <li
                v-for="(item, idx) in listItems"
                :key="idx"
                class="tasks__item border border-primary d-flex justify-content-between rounded-2 text-truncate"
            >
                {{ item.taskText }}

                <button
                    class="tasks__close btn-close"
                    @click="getDelId(idx)"
                ></button>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" coped>
.tasks {
    &__list {
        // display: grid;
        // row-gap: 10px;
    }
    &__item {
        position: relative;
        padding: 10px;
        padding-right: 20px;
        &:hover {
            .tasks__close {
                opacity: 1;
                transform: rotate(0) translateY(-50%);
            }
        }
    }
    &__close {
        position: absolute;
        height: 100%;
        top: 50%;
        right: 0;

        opacity: 0;
        transition: all 0.3s ease;
        transform: translateX(40px) translateY(-50%);
        overflow-x: hidden;
        // background: white;

        color: orange;
    }
}
</style>

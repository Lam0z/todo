<script setup></script>

<template>
    <div class="header">
        <div class="container">
            <slot name="header"></slot>
        </div>
    </div>
    <main class="main">
        <div class="container">
            <slot name="tasks"></slot>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.main {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

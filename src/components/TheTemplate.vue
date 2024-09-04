<script setup></script>

<template>
    <header class="header z-1">
        <div class="container">
            <h1>To Do</h1>
            <slot name="header"></slot>
        </div>
    </header>
    <main class="main z-1">
        <div class="container">
            <slot name="tasks"></slot>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.header {
    padding: 20px 0;
}
.main {
    height: 100%;
    display: flex;
    justify-content: center;
}
</style>

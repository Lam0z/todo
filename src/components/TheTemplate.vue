<script setup></script>

<template>
    <header class="header">
        <div class="container">
            <h1>To Do</h1>
            <slot name="header"></slot>
        </div>
    </header>
    <main class="main">
        <div class="container">
            <slot name="tasks"></slot>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.header {
    padding: 50px 0;
    background: url(../assets/img/header-bg.jpg) no-repeat center/ cover;
}
.main {
    height: 100%;
    display: flex;
    justify-content: center;
    // align-items: center;
    background: #73a4d2;
}
</style>

<template>
    <div class="decoration"></div>
</template>

<script setup></script>

<style lang="scss" scoped>
.decoration {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    height: 8.5rem;
    background: url(../assets/img/header-bg.jpg) no-repeat center/cover;
    @media (min-width: 768px) {
        height: 12.5rem;
    }
}
</style>

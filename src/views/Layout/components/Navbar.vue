<template>
    <el-menu class="navbar" mode="horizontal">
        <hamburger class="hamburger-container" />
    </el-menu>
</template>

<script>
import Hamburger from '@/components/Hamburger/index.vue';

export default {
    components: {
        Hamburger
    }
};
</script>

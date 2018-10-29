<template>
    <div class="app-wrapper">
        <!-- <sidebar class="sidebar-container" /> -->
        <div class="main-container">
            <navbar />
            <app-main />
        </div>
    </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components';

export default {
    name: 'Layout',
    components: {
        Navbar,
        Sidebar,
        AppMain
    },
    computed: {

    },
    methods: {

    },
    mounted() {

    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;

}

</style>

<template>
    <div id="app">
        <el-container id="main-page">
            <el-header id="header-container">
                <NavHeader />
            </el-header>
            <el-container class="main-container">
                <el-aside id="aside-container" width="200px">
                    <AsideList />
                </el-aside>
                <el-main id="main-view">
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue';
import AsideList from '@/components/AsideList.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'app',
    components: {
        NavHeader,
        AsideList,
        HelloWorld,
    }
};
</script>

<style>
html {
    box-sizing: border-box;
}
*,
*:before,
*:after {
    box-sizing: inherit;
}
html,
body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#main-page {
    height: 100vh;
}

#aside-container {
    border-right: solid 1px #e6e6e6;
}

#main-view {
    background-color: white;
    justify-content: center;
}

#header-container {
    background-color: #409eff;
}

.main-container {
    justify-content: space-between;
}
</style>

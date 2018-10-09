<template>
    <div id="aside-list"
      width="200px">
        <el-menu default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
            <el-menu-item index="1" @click="routeTo('/')">
                <i class="el-icon-menu"></i>
                <span slot="title">Home</span>
            </el-menu-item>
            <el-menu-item index="2" @click="routeTo('/about')">
                <i class="el-icon-menu"></i>
                <span slot="title">About</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import router from '../router';

export default {
    name: 'aside-list',
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        routeTo(path) {
            router.push(path);
        }
    },
};
</script>

<style>
#aside-list {
    width: 100%;
    height: 100%;
    color: #333;
}
.el-menu {
    border-right: none !important;
}
</style>

<template>
    <div class="home-container">
        <img alt="Vue logo" src="../../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'Dashboard',
    components: {
        HelloWorld,
    },
    mounted() {
        this.$axios.get('/users')
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            });
    }
};
</script>

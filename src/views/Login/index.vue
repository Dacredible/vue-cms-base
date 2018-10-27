<template>
    <div class="login-container">
        <el-form
            ref="loginForm"
            class="login-form"
            :model="loginForm"
            autocomplete="on"
            label-position="left"
        >
            <h3 class="title">Watson Site CMS</h3>
            <el-form-item prop="username">
                <el-input
                    v-model="loginForm.username"
                    name="username"
                    type="text"
                    placeholder="username"
                ></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input
                    v-model="loginForm.password"
                    name="password"
                    :type="pwdType"
                    placeholder="password"
                    @keyup.enter.native="handleLogin"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button
                    :loading="loading"
                    type="primary"
                    style="width:100%;"
                    @click.native.prevent="handleLogin"
                >Sign in</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import Cookie from 'js-cookie';

export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            pwdType: 'password',
            loading: false,
            redirect: undefined
        };
    },
    watch: {
        $route: {
            handler(route) {
                this.redirect = route.query && route.query.redirect;
            },
            immediate: true
        }
    },
    methods: {
        togglePwd() {
            this.pwdType = this.pwdType === 'password' ? 'text' : 'password';
        },
        handleLogin() {
            this.loading = true;
            this.$axios.post('/login', {
                username: this.loginForm.username,
                password: this.loginForm.password
            })
                .then((res) => {
                    console.log(res);
                    Cookie.set('api_token', res.data.payload);
                    this.loading = false;
                    this.$router.push({ path: this.redirect || '/' });
                })
                .catch((err) => {
                    console.error(err);
                    this.loading = false;
                });
        }
    },
    mounted() {
    }
};
</script>

<style lang="scss">
.login-container {
    background-color: white;
    height: 100%;
    width: 100%;
    position: fixed;
}

.login-form {
    width: 50%;
    margin: 200px auto;
}
</style>

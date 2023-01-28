<template lang="">
    <div class="container">
        <img src="src\assets\logos\logo450_160-nbg.png" alt="logo" class="logo">
        <div class="welcome">Welcome back! Sign in to continue</div>
        <div class="input-text">Username</div>
        <t-input clearable class="input" v-model="username"/>
        <div class="input-text">Password</div>
        <t-input  type="password" clearable class="input" v-model="password"/>
        <t-button block theme="primary" variant="base" class="sign-btn" @click="login">Sign in</t-button>
    </div>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue-next';

export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        login() {
            console.log(this.username, this.password);
            // MessagePlugin.success('用户表示普通操作信息提示');
            // MessagePlugin.warning('用户表示操作引起一定后果');
            // setTimeout(() => {
            //     this.$router.push({ path: '/home' });
            // }, 1000);
            this.$router.push({ path: '/home' });
        },
    },
}
</script>
<style scoped>
.container {
    width: 400px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    box-sizing: border-box;
    padding: 50px 40px;
}

.logo {
    width: 250px;
    margin: 0 auto;
    display: block;
}

.welcome {
    text-align: center;
    color: #6e737d;
    margin: 20px 0 50px 0;
}

.input-text {
    color: #4d535d;
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 14px;
}

.input {
    margin-bottom: 30px;
}


.sign-btn {
    position: relative;
    top: 20px;
}
</style>
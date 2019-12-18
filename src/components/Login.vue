<template>
    <div class="login-page">
        <form @submit="onsubmit">
            <label for="username">用户名: </label>
            <input type="text" v-model="username" required />
            <br />
            <label for="password">密码: </label>
            <input type="password" v-model="password" required />
            <br />
            <button type="submit">提交</button>
        </form>
    </div>
</template>

<script>
import request from '../request';

export default {
    name: 'login',
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        onsubmit: async function(e) {
            e.preventDefault()
            // eslint-disable-next-line no-console
            console.log(this.username, this.password, request)
            if (this.username === 'admin') {
                const permissions = await request('/admin.json')
                this.$store.commit('setUserPermission', permissions)
                this.$router.push('/article')
            }
            if (this.username === 'user') {
                const permissions = await request('/user.json')
                this.$store.commit('setUserPermission', permissions)
                this.$router.push('/article')
            }
        }
    }
}
</script>
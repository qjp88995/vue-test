<template>
    <div class="nav">
        <div class="nav-name">菜单栏</div>
        <ul class="nav-menu">
            <li v-for="item in menus" v-bind:key="item.name">
                <router-link v-bind:to="item.path">{{ item.title }}</router-link>
            </li>
        </ul>
        <div class="nav-logout">
            <button @click="logout">退出</button>
        </div>
    </div>
</template>

<script>
import routes from '../router/routes'

export default {
    computed: {
        menus() {
            const ms = routes.filter(item => item.meta && !item.meta.hideInMenu).map(item => ({
                title: item.meta.title,
                path: item.path,
                name: item.name,
                permissions: item.meta.permissions,
            }))
            // eslint-disable-next-line no-console
            console.log(ms, this.$store.state.permissions)
            return ms.filter(item => item.permissions.some(ite => this.$store.state.permissions.some(it => it === ite)));
        }
    },
    methods: {
        logout: function() {
            this.$store.commit('clearUserPermission')
            this.$router.push('/login')
        }
    }
}
</script>

<style>
    .nav {
        display: flex;
        width: 100%;
        height: 30px;
        background: black;
        line-height: 30px;
    }
    .nav-name {
        width: 10%;
        text-align: center;
        color: white;
    }
    .nav-menu {
        margin: 0;
        padding: 0;
        width: 80%;
    }
    .nav-menu li {
        display: inline-block;
        margin: 0 10px;
    }
    .nav-menu li a {
        color: white;
    }
</style>
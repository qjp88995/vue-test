import Login from '../components/Login'
import Article from '../components/Article'
import Member from '../components/Member'
import Forbidden from '../components/403'
import Nav from '../components/Nav'

export default [
    {
        path: '/',
        redirect: '/article',
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: {
            title: '用户登录',
            hideInMenu: true,
            requiresAuth: false,
            permissions: []
        }
    },
    {
        name: 'forbidden',
        path: '/403',
        component: Forbidden,
        meta: {
            title: '403页面',
            hideInMenu: true,
            requiresAuth: false,
            permissions: []
        }
    },
    {
        name: 'article',
        path: '/article',
        components: {
            default: Article,
            nav: Nav
        },
        meta: {
            title: '文章管理',
            requiresAuth: true,
            permissions: ['article.list', 'article.detail', 'article.add', 'article.edit', 'article.remove']
        }
    },
    {
        name: 'member',
        path: '/Member',
        components: {
            default: Member,
            nav: Nav
        },
        meta: {
            title: '会员管理',
            requiresAuth: true,
            permissions: ['member.list', 'member.detail', 'member.add', 'member.edit', 'member.remove']
        }
    }
]
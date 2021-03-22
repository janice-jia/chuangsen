import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BasicEduTeacherTraining from './views/BasicEduTeacherTraining.vue'
import BasicEduTeacherResource from './views/BasicEduTeacherResource.vue'
import Company from './views/Company.vue'
import AboutUs from './views/AboutUs.vue'
import ContactUs from './views/ContactUs.vue'
import ComingSoon from './views/ComingSoon.vue'
Vue.use(Router)

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // 首页
        {
            path: '/',
            name: 'index',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        //基础教育-教师培训
        {
            path: '/BasicEduTeacherTraining',
            name: 'BasicEduTeacherTraining',
            component: BasicEduTeacherTraining
        },
        //基础教育-教师资源
        {
            path: '/BasicEduTeacherResource',
            name: 'BasicEduTeacherResource',
            component: BasicEduTeacherResource
        },
        // 关于我们
        {
            path:'/AboutUs',
            name: 'AboutUs',
            component: AboutUs
        },
        // 联系我们
        {
            path:'/ContactUs',
            name: 'ContactUs',
            component: ContactUs
        },
        // 网站建设中ing
        {
            path: '/comingSoon',
            name: 'comingSoon',
            component: ComingSoon
        },
        // 邮轮公司
        {
            path: '/company',
            name: 'company',
            component: Company
        }
    ],
    scrollBehavior(to, from,savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})
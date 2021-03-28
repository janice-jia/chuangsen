import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BasicEduTeacherLeader from './views/BasicEduTeacherLeader.vue'
import BasicEduTeacherTraining from './views/BasicEduTeacherTraining.vue'
import BasicEduTeacherResource from './views/BasicEduTeacherResource.vue'
import Protrain from './views/Protrain.vue'
import iOSCourse from './views/iOSCourse.vue'
import iOSClub from './views/iOSClub.vue'
import iOSExperience from './views/iOSExperience.vue'



import AboutUs from './views/AboutUs.vue'
import ContactUs from './views/ContactUs.vue'
import ComingSoon from './views/ComingSoon.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
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
        //基础教育-教师领导力
        {
            path: '/BasicEduTeacherLeader',
            name: 'BasicEduTeacherLeader',
            component: BasicEduTeacherLeader
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
        // 专业培训
        {
            path:'/Protrain',
            name: 'Protrain',
            component: Protrain
        },
        // IOS 课程
        {
            path:'/iOSCourse',
            name: 'iOSCourse',
            component: iOSCourse
        },
        // IOS 俱乐部
        {
            path:'/iOSClub',
            name: 'iOSClub',
            component: iOSClub
        },
        // IOS 校园体验中心
        {
            path:'/iOSExperience',
            name: 'iOSExperience',
            component: iOSExperience
        },
        // 网站建设中ing
        {
            path: '/comingSoon',
            name: 'comingSoon',
            component: ComingSoon
        }
    ],
    scrollBehavior(to, from,savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})
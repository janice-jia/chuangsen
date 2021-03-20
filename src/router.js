import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Company from './views/Company.vue'
import CompanyLevel from './views/CompanyLevel.vue'
import CompanyInfo from './views/CompanyInfo.vue'
import ComingSoon from './views/ComingSoon.vue'
import GKcity from './views/GKcity.vue'
import GKcityLevel from './views/GKcityLevel.vue'
import GKcityInfo from './views/GKcityInfo.vue'
import BKcruise from './views/BKcruise.vue'
import BKcruiseLevel from './views/BKcruiseLevel.vue'
import BKcruiseSearch from './views/BKcruiseSearch.vue'
import BKcruiseInfo from './views/BKcruiseInfo.vue'


import Travelog from './views/Travelog.vue'
import TravelogInfo from './views/TravelogInfo.vue'
import Airline from './views/Airline.vue'
import AirLineInfo from './views/AirLineInfo.vue'
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
        },
        // 邮轮公司详情页面
        {
            path: '/companyInfo',
            name: 'companyInfo',
            component: CompanyInfo
        }
        // 邮轮公司二级
        ,{
            path: '/companylevel:shipcompanyid',
            name: 'companylevel',
            component: CompanyLevel
        },
        // 港口城市
        {
            path: '/gkcity',
            name: 'gkcity',
            component: GKcity
        },
        // 港口二级
        {
            path: '/gkcitylevel:areaid',
            name: 'gkcitylevel',
            component: GKcityLevel
        },
        // 港口城市详细
        {
            path: '/gkcityinfo:id',
            name: 'gkcityinfo',
            component: GKcityInfo
        },
        // 游轮百科
        {
            path: '/bkcruise',
            name: 'bkcruise',
            component: BKcruise
        },
        // 游轮百科搜索
        {
            path: '/bkcruisesearch:searchVal?',
            name: 'bkcruisesearch',
            component: BKcruiseSearch
        },
        // 游轮百科二级
        {
            path: '/bkcruiselevel:id',
            name: 'bkcruiselevel',
            component: BKcruiseLevel
        },
        // 游轮百科详细
        {
            path: '/bkcruiseinfo:id',
            name: 'bkcruiseinfo',
            component: BKcruiseInfo
        },
        // 游轮游记
        {
            path: '/travelog',
            name: 'travelog',
            component: Travelog
        },
        // 游轮游记详细
        {
        path: '/traveloginfo:id',
        name: 'traveloginfo',
        component: TravelogInfo
        },
        // 游轮航线
        {
            path: '/YLairline:searchVal?',
            name: 'YLairline',
            component: Airline
        },
         // 游轮航线详情
         {
            path: '/airlineinfo:id',
            name: 'airlineinfo',
            component: AirLineInfo
        }
    ],
    scrollBehavior(to, from,savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})
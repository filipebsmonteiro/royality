import Vue from 'vue'
import Router from 'vue-router'
import UserRoutes from "@/routes/UserRoutes"
import CardTopSidebarLayout from "@/layouts/CardTopSidebarLayout";
import SimpleTopBarLayout from "@/layouts/SimpleTopBarLayout";

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    //scrollBehavior () {
    //  return { x: 0, y: 0 };
    //},
    routes: [
        {path: '*', component: () => import('@/pages/NotFound')},
        {
            path: '/',
            component: CardTopSidebarLayout,
            children: [
                { path: '/', name: 'homepage', component: () => import('@/pages/HomePage') },
            ]
        },
        ...UserRoutes,

        {
            path: '/cv',
            component: SimpleTopBarLayout,
            children: [
                {path: 'pt-br', name: 'curriculum.ptBR', component: () => import('@/pages/curriculum/ptBR')},
                {path: 'en', name: 'curriculum.en', component: () => import('@/pages/curriculum/en')},
            ]
        }
    ]
});
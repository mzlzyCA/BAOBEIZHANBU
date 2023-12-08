import { createRouter, createWebHistory } from 'vue-router';

const CountDown = () => import('../views/CountDown.vue')
const DropCoffeeBeans = () => import('../views/DropCoffeeBeans.vue')
const StartGame = () => import('../views/StartGame.vue')
const StartPage = () => import('../views/StartPage.vue')
const OutCome = () => import('../views/OutCome.vue')
// const Profile = () => import('../views/profile/profile')


// Vue.use(VueRouter)
// import('@/views/page1.vue').then((module) => {
//     console.log('okok');
//   }).catch((error) => {
//     console.log('bad');
// });

const routes = [
    {
        path:'/',
        redirect:'/startgame'    
    },
    {
        path: '/countdown',
        // name: 'CountDown',
        component: CountDown,
        // hidden:true
    },
    {
        path: '/dropcoffeebeans',
        // name: 'DropCoffeeBeans',
        component: DropCoffeeBeans,
        // hidden:true
    },
    {
        path: '/startgame',
        // name: 'StartGame',
        component: StartGame,
        // hidden:true
    },
    {
        path: '/startpage',
        // name: 'StartPage',
        component: StartPage,
        // hidden:true
    },
    {
        path: '/outcome',
        // name: 'OutCome',
        component: OutCome,
        // hidden:true
    }
    
]
const router  = new createRouter({
    history:createWebHistory(),
    routes,
})

export default router

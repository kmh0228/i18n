import vue from 'vue'
import VueRouter from 'vue-router';

vue.use(VueRouter)

let router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'home',
            component:()=>import('./components/HelloWorld')
        },
        {
            path:'/tools1',
            name:'tools1',
            component:()=>import('./components/tools1')
        },
        {
            path:'/tools3',
            name:'tools3',
            component:()=>import('./components/tools3')
        }
    ]
})
export default router

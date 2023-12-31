// import User from './components/user/User.vue'
// import UserStart from "./components/user/UserStart.vue"
// import UserDetail from "./components/user/UserDetail.vue"
// import UserEdit from "./components/user/UserEdit.vue"
import Home from './components/Home.vue'
import Header from './components/header.vue'


const User=resolve=> {
    require.ensure(['./components/user/User.vue'],()=>
    {
        resolve(require('./components/user/user.vue'))
    },'user');
};

const UserStart=resolve=> {
    require.ensure(['./components/user/UserStart.vue'],()=>
    {
        resolve(require('./components/user/UserStart.vue'))
    },'user');
};
const UserDetail=resolve=> {
    require.ensure(['./components/user/UserDetail.vue'],()=>
    {
        resolve(require('./components/user/userDetail.vue'))
    },'user');
};
const UserEdit=resolve=> {
    require.ensure(['./components/user/UserEdit.vue'],()=>
    {
        resolve(require('./components/user/userEdit.vue'))
    },'user');
};


export const routes=[
     //{path:'/',component:Home,name:'home'},
    {path:'/',name:'Home',components:
            {
                default:Home,
                'header-top':Header,

            }},
    {path: '/user/:id',component: User},
    {path: '/user/',components: {
        default:User,
            'header-bottom':Header,
        }, children:[
        {path:'',component:UserStart},
            {path:':id/detail',component: UserDetail,beforeEnter:(to,from,next)=>
                {
                    console.log('inside route setup');
                }},
            {path: ':id/edit',component: UserEdit,name:'userEdit'},
        ]},
    //{path:'/redirect-me',redirect:'/user'}

    {path:'/redirect-me',redirect:{name:'userEdit'}},

    {path:'*',redirect: '/'}

];
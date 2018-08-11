import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Places from '@/components/pages/Places'
import Place from '@/components/pages/Place'
import Plans from '@/components/pages/Plans'
import CreatePlan from '@/components/pages/CreatePlan'
import Profile from '@/components/pages/Profile'
import SignIn from '@/components/pages/SignIn'
import SignUp from '@/components/pages/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path: '/places',
      name: 'Places',
      component:Places
    },
    {
      path:'/places/:id',
      name:'Place',
      props:true,
      component:Place
    },
    {
      path:'/yourplans',
      name:'Plans',
      component:Plans
    },
    {
      path:'/plans/Create',
      name:'CreatePlans',
      component:CreatePlan
    },
    {
      path:'/Profile',
      name:'Profile',
      component:Profile
    },
    {
      path:'/Signin',
      name:'Signin',
      component:SignIn
    },
    {
      path:'/Signup',
      name:'Signup',
      component:SignUp
    }
  ],
  mode:'history',
})

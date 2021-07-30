import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'
import UserService from '../services/UserService'
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile.vue'
import LogInSignUp from '../views/LogInSignUp.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresUser: true
    }
  },
  {
    path: '/User/:userId',
    name: 'UserProfile',
    component: UserProfile,
    meta: {
      requiresUser: true
    }
  },
  {
    path: '/loginOrsignup',
    name: 'signup',
    component: LogInSignUp,
    meta: {
      requiresUser: false
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresUser: true,
      requiresAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async(to,from,next) => {
  const auth = await UserService.auth()
  const requiresUser = to.matched.some(record => record.meta.requiresUser)
  
  if(store.state.User.user === null && !requiresUser){
    next();
  }
  else if(!auth.loggedIn) {
    next({ name: 'signup'})
  }
  else if(store.state.User.user === null){
    const user = await UserService.getUser()
    store.dispatch('User/setUser', user)
    next();
  }
  else{
    next()
  }
})

export default router

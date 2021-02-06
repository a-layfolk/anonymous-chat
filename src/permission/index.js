import router from '../router'

// 路由判断登录, 进行权限拦截
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requireAuth)) {  // 判断该路由是否需要登录权限
    const token = localStorage.getItem("token");

    if(token) {
      if(to.path === '/subuserlogin') {
        next({
            path: '/subuserlogin'
        })
      } 
      else {
        next();
      }
    }
    else {
      next({
        path: '/subuserlogin'
      })
    }
  }
  else {
    next();
  }
})

export default router;
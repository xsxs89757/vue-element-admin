/* eslint-disable no-unused-vars */
/* eslint-disable handle-callback-err */
/* eslint-disable prefer-const */
import { constantRoutes } from '@/router'
import { getRoutes } from '@/api/role'
import { resetRoutes } from '@/utils/permission'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const permission = {
  state: {
    routes: [],
    permissionRouters: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    },
    SET_PERMISSIONROUTERS: (state, routes) => {
      state.permissionRouters = routes
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise((resolve, reject) => {
        getRoutes().then(response => {
          const { menu, permission } = response.data
          let accessedRoutes
          accessedRoutes = resetRoutes(menu)
          commit('SET_ROUTES', accessedRoutes)
          commit('SET_PERMISSIONROUTERS', permission)
          resolve(accessedRoutes)
        }).catch(error => {
          reject('menu get error!')
        })
      })
    }
  }
}

export default permission

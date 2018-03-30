// _lib.js
// route格式化的工具

export const _import = require('./_import_vue')

function mp (pname, c, auth) {
  return {
    path: `/${pname}`,
    name: `${pname}`,
    meta: {keepAlive: true, requireAuth: auth},
    component: c
  }
}

export function makePath (pname, auth = false) {
  return mp(pname, _import(pname), auth)
}

export function makeDir (pname, auth = false) {
  return mp(pname, _import(pname + '/index'), auth)
}

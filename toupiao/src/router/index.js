import Vue from 'vue'
import Router from 'vue-router'
import {_import, makePath, makeDir} from './_lib'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/kh01'
    },
    {
      path: '/404',
      component: _import('404'),
      hidden: true
    },
    makePath('d01'),
    makePath('d02'),
    makePath('d03'),
    makePath('d05'),
    makePath('h00'),
    makePath('h01'),
    makePath('h011'),
    makePath('h03'),
    makePath('clear'),
    makePath('kh01', true),
    makePath('kh02', true),
    makePath('kh03', true),
    makePath('kh04', true),
    makePath('tp01', true),
    makePath('authJump'),
    {
      path: '/h02/:id',
      name: 'h02',
      component: _import('h02')
    },
    {
      path: '/h04/:score/:rank',
      name: 'H04',
      component: _import('h04')
    },
    makePath('h05'),
    makeDir('p02'),
    {
      path: '/test',
      component: _import('d02')
    },
    {
      path: '/author/:sid/:url',
      name: 'author',
      component: _import('author')
    },
    {path: '*', redirect: '/404', hidden: true}
  ]
})

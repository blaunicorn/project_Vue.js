import Vue from 'vue'
import Router from 'vue-router'
import {_import, makePath, makeDir} from './_lib'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/ytzy02'
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
    makePath('slindex'),
    makePath('search'),
    makePath('ytzy02'),
    makePath('ytzy03'),
    makePath('ytzy06'),
    makePath('ytzy07'),
    makePath('ytzy08'),
    makePath('ytzy02.1'),
    makePath('ytzy10'),
    makePath('ytzy11'),
    makePath('ytzy12'),
    makePath('ytzy13'),
    makePath('ytzy14'),
    makePath('ytzy15'),
    makePath('ytzy16'),
    makePath('ytzy17'),
    makePath('ytzy18'),
    makePath('ytzy19'),
    makePath('ytzy20'),
    makePath('ytzy21'),
    makePath('ytzy22'),
    makePath('ytzy23'),
    makePath('ytzy24'),
    makePath('ytzy25'),
    makePath('ytzy26'),
    makePath('ytzy27'),
    makePath('ytzy28'),
    makePath('ytzy29'),
    makePath('ytzy30'),
    makePath('ytzy31'),
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
    {
      path: '/ytzy08.4/:tabIndex',
      name: 'ytzy08.4',
      component: _import('ytzy08.4')
    },
    {
      path: '/ytzy09/:article_id',
      name: 'ytzy09',
      component: _import('ytzy09')
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

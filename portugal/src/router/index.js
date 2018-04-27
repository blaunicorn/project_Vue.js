import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import home from '@/components/home'
import page03 from '@/components/page03'
import page04 from '@/components/page04'
import page05 from '@/components/page05'
import page06 from '@/components/page06'
import page07 from '@/components/page07'
import page09 from '@/components/page09'
import page10 from '@/components/page10'
import video from '@/components/video'
import awesomeswiper from '@/components/awesomeswiper'
import shiyan from '@/components/shiyan'
import paging from '@/components/paging'
import postform from '@/components/postform'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/page03',
      name: 'page03',
      component: page03
    },
    {
      path: '/page04',
      name: 'page04',
      component: page04
    },
    {
      path: '/page05',
      name: 'page05',
      component: page05
    },
    {
      path: '/page06',
      name: 'page06',
      component: page06
    },
    {
      path: '/page07',
      name: 'page07',
      component: page07
    },
    {
      path: '/page09',
      name: 'page09',
      component: page09
    },
    {
      path: '/page10',
      name: 'page10',
      component: page10
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
      path: '/awesomeswiper',
      name: 'awesomeswiper',
      component: awesomeswiper
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/paging',
      name: 'paging',
      component: paging
    },
    {
      path: '/postform',
      name: 'postform',
      component: postform
    },
    {
      path: '/shiyan',
      name: 'shiyan',
      component: shiyan
    }
  ]
})

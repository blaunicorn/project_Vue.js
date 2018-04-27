<template>
    <div>
    </div>
</template>
<script>
  import {XHeader} from 'vux'
  export default {
    components: {
      XHeader
    },
    data () {
      return {
        brow: ''
      }
    },
    created () {
      this.brow = 'weixin3'
      // this.$router.push({name: 'tp02', params: {sid: 'abcd', url: 'tp01'}})
      // window.localStorage.removeItem('token')
      window.localStorage.removeItem('sid')
      this.$router.replace({
        name: '/'
      })
    },
    methods: {
      // 判断是否微信登陆 是不是微信浏览器
      isWeiXin () {
        let ua = window.navigator.userAgent.toLowerCase()
        this.brow = ua
        console.log(ua) // mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
        if (ua.match(/micromessenger/i) != null) {
          return true
        } else {
          return false
        }
      },
      showPluginAuto (t, c) {
        this.$vux.alert.show({
          title: t,
          content: c
        })
        setTimeout(() => {
          this.$vux.alert.hide()
        }, 10000)
      }
    }
  }
</script>

<style scoped>
    .x-header {
        background: #f22222;
    }
</style>

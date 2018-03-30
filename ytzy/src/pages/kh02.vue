<template>
    <div v-if="getData">
        <x-header class="x-header" :left-options="{backText: ''}">大庆油田总医院考核平台</x-header>
        <div class="explain">
          <div class="title">领导班子综合考评说明</div>
          <div class="content">
            <div>1.请在相对应的选项中选择；</div>
            <div>2.整体评分，请在选定档次后面进行选择；</div>
            <div>3.单项指标，5分为优秀，4分为良好，3分为一般，2分以下为较差；</div>
            <div>4.所有选项为必填项。</div>
          </div>
        </div>
        <x-button class="submit" link="kh03">开始考核</x-button>
    </div>
</template>
<script>
  import {XHeader, XButton} from 'vux'
  export default {
    components: {
      XHeader,
      XButton
    },
    data () {
      return {
        getData: false
      }
    },
    created () {
      this.$axios.get(this.GLOBAL.URL + 'kaohe_sample/index.php', {
        params: {
          r: 'vote/get-my-state',
          sid: localStorage.getItem('sid')
        }
      }).then((response) => {
        console.log(response.data)
        if (response.data.result === 'OK') {
          let that = this
          that.getData = true
          if (response.data.auth_state === 1 && response.data.has_voted === true) {
            this.showPluginAuto('您已完成了测评！')
            this.$router.push({
              name: 'kh04'
            })
          }
        } else if (response.data.result === 'ERROR') {
          window.localStorage.removeItem('sid')
          this.showPluginAuto('授权期限已过，将自动重新授权')
          this.$router.replace({
            name: 'clear'
          })
        }
      })
    },
    methods: {
      showPluginAuto (t, c) {
        this.$vux.alert.show({
          title: t,
          content: c
        })
        setTimeout(() => {
          this.$vux.alert.hide()
        }, 15000)
      }
    }
  }
</script>

<style scoped>
    .x-header {
        background: #2992f2;
    }
    .explain{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .title{
      font-size: 14px;
      font-weight: bold;
      margin-top: 40px;
      margin-bottom: 40px;
    }
    .content{
      width: 90%;
      font-size: 14px;
    }
    .submit{
      background-color: #2992f2;
      width: 165px;
      height: 30px;
      color: white;
      font-size: 14px;
      line-height: 30px;
      margin-top: 40px;
    }
    
</style>

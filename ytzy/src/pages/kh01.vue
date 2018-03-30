<template>
    <div class="home">
        <x-header class="x-header" :left-options="{showBack: false}">大庆油田总医院考核平台</x-header>
        <div v-if="getData" class="info">
          <group label-width="4.5em" label-margin-right="2em" label-align="right" >
            <x-input class="name" title="姓名" placeholder="请输入姓名" v-model="username"></x-input>
            <selector class="section" title="部室" placeholder="请选择部室"   :options="list2" v-model="section"></selector>
          </group>
          <x-button class="submit" @click.native = "postQuiz" >认证</x-button>
        </div>        
    </div>
</template>
<script>
  import {XHeader, Group, XInput, Selector, XButton} from 'vux'
  import qs from 'qs'
  export default {
    components: {
      XHeader,
      Group,
      XInput,
      Selector,
      XButton
    },
    data () {
      return {
        username: '',
        section: '4',
        departments: {},
        getData: false,
        list: [{key: '3', value: '眼科'}, {key: '4', value: '耳鼻喉科'}, {key: '5', value: '内科'}],
        list2: []
      }
    },
    created () {
      // 返回用户认证状态以及用户是否投过票。
      // auth_state认证状态：0表示未认证、1表示认证通过、2表示认证未通过、3表示待定；
      // has_voted是否投过票：true表示已投过票，false表示未投过票。
      this.$axios.get(this.GLOBAL.URL + 'kaohe_sample/index.php', {
        params: {
          r: 'vote/get-my-state',
          sid: localStorage.getItem('sid')
        }
      }).then((response) => {
        console.log(response.data)
        if (response.data.auth_state === 0) {
          let that = this
          // console.log(localStorage.getItem('sid'))
          this.$axios.get(this.GLOBAL.URL + 'kaohe_sample/index.php', {
            params: {
              r: 'vote/get-departments',
              // sid: 'nkf0u3ica8r6n1gvkge48ve006'
              sid: localStorage.getItem('sid')
            }
          }).then((response) => {
            that.departments = response.data.departments
            that.getData = true
            for (let key in that.departments) {
              let list1 = {}
              list1.key = key
              list1.value = that.departments[key]
              that.list2.push(list1)
            }
          })
        } else if (response.data.auth_state === 1) {
          if (response.data.has_voted === true) {
            this.showPluginAuto('您已完成了测评！')
            this.$router.push({
              name: 'kh04'
            })
          } else {
            this.showPluginAuto('您已认证通过')
            this.$router.push({
              name: 'kh02'
            })
          }
        } else if (response.data.auth_state === 2) {
          this.showPluginAuto('您认证未通过，请联系管理员')
        } else if (response.data.auth_state === 3) {
          this.showPluginAuto('您的实名认证暂未通过，请联系管理员')
        } else if (response.data.result === 'ERROR') {
          this.showPluginAuto('授权期限已过，将自动重新授权')
          window.localStorage.removeItem('sid')
          this.$router.replace({
            name: 'clear'
          })
        }
      })
    },
    methods: {
      postQuiz () {
        if (this.getData) {
          console.log('post')
          if (this.username === '' || this.section === '') {
            this.showPluginAuto('提示', '姓名、部室不能为空...')
          } else {
            let that = this
            let params = {
              department_id: that.section,
              name: that.username
            }
            console.log(that.username)
            this.$axios.post(this.GLOBAL.URL + 'kaohe_sample/index.php?r=vote/post-my-info&sid=' + localStorage.getItem('sid'),
              qs.stringify(params)).then(function (response) {
                console.log(response.data)
                if (response.data.state === 1) {
                  that.showPluginAuto('认证成功')
                  that.$router.push({
                    name: 'kh02'
                  })
                } else {
                  that.showPluginAuto('认证失败，姓名或部室不正确', response.data.extension_error_msg)
                }
              })
          }
        }
      },
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
    .home{
      background-color: white;
      height: 100%;
      position: fixed;
      top: 0px;
    }
    .x-header {
      background: #2992f2;
    }
    .info{
      margin-left: 50px;
      margin-right: 50px;
      margin-top: 100px;
    }
    .name{
      font-size: 14px;
    }  
    .section{
      font-size: 14px;
    }
    .submit{
      background-color: #2992f2;
      width: 165px;
      height: 30px;
      color: white;
      font-size: 14px;
      line-height: 30px;
      margin-top: 50px;
    }
    
</style>

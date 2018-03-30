<template>
    <div>
      <x-header class="x-header" :left-options="{backText: ''}">大庆油田总医院考核平台</x-header>
      <div v-if="getData" v-for="(value,key) in assessment">
        <details class="menu" id = "open1" >
          <summary v-text = "value.title">姓名A</summary>
          <div class="line1 mar-top"></div>
          <div class="background1">
            <div class="font-weight" v-text = "value.topics[0].description">整体评价</div>
            <div class="line2"></div>
            <checker v-model="demo1[value.topics[0].id]" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
              <checker-item  v-for="i in value.topics[0].options" :value="i.id" :key="i.id" v-text="i.title"></checker-item>
            </checker>
          </div>
          <div class="line1"></div>
          <div style="background: #f5ffff;height: 240px">
            <div class="font-weight">素质</div>
            <div class="line2"></div>
            <div class="display">
              <div class="word" v-text = "value.topics[1].description">政治素质</div>
              <div>
                <checker v-model="demo1[parseInt(value.topics[1].id)]" default-item-class="demo2-item" selected-item-class="demo1-item-selected">
                <checker-item v-for="i in value.topics[1].options" :value="i.id" :key="i.id" v-text="i.title">5</checker-item>
              </checker>
              </div>
            </div>
            <div class="line3"></div>
            <div class="display">
              <div class="word" v-text = "value.topics[2].description">作风形象</div>
              <div>
                <checker v-model="demo1[value.topics[2].id]" default-item-class="demo2-item" selected-item-class="demo1-item-selected">
                  <checker-item v-for="i in value.topics[2].options" :value="i.id" :key="i.id" v-text="i.title">5</checker-item>
                </checker>
              </div>
            </div>
            <div class="line3"></div>
            <div class="display">
              <div class="word" v-text = "value.topics[3].description">廉洁从业</div>
              <div>
                <checker v-model="demo1[value.topics[3].id]" default-item-class="demo2-item" selected-item-class="demo1-item-selected">
                  <checker-item v-for="i in value.topics[3].options" :value="i.id" :key="i.id" v-text="i.title">5</checker-item>
                </checker>
              </div>
            </div>
          </div>
          <div class="line1"></div>
          <div style="background: #fff7f9;height: 300px">
            <div class="font-weight">能力</div>
            <div class="line2"></div>
            <div class="display">
              <div class="word"  v-text = "value.topics[4].description">科学决策能力</div>
              <div>
                <checker v-model="demo1[value.topics[4].id]" default-item-class="demo2-item" selected-item-class="demo1-item-selected">
                  <checker-item v-for="i in value.topics[4].options" :value="i.id" :key="i.id" v-text="i.title">5</checker-item>
                </checker>
              </div>
            </div>
            <div class="line3"></div>
            <div class="display">
              <div class="word" v-text = "value.topics[5].description">推动执行能力</div>
              <div>
                <checker v-model="demo1[value.topics[5].id]" default-item-class="demo2-item" selected-item-class="demo1-item-selected">
                  <checker-item v-for="i in value.topics[5].options" :value="i.id" :key="i.id" v-text="i.title">5</checker-item>
                </checker>
              </div>
            </div>
            <div class="line3"></div>
            <div class="display">
              <div class="word"  v-text = "value.topics[6].description">学习创新能力</div>
              <div>
                <checker v-model="demo1[value.topics[6].id]" default-item-class="demo2-item" selected-item-class="demo1-item-selected">
                  <checker-item v-for="i in value.topics[6].options" :value="i.id" :key="i.id" v-text="i.title">5</checker-item>
                </checker>
              </div>
            </div>
            <div class="line3"></div>
            <div class="display">
              <div class="word"  v-text = "value.topics[7].description">团队建设能力</div>
              <div>
                <checker v-model="demo1[value.topics[7].id]" default-item-class="demo2-item" selected-item-class="demo1-item-selected">
                  <checker-item v-for="i in value.topics[7].options" :value="i.id" :key="i.id" v-text="i.title">5</checker-item>
                </checker>
              </div>
            </div>
          </div>
          <div class="line1"></div>
          <div style="background: #f8ffed;height: 100px">
            <div class="font-weight">业绩</div>
            <div class="line2"></div>
            <div class="display">
              <div class="word"  v-text = "value.topics[7].description">履职表现</div>
              <div>
                <checker v-model="demo1[value.topics[8].id]" default-item-class="demo2-item" selected-item-class="demo1-item-selected">
                  <checker-item v-for="i in value.topics[8].options" :value="i.id" :key="i.id" v-text="i.title">5</checker-item>
                </checker>
              </div>
            </div>
          </div>
        </details>
        <div class="line4"></div>
        <!-- 考核样式 
        <details class="menu" open>
          <summary>姓名A</summary>
          <div class="line1 mar-top"></div>
          <div class="background1">
            <div class="font-weight">整体评价</div>
            <div class="line2"></div>
            <checker v-model="demo1" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
              <checker-item value="1">优秀</checker-item>
              <checker-item value="2">称职</checker-item>
              <checker-item value="3">基本称职</checker-item>
              <checker-item value="4">不称职</checker-item>
            </checker>
          </div>
          <div class="line1"></div>
          <div style="background: #f5ffff;height: 240px">
            <div class="font-weight">素质</div>
            <div class="line2"></div>
            <div class="display">
              <div class="word">政治素质</div>
              <div>
                <checker v-model="demo2" default-item-class="demo2-item" selected-item-class="demo1-item-selected">
                <checker-item value="1">5</checker-item>
                <checker-item value="2">4</checker-item>
                <checker-item value="3">3</checker-item>
                <checker-item value="4">2</checker-item>
                <checker-item value="5">1</checker-item>
              </checker>
              </div>
            </div>
            <div class="line3"></div>
            <div class="display">
              <div class="word">作风形象</div>
              <div>
                <checker v-model="demo3" default-item-class="demo2-item" selected-item-class="demo1-item-selected">
                  <checker-item value="1">5</checker-item>
                  <checker-item value="2">4</checker-item>
                  <checker-item value="3">3</checker-item>
                  <checker-item value="4">2</checker-item>
                  <checker-item value="5">1</checker-item>
                </checker>
              </div>
            </div>
            <div class="line3"></div>
            <div class="display">
              <div class="word">廉洁从业</div>
              <div>
                <checker v-model="demo4" default-item-class="demo2-item" selected-item-class="demo1-item-selected">
                  <checker-item value="1">5</checker-item>
                  <checker-item value="2">4</checker-item>
                  <checker-item value="3">3</checker-item>
                  <checker-item value="4">2</checker-item>
                  <checker-item value="5">1</checker-item>
                </checker>
              </div>
            </div>
          </div>
          <div class="line1"></div>
          <div style="background: #fff7f9;height: 300px">
            <div class="font-weight">能力</div>
            <div class="line2"></div>
            <div class="display">
              <div class="word">科学决策能力</div>
              <div>
                <checker v-model="demo5" default-item-class="demo2-item" selected-item-class="demo1-item-selected">
                  <checker-item value="1">5</checker-item>
                  <checker-item value="2">4</checker-item>
                  <checker-item value="3">3</checker-item>
                  <checker-item value="4">2</checker-item>
                  <checker-item value="5">1</checker-item>
                </checker>
              </div>
            </div>
            <div class="line3"></div>
            <div class="display">
              <div class="word">推动执行能力</div>
              <div>
                <checker v-model="demo6" default-item-class="demo2-item" selected-item-class="demo1-item-selected">
                  <checker-item value="1">5</checker-item>
                  <checker-item value="2">4</checker-item>
                  <checker-item value="3">3</checker-item>
                  <checker-item value="4">2</checker-item>
                  <checker-item value="5">1</checker-item>
                </checker>
              </div>
            </div>
            <div class="line3"></div>
            <div class="display">
              <div class="word">学习创新能力</div>
              <div>
                <checker v-model="demo7" default-item-class="demo2-item" selected-item-class="demo1-item-selected">
                  <checker-item value="1">5</checker-item>
                  <checker-item value="2">4</checker-item>
                  <checker-item value="3">3</checker-item>
                  <checker-item value="4">2</checker-item>
                  <checker-item value="5">1</checker-item>
                </checker>
              </div>
            </div>
            <div class="line3"></div>
            <div class="display">
              <div class="word">团队建设能力</div>
              <div>
                <checker v-model="demo8" default-item-class="demo2-item" selected-item-class="demo1-item-selected">
                  <checker-item value="1">5</checker-item>
                  <checker-item value="2">4</checker-item>
                  <checker-item value="3">3</checker-item>
                  <checker-item value="4">2</checker-item>
                  <checker-item value="5">1</checker-item>
                </checker>
              </div>
            </div>
          </div>
          <div class="line1"></div>
          <div style="background: #f8ffed;height: 100px">
            <div class="font-weight">业绩</div>
            <div class="line2"></div>
            <div class="display">
              <div class="word">履职表现</div>
              <div>
                <checker v-model="demo9" default-item-class="demo2-item" selected-item-class="demo1-item-selected">
                  <checker-item value="1">5</checker-item>
                  <checker-item value="2">4</checker-item>
                  <checker-item value="3">3</checker-item>
                  <checker-item value="4">2</checker-item>
                  <checker-item value="5">1</checker-item>
                </checker>
              </div>
            </div>
          </div>
        </details>
        <div class="line4"></div>        
      </div>
      <div>
        <details class="menu" close>
          <summary>姓名B</summary>
        </details>
      </div>
      <div class="line4"></div>
      <div>
        <details class="menu" close>
          <summary>姓名C</summary>
        </details>-->
      <x-button class="xbutton"  @click.native="postReady" type="">提交</x-button>
      <confirm v-model="show"  title="确认" @on-confirm= "postQuiz">
        <p style="text-align:center;">确定提交?</p>
      </confirm>
      </div>
    </div>
</template>
<script>
  import {XHeader, XButton, Checker, CheckerItem, Confirm} from 'vux'
  import qs from 'qs'
  export default {
    components: {
      XHeader,
      XButton,
      Checker,
      CheckerItem,
      Confirm
    },
    data () {
      return {
        show: false,
        assessment: {},
        getData: false,
        demo1: {},
        demo2: '',
        demo3: '',
        demo4: '',
        demo5: '',
        demo6: '',
        demo7: '',
        demo8: '',
        demo9: ''
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
          this.$axios.get(this.GLOBAL.URL + 'kaohe_sample/index.php', {
            params: {
              r: 'vote/get-activities-content',
              sid: localStorage.getItem('sid')
            }
          }).then((response) => {
            console.log(response.data)
            that.assessment = response.data.activities
            that.getData = true
          })
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
      span1 () {
        var objD = document.getElementById('open1')
        var attD = objD.getAttribute('open')
        if (attD !== 'open') {
          objD.setAttribute('open', 'open')
        } else {
          objD.removeAttribute('open')
        }
      },
      postReady () {
        console.log(this.demo1)
        let demo1Length = 0
        for (let obj in this.demo1) {
          if (this.demo1[obj] !== '') {
            demo1Length++
          }
        }
        let ceshiLength = 0
        let nn = 0
        for (let obj in this.assessment) {
          nn++
          for (let kk in this.assessment[obj].topics) {
            if (this.assessment[obj].topics[kk] !== '') {
              ceshiLength++
            }
          }
        }
        console.log(nn)
        console.log(ceshiLength)
        console.log('共选中了' + demo1Length + '个值')
        console.log('考评中共有' + ceshiLength + '个值')
        if (demo1Length !== ceshiLength) {
          let ii = ceshiLength - demo1Length
          this.showPluginAuto('提示', '您还有' + ii + '个选项没有评分！')
        } else {
          this.show = true
        }
      },
      onConfirm (msg) {
        console.log('on confirm')
        if (msg) {
          alert(msg)
        }
      },
      postQuiz () {
        if (this.getData) {
          console.log('post')
          // console.log(this.demo1)
          let as = {}  // 选择结果
          for (let ei in this.demo1) {
          //  as[ei] = parseInt(this.demo1[ei])
            as[ei] = this.demo1[ei]
          }
          // as = {10:"24",11:"25",12:"30",13:"40"}
          console.log(as)
          let that = this
          let params = {
            topic_s: as
          }
          this.$axios.post(this.GLOBAL.URL + 'kaohe_sample/index.php?r=vote/post-vote&sid=' + localStorage.getItem('sid'),
            qs.stringify(params)).then(function (response) {
              console.log(response.data)
              if (response.data.result === 'OK') {
                that.showPluginAuto('测评完成')
                that.$router.push({
                  name: 'kh04'
                })
              } else {
                that.showPluginAuto('测评失败', response.data.extension_error_msg)
              }
            })
        }
      },
      showPlugin () {
        this.$vux.confirm.show({
          title: '提示',
          content: '提交后将不能修改!',
          onConfirm () {
            console.log('plugin confirm')
          }
        })
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
    .x-header {
        background: #2992f2;
    }
    .menu{
      padding-top: 10px;
    }
    summary{
      color:#101010;
      outline:none;
      margin-left: 5%;
      font-size: 16px;
    }
    summary::-webkit-details-marker {
      float: right;
      margin-right: 5%;
      color: #2992f2;
      margin-top: 8px;
    }
    .line1{
      border-bottom: solid 3px #e6e6e6;
    }
    .mar-top{
      margin-top: 5px
    }
    .background1{
      background: #fffcf5;height: 110px
    }
    .font-weight{
      font-size: 15px;font-weight: bold;margin-left: 5%;padding-top: 5px
    }
    .line2{
      border-bottom: 1px solid #e0e0e0;margin: 5px 5% 5px 5%
    }
    .display{
      display: flex;justify-content: space-between;
      width: 80%;
      margin-left: 5%;
    }
    .line3{
      border-bottom: 1px solid #e0e0e0;margin:20px 5% 0px 5%
    }
    .word{
      font-size: 12px;margin-top: 20px;
    }
    .demo1-item {
      border: 1px solid #e0e0e0;
      margin-left: 5%;
      padding: 5px 13px;
      margin-top: 15px;
      font-size: 12px;
      border-radius: 5px;
    }
    .demo2-item {
      border: 1px solid #e0e0e0;
      padding: 4px 4px;
      margin-left: 5px;
      width: 20px;
      height: 20px;
      margin-top: 15px;
      font-size: 12px;
      border-radius: 20px;
      text-align: center;
    }
    .demo1-item-selected {
      border: 1px solid green;
    }
  .line4{
    border-bottom: 1px solid #e0e0e0;margin-top: 10px
  }
    .xbutton{
      background: #2992f2;
      bottom: 0px;
      margin-top: 10px;
      height: 45px;
      margin-bottom: 10px;
      border-radius: 0px;
      font-size: 14px;
    }
</style>

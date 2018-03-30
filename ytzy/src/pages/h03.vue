<template>
    <div class="homeBox">
        <x-header class="x-header" :left-options="{backText: ''}">儿少中心党支部</x-header>
        <div><img class="pic1" src="../assets/wszsjd.jpg"></div>
        <div v-if="getData">
            <group>
                <div class="select">
                    <div class="message">
                        <span>基本信息</span>
                        <span style="color: #e51c23;">*</span>
                    </div>
                    <div class="message flex">
                        <div class="name">姓名：</div>
                        <div>
                            <x-input class="xiput" is-type="china-name" v-model="inE.name"></x-input>
                        </div>
                    </div>
                    <div class="message flex">
                        <div class="name">电话：</div>
                        <div>
                            <x-input class="xiput" v-model="inE.tel" name="mobile" keyboard="number"
                                     is-type="china-mobile"></x-input>
                        </div>
                    </div>
                    <div style="color: #101010;font-size: 14px;margin-left: 10%;font-weight: bold;margin-bottom: 10px;margin-top: 30px;">
                        单选题（{{scount}}题）
                    </div>
                    <div v-for="(value, key) in paper.single_choice_topics">
                        <div style="margin-left: 10%;width: 80%">
                            <div>{{ key+1 }}、{{ value.description }}</div>
                            <div class="sel-content">
                                <div v-for="(item,order) in value.options">
                                    <input class="mar-top" type="radio" :id="'op'+item.id" :name="'q'+value.id" :weight="item.weight">
                                    <label :for="'op'+item.id">{{String.fromCharCode(65+order)}}
                                        {{item.description}}</label><br>
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                    </div>
                </div>
                <div class="select">
                    <div style="color: #101010;font-size: 14px;margin-left: 10%;font-weight: bold;margin-bottom: 10px;">
                        多选题（{{mcount}}题）
                    </div>
                    <div v-for="(value, key) in paper.multi_choices_topics">
                        <div style="margin-left: 10%;width: 80%">
                            <div>{{ key+1 }}、{{ value.description }}</div>
                            <div class="sel-content">
                                <div v-for="(item,order) in value.options">
                                    <input class="mar-top" type="checkbox" :id="'op'+item.id" :name="'q'+value.id" :weight="item.weight">
                                    <label :for="'op'+item.id">{{String.fromCharCode(65+order)}}
                                        {{item.description}}</label><br>
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                    </div>
                </div>
            </group>
        </div>
        <div style="height: 30px;"></div>
        <x-button @click.native="postReady" class="begin">提交</x-button>
        <confirm v-model="show"
                 title="确认" @on-confirm="postQuiz">
            <p style="text-align:center;">确定交卷?</p>
        </confirm>
    </div>
</template>
<script>
  import {XHeader, XInput, XButton, Group, Confirm} from 'vux'
  import qs from 'qs'

  export default {
    components: {
      Confirm,
      XHeader,
      XInput,
      Group,
      XButton
    },
    data () {
      return {
        inE: {
          name: '',
          tel: ''
        },
        paper: {},
        getData: false,
        show: false
      }
    },
    created () {
      let that = this
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'quiz/get-paper-content',
          paper_id: '1'
        }

      }).then((response) => {
        // console.log(response.data)
        that.paper = response.data
        that.getData = true
      })
    },
    methods: {
      postReady () {
        if (this.inE.name === '' || this.inE.tel === '') {
          this.showPluginAuto('警告', '姓名、电话不能为空...')
        } else {
          this.show = true
        }
      },
      postQuiz () {
        if (this.getData) {
          console.log('post')
          let as = {}  // 单选结果
          let am = {}  // 多选结果
          for (let ei in this.paper.single_choice_topics) {
            let qn = ''
            qn = 'q' + this.paper.single_choice_topics[ei].id
            let obj = document.getElementsByName(qn)
            let er = ''
            for (let ea in obj) {
              if (obj[ea].checked === true) {
                er = obj[ea].attributes['weight'].value
                break
              }
            }
            as[this.paper.single_choice_topics[ei].id] = er
          }
          console.log(as)
          for (let ei in this.paper.multi_choices_topics) {
            let tid = this.paper.multi_choices_topics[ei].id
            let obj = document.getElementsByName('q' + tid)
            let er = 0
            for (let ea in obj) {
              if (obj[ea].checked === true) {
                er += parseInt(obj[ea].attributes['weight'].value)
              }
            }
            am[tid] = er
          }
          console.log(am)
          let that = this
          let params = {
            name: that.inE.name,
            tel: that.inE.tel,
            topic_s: as,
            topic_m: am
          }
          console.log(qs.stringify(params))
          this.$axios.post(this.GLOBAL.URL + 'index.php?r=quiz/post-quiz&paper_id=1',
            qs.stringify(params)).then(function (response) {
              if (response.data.result === 'OK') {
                that.$router.push({
                  name: 'H04',
                  params: {
                    score: response.data.score,
                    rank: response.data.ranking
                  }
                })
              } else {
                that.showPluginAuto('答题失败', response.data.extension_error_msg)
              }
            })
        }
      },
      showPluginAuto (t, c) {
        this.$vux.alert.show({
          title: t,
          content: c
        })
        setTimeout(() => {
          this.$vux.alert.hide()
        }, 5000)
      }
    },
    computed: {
      scount: function () {
        let s = '1-'
        s += this.paper.single_choice_topics.length
        return s
      },
      mcount: function () {
        let s = ''
        s = this.paper.single_choice_topics.length + 1 + '-'
        s += this.paper.single_choice_topics.length + this.paper.multi_choices_topics.length
        return s
      }
    }
  }
</script>

<style scoped>
    .homeBox {
        width: 100%;
        height: 100%;
        top: 0px;
        bottom: 0px;
        background-color: #fffef2;
    }

    .x-header {
        background: #f22222;
    }

    .pic1 {
        width: 100%;
    }

    .message {
        font-size: 12px;
        margin-left: 10%;
        margin-top: 20px!important;
    }

    .flex {
        display: flex;
    }

    .name {
        font-size: 12px;
        margin-top: 4px
    }

    .xiput {
        border: 1px solid #bbbbbb;
        background: #ffffff;
        width: 120px;
        height: 8px;
        margin-left: 20px;
    }

    .select {
        margin-top: 20px;
        font-size: 14px;
        text-align: justify;
    }

    .sel-content {
        margin-left: 1em;
    }

    .mar-top {
        margin-top: 10px;
    }

    .line {
        border: 1px solid #bbbbbb;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .begin {
        width: 100%;
        height: 40px;
        background-color: #f22222;
        font-size: 14px;
        color: #ffffff;
        border-radius: 0;
    }
</style>

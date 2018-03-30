<template>
    <div>
        <x-header class="x-header" :left-options="{showBack: false}">投票</x-header>
        <div><img class="pic1" src="../assets/tp.jpg"></div>
        <div v-if="getData">
            <div class="word">
                <div style="font-size: 14px;" v-text="voteInfo.activity_base_info.title">春联投票</div>
                <div class="w-date" v-text="'开始时间：' + voteInfo.activity_base_info.start">开始时间：2017-12-28</div>
                <div class="w-date" v-text="'结束时间：' + voteInfo.activity_base_info.end">结束时间：2018-01-15</div>
            </div>
            <div class="line"></div>
            <div class="act-intr">
                <div class="color">活动介绍</div>
                <div>：为您所喜爱的春联，投票吧！票数最高者有礼品</div>
            </div>
            <!-- 循环读取被投票人数据-->
            <div v-for="(toupiao,index) in voteInfo.topics">   <!-- 循环投票活动数据 -->
                <div v-for="(item,key) in toupiao.options"> <!-- 循环某一投票活动的被投人数据 -->
                    <div v-if="(key % 2) == 0">
                        <div class="flex">
                            <div>
                                <div><img class="pic2" :src="GLOBAL.URL +item.img"></div>
                                <div>
                                    <div class="name" v-text="(key+1)+'.'+item.title"></div>
                                    <x-button class="xbutton"  @click.native="vote(toupiao.id,toupiao.options[key].id)">
                                        投票
                                    </x-button>
                                    <div class="count" v-text="voteInfo.options_vote_count[(toupiao.options[key].id)] + '票'"></div>
                                </div>
                            </div>
                            <div>
                                <div><img class="pic2" :src="GLOBAL.URL +toupiao.options[key+1].img"></div>
                                <div>
                                    <div class="name" v-text="(key+2)+'.'+toupiao.options[key+1].title"></div>
                                    <x-button class="xbutton"
                                              @click.native="vote(toupiao.id,toupiao.options[key+1].id)">
                                        投票
                                    </x-button>
                                    <div class="count" v-text="voteInfo.options_vote_count[(toupiao.options[key+1].id)] + '票'"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 循环读取被投票人数据结束-->
        <!-- 原有数据样式文件
        <div class="flex">
            <div>
                <div><img class="pic2" src="../assets/tp1.jpg"></div>
                <div>
                    <div class="name">1.花开富贵</div>
                    <x-button class="xbutton" @click.native="vote">投票</x-button>
                    <div class="count">10票</div>
                </div>
            </div>
            <div>
                <div><img class="pic2" src="../assets/tp2.jpg"></div>
                <div>
                    <div class="name">2.吉祥如意</div>
                    <x-button class="xbutton" @click.native="vote">投票</x-button>
                    <div class="count">10票</div>
                </div>
            </div>
        </div>
        <div class="flex">
            <div>
                <div><img class="pic2" src="../assets/tp3.jpg"></div>
                <div>
                    <div class="name">3.事事顺心</div>
                    <x-button class="xbutton" @click.native="vote">投票</x-button>
                    <div class="count">10票</div>
                </div>
            </div>
            <div>
                <div><img class="pic2" src="../assets/tp4.jpg"></div>
                <div>
                    <div class="name">4.四喜临门</div>
                    <x-button class="xbutton" @click.native="vote">投票</x-button>
                    <div class="count">10票</div>
                </div>
            </div>
        </div>
        -->
    </div>
</template>
<script>
  import {XHeader, XButton} from 'vux'
  import qs from 'qs'

  export default {
    components: {
      XHeader,
      XButton
    },
    data () {
      return {
        voteInfo: {},
        getData: false
        // disable001: false 设计投票后不可选
      }
    },
    created () {
      let that = this
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'vote/get-activity-content',
          activity_id: '3'
        }
      }).then((response) => {
        console.log(response.data)
        that.voteInfo = response.data
        that.getData = true
        // 遍历投票结果，如果没有值就赋值为0
        // for (let ei in that.voteInfo.topics) {
        //      for (let ea in that.voteInfo.topics[ei].options) {
        //        if (that.voteInfo.topics[ei].options[ea].id === order2) {
        //          console.log(this.voteInfo.topics[ei].options[ea].id)
        //          this.voteInfo.topics[ei].options[ea].order_num = parseInt(this.voteInfo.topics[ei].options[ea].order_num) + 1
        //          this.voteInfo.options_vote_count[order2] = parseInt(this.voteInfo.options_vote_count[order2]) + 1
        //          as[order1] = order2
                  // this.disable001 = true
        //        }
        //      }
        //  }
      })
    },
    methods: {
      vote (order1, order2) {
        if (this.getData) {
          console.log('post')
          let as = {} // 定义投票结果变量
          for (let ei in this.voteInfo.topics) {
            if (this.voteInfo.topics[ei].id === order1) {
              console.log(this.voteInfo.topics[ei].id)
              for (let ea in this.voteInfo.topics[ei].options) {
                if (this.voteInfo.topics[ei].options[ea].id === order2) {
                  console.log(this.voteInfo.topics[ei].options[ea].id)
                  this.voteInfo.topics[ei].options[ea].order_num = parseInt(this.voteInfo.topics[ei].options[ea].order_num) + 1
                  this.voteInfo.options_vote_count[order2] = parseInt(this.voteInfo.options_vote_count[order2]) + 1
                  as[order1] = order2
                  // this.disable001 = true
                }
              }
            }
          }
          // this.voteInfo.topics[0].options[0].order_num = parseInt(this.voteInfo.topics[0].options[0].order_num) + 1
          console.log('点击的id号是：' + order1 + '-' + order2)
          console.log(as)
          let that = this
          let params = {
            topic_s: as
          }
          this.$axios.post(this.GLOBAL.URL + 'index.php?r=vote/post-vote&activity_id=3&user_id=1',
            qs.stringify(params)).then(function (response) {
              console.log(response)
              if (response.data.result === 'OK') {
                that.$router.push(
                  {
                    name: 'tp01'
                  },
                  that.showPluginAuto('投票', '成功')
                )
              } else {
                that.showPluginAuto('您没有投票成功', response.data.extension_error_msg)
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
        }, 10000)
      }
    }
  }
</script>

<style scoped>
    .x-header {
        background: #f22222;
    }

    .word {
        margin-left: 5%;
        margin-top: 10px;
    }

    .w-date {
        font-size: 12px;
        color: #828282;
        margin-top: 5px
    }

    .pic1 {
        width: 100%;
    }

    .line {
        border-bottom: solid 4px #e0e0e0;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .act-intr {
        font-size: 12px;
        display: flex;
        margin-left: 5%
    }

    .color {
        color: #f22222
    }

    .flex {
        margin-top: 10px;
        width: 94%;
        margin-left: 3%;
        display: flex;
        justify-content: space-around
    }

    .pic2 {
        height: 140px;
        width: 160px
    }

    .name {
        font-weight: bold;
        font-size: 14px;
        margin-left: 15px
    }

    .count {
        font-size: 12px;
        text-align: center
    }

    .xbutton {
        background-color: #f22222;
        color: #ffffff;
        font-size: 14px;
        height: 30px;
        width: 127px;
        margin-left: 15px;
    }
</style>

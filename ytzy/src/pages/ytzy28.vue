<template>
  <div>
    <x-header class="x-header" :left-options="{backText: ''}">
                        <a slot="overwrite-left">
        <cell class="cell">
          <i class="fa fa-angle-left"  style = "color: #ffffff;" @click="onItemClick(9)"></i>
        </cell>
      </a><p class="title">党费计算</p></x-header>
    <div v-if = "getData2"><swiper :list="imgSwiper" :index="demo07_index"  auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
    <div v-else><img class="img1" src="../assets/ytzy28-1.jpg"></div>

        <div v-if="getData" class="info">
          <group label-width="4.5em" label-margin-right="2em" label-align="right" >
            <x-input class="income" type= "number" title="年  收  入" placeholder="请输入年收入" v-model="income"></x-input>
            <selector class="section" title="党员类别" placeholder="请选择党员类别"   :options="list" v-model="section"></selector>
          </group>
          <x-button class="submit" @click.native = "postQuiz" >计算</x-button>
        </div>    

    <div class="border">
      <div class="flex">
        <div class="word">党员收缴标准(2017)计算方法</div>
      </div>
      <div class="line"></div>
      <div class="word-contant"><br>党费收缴总则<br></div>
      <div class="word-contant1">&nbsp;&nbsp; &nbsp;&nbsp;第一条 按月领取工资的党员，每月以工资总额中相对固定的、经常性的工资收入（税后）为计算基数，按规定比例交纳党费。
工资总额中相对固定的、经常性的工资收入包括：机关工作人员（不含工人）的职务工资、级别工资、津贴补贴；事业单位工作人员的岗位工资、薪级工资、绩效工资、津贴补贴；机关工人的岗位工资、技术等级（职务）工资、津贴补贴；企业人员工资收入中的固定部分（基本工资、岗位工资）和活的部分(奖金）。
<br>比例<br>
 &nbsp;&nbsp; &nbsp;&nbsp;第二条 党员交纳党费的比例为：每月工资收入（税后）在3000元以下（含3000元）者，交纳月工资收入的0．5%；3000元以上至5000元（含5000元）者，交纳1%；5000元以上至10000元（含10000元）者，交纳1．5%；10000元以上者，交纳2%。
 <br>&nbsp;&nbsp; &nbsp;&nbsp;第三条　实行年薪制人员中的党员，每月以当月实际领取的薪酬收入为计算基数，参照第一条、第二条规定交纳党费。
 <br>&nbsp;&nbsp; &nbsp;&nbsp;第四条　不按月取得收入的个体经营者等人员中的党员，每月以个人上季度月平均纯收入为计算基数，参照第一条、第二条规定交纳党费。
 <br>&nbsp;&nbsp; &nbsp;&nbsp;第五条　离退休干部、职工中的党员，每月以实际领取的离退休费总额或养老金总额为计算基数，5000元以下（含5000元）的按0．5%交纳党费，5000元以上的按1%交纳党费。
 <br>&nbsp;&nbsp; &nbsp;&nbsp;第六条　农民党员每月交纳党费0．2元－1元。学生党员、下岗失业的党员、依靠抚恤或救济生活的党员、领取当地最低生活保障金的党员，每月交纳党费0．2元。
</div><div class="word-contant"><br>困难的党员<br></div>
 <div class="word-contant1"><br>&nbsp;&nbsp; &nbsp;&nbsp;第七条　交纳党费确有困难的党员，经党支部研究，报上一级党委批准后，困难的党员可以少交或者免交。
 <br>&nbsp;&nbsp; &nbsp;&nbsp;第八条　预备党员从支部大会通过其为预备党员之日起交纳党费。
 <br>&nbsp;&nbsp; &nbsp;&nbsp;第九条　党员一般应当向其正式组织关系所在的党支部交纳党费。持《中国共产党流动党员活动证》的党员，外出期间可以持证向流入地党组织交纳党费。
 <br>&nbsp;&nbsp; &nbsp;&nbsp;第十条　党员工资收入发生变化后，从按新工资标准领取工资的当月起，以新的工资收入为基数，按照规定比例交纳党费。
 </div><div class="word-contant"><br>特殊党费<br> </div>
 <div class="word-contant1">&nbsp;&nbsp; &nbsp;&nbsp;第十一条　党员自愿多交党费不限。自愿一次多交纳1000元以上的党费，全部上缴中央。具体办法是：由所在基层党委代收，并提供该党员的简要情况，通过省、自治区、直辖市党委组织部，中央直属机关工委、中央国家机关工委组织部，国务院国资委党委、中央各金融机构党委组织部，铁道部政治部、民航总局党委组织部，解放军总政治部组织部转交中央组织部。中央组织部给本人出具收据。
 <br>&nbsp;&nbsp; &nbsp;&nbsp;第十二条　党员应当增强党员意识，主动按月交纳党费。遇到特殊情况，经党支部同意，可以每季度交纳一次党费，也可以委托其亲属或者其他党员代为交纳或者补交党费。补交党费的时间一般不得超过6个月。
 <br>&nbsp;&nbsp; &nbsp;&nbsp;第十三条　对不按照规定交纳党费的党员，其所在党组织应及时对其进行批评教育，限期改正。对无正当理由，连续6个月不交纳党费的党员，按自行脱党处理。
 <br>&nbsp;&nbsp; &nbsp;&nbsp;第十四条　党组织应当按照规定收缴党员党费，不得垫交或扣缴党员党费，不得要求党员交纳规定以外的各种名目的“特殊党费”。
 <br>&nbsp;&nbsp; &nbsp;&nbsp;第十五条　各省、自治区、直辖市党委，中央直属机关工委，中央国家机关工委，国务院国资委党委，中央各金融机构党委，铁道部政治部，民航总局党委和解放军总政治部，每年按全年党员实交党费总数的5%上缴中央。上缴中央的党费应当于次年4月底前汇入中央组织部党费账户，不得少缴或拖延。
 <br>&nbsp;&nbsp; &nbsp;&nbsp;第十六条　铁路、民航系统党的关系在地方的党委，每年按照全年党员实交党费总数的10%向所在地方党委上缴党费。中国人民银行的地市级分支机构和中央其他金融机构的省级分支机构党委，每年按本地本系统党员全年实交党费总数的5%向所在地方党委上缴党费，其他派出机构和下属单位党委不再向地方党委上缴党费。
 </div>
    </div>
  </div>
</template>
<script>
  import { XHeader, Cell, Swiper, Group, XInput, Selector, XButton } from 'vux'
  export default {
    components: {
      XHeader,
      Cell,
      Swiper,
      Group,
      XInput,
      Selector,
      XButton
    },
    data () {
      return {
        getData2: false,
        demo07_index: 0,
        imgSwiper: [],
        getData: true,
        income: '',
        section: '0',
        list: [{key: '0', value: '请选择党员类别'}, {key: '1', value: '工人党员和一般管理岗党员'}, {key: '2', value: '科级干部党员'}, {key: '3', value: '处级干部党员'}]
      }
    },
    created () {
      let that = this
      // 轮播图
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'carousel/get-carousels-by-category',
          sid: '12345qwe',
          category: '7'
        }
      }).then((response) => {
        console.log(response.data)
        that.imgSwiper = response.data.carousels
        let i
        for (i = 0; i < that.imgSwiper.length; i++) {
          that.imgSwiper[i].img = that.GLOBAL.URL + that.imgSwiper[i].img
        }
        that.getData2 = false
      })
    },
    methods: {
      onItemClick (index) {
        console.log('on item click:', index)
        if (index === 9) {
          this.$router.push('/ytzy17')
        }
      },
      postQuiz () {
        if (this.getData) {
          console.log('get')
          if (this.income === '' || this.section === '') {
            this.showPluginAuto('提示', '年收入、党员类别不能为空...')
          } else {
            let that = this
            this.$axios.get(this.GLOBAL.URL, {
              params: {
                r: 'party-membership-dues/get-dues-monthly',
                sid: '12345qwe',
                name: '张三',
                type: that.section,
                income: that.income
              }
            }).then(response => {
              console.log(response.data)
              if (response.data.result === 'OK') {
                that.showPluginAuto('您应当月缴党费：' + response.data.monthly_payment + '元')
              } else {
                that.showPluginAuto('计算失败，年收入或党员类别不正确', response.data.extension_error_msg)
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
        }, 25000)
      }
    }
  }
</script>
<style scoped>
  .x-header{
    background: red;
  }
  .title{
    text-align: center;
    font-size: 18px;
    color: #ffffff;
  }
  .cell{
    margin-top: -10px;
    font-size: 20px;
  }
  .img1{
    margin-top: 0px;
    width: 100%;
    height: 180px;
  }
  .img2{
    margin-top: 15px;
    width: 94%;
    margin-left: 3%;
    height: 80px;
  }
  .border{
    background: #ffffff;
    margin-top: 10px;
    border-left: 1px solid #BBBBBB;
    border-right: 1px solid #BBBBBB;
    border-bottom: 1px solid #BBBBBB;
  }
  .flex{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .word{
   text-align: center;
    font-size: 20px;
    color:#000000 ;
    margin-left: 10px;
  }
  .word-contant{
   text-align: center;
    font-size: 18px;
    color:#000000 ;
    margin-left: 10px;
  }
  .word-contant1{
   text-align: left;
    font-size: 14px;
    color:#000000 ;
    margin-left: 20px;
    margin-right: 20px;
  }
  .tubiao1{
    width: 20px;
    height: 20px;
  }
  .line{
    border-bottom: solid 3px #F22222;
    width: 100%;
  }
    .info{
      margin-left: 50px;
      margin-right: 50px;
      margin-top: 10px;
    }
    .income{
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
      margin-top: 10px;
    }
</style>

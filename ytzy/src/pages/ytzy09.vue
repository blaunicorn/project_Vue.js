<template>
  <div  v-if = "getData">
    <x-header class="x-header" :left-options="{backText: ''}">
                  <a slot="overwrite-left">
        <cell class="cell">
          <i class="fa fa-angle-left"  style = "color: #ffffff;" @click="onItemClick(9)"></i>
        </cell>
      </a><p class="title"  v-text = "newscat[newsContent.cat1]">要闻</p>
      <a slot="right">
        <cell class="cell">

        </cell>
      </a>
    </x-header>
    <div class="content">
      <div class="title-word" v-text = "newsContent.title">关于十九大报告，你必须知道的“关键字”</div>
      <div class="title-date" >
        <div v-text = "'来源：' + newsContent.author">来源：人民网</div>
        <div v-text = "newsContent.create_at.substr(0, 10)">2018-02-12</div>
      </div>
      <div class = "richtext" v-html = "newsContent.content"></div>
      <!-- 原来格式
      <div class="photo"><img class="pic-yaowen" src="../assets/dj3.jpg"></div>
      <div class="word1">
        10月18日，中国共产党第十九次全国代表大会在北京人民大会堂隆重开幕。习近平代表第十八届中央委员会向大会作报告。 新华社记者马占成 摄
        <br/>直播回放：中国共产党第十九次全国代表大会开幕会
        <br/>“中国特色社会主义进入了新时代”，“新时代中国共产党的历史使命”，“新时代中国特色社会主义思想”，“我国社会主要矛盾已经转化”，“伟大斗争，伟大工程，伟大事业，伟大梦想，紧密联系、相互贯通、相互作用”……十九大报告中出现的不少“关键词”，展示了新理念、新观点，给予了重大时代课题明确的回答，在理论上拓展了新境界、在实践上作出了新部署。
        <br/>【大会主题】
        <br/>不忘初心，牢记使命，高举中国特色社会主义伟大旗帜，决胜全面建成小康社会，夺取新时代中国特色社会主义伟大胜利，为实现中华民族伟大复兴的中国梦不懈奋斗。
        <br/>【中国共产党人的初心和使命】
        <br/>不忘初心，方得始终。中国共产党人的初心和使命，就是为中国人民谋幸福，为中华民族谋复兴。这个初心和使命是激励中国共产党人不断前进的根本动力。全党同志一定要永远与人民同呼吸、共命运、心连心，永远把人民对美好生活的向往作为奋斗目标，以永不懈怠的精神状态和一往无前的奋斗姿态，继续朝着实现中华民族伟大复兴的宏伟目标奋勇前进。
        <br/>【极不平凡的五年】
        <br/>十八大以来的五年，是党和国家发展进程中极不平凡的五年。面对世界经济复苏乏力、局部冲突和动荡频发、全球性问题加剧的外部环境，面对我国经济发展进入新常态等一系列深刻变化，我们坚持稳中求进工作总基调，迎难而上，开拓进取，取得了改革开放和社会主义现代化建设的历史性成就。
        <br/>【十大“成就”】
        经济建设取得重大成就。全面深化改革取得重大突破。民主法治建设迈出重大步伐。思想文化建设取得重大进展。人民生活不断改善。生态文明建设成效显著。强军兴军开创新局面。港澳台工作取得新进展。全方位外交布局深入展开。全面从严治党成效卓著。
      </div> -->
    </div>
  </div>
</template>
<script>
  import { XHeader, Cell } from 'vux'
  export default {
    components: {
      XHeader,
      Cell
    },
    data () {
      return {
        newsContent: {},
        newsurl: [],
        newscat: ['新闻', '要闻', '院内公告', '十九大报告', '十九大报告解读', '党章党规', '系列讲话', '支部生活', '成果展示', '党员发展', '党务公开流程'],
        getData: false
      }
    },
    // post远端数据读取测试
    created () {
      let that = this
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'summary-article/get-article-info',
          sid: window.localStorage.sid,
          article_id: this.$route.params.article_id
        }
      }).then((response) => {
        console.log(response.data)
        that.newsContent = response.data.article_info
        that.getData = true
      })
    },
    methods: {
      onItemClick (index) {
        console.log('on item click:', index)
        if (index === 0) {
          this.$router.push('/ytzy02')
        }
        if (index === 1) {
          this.$router.push('/ytzy08')
        }
        if (index === 2) {
          this.$router.push('/ytzy06')
        }
        if (index === 3) {
          this.$router.push('/ytzy10')
        }
        if (index === 9) {
          this.$router.go(-1)
        }
      }
    }
  }
</script>
<style >
  .x-header{
    background-color:red;
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
  .fa-search{
    color: #ccc;
  }
  .content{
    width: 90%;
    margin-left: 5%;
    max-width: 100%;
  }
  .richtext {
   max-width: 100%;
   width: 100%;
  }
  .richtext * {
    max-width: 100% !important;
    max-height: 100% !important;
  }
  .title-word{
    font-size: 25px;
    font-weight: bold;
    margin-top: 10px;
    color: #101010;
    display: flex;
    justify-content: center;
  }
  .title-date{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color:#828282;
    margin-top: 20px;
  }
  .photo{
    display: flex;
    justify-content: center;
  }
  .pic-yaowen{
    width: 340px;
    height: 220px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .word1{
    font-size: 18px;color: #101010;
    line-height: 26px;
  }
</style>

<template>
  <div class="home">
    <x-header class="x-header" :left-options="{backText: ''}">
      <p>儿少中心党支部</p>
    </x-header>
    <img class="pic1" src="../assets/study.jpg">
    <div class="flex" v-for = "value in studyInfo">
      <div><img class="star" src="../assets/star.png"></div>
      <div class="word">
        <a @click="goItem(value.id)"><div v-text = "value.title"></div></a>
        <div class="line"></div>
      </div>
    </div>
    <!--
    <div class="flex mar-top">
      <div><img class="star" src="../assets/star.png"></div>
      <div class="word">
        <div>十八届中央纪律检查委员会向中国共产党第十九次全国代表大会的工作报告</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="flex">
      <div><img class="star" src="../assets/star.png"></div>
      <div class="word">
        <div>习近平：切实学懂弄通做实党的十九大精神 努力在新时代开启新征程续写新篇章</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="flex">
      <div><img class="star" src="../assets/star.png"></div>
      <div class="word">
        <div>决胜全面建成小康社会夺取新时代中国特色社会主义伟大胜利 ——在中国共产党第十九次全国代表大会上的报告</div>
        <div class="line"></div>
      </div>
    </div>
    -->
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
        studyInfo: {},
        getData: false
      }
    },
    methods: {
      goItem: function (id) {
        this.$router.push({
          name: 'h02',
          params: {
            id: id
          }

        })
      }
    },
    // post远端数据读取测试
    created () {
      let that = this
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'quiz/get-paper-study-info',
          paper_id: '1'
        }
      }).then((response) => {
        console.log(response.data)
        that.studyInfo = response.data.study_info
        that.getData = true
      })
    }
  }
</script>

<style scoped>
  .home {
    width: 100%;
    height: 100%;
    top: 0px;
    background-color: #fffef2;
  }

  .x-header {
    background: #f22222;
  }

  .pic1 {
    width: 100%;
  }
  .flex{
    display:flex;
    margin-top:10px;
    width:90%;
    margin-left:5%;
    align-items: center;
  }
  .mar-top{
    margin-top:20px;
  }
  .star {
    width: 20px;
    height: 20px;
  }
  .word{
    font-size:14px;
    text-align:justify;
    margin-left:10px;
    width: 100%;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #bbbbbb;
    margin-top: 5px;
  }
</style>

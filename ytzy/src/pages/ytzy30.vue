<template>
  <div>
    <x-header class="x-header" :left-options="{backText: ''}">
                        <a slot="overwrite-left">
        <cell class="cell">
          <i class="fa fa-angle-left"  style = "color: #ffffff;" @click="onItemClick(9)"></i>
        </cell>
      </a><p class="title">党务工作流程</p></x-header>
    <div v-if = "getData2"><swiper :list="imgSwiper" :index="demo07_index"  auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
    <div v-else><img class="img1" src="../assets/ytzy30-0.jpg"></div>
    <div class="border">
          <div class = "box" v-if = "getData" v-for="(news, key) in newsContent" :key = "key">
                 <router-link :to="'/ytzy09/' + news.id">
          <div class="flex-zhibu">
        <div class="word"><img class="mini-pic" src="../assets/ytzy30-1.png">&nbsp;{{news.title}}</div>
      </div>
      <div class="line"></div>
      </router-link>
      </div>
      </div>
 
    </div>
</template>
<script>
  import { XHeader, Cell, Swiper } from 'vux'
  export default {
    components: {
      XHeader,
      Cell,
      Swiper
    },
    data () {
      return {
        getData2: false,
        demo07_index: 0,
        imgSwiper: [],
        newsContent: [],
        newscat: ['新闻', '要闻', '院内公告', '十九大报告', '十九大报告解读', '党章党规', '系列讲话', '支部生活']
      }
    },
    created () {
      let that = this
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'summary-article/get-article-list',
          sid: '12345qwe',
          cat1: 10
        }
      }).then((response) => {
        console.log(response.data)
        that.newsContent = response.data.article_list
        console.log(that.newsContent)
        that.getData = true
      })
    },
    methods: {
      onItemClick (index) {
        console.log('on item click:', index)
        if (index === 9) {
          this.$router.push('/ytzy17')
        }
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
    margin-top: 1px;
    border-left: 1px solid #BBBBBB;
    border-right: 1px solid #BBBBBB;
    border-bottom: 1px solid #BBBBBB;
  }
  .flex-zhibu{
    display: flex;
    justify-content: left;
  }
  .word{
   text-align: left;
    font-size: 20px;
    color:#000000 ;
    margin-left: 15px;
    margin-top: 10px;
    margin-bottom: 10px
  }
  .word-contant{
   text-align: left;
    font-size: 18px;
    color:#000000 ;
    margin-left: 10px;
  }
  .tubiao1{
    width: 20px;
    height: 20px;
  }
  .line{
    border-bottom: solid 1px #eeeeee;
    width: 100%;
  }
  .img3{
    margin-top: 15px;
    width: 98%;
    margin-left: 1%;
    height: 614px;
  }
  .mini-pic{
    width: 15px;
    height: 15px;
  }
</style>

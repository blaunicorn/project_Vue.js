<template>
  <div>
    <x-header class="x-header" :left-options="{backText: ''}">
            <a slot="overwrite-left">
        <cell class="cell">
          <i class="fa fa-angle-left"  style = "color: #ffffff;" @click="onItemClick(9)"></i>
        </cell>
      </a><p class="title">首页</p>
      <a slot="right">
        <cell class="cell">
          <i class="fa fa-search" @click="search">
          </i>
        </cell>
      </a>
    </x-header>
    <div v-if = "getData1"><swiper :list="imgSwiper" :index="demo07_index" @on-index-change="demo07_onIndexChange" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
    <div v-else> <img class="pic" src="../assets/index1.jpg">
    </div> 
    <div class="flex-first">
      <router-link to="/ytzy08.4/1">
      <div>        
          <img class="pic1" src="../assets/yw.png">
          <div>要闻</div>        
      </div>
      </router-link>
      <div>
        <router-link to="/ytzy08.4/2">
          <img class="pic1" src="../assets/yngg.png">
          <div>院内公告</div>
        </router-link>
      </div>
      <div>
        <router-link to="/ytzy08.4/3">
          <img class="pic1" src="../assets/cgzs.png">
          <div>成果展示</div>
        </router-link>
      </div>
      <div>
        <router-link to="/">
          <img class="pic1" src="../assets/xx.png">
          <div>消息</div>
        </router-link>
      </div>
    </div>
    <div class="border"></div>
    <div class="flex1">
      <div class="flex2">
        <div class="dot"></div>
        <div class="news">要闻</div>
      </div>
      <router-link to="/ytzy08"><a href="#" class="more">更多</a></router-link>
    </div>
    <!-- 要闻调用循环 -->
    <div v-if = "getData" v-for = "(news, key) in newsContent">
       <router-link :to="'/ytzy09/' + news.id">
       <div class="circle" >       
        <div><img class="cir-pic" :src=" newsurl[key]"></div>
        <div class="flex3">
          <div class="zxx_text_overflow" >{{news.title}}</div>
          <div class="cir-date">{{news.create_at.substr(0, 10)}}</div>
        </div>
       </div>
       </router-link>
       <div class="cir-line"></div>
    </div>
    <!--循环
    <div>
      <div class="circle">
        <div><img class="cir-pic" src="../assets/dj3.jpg"></div>
        <div class="flex3">
          <div class="cir-word">关于十九大报告，你必须知道的“关键词”</div>
          <div class="cir-date">2017-11-22</div>
        </div>
      </div>
      <div class="cir-line"></div>
      <div class="circle">
        <div><img class="cir-pic" src="../assets/dj3.jpg"></div>
        <div class="flex3">
          <div class="cir-word">习近平：“老虎”要露头就打，“苍蝇”乱飞也要打</div>
          <div class="cir-date">2017-11-22</div>
        </div>
      </div>
    </div>-->
  </div>
</template>
<script scoped>
  import { XHeader, Cell, Swiper } from 'vux'
  export default {
    components: {
      XHeader,
      Cell,
      Swiper
    },
    data () {
      return {
        newsContent: {},
        newsurl: [],
        getData: false,
        getData1: false,
        demo07_index: 0,
        imgSwiper: []
      }
    },
    // post远端数据读取测试
    created () {
      let that = this
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'summary-article/get-index-article-list',
          sid: '12345qwe'
        }
      }).then((response) => {
        console.log(response.data)
        that.newsContent = response.data.index_article_list
        let i
        for (i = 0; i < that.newsContent.length; i++) {
          that.newsurl[i] = that.GLOBAL.URL + that.newsContent[i].articlePictures[0].url
        }
        that.getData = true
      })
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'carousel/get-carousels-by-category',
          sid: '12345qwe',
          category: '1'
        }
      }).then((response) => {
        console.log(response.data)
        that.imgSwiper = response.data.carousels
        let i
        for (i = 0; i < that.imgSwiper.length; i++) {
          that.imgSwiper[i].img = that.GLOBAL.URL + that.imgSwiper[i].img
        }
        that.getData1 = true
      })
    },
    methods: {
      search () {
        console.log('search')
        this.$router.push('/search')
      },
      demo07_onIndexChange (index) {
        this.demo07_index = index
        console.log(this.demo07_index)
      },
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
          this.$router.push('/ytzy02.1')
        }
      }
    }
  }
</script>
<style scoped>
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
    color: #ffffff;
  }
  .pic{
    width: 100%;
    display: block;
  }
  .flex-first {
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-top: 10px;
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
  }
  .pic1 {
    height: 45px;
    width: 45px;
  }
  .border {
    border: 4px solid #d6d6d6;
    margin-top: 10px;
  }
  .flex1{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10px;
    line-height: 30px;
    color: #101010;
    align-items: center;
    border-bottom: 1px solid #EBEBEB;
  }
  .flex2{
    display: flex;
    align-items: center;
  }
  .dot{
    width: 6px;
    height: 30px;
    background-color: #E51C23;
    margin-right:10px;
  }
  .news{
    font-size: 16px
  }
  .more{
    font-size: 12px;
    border: solid 1px #BBBBBB;
    border-radius: 10px;
    width: 37px;
    height: 23px;
    background: #F0F0F0;
    text-align: center;
    line-height: 23px
  }
  a {
    text-decoration: none;
    color: #101010;
  }
  .flex3{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .circle{
    display: flex;
    margin-top: 10px;
    margin-left: 5%;
    margin-right: 5%
  }
  .cir-pic{
    width: 140px;
    height: 86px;
    margin-right: 20px;
  }
  .zxx_text_overflow{
    font-size: 14px;
    text-align: justify;
    margin-top: 5px;
    margin-left: 10px;
    color: #000000;
    width:90%;
    height: 65px;
    text-overflow:ellipsis;
    -webkit-line-clamp: 3;
    display: -webkit-box;
	  -webkit-box-orient: vertical; 
    -o-text-overflow:ellipsis;
    overflow:hidden; 
    }
  .cir-word1{
    font-size: 14px;
    text-align: justify;
    margin-top: 5px;
    margin-left: 20px;
    color: #000000;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
	  -webkit-box-orient: vertical;  
    -webkit-box-direction: normal;  
    display: -moz-box;
    -moz-box-line-clamp: 3; 
	  -moz-box-orient: vertical;  
    -moz-box-direction: normal; 
  }
  .cir-date{
    margin-left: 20px;
    font-size:10px;
    color: #828282;
    margin-top: 15px
  }
  .cir-line{
    border: 2px solid #d6d6d6;
    margin-top: 5px;
    margin-bottom: 10px;
  }
</style>

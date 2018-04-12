<template>
  <div>
    <x-header class="x-header" :left-options="{backText: ''}">
            <a slot="overwrite-left">
        <cell class="cell">
          <i class="fa fa-angle-left"  style = "color: #ffffff;" @click="onItemClick(9)"></i>
        </cell>
      </a><p class="title">学习园地</p>
      <a slot="right">
        <cell class="cell">
          <i class="fa fa-search" @click="search">
          </i>
        </cell>
      </a>
    </x-header>
    <div v-if = "getData2"><swiper :list="imgSwiper" :index="demo07_index"  auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
    <div v-else><img class="pic" src="../assets/ytzy11-1.jpg"></div>
    <div class="flex-first" >
      <div>
        <router-link to="/ytzy15">
        <img class="pic1" src="../assets/ytzy11-2.png">
        <div>十九大专题</div>
        </router-link>
      </div>
      <div>
        <router-link to="/ytzy13">
          <img class="pic1" src="../assets/ytzy11-3.png">
          <div>党章党规</div>
        </router-link>
      </div>
      <div>
        <router-link to="/ytzy12">
          <img class="pic1" src="../assets/ytzy11-4.png">
          <div>系列讲话</div>
        </router-link>
      </div>
      <div>
        <router-link to="/ytzy14">
          <img class="pic1" src="../assets/ytzy11-5.png">
        <div>视频学习</div>
        </router-link>
      </div>
      <div>
        <router-link to="/ytzy16">
          <img class="pic1" src="../assets/ytzy11-6.png">
        <div>党内图书</div>
        </router-link>
      </div>
    </div>
    <div class="border"></div>
    <div v-if = "getData && getData1">
      <router-link :to="'/ytzy09/' + newsContent[0].id">
      <div class="cust">         
        <div class="heading" v-text = "newsContent[0].title">十九大报告</div>
        <div class="content" v-text = "newsContent[0].description">习近平：决胜全面建成小康社会 夺取新时代中国特色社会主义伟大胜利——在中国共产党第十九次全国代表大会上的报告</div>
      </div>
      </router-link>
      <div class="border"></div>
      <router-link :to="'/ytzy09/' + newsContent1[0].id">
      <div class="circle">
        <div><img class="cir-pic" :src="newsurl1[0]" src="../assets/ytzy11-7.jpg"></div>
        <div class="flex1">
          <div class="cir-word" v-text = "'中国共产党——' + newsContent1[0].title">中国共产党党章-第一章</div>
          <div class="cir-date" v-text = "newsContent1[0].create_at.substr(0, 10)">2018-03-02</div>
        </div>
      </div>
      </router-link>
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
        newsContent: {},
        newsurl: [],
        getData: false,
        newsContent1: {},
        newsurl1: [],
        getData1: false,
        getData2: false,
        demo07_index: 0,
        imgSwiper: []
      }
    },
    // post远端数据读取测试
    created () {
      let that = this
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'summary-article/get-article-list',
          sid: '12345qwe',
          cat1: '3'
        }
      }).then((response) => {
        console.log(response.data)
        that.newsContent = response.data.article_list
        that.getData = true
      })
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'summary-article/get-article-list',
          sid: '12345qwe',
          cat1: '5'
        }
      }).then((response1) => {
        console.log(response1.data)
        that.newsContent1 = response1.data.article_list
        let i
        for (i = 0; i < that.newsContent.length; i++) {
          that.newsurl[i] = that.GLOBAL.URL + that.newsContent[i].articlePictures[0].url
        }
        that.getData1 = true
      })
      // 轮播图
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'carousel/get-carousels-by-category',
          sid: '12345qwe',
          category: '2'
        }
      }).then((response) => {
        console.log(response.data)
        that.imgSwiper = response.data.carousels
        let i
        for (i = 0; i < that.imgSwiper.length; i++) {
          that.imgSwiper[i].img = that.GLOBAL.URL + that.imgSwiper[i].img
        }
        that.getData2 = true
      })
    },
    methods: {
      search () {
        this.$router.push('/search.1')
      },
      onItemClick (index) {
        if (index === 9) {
          this.$router.push('/ytzy11')
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
    color: #ccc;
  }
  .pic{
    width: 100%;
    display: block;
  }
  .flex-first {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-top: 20px;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
    margin-bottom: 10px;
  }
  .pic1 {
    height: 45px;
    width: 45px;
  }
  .border {
    border: 4px solid #d6d6d6;
  }
  a {
    text-decoration: none;
    color: #101010;
  }
  .cust{
    padding-top: 10px;
    box-sizing: border-box;
    border-left: 1px solid #BBBBBB;
    border-right: 1px solid #BBBBBB;
    border-bottom: 1px solid #BBBBBB;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10px;
  }
  .heading{
    font-size: 18px;
    color: #E51C23;
    font-weight: bold;
  }
  .content{
    font-size: 16px;
  }
  .circle{
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5%;
    padding-right: 5%;
    box-sizing: border-box;
    border-left: 1px solid #BBBBBB;
    border-right: 1px solid #BBBBBB;
    border-bottom: 1px solid #BBBBBB;
  }
  .cir-pic{
    width: 77px;
    height: 106px;
  }
  .flex1{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    margin-left:20px;
  }
  .cir-word{
    font-size: 16px;
    text-align: justify;
    margin-top: 5px;
    color: #000000;
    font-weight: bold;
    display: -webkit-box;  
	  -webkit-box-orient: vertical;  
  	display: -moz-box;  
	  -moz-box-orient: vertical;  
  	overflow: hidden;
    -webkit-line-clamp: 3;
  	text-overflow: ellipsis; 
  }
  .cir-date{
    font-size:10px;
    color: #828282;
    margin-bottom:10px;
  }
</style>

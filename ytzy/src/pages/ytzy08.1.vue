<template>
  <div>
    <x-header class="x-header" :left-options="{backText: ''}">
      <p class="title">要闻</p>
      <a slot="right">
        <cell class="cell">
          <i class="fa fa-search">
          </i>
        </cell>
      </a>
    </x-header>
    <div>
      <tab style="background-color: #F5F5F5" :line-width=2 active-color='red'badge-label="12px;" v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @on-item-click="onItemClick" :key="index">{{item}}</tab-item>
      </tab>
      <div v-if = "getData" v-for="(news, key) in newsContent">
       <router-link :to="'/ytzy09/' + news.id">
       <div class="circle" >       
        <div><img class="cir-pic" :src=" newsurl[key]"></div>
        <div class="flex3">
          <div class="cir-word" >{{news.title}}</div>
          <div class="cir-date">{{news.create_at.substr(0, 10)}}</div>
        </div>
       </div>
       </router-link>
       <div class="cir-line"></div>
    </div>
      <!--<swiper v-model="index" height="" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center" > 
            循环 
            <div class="circle">
              <div><img class="cir-pic" src="../assets/dj3.jpg"></div>
              <div class="flex">
                <div class="cir-word">关于十九大报告，你必须知道的“关键词”</div>
                <div class="cir-date">2017-11-22</div>
              </div>
            </div>
            <div class="cir-line"></div>
            <div class="circle">
              <div><img class="cir-pic" src="../assets/dj3.jpg"></div>
              <div class="flex">
                <div class="cir-word">习近平：“老虎”要露头就打，“苍蝇”乱飞也要打</div>
                <div class="cir-date">2017-11-22</div>
              </div>
            </div>
            <div class="cir-line"></div>
          </div>
        </swiper-item>
      </swiper> -->
    </div>
  </div>
</template>
<script>
  import { XHeader, Cell, Tab, TabItem, Swiper, SwiperItem } from 'vux'
  const list = () => ['首页', '要闻', '院内公告 ', '成果显示']
  export default {
    components: {
      XHeader,
      Cell,
      Tab,
      TabItem,
      Swiper,
      SwiperItem
    },
    data () {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false,
        newsContent: {},
        newsurl: [],
        getData: false,
        msg: 'Hello World!',
        results: [],
        value: '搜索',
        list2: list(),
        demo2: '要闻',
        index: 1,
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        }
      }
    },
    // post远端数据读取测试
    created () {
      let that = this
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'summary-article/get-article-list',
          sid: '12345qwe',
          cat1: '1'
        }
      }).then((response) => {
        console.log(response.data)
        that.newsContent = response.data.article_list
        console.log(that.newsContent)
        let i
        for (i = 0; i < that.newsContent.length; i++) {
          // console.log(that.newsContent[i].articlePictures[0].url)
          that.newsurl[i] = that.GLOBAL.URL + that.newsContent[i].articlePictures[0].url
        }
        that.getData = true
        // console.log(that.getData)
        // console.log(that.newsurl)
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
  .tab-swiper {
    background-color: #ffffff;
    height: 800px;
    font-size: 12px;
  }
  .circle{
    display: flex;
    margin-top: 10px;
    margin-left: 5%;
    margin-right: 5%
  }
  .flex{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
  }
  .cir-pic{
    width: 110px;
    height: 70px;
  }
  .cir-word{
    font-size: 14px;
    text-align: justify;
    margin-top: 5px;
    margin-left: 20px;
    height: 62px;
    color: #000000;
    display: -webkit-box;  
	  -webkit-box-orient: vertical;  
  	display: -moz-box;  
	  -moz-box-orient: vertical;  
  	overflow: hidden;
    -webkit-line-clamp: 3;
  	text-overflow: ellipsis; 
  }
  .cir-date{
    margin-left: 20px;
    font-size:10px;
    color: #828282;
    margin-top: 10px
  }
  .cir-line{
    border: 2px solid #d6d6d6;
    margin-top: 5px;
    margin-bottom: 10px;
  }
</style>

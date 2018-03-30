<template>
  <div>
    <x-header class="x-header" :left-options="{backText: ''}">
            <a slot="overwrite-left">
        <cell class="cell">
          <i class="fa fa-angle-left"  style = "color: #ffffff;" @click="onItemClick(9)"></i>
        </cell>
      </a><p class="title">党内图书</p>
      <a slot="right">
        <cell class="cell">
          <i class="fa fa-search">
          </i>
        </cell>
      </a>
    </x-header>
    <div>
      <tab style="background-color: #F5F5F5" :line-width=2 active-color='red'badge-label="12px;" v-model="index">
        <tab-item class="vux-center" style = "font-size: 3vw;" :selected="demo2 === item" v-for="(item, index) in list2" @on-item-click="onItemClick" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="700px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">
            <!--循环-->
            <div class="circle">
              <div><img class="cir-pic" src="../assets/ytzy16-1.jpg"></div>
              <div class="flex1">
                <div class="cir-word">党内政治文化建设</div>
                <div class="cir-date">2018-03-02</div>
              </div>
            </div>
            <div class="border"></div>
            <div class="circle">
              <div><img class="cir-pic" src="../assets/ytzy16-2.jpg"></div>
              <div class="flex1">
                <div class="cir-word">党章学习100问</div>
                <div class="cir-date">2018-03-02</div>
              </div>
            </div>
            <div class="border"></div>
            <div class="circle">
              <div><img class="cir-pic" src="../assets/ytzy16-3.jpg"></div>
              <div class="flex1">
                <div class="cir-word">中国共产党常用党内法规学习汇编</div>
                <div class="cir-date">2018-03-02</div>
              </div>
            </div>
            <div class="border"></div>
          </div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>
<script>
  import { XHeader, Cell, Tab, TabItem, Swiper, SwiperItem } from 'vux'
  const list = () => ['十九大专题', '党章党规', '系列讲话 ', '视频学习', '党内图书']
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
        msg: 'Hello World!',
        results: [],
        value: '搜索',
        list2: list(),
        demo2: '党内图书',
        index: 4,
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
          cat1: '5'
        }
      }).then((response) => {
        console.log(response.data)
        that.newsContent = response.data.article_list
        that.getData = true
      })
    },
    methods: {
      onItemClick (index) {
        console.log('on item click:', index)
        if (index === 0) {
          this.$router.push('/ytzy15')
        }
        if (index === 1) {
          this.$router.push('/ytzy13')
        }
        if (index === 2) {
          this.$router.push('/ytzy12')
        }
        if (index === 3) {
          this.$router.push('/ytzy14')
        }
        if (index === 4) {
          this.$router.push('/ytzy16')
        }
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
  .tab-swiper {
    background-color: #ffffff;
    height: 800px;
    font-size: 12px;
  }
  .circle{
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5%;
    padding-right: 5%;
    box-sizing: border-box;
  }
  .cir-pic{
    width: 100px;
  }
  .flex1{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    margin-left: 20px;
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
  .border {
    border: 4px solid #F2F2F2;
  }
</style>

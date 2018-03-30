<template>
  <div>
    <x-header class="x-header" :left-options="{backText: ''}">
                        <a slot="overwrite-left">
        <cell class="cell">
          <i class="fa fa-angle-left"  style = "color: #ffffff;" @click="onItemClick(9)"></i>
        </cell>
      </a><p class="title">党员发展</p></x-header>
    <div v-if = "getData2">
    <swiper :list="imgSwiper" :index="demo07_index"  auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
    <div v-else><img class="img1" src="../assets/ytzy31-1.jpg"></div>
          <div class="flex">
        <div class="word">入党流程说明</div>
      </div>
      <div class="border">
        <details class="menu" open>
          <summary class = "background0">入党申请人</summary>
          <div class ="background1">
         <span class = "backnumber">01</span>
         <div class = "x-line"></div>
         </div>
         <div class ="background2">
         <span class = "backword">提交入党申请书</span>
         </div>   
        </details>
        <div class="line4"></div>        
      </div>
      <div>
        <details class="menu" close>
          <summary>姓名B</summary>
        </details>
      </div>
      <div class="line4"></div>
      <div>
        <details class="menu" close>
          <summary>姓名C</summary>
        </details>

      <div class="line4"></div>
    </div>
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
        getData2: false,
        demo07_index: 0,
        imgSwiper: [],
        getData: false,
        demo1: {}
      }
    },
    created () {
      let that = this
      // 轮播图
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'carousel/get-carousels-by-category',
          sid: '12345qwe',
          category: '9'
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
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'summary-article/get-article-list',
          sid: '12345qwe',
          cat1: '9'
        }
      }).then((response) => {
        console.log(response.data)
        that.newsContent = response.data.article_list
        console.log(that.newsContent)
        that.getData = true
        // console.log(that.getData)
        // console.log(that.newsurl)
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
    margin-top: 10px;
    border-left: 1px solid #BBBBBB;
    border-right: 1px solid #BBBBBB;
    border-bottom: 1px solid #BBBBBB;
  }
    .menu{
      padding-top: 10px;
    }
    summary{
      color:#101010;
      outline:none;
      margin-left: 0%;
      font-size: 16px;
      background: #fcfce8;      
    }
    summary::-webkit-details-marker {
      float: right;
      margin-right: 5%;
      color: #2992f2;
      margin-top: 8px;
    }
    .background0{
      background: #fcfce8;
      height: 30px;
      text-indent:20px;
    }
  .background1 {
    margin:0 auto;
    margin-top: 20px;
    width: 30px;
    height: 30px;
    background-color: #fcfce8;
    border-radius: 15px;
    border-width:1px;
    border-style: solid;
    border-color:#f7dc7c;
    align-items: center;
    justify-content: center;
  }
  .backnumber {
    height:30px;
    line-height:30px;
    display:block;
    color:#000;
    text-align:center;
    font-size: 14px;
  }
  .x-line{
    width: 2px; height: 20px; background-color: #f7dc7c;
    margin:0 auto;
  }
  .background2 {
    margin:0 auto;
    margin-top: 20px;
    width: 200px;
    height: 40px;
    background-color: #fcfce8;
    border-radius: 4px;
    border-width:1px;
    border-style: solid;
    border-color:#f7dc7c;
    align-items: center;
    justify-content: center;
  }
  .backword {
    height:40px;
    line-height:40px;
    display:block;
    color:#000;
    text-align:center;
    font-size: 14px;
  }
  .line4{
    border-bottom: 1px solid #e0e0e0;
    margin-top: 10px
  }
  .flex{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .word{
   text-align: center;
    font-size: 24px;
    color:#F22222 ;
    margin-left: 5px;
  }
  .tubiao1{
    width: 20px;
    height: 20px;
  }
</style>

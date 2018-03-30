<template>
  <div>
    <x-header class="x-header" :left-options="{backText: ''}">
            <a slot="overwrite-left">
        <cell class="cell">
          <i class="fa fa-angle-left"  style = "color: #ffffff;" @click="onItemClick(9)"></i>
        </cell>
      </a><p class="title">十九大专题</p>
      <a slot="right">
        <cell class="cell">
          <i class="fa fa-search">
          </i>
        </cell>
      </a>
    </x-header>
    <div>
      <tab style="background-color: #F5F5F5" :line-width=2 active-color='red'badge-label="12px;" v-model="index">
        <tab-item class="vux-center" style = "font-size: 3vw;" :selected="demo2 === item" v-for="(item, index) in list2" @on-item-click="onItemClick" :key="index">{{item}}</tab-item>      </tab>
      <div>
        <div v-if = "getData2"><swiper :list="imgSwiper" :index="demo07_index"  auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
        </div>
        <div v-else><img class="pic" src="../assets/dj1.jpg"></div>
            <div v-if = "getData" v-for="(news, key) in newsContent">
            <div class="cust">
              <div class="heading" v-text = "news.title">十九大报告</div>
              <router-link :to="'/ytzy09/' + news.id">
              <div class="content" v-text = "news.description">习近平：决胜全面建成小康社会 夺取新时代中国特色社会主义伟大胜利——在中国共产党第十九次全国代表大会上的报告</div>
              </router-link>
            </div>
            <div class="border"></div>
            </div>
            <div class="cust">
              <div class="heading"  >解读报告</div>
            </div>
    <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore"
      use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
      lock-x ref="scrollerBottom" height="-88">
     <div style="padding: 10px 0">
            <div v-if = "getData1" v-for="(news, key) in newsContent1">
                     <router-link :to="'/ytzy09/' + news.id">
            <div class="caption" v-text = "news.title">凝聚新力量 铸就新辉煌<br/>--从十九大报告看建设社会主义文化强国</div>
                     </router-link>
            </div>
     </div>
    </scroller>
      </div>
      <!-- 原始样式
      <swiper v-model="index" height="700px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">
            循环
            <div><img class="pic" src="../assets/dj1.jpg"></div>
            <div class="cust">
              <div class="heading">十九大报告</div>
              <div class="content">习近平：决胜全面建成小康社会 夺取新时代中国特色社会主义伟大胜利——在中国共产党第十九次全国代表大会上的报告</div>
            </div>
            <div class="border"></div>
            <div class="cust">
              <div class="heading">解读报告</div>
            </div>
            <div class="caption">凝聚新力量 铸就新辉煌<br/>--从十九大报告看建设社会主义文化强国</div>
            <div class="caption">十九大报告透露的八大改革着力点</div>
          </div>
        </swiper-item>
      </swiper> -->
    </div>
  </div>
</template>
<script>
  import { XHeader, Cell, Tab, TabItem, Swiper, SwiperItem, Scroller } from 'vux'
  const list = () => ['十九大专题', '党章党规', '系列讲话 ', '视频学习', '党内图书']
  const pulldownDefaultConfig = {
    content: '下拉刷新',
    height: 40,
    autoRefresh: false,
    downContent: '下拉刷新',
    upContent: '释放后刷新',
    loadingContent: '正在刷新...',
    clsPrefix: 'xs-plugin-pulldown-'
  }
  const pullupDefaultConfig = {
    content: '上拉加载更多',
    pullUpHeight: 60,
    height: 40,
    autoRefresh: false,
    downContent: '释放后加载',
    upContent: '',
    loadingContent: '加载中...',
    clsPrefix: 'xs-plugin-pullup-'
  }
  export default {
    components: {
      XHeader,
      Cell,
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      Scroller
    },
    mounted () {
      this.$nextTick(() => {
        this.$refs.scrollerBottom.reset({top: 0})
      })
    },
    data () {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false,
        newsContent1: {},
        newsurl1: [],
        getData1: false,
        msg: 'Hello World!',
        results: [],
        value: '搜索',
        list2: list(),
        demo2: '十九大专题',
        index: 0,
        getData2: false,
        demo07_index: 0,
        imgSwiper: [],
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        },
        newlist: [],
        oldlist: [],
        newsurl: [],
        newsContent: [],
        getData: false,
        top: '',
        bottom: '',
        pullupDefaultConfig: pullupDefaultConfig,
        pulldownDefaultConfig: pulldownDefaultConfig
      }
    },
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
          cat1: '4'
        }
      }).then((response1) => {
        console.log(response1.data)
        that.newsContent1 = response1.data.article_list
        that.top = that.newsContent1[0].order_num
        that.bottom = that.newsContent1[(that.newsContent1.length - 1)].order_num
        console.log('top为：' + that.top + '. bottom为：' + that.bottom)
        that.getData1 = true
      })
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'carousel/get-carousels-by-category',
          sid: '12345qwe',
          category: '3'
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
      },
      fetchData (cb) {
        this.$axios.get(this.GLOBAL.URL, {
          params: {
            r: 'summary-article/get-more-article-list',
            sid: '12345qwe',
            cat1: '4',
            top: this.top,
            bottom: this.bottom
          }
        }).then(response => {
          console.log(response.data)
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset()
          })
          cb(response.data)
          console.log('top为：' + this.top + '. bottom为：' + this.bottom)
        })
      },
      refresh () {
        this.fetchData(data => {
          this.newlist = data.new_list
          console.log('上啦' + this.list)
          if (typeof this.newlist === 'undefined' || this.newlist.length === 0) {
            // this.newsContent = this.newsContent
            // this.$refs.scrollerBottom.enablePullup()
            this.$refs.scrollerBottom.donePulldown()
            console.log(this.newsContent1)
          } else {
            this.newsContent1 = this.newlist.concat(this.newsContent1)
            this.$refs.scrollerBottom.enablePullup()
            this.$refs.scrollerBottom.donePulldown()
            this.top = this.newsContent1[0].order_num
            this.bottom = this.newsContent1[(this.newsContent1.length - 1)].order_num
            console.log(this.newsContent1)
          }
        })
      },
      loadMore () {
        this.fetchData(data => {
          this.oldlist = data.old_list
          if (this.oldlist.length === 0 || this.oldlist.length === 'undefined') {
            this.$refs.scrollerBottom.disablePullup()
          } else {
            console.log(this.oldlist)
            this.newsContent1 = this.newsContent1.concat(this.oldlist)
            this.$refs.scrollerBottom.donePullup()
            this.top = this.newsContent1[0].order_num
            this.bottom = this.newsContent1[(this.newsContent1.length - 1)].order_num
            console.log(this.newsContent1)
          }
        })
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
  .pic{
    width: 100%;
    display: block;
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
    color: #000000;
  }
  .caption{
    padding-top: 10px;
    box-sizing: border-box;
    border-left: 1px solid #BBBBBB;
    border-right: 1px solid #BBBBBB;
    border-bottom: 1px solid #BBBBBB;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10px;
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
  .border {
    border: 4px solid #F2F2F2;
  }
  .xs-plugin-pulldown-container {
  line-height: 40px;
  }
  .xs-plugin-pullup-container {
  line-height: 40px;
  }
</style>

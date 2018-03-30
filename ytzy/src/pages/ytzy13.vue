<template>
  <div>
     <x-header class="x-header" :left-options="{backText: ''}">
            <a slot="overwrite-left">
        <cell class="cell">
          <i class="fa fa-angle-left"  style = "color: #ffffff;" @click="onItemClick(9)"></i>
        </cell>
      </a><p class="title">党章党规</p>
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
    <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore"
      use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
      lock-x ref="scrollerBottom" height="-88">
     <div style="padding: 10px 0">
      <div v-for="(news, key) in newsContent">
              <router-link :to="'/ytzy09/' + news.id">
        <div class="cust" v-text = "news.title">新党章-总纲</div>
              </router-link>
      </div>
     </div>
    </scroller>
      <!--<swiper v-model="index" height="700px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center" >
            循环
            <div class="cust">新党章-总纲</div>
            <div class="cust">中国共产党党组工作条例（试行）</div>
            <div class="cust">党章-第一章</div>
            <div class="cust">新党章-第二章</div>
          </div>
        </swiper-item>
      </swiper>-->
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
        msg: 'Hello World!',
        results: [],
        value: '搜索',
        list2: list(),
        demo2: '党章党规',
        index: 1,
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
        that.top = that.newsContent[0].order_num
        that.bottom = that.newsContent[(that.newsContent.length - 1)].order_num
        console.log('top为：' + that.top + '. bottom为：' + that.bottom)
        that.getData = true
        // console.log(that.getData)
        // console.log(that.newsurl)
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
            cat1: '5',
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
            this.$refs.scrollerBottom.enablePullup()
            this.$refs.scrollerBottom.donePulldown()
            console.log(this.newsContent)
          } else {
            this.newsContent = this.newlist.concat(this.newsContent)
            this.$refs.scrollerBottom.enablePullup()
            this.$refs.scrollerBottom.donePulldown()
            this.top = this.newsContent[0].order_num
            this.bottom = this.newsContent[(this.newsContent.length - 1)].order_num
            console.log(this.newsContent)
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
            this.newsContent = this.newsContent.concat(this.oldlist)
            this.$refs.scrollerBottom.donePullup()
            this.top = this.newsContent[0].order_num
            this.bottom = this.newsContent[(this.newsContent.length - 1)].order_num
            console.log(this.newsContent)
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
  .cust{
    padding-top: 20px;
    border-bottom: 1px solid #F2F2F2;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 20px;
    font-size: 16px;
    color: #000000;
  }
  .xs-plugin-pulldown-container {
  line-height: 40px;
  }
  .xs-plugin-pullup-container {
  line-height: 40px;
  }
</style>

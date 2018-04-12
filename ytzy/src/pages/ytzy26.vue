<template>
  <div>
    <x-header class="x-header" :left-options="{backText: ''}">
            <a slot="overwrite-left">
        <cell class="cell">
          <i class="fa fa-angle-left"  style = "color: #ffffff;" @click="onItemClick(9)"></i>
        </cell>
      </a><p class="title">支部生活</p>
      <a slot="right">
        <cell class="cell">
          <i class="fa fa-search" @click="search">
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
        <div class="circle"  >
          <div class="meet" v-text = "news.title">支部党员第一次大会</div>
          <div class="flex-zhibushenghuo" >
            <div class = "img-wrap" v-for = "n in 3">
              <img class="cir-pic" :src="newsContent[key].articlePictures[n-1].url"></div>
          </div>
          <div class="date" v-text = "news.create_at.substr(0, 10)">2018-02-02</div>
      </div>
        </router-link>
      </div>
     </div>
    </scroller>
      <!--<swiper v-model="index" height="700px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">
            循环
            <div class="circle">
              <div class="meet">党小组第一次会议</div>
              <div class="flex">
                <img class="cir-pic" src="../assets/ytyy6-1.jpeg">
                <img class="cir-pic" src="../assets/ytyy6-1.jpeg">
                <img class="cir-pic" src="../assets/ytyy6-1.jpeg">
                <img class="cir-pic" src="../assets/ytyy6-1.jpeg">
              </div>
              <div class="date">2018-02-02</div>
            </div>
            <div class="circle">
              <div class="meet">党小组第二次会议</div>
              <div class="flex">
                <img class="cir-pic" src="../assets/ytyy6-1.jpeg">
                <img class="cir-pic" src="../assets/ytyy6-1.jpeg">
                <img class="cir-pic" src="../assets/ytyy6-1.jpeg">
                <img class="cir-pic" src="../assets/ytyy6-1.jpeg">
              </div>
              <div class="date">2018-02-02</div>
            </div>
          </div>
        </swiper-item>
      </swiper>-->
    </div>
  </div>
</template>
<script scoped>
  import { XHeader, Cell, Tab, TabItem, Swiper, SwiperItem, Scroller } from 'vux'
  const list = () => ['支部党员大会', '支部委员会', '党小组会 ', '党课']
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
        demo2: '党小组会',
        index: 2,
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
          cat1: '7',
          cat2: '3'
        }
      }).then((response) => {
        console.log(response.data)
        that.newsContent = response.data.article_list
        let i
        let k
        for (i = 0; i < that.newsContent.length; i++) {
          console.log(that.newsContent.length)
          console.log(that.newsContent[i].articlePictures[0].url)
          for (k = 0; k < that.newsContent[i].articlePictures.length; k++) {
            that.newsContent[i].articlePictures[k].url = that.GLOBAL.URL + that.newsContent[i].articlePictures[k].url
            console.log(that.newsContent[i].articlePictures[k].url)
          }
        }
        that.top = that.newsContent[0].order_num
        that.bottom = that.newsContent[(that.newsContent.length - 1)].order_num
        console.log('top为：' + that.top + '. bottom为：' + that.bottom)
        that.getData = true
      })
    },
    methods: {
      search () {
        this.$router.push('/search.2')
      },
      onItemClick (index) {
        console.log('on item click:', index)
        if (index === 0) {
          this.$router.push('/ytzy24')
        }
        if (index === 1) {
          this.$router.push('/ytzy25')
        }
        if (index === 2) {
          this.$router.push('/ytzy26')
        }
        if (index === 3) {
          this.$router.push('/ytzy27')
        }
        if (index === 9) {
          this.$router.push('/ytzy23')
        }
      },
      fetchData (cb) {
        this.$axios.get(this.GLOBAL.URL, {
          params: {
            r: 'summary-article/get-more-article-list',
            sid: '12345qwe',
            cat1: '7',
            cat2: '3',
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
          console.log(this.list)
          if (typeof this.newlist === 'undefined' || this.newlist.length === 0) {
            // this.newsContent = this.newsContent
            // this.$refs.scrollerBottom.enablePullup()
            this.$refs.scrollerBottom.donePulldown()
            console.log(this.newsContent)
          } else {
            this.newsContent = this.newlist.concat(this.newsContent)
            let i
            for (i = 0; i < this.newsContent.length; i++) {
            // console.log(this.list[i].articlePictures[0].url)
              this.newsurl[i] = this.GLOBAL.URL + this.newsContent[i].articlePictures[0].url
            }
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
            let kk = this.newsContent.length
            this.newsContent = this.newsContent.concat(this.oldlist)
            let i
            for (i = kk; i < this.newsContent.length; i++) {
            // console.log(this.oldlist[i].articlePictures[0].url)
              this.newsurl[i] = this.GLOBAL.URL + this.newsContent[i].articlePictures[0].url
            }
          // if (this.list.length > 20) {
          //   this.$refs.scrollerBottom.disablePullup()
          // }
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
  }
  .circle{
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
    border-bottom: 4px solid #d6d6d6;
  }
  .meet{
    font-size: 16px;
    margin-top: 10px;
    color: #000000;
  }
  .flex-zhibushenghuo{
    display: flex;
    justify-content: space-between;
  }
  .img-wrap{
   width:100%;
  }
  .cir-pic{
    width: 96%;
    height: 96px;
  }
  .date{
    font-size:12px;
    color: #BBBBBB;
    margin-bottom: 5px;
  }
  .xs-plugin-pulldown-container {
  line-height: 40px;
  }
  .xs-plugin-pullup-container {
  line-height: 40px;
  }
</style>
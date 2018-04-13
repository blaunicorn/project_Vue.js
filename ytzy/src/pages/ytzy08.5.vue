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
          <i class="fa fa-search" @click="search">
          </i>
        </cell>
      </a>
    </x-header>
    <div>
      <tab style="background-color: #F5F5F5" :scroll-threshold="5" :line-width=2 active-color='red' badge-label="12px;" v-model="index">
        <tab-item class="vux-center" style = "font-size: 3vw;" :selected="demo2 === item" v-for="(item, index) in list2"  @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="1200px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">
            
            <!-- 党章党规列表{{item}} -->
             <div v-if = "index === 1">
              <div style="padding: 10px 0">    
                <div v-for="(news, key) in newsContent1">
                  <router-link :to="'/ytzy09/' + news.id">
                    <div class="cust" v-text = "news.title">新党章-总纲</div>
                  </router-link>
                </div>  
              </div>
              </div>
            <!-- 系列讲话 -->
            <div v-if = "index === 2">
              <div v-if = "getData3">
                  <swiper :list="imgSwiper" :index="demo07_index"  
                  auto style="width:100%;margin:0 auto;" height="180px" 
              
                  dots-class="custom-bottom" dots-position="center">
                  </swiper>
              </div>
              <div style="padding: 10px 0">
                <div  class = "box" v-if = "getData2">
                  <div   v-for="(news, key) in newsContent2">
                    <router-link :to="'/ytzy09/' + news.id">
                      <div class="cust" v-text = "news.title">习近平：在几年周恩来同志诞辰120周年座谈会上的讲话</div>
                      <div class="border"></div>
                    </router-link>
                  </div>       
                </div>
              </div>
            </div>


            <!--循环-->
           <div v-if = "index === 4">
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
            <div class="circle">
              <div><img class="cir-pic" src="../assets/ytzy16-3.jpg"></div>
              <div class="flex1">
                <div class="cir-word">中国共产党44</div>
                <div class="cir-date">2018-03-02</div>
              </div>
            </div>
            <div class="border"></div>
          </div>
          </div>
        </swiper-item>
      </swiper>
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
        index: 1,
        demo07_index: '',
        getData1: false,
        newsContent1: [],
        newsContent2: [],
        getData2: false,
        getData3: false,
        top: '',
        bottom: '',
        pullupDefaultConfig: pullupDefaultConfig,
        pulldownDefaultConfig: pulldownDefaultConfig
      }
    },
    // 远端数据读取
    created () {
      let that = this
      // 党章党规
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'summary-article/get-article-list',
          sid: '12345qwe',
          cat1: '1'
        }
      }).then((response) => {
        console.log(response.data)
        that.newsContent1 = response.data.article_list
        that.getData1 = true
      })

      // 系列讲话
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'summary-article/get-article-list',
          sid: '12345qwe',
          cat1: '6'
        }
      }).then((response) => {
        console.log(response.data)
        that.newsContent2 = response.data.article_list
        that.top = that.newsContent2[0].order_num
        that.bottom = that.newsContent2[(that.newsContent2.length - 1)].order_num
        console.log('top为：' + that.top + '. bottom为：' + that.bottom)
        that.getData2 = true
        // console.log(that.getData)
        // console.log(that.newsurl)
      })

      // 系列讲话轮播图
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
        that.getData3 = true
      })
    },
    mounted () {
      this.$nextTick(() => {
        this.$refs.scrollerBottom.reset({top: 0})
      })
    },
    methods: {
      search () {
        this.$router.push('/search.1')
      },
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
            cat1: '1',
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
          if (this.newlist.length === 0 || this.newlist.length === 'undefined') {
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
  .cust{
    padding-top: 20px;
    border-bottom: 1px solid #F2F2F2;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 20px;
    font-size: 16px;
    color: #000000;
  }
</style>

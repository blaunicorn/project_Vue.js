<template>
  <div>
      <x-header class="x-header" :left-options="{backText: ''}">
            <a slot="overwrite-left">
        <cell class="cell">
          <i class="fa fa-angle-left"  style = "color: #ffffff;" @click="onItemClick(9)"></i>
        </cell>
      </a><p class="title"  v-text = "list2[index]">要闻</p>
      <a slot="right">
        <cell class="cell">
          <i class="fa fa-search">
          </i>
        </cell>
      </a>
    </x-header>
    <div>
      <tab style="background-color: #F5F5F5" :line-width=2 active-color='red' badge-label="12px;" v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
    <!-- <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore"
    use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
    lock-x ref="scrollerBottom" height="-68">
    <div style="padding: 10px 0">
      <div class = "box" v-if = "getData" v-for="(news, key) in newsContent" :key = "key">
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
    </div>
   </scroller> -->
             <!-- 刷新样式 -->
            <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore"
    use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
    :lock-x= "true"  :scrollbar-x="false" ref="scrollerBottom" height="-40"  >
        <!-- 轮播样式  -->
          <swiper v-model="index" :threshold="10" height="1200px"  ref="swipereee" :show-dots="false">
        <swiper-item v-for="(item, index1) in list2" :key="index1">          
           <div class="tab-swiper vux-center" v-if = "index1 = index">
             <div style="padding: 10px 0">
      <div class = "box" v-if = "getData" v-for="(news, key) in newsContent" :key = "key">
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

    
    </div> 
    </div>
    <!-- 读取院内公告 -->

     </swiper-item>
      </swiper>
   </scroller> 

        <!--  <div class="tab-swiper vux-center" > {{item}}---列表
            
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
          </div> -->

    </div>
  </div>
</template>
<script>
  import { XHeader, Cell, Tab, TabItem, Swiper, SwiperItem, Scroller } from 'vux'
  const list = () => ['首页', '要闻', '院内公告 ', '成果显示']
  const pulldownDefaultConfig = {
    content: '',
    height: 20,
    autoRefresh: false,
    downContent: '',
    upContent: '释放后刷新',
    loadingContent: '正在刷新...',
    clsPrefix: 'xs-plugin-pulldown-'
  }
  const pullupDefaultConfig = {
    content: '上拉加载更多',
    pullUpHeight: 60,
    height: -40,
    autoRefresh: false,
    downContent: '释放后加载',
    upContent: '上拉加载更多',
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
        list2: list(),
        demo2: '要闻',
        index: 0,
        newlist: [],
        oldlist: [],
        newsurl: [],
        newsContent: [],
        newsContent1: [],
        newsContent2: [],
        newsContent3: [],
        getData: false,
        top: '',
        bottom: '',
        pullupDefaultConfig: pullupDefaultConfig,
        pulldownDefaultConfig: pulldownDefaultConfig
      }
    },
    created () {
      console.log('原来的index是', this.index)
      this.index = parseInt(this.$route.params.tabIndex)
      console.log('传递进来的index是', this.index)
      let that = this
      that.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'summary-article/get-article-list',
          sid: '12345qwe',
          cat1: this.index
        }
      }).then((response) => {
        console.log(response.data)
        that.newsContent = response.data.article_list
        console.log('that.newsContent1', that.newsContent1)

        let i
        for (i = 0; i < that.newsContent.length; i++) {
          // console.log(that.newsContent[i].articlePictures[0].url)
          that.newsurl[i] = that.GLOBAL.URL + that.newsContent[i].articlePictures[0].url
          // console.log(that.newsurl[i])
        }
        that.top = that.newsContent[0].order_num
        that.bottom = that.newsContent[(that.newsContent.length - 1)].order_num
        console.log('top为：' + that.top + '. bottom为：' + that.bottom)
        // console.log(that.getData)
        // console.log(that.newsurl)
        that.getData = true
      })
    },
    watch: {
      index: function (newVal, oldVal) {
        if (newVal === 0) {
          console.log('index 变成：', this.index, '转回总院首页')
          this.$router.push('/ytzy02.1')
        }
        // 当切换到时
        if (newVal === 1) {
          console.log('index 变成：', this.index)
          let that = this
          that.$axios.get(this.GLOBAL.URL, {
            params: {
              r: 'summary-article/get-article-list',
              sid: '12345qwe',
              cat1: newVal
            }
          }).then((response) => {
            console.log(response.data)
            that.newsContent = response.data.article_list
            console.log('that.newsContent1', that.newsContent)

            let i
            for (i = 0; i < that.newsContent.length; i++) {
              // console.log(that.newsContent[i].articlePictures[0].url)
              that.newsurl[i] = that.GLOBAL.URL + that.newsContent[i].articlePictures[0].url
              // console.log(that.newsurl[i])
            }
            that.top = that.newsContent[0].order_num
            that.bottom = that.newsContent[(that.newsContent.length - 1)].order_num
            console.log('top为：' + that.top + '. bottom为：' + that.bottom)
            // console.log(that.getData)
            // console.log(that.newsurl)
            that.getData = true
          })
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset({
              top: 0
            })
          })
          console.log('this.newsContent1 变成：', this.newsContent)
        }
        if (newVal === 2) {
          console.log('index 变成：', this.index)
          let that = this
          that.$axios.get(this.GLOBAL.URL, {
            params: {
              r: 'summary-article/get-article-list',
              sid: '12345qwe',
              cat1: newVal
            }
          }).then((response) => {
            console.log(response.data)
            that.newsContent = response.data.article_list
            console.log('that.newsContent', that.newsContent)

            let i
            for (i = 0; i < that.newsContent.length; i++) {
              // console.log(that.newsContent[i].articlePictures[0].url)
              that.newsurl[i] = that.GLOBAL.URL + that.newsContent[i].articlePictures[0].url
              // console.log(that.newsurl[i])
            }
            that.top = that.newsContent[0].order_num
            that.bottom = that.newsContent[(that.newsContent.length - 1)].order_num
            console.log('top为：' + that.top + '. bottom为：' + that.bottom)
            // console.log(that.getData)
            // console.log(that.newsurl)
            that.getData = true
          })
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset({
              top: 0
            })
          })
          console.log('this.newsContent2 变成：', this.newsContent)
        }
        if (newVal === 3) {
          console.log('index 变成：', this.index)
          let that = this
          that.$axios.get(this.GLOBAL.URL, {
            params: {
              r: 'summary-article/get-article-list',
              sid: '12345qwe',
              cat1: newVal
            }
          }).then((response) => {
            console.log(response.data)
            that.newsContent = response.data.article_list
            console.log('that.newsContent1', that.newsContent)

            let i
            for (i = 0; i < that.newsContent.length; i++) {
              // console.log(that.newsContent[i].articlePictures[0].url)
              that.newsurl[i] = that.GLOBAL.URL + that.newsContent[i].articlePictures[0].url
              // console.log(that.newsurl[i])
            }
            that.top = that.newsContent[0].order_num
            that.bottom = that.newsContent[(that.newsContent.length - 1)].order_num
            console.log('top为：' + that.top + '. bottom为：' + that.bottom)
            // console.log(that.getData)
            // console.log(that.newsurl)
            that.getData = true
          })
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset({
              top: 0
            })
          })
          console.log('this.newsContent3 变成：', this.newsContent)
        }
      }
    },
    methods: {
      onItemClick (index) {
        console.log('on item click:', index)
        // if (index === 0) {
        //   this.$router.push('/ytzy02')
        // }
        // if (index === 1) {
        //   this.$router.push('/ytzy08')
        // }
        // if (index === 2) {
        //   this.$router.push('/ytzy06')
        // }
        // if (index === 3) {
        //   this.$router.push('/ytzy10')
        // }
        // if (index === 9) {
        //   this.$router.push('/ytzy02')
        // }
      },
      fetchData (cb) {
        this.$axios.get(this.GLOBAL.URL, {
          params: {
            r: 'summary-article/get-more-article-list',
            sid: '12345qwe',
            cat1: this.index,
            top: this.top,
            bottom: this.bottom
          }
        }).then(response => {
          console.log(response.data)
          console.log('异步加载数据成功')
          // this.$nextTick(() => {
          //   console.log('this.$refs.scrollerBottom.reset下步调用')
          //   this.$refs.scrollerBottom.reset()
          //   console.log('this.$refs.scrollerBottom.rese生效了')
          // })
          this.$nextTick(function () {
            console.log('this.$refs.scrollerBottom.reset下步调用')
            this.$refs.scrollerBottom.reset()
            console.log('this.$refs.scrollerBottom.rese生效了')
          })
          cb(response.data)
          console.log('top为：' + this.top + '. bottom为：' + this.bottom)
        })
      },
      refresh () {
        this.fetchData(data => {
          this.newlist = data.new_list
          console.log(this.list)
          if (typeof this.newlist === 'undefined' || this.newlist.length === 0) {            // this.newsContent = this.newsContent
            // this.$refs.scrollerBottom.enablePullup()
            this.$refs.scrollerBottom.donePulldown()
            console.log(this.newsContent)
          } else {
            this.newsContent = this.newlist.concat(this.newsContent)
            console.log('2')
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
            let sheight = parseInt(this.$refs.swipereee.xheight) + 1200  // 累加swiper的高度
            this.$refs.swipereee.xheight = sheight + 'px'  // 重新设定swiper的高度
            console.log(this.$refs.swipereee.xheight)
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
  .xs-plugin-pulldown-container {
  line-height: 40px;
  }
  .xs-plugin-pullup-container {
  line-height: 40px;
  }
</style>

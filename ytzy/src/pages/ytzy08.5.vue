<template>
  <div>
      <x-header class="x-header" :left-options="{backText: ''}">
            <a slot="overwrite-left">
        <cell class="cell">
          <i class="fa fa-angle-left"  style = "color: #ffffff;" @click="onItemClick(9)"></i>
        </cell>
      </a><p class="title"  v-text = "list2[activeIndex]">要闻</p>
      <a slot="right">
        <cell class="cell">
          <i class="fa fa-search">
          </i>
        </cell>
      </a>
    </x-header>
    <div class="myCollectionContent">
        <ul class="collection-title" ref="collectionTitle">
            <li v-for="(item, index) in list2" v-on:click="tab(index)" :class="{active: activeIndex === index}">
                <span v-text="item"></span>
            </li>
        </ul>
        <div class="collection-content clearfix type-center" ref="collContent">
            <div class="clearfix scrollDiv" style="width:400%" ref="scrollDiv">
                <div style="" class="none pruchase-item relative" ref = "Nothing">nononno</div>
                <div style="" class="yaowen pruchase-item  relative" ref="Yaowen">
                    <ul>
                        <div class="top-tip">
                            <span class="refresh-hook" ref="refreshYaowenHook">下拉刷新</span>
                        </div>
                        <li class="clearfix relative border-bottom"  v-for="Yaowen in YaowenData">
                            <div class="left-img">
                                <img :src="Yaowen.articlePictures[0].url" alt="" width="100%" height="100%">
                            </div>
                            <div class="right-content relative">{{Yaowen.title}}
                                <p class="font-16 font-333 title" style="margin:0.1665rem 0 0 0;" v-text="Yaowen.title"></p>
                                <div v-show="Yaowen.type == 3" style="margin-top:0.2132rem">
                                    <span v-text="Yaowen.authorName" class="font-14 font-666"></span>
                                    <span v-text="Yaowen.authorDesc"></span>
                                </div>
                                <p class="font-13 font-B0" v-show="Yaowen.type == 1" v-text="Yaowen.authorName" style="margin-top:0.3198rem"></p>
                                <p v-show="Yaowen.type == 3" class="font-13 font-B0" v-cloak style="margin-top:0.2132rem">时长：{{Yaowen.listenLength}}/{{Yaowen.num}}节</p>
                                <p v-show="Yaowen.type == 2" class="font-13 font-B0" v-cloak style="margin-top:0.2132rem">更新至{{Yaowen.nunberSpeak}}</p>
                            </div>
                        </li>
                        <div class="bottom-tip" v-show="hasYaowenMore">
                            <span class="loading-hook" ref="loadingYaowenHook">查看更多</span>
                        </div>
                    </ul>
                    <div class="no-datas" v-show="!YaowenData.length">
                        <img src="../assets/blank.png" alt="" style="width: 1.7867rem;">
                    </div>
                </div>
                <div style="" class="video pruchase-item  relative" ref="Yuangonggao">院内公告页
                    <ul>
                        <div class="top-tip">
                            <span class="refresh-hook" ref="refreshYaowenHook">下拉刷新</span>
                        </div>
                        <li class="clearfix relative border-bottom" @click.prevent.stop="YaowenDetail(Yaowen)" v-for="Yaowen in YaowenData">
                            <div class="left-img">
                                <img :src="Yaowen.picUrl" alt="" width="100%" height="100%">
                            </div>
                            <div class="right-content relative">
                                <p class="font-16 font-333 title" style="margin:0.1665rem 0 0 0;" v-text="Yaowen.name"></p>
                                <div v-show="Yaowen.type == 3" style="margin-top:0.2132rem">
                                    <span v-text="Yaowen.authorName" class="font-14 font-666"></span>
                                    <span v-text="Yaowen.authorDesc"></span>
                                </div>
                                <div v-show="Yaowen.type == 2" style="margin-top:0.2132rem">
                                    <span v-text="Yaowen.partTitle" class="font-14 font-666"></span>
                                </div>
                                <p class="font-13 font-B0" v-show="Yaowen.type == 1" v-text="Yaowen.authorName" style="margin-top:0.3198rem"></p>
                                <p v-show="Yaowen.type == 3" class="font-13 font-B0" v-cloak style="margin-top:0.2132rem">时长：{{Yaowen.listenLength}}/{{Yaowen.num}}节</p>
                                <p v-show="Yaowen.type == 2" class="font-13 font-B0" v-cloak style="margin-top:0.2132rem">更新至{{Yaowen.nunberSpeak}}</p>
                            </div>
                        </li>
                        <div class="bottom-tip" v-show="hasYaowenMore">
                            <span class="loading-hook" ref="loadingYaowenHook">查看更多</span>
                        </div>
                    </ul>
                    <div class="no-datas" v-show="!YaowenData.length">
                        <img src="img/blank.png" alt="" style="width: 1.7867rem;">
                    </div>
                </div>
                <div style="" class="video pruchase-item  relative" ref="Chengguo">成果展示页
                    <ul>
                        <div class="top-tip">
                            <span class="refresh-hook" ref="refreshYaowenHook">下拉刷新</span>
                        </div>
                        <li class="clearfix relative border-bottom" @click.prevent.stop="YaowenDetail(Yaowen)" v-for="Yaowen in YaowenData">
                            <div class="left-img">
                                <img :src="Yaowen.picUrl" alt="" width="100%" height="100%">
                            </div>
                            <div class="right-content relative">
                                <p class="font-16 font-333 title" style="margin:0.1665rem 0 0 0;" v-text="Yaowen.name"></p>
                                <div v-show="Yaowen.type == 3" style="margin-top:0.2132rem">
                                    <span v-text="Yaowen.authorName" class="font-14 font-666"></span>
                                    <span v-text="Yaowen.authorDesc"></span>
                                </div>
                                <div v-show="Yaowen.type == 2" style="margin-top:0.2132rem">
                                    <span v-text="Yaowen.partTitle" class="font-14 font-666"></span>
                                </div>
                                <p class="font-13 font-B0" v-show="Yaowen.type == 1" v-text="Yaowen.authorName" style="margin-top:0.3198rem"></p>
                                <p v-show="Yaowen.type == 3" class="font-13 font-B0" v-cloak style="margin-top:0.2132rem">时长：{{Yaowen.listenLength}}/{{Yaowen.num}}节</p>
                                <p v-show="Yaowen.type == 2" class="font-13 font-B0" v-cloak style="margin-top:0.2132rem">更新至{{Yaowen.nunberSpeak}}</p>
                            </div>
                        </li>
                        <div class="bottom-tip" v-show="hasYaowenMore">
                            <span class="loading-hook" ref="loadingYaowenHook">查看更多</span>
                        </div>
                    </ul>
                    <div class="no-datas" v-show="!YaowenData.length">
                        <img src="img/blank.png" alt="" style="width: 1.7867rem;">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
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
  import BScroll from 'better-scroll'
  
  const list = () => ['首页', '要闻', '院内公告 ', '成果显示']

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
        options: {
          click: true,
          pullDownRefresh: {
            threshold: 50,            // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
            stop: 20                  // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
          },
          pullUpLoad: {
            threshold: -20  // 在上拉到超过底部 20px 时，触发 pullingUp 事件
          }
        },
        activeIndex: 0,
        params: {},
        YaowenData: [],
        YuangonggaoTop: '',
        YuangonggaoBottom: '',
        YuangonggaoData: [],
        ChengguoData: [],
        hasYaowenMore: false,
        hasYuangonggaoMore: false,
        hasChengguoMore: false,
        curItem: {},
        pageYaowen: 1,
        pageYuangonggao: 1,
        pageChengguo: 1,
        pageIndex: 0,
        showMenus: false,
        results: [],
        list2: list(),
        demo2: '要闻',
        index: 0,
        locky: true,
        newlist: [],
        oldlist: [],
        newsurl: [],
        newsContent: [],
        newsContent1: [],
        newsContent2: [],
        newsContent3: [],
        getData: false
      }
    },
    mounted () {
      this.activeIndex = parseInt(this.$route.params.tabIndex)
      this.getYaowenDatas(this.pageYaowen)
      // this.getYuangonggaoDatas(this.pageYuangonggao)
      // this.getChengguoDatas(this.pageChengguo)
      var itemH = window.screen.height - this.$refs.collectionTitle.offsetHeight - 60 + 'px'
      this.$refs.Yaowen.style.height = itemH
      // this.$refs.Yuangonggao.style.height = itemH
      // this.$refs.Chengguo.style.height = itemH

      this.sliderScroll = new BScroll(this.$refs.collContent, {
        scrollX: true,
        probeType: 3,
        snap: {
          loop: false,
          speed: 600
        },
        momentum: false
      }
      )
      // console.log(8888)
      this.sliderScroll.goToPage(this.activeIndex, 0, 100)
      var that = this
      this.sliderScroll.on('scrollEnd', function (p) {
        let pageIndex = that.sliderScroll.getCurrentPage().pageX
        // 改变导航栏的状态
        console.log(pageIndex)
        that.activeIndex = pageIndex
        if (that.activeIndex === 0) {
          that.$router.push('/ytzy02.2')
        }
      })
    },
    created () {
      // console.log('原来的index是', this.index)
      // this.index = parseInt(this.$route.params.tabIndex)
      // console.log('传递进来的index是', this.index)
      // let that = this
      // that.$axios.get(this.GLOBAL.URL, {
      //   params: {
      //     r: 'summary-article/get-article-list',
      //     sid: '12345qwe',
      //     cat1: this.index
      //   }
      // }).then((response) => {
      //   console.log(response.data)
      //   that.newsContent = response.data.article_list
      //   console.log('that.newsContent1', that.newsContent1)

      //   let i
      //   for (i = 0; i < that.newsContent.length; i++) {
      //     // console.log(that.newsContent[i].articlePictures[0].url)
      //     that.newsurl[i] = that.GLOBAL.URL + that.newsContent[i].articlePictures[0].url
      //     // console.log(that.newsurl[i])
      //   }
      //   that.top = that.newsContent[0].order_num
      //   that.bottom = that.newsContent[(that.newsContent.length - 1)].order_num
      //   console.log('top为：' + that.top + '. bottom为：' + that.bottom)
      //   // console.log(that.getData)
      //   // console.log(that.newsurl)
      //   that.getData = true
      // })
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
        if (index === 9) {
          this.$router.push('/ytzy02.2')
        }
      },
      tab: function (index) {
        this.activeIndex = index
        console.log('scroll tab点击为：', this.activeIndex)
        if (this.activeIndex === 0) {
          this.$router.push('/ytzy02.2')
        }
        // 根据点击的index，使当前的i内容index展示在可视区
        this.sliderScroll.goToPage(this.activeIndex, 0, 400)
      },
      getYaowenDatas (pageYaowen) {
        this.$axios.get(this.GLOBAL.URL, {
          params: {
            r: 'summary-article/get-article-list',
            sid: '12345qwe',
            cat1: 1
          }
        }).then((res) => {
          console.log('专栏', res)
          if (res.status === 200) {
            this.YaowenData = res.data.article_list
            console.log('专栏data', this.YaowenData)
            let i
            for (i = 0; i < this.YaowenData.length; i++) {
              this.YaowenData[i].articlePictures[0].url = this.GLOBAL.URL + this.YaowenData[i].articlePictures[0].url
            }
            this.YaowenTop = this.YaowenData[0].order_num
            this.YaowenBottom = this.YaowenData[(res.data.article_list.length - 1)].order_num
            this.hasYaowenMore = res.data.article_list.length <= 9 ? 'false' : 'true'
            console.log('hasYaowenMore值为：', this.hasYaowenMore, '.顶部序号为', this.YaowenTop, '。底部序号为', this.YaowenBottom)
            setTimeout(() => {
              this.pullYaowen()
            }, 20)
          } else if (res.status === 400 && res.msg === '你的账号已经在其他设备登录,请你重新登录!') {
            window.location.href = 'login://'
          } else if (res.status === 400 && res.msg === '没有数据') {
            this.hasYaowenMore = false
          }
        })
      },
      getYaowenRefresh (pageYaowen) {
      // if (!this.hasYaowenMore) { return }
        this.$axios.get(this.GLOBAL.URL, {
          params: {
            r: 'summary-article/get-more-article-list',
            sid: '12345qwe',
            cat1: 1,
            top: this.YaowenTop,
            bottom: this.YaowenBottom
          }
        }).then(res => {
          console.log('专栏刷新的数据', res)
          if (res.status === 200) {
            this.YaowenData = this.YaowenData.concat(res.data.old_list)
            this.YaowenTop = this.YaowenData[0].order_num
            this.YaowenBottom = this.YaowenData[(this.YaowenData.length - 1)].order_num
            this.hasYaowenMore = res.data.old_list.length < 10 ? 'false' : 'true'
            console.log('hasYaowenMore的值为', this.hasYaowenMore)
          //   setTimeout(() => {
          //       this.YaowenScroll.finishPullUp()
          //       this.YaowenScroll.refresh()
          //   }, 20);
          } else if (res.status === 400 && res.msg === '你的账号已经在其他设备登录,请你重新登录!') {
            window.location.href = 'login://'
          } else if (res.status === 400 && res.msg === '没有数据' && res.data.old_list.length === 0) {
            this.hasYaowenMore = false
          }
        })
      },
      pullYaowen () {
        console.log('pullYaowen开始')
        this.Yaowenscroll = new BScroll(this.$refs.Yaowen, this.options)
        console.log('pullYaowen开始2', this.Yaowenscroll)
        this.Yaowenscroll.on('pullingDown', () => {
          this.pageYaowen = 1
          this.$axios.get(this.GLOBAL.URL, {
            params: {
              r: 'summary-article/get-more-article-list',
              sid: '12345qwe',
              cat1: 1,
              top: this.YaowenTop,
              bottom: this.YaowenBottom
            }
          }).then(res => {
            console.log('专栏列表上拉加载的数据', res)
            if (res.status === 200) {
              this.YaowenData = res.data.new_list.concat(this.YaowenData)
              this.YaowenTop = this.YaowenData[0].order_num
            //   if (res.data.new_list.length < 10) {
            //       this.hasYaowenMore = false
            //   } else {
            //       this.hasYaowenMore = true
            //   }   // 把上拉和下滑调用的数据连到一起
              setTimeout(() => {
                this.Yaowenscroll.finishPullDown()
                this.Yaowenscroll.refresh()
              }, 20)
            } else if (res.status === 400 && res.msg === '你的账号已经在其他设备登录,请你重新登录!') {
              window.location.href = 'login://'
            } else if (res.status === 400 && res.msg === '没有数据') {
              this.hasYaowenMore = false
            }
          })
        })
        console.log('pullYaowen开始3')
        this.Yaowenscroll.on('pullingUp', () => {
          this.$refs.loadingYaowenHook.innerText = this.hasYaowenMore === true ? '加载中...' : '没有更多了'
          setTimeout(() => {
            if (this.hasYaowenMore === true) {
              this.pageYaowen++
              this.$refs.loadingYaowenHook.innerText = '加载更多'
              this.getYaowenRefresh(this.pageYaowen)
            }
            setTimeout(() => {
              this.Yaowenscroll.finishPullUp()
              this.Yaowenscroll.refresh()
            }, 20)
          }, 1000)
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
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
    .collection-title {
        display: flex;
        padding: 0.3731rem 4%;
        width: 92%;
        list-style-type: none;  // 去掉ul格式中的点
    }

    .collection-title>li {
        /* flex: 1; */
        text-align: center;
        padding: 6px;
        border-radius: 2px;
        font-size: 14px;
        color: #666666;
    }

    .collection-title>li:nth-child(1) {
        flex: 1;
    }

    .collection-title>li:nth-child(2) {
        flex: 1;
    }


    .collection-title>li:nth-child(3) {
        flex: 1;
    }
    .collection-title>li:nth-child(4) {
        flex: 1;
    }

    .collection-title>li.active  {
        color: #ff0000;
        padding-bottom: 8px;
        border-bottom: 1.5px solid #ff0000
    }

    .collection-title>li:first-child.active span {
        color: #fff;
    }

    .collection-title>li:first-child.active {
        background: #01A3E2
    }
    .collection-content {
        overflow: hidden;
        position: relative
    }

    .collection-content .scrollDiv .pruchase-item {
        width: 25%;
        height: 100%;
        float: left;
        overflow: hidden;   //设置隐藏看有什么效果
    }
    .collection-content .pruchase-item ul>li {
        padding: 0.2665rem 0;
        height: 60px;     // 没有引入rem 所以加了一条限定高度的样式 目的是使scroller: ul scrollHeight:920 超过 wrapper:div.article.pruchase-item.relative warpperHeight: 837
    }

    .collection-content .pruchase-item ul>li .left-img {
        width: 24.64%;
        margin-right: 3.48%;
        display: inline-block;
        float: left;
        height: 2.9333rem;
        background: #eeeeee;
        border-radius: 4px;
    }

    .collection-content .pruchase-item ul>li .left-img img {
        border-radius: 4px;
    }

    .collection-content .pruchase-item ul>li .right-content {
        width: 71.87%;
        display: inline-block;
        float: left;
    }

    .collection-content .pruchase-item ul>li .right-content p.title {
        word-break: break-Yaowen;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-align: left; // 左对齐
    }

    .collection-content .scrollDiv .pruchase-item .line-bottom {
        width: 89.18%;
        height: 1px;
        background: #e5e5e5;
        bottom: 0;
        margin-left: 6.82%
    }

    .scrollDiv,
    .macShare {
        transition: Yaowen 0.5s;
        -moz-transition: Yaowen 0.5s;
        -webkit-transition: Yaowen 0.5s;
        -o-transition: Yaowen 0.5s;
        transition-duration:500ms
    }

    .macShare {
        z-index: 1001
    }

    .macdiv {
        height: 100%;
        background-color: black;
        opacity: 0.4;
        display: none;
        position: fixed;
        width: 100%;
        z-index: 1000;
    }

    #myCollection {
        height: 100%
    }

    .top-tip {
        position: absolute;
        top: -40px;  // 显示下拉刷新的字样 位置
        left: 0;
        z-index: 1;
        width: 100%;
        height: 40px;
        line-height: 14px;
        text-align: center;
        color: #555;
    }

    .bottom-tip {
        width: 100%;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: #777;
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
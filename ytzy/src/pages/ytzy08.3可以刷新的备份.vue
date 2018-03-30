<template>
 <div>
 <x-header :left-options="{'showBack': false}">上拉加载，下拉刷新</x-header>
 <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore"
    use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
    lock-x ref="scrollerBottom" height="-48">
  <div style="padding: 10px 0">
  <div class="box" v-for="(news, key) in list" :key = "key">
    <router-link :to="'/ytzy09/' + news.id">
         <div class="circle" >       
         <div><img class="cir-pic" :src="newsurl[key]"></div> 
        <div class="flex3">
          <div class="cir-word" >{{news.title}}</div>
          <div class="cir-date">{{news.create_at.substr(0, 10)}}</div>
        </div>
       </div>
   </router-link>
  </div>
  </div> 
  <!-- <div style="padding: 10px 0" v-if = "getData">
        <div class="box"   v-for="(news, key) in list" :key = "key">
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
    </div> -->
 </scroller>
 </div>
</template>
<script>
  import {Scroller, XHeader} from 'vux'
  import axios from 'axios'
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
    upContent: '上拉加载更多',
    loadingContent: '加载中...',
    clsPrefix: 'xs-plugin-pullup-'
  }
  export default {
    components: {
      XHeader,
      Scroller
    },
    mounted () {
      this.$nextTick(() => {
        this.$refs.scrollerBottom.reset({top: 0})
      })
      this.loadMore()
    },
    data () {
      return {
        list: [],
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
    // created () {
    //   let that = this
    //   this.$axios.get(this.GLOBAL.URL, {
    //     params: {
    //       r: 'summary-article/get-article-list',
    //       sid: '12345qwe',
    //       cat1: '1'
    //     }
    //   }).then((response) => {
    //     console.log(response.data)
    //     that.newsContent = response.data.article_list
    //     console.log(that.newsContent)
    //     let i
    //     for (i = 0; i < that.newsContent.length; i++) {
    //       // console.log(that.newsContent[i].articlePictures[0].url)
    //       // that.newsurl[i] = that.GLOBAL.URL + that.newsContent[i].articlePictures[0].url
    //       // console.log(that.newsurl[i])
    //     }
    //     that.getData = true
    //     // console.log(that.getData)
    //     // console.log(that.newsurl)
    //   })
    // },
    methods: {
      fetchData (cb) {
        axios.get(this.GLOBAL.URL, {
          params: {
            r: 'summary-article/get-more-article-list',
            sid: '12345qwe',
            cat1: '1',
            top: '201803130012',
            bottom: '201803090014'
          }
        }).then(response => {
          console.log(response.data)
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset()
          })
          cb(response.data)
        })
      },
      refresh () {
        this.fetchData(data => {
          this.list = data.new_list
          console.log(this.list)
          let i
          for (i = 0; i < this.list.length; i++) {
            // console.log(this.list[i].articlePictures[0].url)
            this.newsurl[i] = this.GLOBAL.URL + this.list[i].articlePictures[0].url
          }
          // this.list = this.list.concat(this.newsContent)
          this.$refs.scrollerBottom.enablePullup()
          this.$refs.scrollerBottom.donePulldown()
          console.log(this.list)
        })
      },
      loadMore () {
        this.fetchData(data => {
          this.oldlist = data.old_list
          console.log(this.oldlist)
          let i
          for (i = 0; i < this.oldlist.length; i++) {
            // console.log(this.oldlist[i].articlePictures[0].url)
            this.newsurl[i] = this.GLOBAL.URL + this.oldlist[i].articlePictures[0].url
          }
          // if (this.list.length > 20) {
          //   this.$refs.scrollerBottom.disablePullup()
          // }
          this.list = this.list.concat(this.oldlist)
          console.log(this.list)
          this.$refs.scrollerBottom.donePullup()
        })
      }
    }
  }
</script>
<style lang="less">
 .box {
 padding: 5px 10px 5px 10px;
 &:first-child {
  padding: 0 10px 5px 10px;
 }
 &:last-child {
  padding: 5px 10px 0 10px;
 }
 }
 .list {
 background-color: #fff;
 border-radius: 4px;
 border: 1px solid #f0f0f0;
 padding: 30px;
 }
 .xs-plugin-pulldown-container {
 line-height: 40px;
 }
 .xs-plugin-pullup-container {
 line-height: 40px;
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
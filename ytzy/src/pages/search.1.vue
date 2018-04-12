<template>
    <div id="search">


        <x-header>
            <span>搜索</span>
        </x-header>

        <div class="search-keyword">
            <input class="search-input" type="text" v-model.trim="searchval" @keyup.enter="search()" placeholder="请输入搜索内容">
            <span class="history" @click="search()">搜索</span>
        </div>

        <div class="news-wrapper"  v-if = "searchval" >
          
            <ul class="news-content" v-if = "searchlist">
                <!--:to = "'/newsDetails' + item.seo_url"-->
                <router-link class="news-item" v-for="(item,index) in searchlist"
                             :to="{
                                path:'/ytzy09/' + item.id
                             }"
                             tag='li'
                             :key='index'
                             
                >
                    <p class="news-title" v-html="replace(item.title)"></p>
                    <!--此处不能使用 过滤器，因其不能转换html标签-->
                    <!--<p class="news-title">{{item.title | replace}}</p>-->
                    <!-- <ul class="img-wrapper" v-if="item.articlePictures">
                        <li v-for="(item,index) in item.articlePictures">
                             <img :src="'https://zongyuan.yimi100.top:8080/' + item['url']"  alt="">                         
                        </li>
                    </ul> -->
                    <div class="cir-date">{{item.create_at.substr(0, 10)}}</div>
                    <!-- <div class="bottom-title">
                        <span class="avIcon" v-show="item.label==='广告'">广告</span>
                        <span class="writer">{{item.media_name}}</span> &nbsp;&nbsp;
                        <span class="comment_count">评论&nbsp;{{item.comment_count}}</span>
                        <span class="datetime">{{item.datetime|date}}</span>
                    </div> -->
                </router-link>
            </ul>
            <!-- 路由外联 -->
            <router-view></router-view>

        </div>
    </div>

</template>
<script>
import { XHeader } from 'vux'

export default {
  // props:['newsItem'],
  components: {
    XHeader
  },
  data () {
    return {
      searchval: '',
      searchlist: []
    }
  },
  created () {
    if (localStorage.getItem('input1')) {
      this.searchval = localStorage.getItem('input1')
      let input = this.searchval
      let self = this
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'search/study-garden-search',
          sid: '12345qwe',
          search: input
        }
      }).then((response) => {
        console.log(response.data)
        self.searchlist = response.data.search_result_list
        console.log('读取结果是', self.searchlist)
        window.localStorage.setItem('input1', input)
      })
    }
  },
  mounted () {},
  methods: {
    replace (title) {
      var inp = this.searchval
      // gim 正则表达式：全文匹配，忽略大小写，多行匹配，replace 把匹配到的值替换为 下面的形式
      const reg = new RegExp('' + inp + '', 'gim')
      if (title) {
        return title.replace(reg, '<span class="red">' + inp + '</span>')
      } else {
        return title
      }
    },
    search () {
      console.log('搜索')
      let input = this.searchval
      let self = this
      // let url =
      //   'https://zongyuan.yimi100.top:8080/index.php?r=search/index-search&sid=12345qwe&search=' +
      //   input
      // this.$axios.get(
      //   url,
      //   function (data) {
      //     self.searchlist = data.data
      //     console.log('读取结果是', self.searchlist)
      //   },
      //   function (msg) {
      //     alert(msg)
      //   }
      // )
      // let that = this
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'search/study-garden-search',
          sid: '12345qwe',
          search: input
        }
      }).then((response) => {
        console.log(response.data)
        self.searchlist = response.data.search_result_list
        console.log('读取结果是', self.searchlist)
        window.localStorage.setItem('input1', input)
        // let i
        // for (i = 0; i < self.searchlist.length; i++) {
        //   self.newsurl[i] = self.GLOBAL.URL + self.searchlist[i].articlePictures[0].url
        // }
      })
      .catch((error) => {
        console.log(error)
      })
    },
    history () {
      console.log('history')
    }
  },
  filters: {
    // 不能监控 data 选项值
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
#search {
  .red {
    color: red;
  }
  width: 100%;
  background-color: #fff;
  z-index: 999;
  /*position: relative;*/
  position: absolute;
  top: 0;
  .vux-header {
    width: 100%;
    position: fixed;
    top: 0;
    background-color: red;
    z-index: 3;
    .vux-header-left .vux-header-back {
      color: #fff;
    }
    .vux-header-left .left-arrow:before {
      border: 1px solid #fff;
      border-width: 1px 0 0 1px;
    }
    .icon-share3 {
      font-size: 28px;
      position: absolute;
      right: 10px;
    }
  }
  .search-keyword {
    padding: 50px 17px 0 17px;
    .search-input {
      width: 60%;
      padding: 10px 20px;
      border: 1px solid #eee;
    }
    .history {
      color: cornflowerblue;
    }
  }
  .news-wrapper {
    .news-content {
      position: relative;
      z-index: 10;
      background-color: #fff;
      .news-item {
        .news-title {
          line-height: 0.8rem;
        }
        padding: 0.2rem 0.4rem;
        font-size: 0.8rem;
        color: #585151;
        border-bottom: 1px solid #eee;
        .img-wrapper {
          display: flex;
          margin-top: 0.3rem;
          justify-content: space-between;
          overflow: hidden;
          text-overflow: ellipsis;
         white-space: nowrap;          
          li {
            width: 2.13rem;
            height: 3rem;
            /*flex: 1;*/
            img {
              width: 100%;
            }
          }
        }
        .cir-date{
          margin-left: 70%;
          font-size:10px;
          color: #828282;
          margin-top: 15px;
       }
        .bottom-title {
          font-size: 10px;
          color: #b5b5b5;
          margin-top: 8px;
          .avIcon {
            color: #2a90d7;
            border: 1px solid rgba(42, 144, 215, 0.5);
            border-radius: 2px;
            font-size: 8px;
            padding: 0 2px;
          }
        }
      }
    }
  }
}
</style>



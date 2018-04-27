<template>
  <div v-if = "getData">
  <div class="container">
     <header>
       <div class="row">
         <div id="logo">
           <a href=""><img src="static/img/logo.png"></a>
         </div><!--/logo-->
         <div class="col nav">
           <a href="">Venerável Mestre Xuecheng</a>
           <a href="">Templo Longquan</a>
           <a href="">Intercâmbios Internacionais</a>
           <a href="">Galeria de Fotos</a>
           <a href="">Vídeos</a>
         </div>
       </div>
     </header>
  </div><!--/container-->

  <!--中间主体内容-->
  <div id="main"  class="container">
       <div class="bread"> 
        Venerável Mestre Xuecheng /   Video
       </div>
       <div class="title">
         <i class="red-icon"></i>
         Video
         <i class="green-icon"></i>
       </div>


      <div class="photo-list2 mt-5">
        <div class="row">
         <!-- 主视频  -->
         <div  class="col-12 mb-4" v-if="index===(arrayData.length-1)" v-for="(item, index) in arrayData" >
           <div  class="card card-video" v-on:click="playClick()" >
             <div class="video-title"  v-text="item.title">
               Preocupações das Regiões sobre Questões de Globalização
            </div>
            <a >
              <!-- <img class="card-img-top" height="400" src="static/img/p7-1.png" alt="Card image cap"> -->
              <video class="card-img-top"  
                id="myh5video" 
                height = "400"
                :src="item.filename" 
                controls = "true"
                :poster="GLOBAL.URL + item.img" 
                preload="auto" 
                webkit-playsinline="true"                                   
                playsinline="false"  
                x-webkit-airplay="allow" 
                x5-video-player-type="h5" 
                x5-video-player-fullscreen="true"                                 
                x5-video-orientation="portraint" 
                style="object-fit:fill">
                您的浏览器暂不支持播放该视频，请升级至最新版浏览器。
              </video>
            </a >
              <div class="card-body">
                <a  v-text= "item.description">
                Uma palavra de Chan
                </a>
              </div>
           <a  v-if= "clickh5video">
           <img src="static/img/play.png" class="play-video">
           </a>
           </div>
           </div><!--/col-4-->

        </div>

        <div class="row">
         <!-- 下面小视频数据 -->
         <div class="col-4 mb-4" v-if="index < (arrayData.length-1)" v-for="(item, index) in arrayData">
           <div class="card card-video"  @click="showDialog('isShowAbout', index)">
             <a >
              <img class="card-img-top" :src="GLOBAL.URL + item.img" alt="Card image cap">
             </a>
             <div class="card-body">
              <a v-text="item.title">
              Uma palavra de Chan
              </a>
             </div>
           <a>
            <img src="static/img/play.png" class="play-video" >
          </a>
          </div>
       <!--弹框视频播放-->
      <videoDialog :is-show="isShowAbout" @on-close="hideDialog('isShowAbout')">
  

           <video-player  class="vjs-custom-skin"
                ref="videoPlayer"
                :options="playerOptions"
                :playsinline="false"
                @play="onPlayerPlay($event)"
                @pause="onPlayerPause($event)"
                @ended="onPlayerEnded($event)"
                @loadeddata="onPlayerLoadeddata($event)"
                @waiting="onPlayerWaiting($event)"
                @playing="onPlayerPlaying($event)"
                @timeupdate="onPlayerTimeupdate($event)"
                @canplay="onPlayerCanplay($event)"
                @canplaythrough="onPlayerCanplaythrough($event)"
                @ready="playerReadied"
                @statechanged="playerStateChanged($event)"
                ebkit-playsinline="true"                                   
                x-webkit-airplay="allow" 
                x5-video-player-type="h5" 
                x5-video-player-fullscreen="true"                                 
                x5-video-orientation="portraint" 
                style="object-fit:fill">
          </video-player><br>
          <!-- <div class="card-body" >
            <a v-text="item.description">
            Uma palavra de Chan
            </a>
            </div> -->

  <!--轮播结束-->
  </videoDialog><!--/mymodal-->
     </div><!--/col-4-->

         <div class="col-4 mb-4">
           <div class="card card-video">
             <a href="">
              <img class="card-img-top" src="static/img/p7-1.png" alt="Card image cap">
            </a>
              <div class="card-body">
                <a href="">
                Uma palavra de Chan
                </a>
              </div>
           <a href="">
           <img src="static/img/play.png" class="play-video">
           </a>
           </div>
           </div><!--/col-4-->

           
         <div class="col-4 mb-4">
           <div class="card card-video">
             <a href="">
              <img class="card-img-top" src="static/img/p7-2.png" alt="Card image cap">
            </a>
              <div class="card-body">
                <a href="">
                Uma palavra de Chan
                </a>
              </div>
           <a href="">
           <img src="static/img/play.png" class="play-video">
           </a>
           </div>
           </div><!--/col-4-->

         <div class="col-4 mb-4">
           <div class="card card-video">
             <a href="">
              <img class="card-img-top" src="static/img/p7-1.png" alt="Card image cap">
            </a>
              <div class="card-body">
                <a href="">
                Uma palavra de Chan
                </a>
              </div>
           <a href="">
           <img src="static/img/play.png" class="play-video">
           </a>
           </div>
           </div><!--/col-4-->

         <div class="col-4 mb-4">
           <div class="card card-video">
             <a href="">
              <img class="card-img-top" src="static/img/p7-3.png" alt="Card image cap">
            </a>
              <div class="card-body">
                <a href="">
                Uma palavra de Chan
                </a>
              </div>
           </div>
           <a href="">
           <img src="static/img/play.png" class="play-video">
           </a>
           </div><!--/col-4-->

         </div>

      </div>



  </div><!--/main-->
  <!--中间主体内容结束-->

  <footer>
    <div class="container">
      <div class="row">
        <div class="col-auto mr-auto">
           <img class="footer_logo" src="static/img/footer_logo.png" />
        </div>
        <div class="footer_info col-auto">
          Anschrift:<br />
          Longquansi Str.27,<br /> 
          Fenghuangling,<br /> 
          Bezirk Haidian, 100194 Beijing, China<br />
E-mail: lqtc@vip.163.com
        </div>
      </div>
    </div>
  </footer>

  <div id="share">
    <a href=""><img src="static/img/wechat.png" /></a>
    <a href=""><img src="static/img/weibo.png" /></a>
    <a href=""><img src="static/img/email.png" /></a>
    <a href=""><img src="static/img/share.png" /></a>
  </div>



  </div>
</template>

<script>

import videoDialog from '@/components/videodialog'

export default {
  name: 'HelloWorld',
  components: {
    videoDialog
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShowAbout: false,
      clickh5video: true,
      indextap: 0,
      // videojs options
      playerOptions: {
        height: '400',
        autoplay: true,
        // muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          // mp4
          src: "http://vjs.zencdn.net/v/oceans.mp4",
          // webm
          // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }],
        poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
      },
         //为第一页或者最后一页时，首页，尾页不能点击
        fDisabled:false,
        lDisabled:false,
         //总项目数
        totalCount: 200,
        //分页数
        pageCount: 10,
        //当前页面
        pageCurrent: 1,
        //分页大小
        pagesize: 10,
        //显示分页按钮数
        showPages: 11,
        //开始显示的分页按钮
        showPagesStart: 1,
        //结束显示的分页按钮
        showPageEnd: 100,
        //分页数据
        arrayData: [],
        allData: [],
        getData: false,
        baseUrl: ''
    }
  },
  created () {
    this.$axios.get(this.GLOBAL.API, {
      params: {
        r: 'video/get-list',
        // cat1: 1,
        // offset: 8,
        // limit: 2
      }
    }).then((response) => {
      console.log(response.data)
      this.allData = response.data.video_list
      this.totalCount = this.allData.length
      this.baseUrl = this.GLOBAL.URL
      this.pageCount = Math.ceil(this.totalCount / this.pagesize)
      console.log(this.totalCount)
      this.getData = true
          this.showPage(this.pageCurrent, null, true)
    }).catch(function (error) {
    　console.log(error)
    })
  },
  mounted() {
    console.log('this is current player instance object', this.player)
    setTimeout(() => {
      console.log('dynamic change options', this.player)
      // change src
      // this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';
      // change item
      // this.$set(this.playerOptions.sources, 0, {
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // })
      // change array
      // this.playerOptions.sources = [{
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // }]
      this.player.muted(false)
    }, 5000)
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    showPage(pageIndex, $event, forceRefresh){
      if (pageIndex > 0) {
        if (pageIndex > this.pageCount) {
          pageIndex = this.pageCount;
        }
        //判断数据是否需要更新
        var currentPageCount = Math.ceil(this.totalCount / this.pagesize);
        if (currentPageCount != this.pageCount) {
          pageIndex = 1;
          this.pageCount = currentPageCount;
        }
        else if (this.pageCurrent == pageIndex && currentPageCount == this.pageCount && typeof (forceRefresh) == "undefined") {
          console.log("not refresh");
          return;
        }
        //处理分页点中样式
        var buttons = $("#pager").find("span");
        for (var i = 0; i < buttons.length; i++) {
          if (buttons.eq(i).html() != pageIndex) {
            buttons.eq(i).removeClass("active");
          }
          else {
            buttons.eq(i).addClass("active");
          }
        }
        //测试数据 随机生成的
        // var newPageInfo = [];
        // var time=new Date();
        // for (var i = 0; i < this.pagesize; i++) {
        //   newPageInfo[newPageInfo.length] = {
        //     timestamp: time,
        //     count: (i + (pageIndex - 1) * 20)
        //   };
        // }
        // this.pageCurrent = pageIndex;
        // this.arrayData = newPageInfo;
        var newPageInfo = this.allData.slice((pageIndex-1)*this.pagesize,(pageIndex)*this.pagesize);
        // var time=new Date();
        // for (var i = 0; i < this.pagesize; i++) {
        //   newPageInfo[newPageInfo.length] = {
        //     timestamp: time,
        //     count: (i + (pageIndex - 1) * 20)
        //   };
        // }
        this.pageCurrent = pageIndex;
        this.arrayData = newPageInfo;
        //如果当前页首页或者尾页，则上一页首页就不能点击，下一页尾页就不能点击
         if(this.pageCurrent===1){
            this.fDisabled=true;
          }else if(this.pageCurrent===this.pageCount){
            this.lDisabled=true;
          }else{
             this.fDisabled=false;
             this.lDisabled=false;
          }
        //计算分页按钮数据
        if (this.pageCount > this.showPages) {
          if (pageIndex <= (this.showPages - 1) / 2) {
            this.showPagesStart = 1;
            this.showPageEnd = this.showPages - 1;
            console.log("showPage1")
          }
          else if (pageIndex >= this.pageCount - (this.showPages - 3) / 2) {
            this.showPagesStart = this.pageCount - this.showPages + 2;
            this.showPageEnd = this.pageCount;
            console.log("showPage2")
          }
          else {
            console.log("showPage3")
            this.showPagesStart = pageIndex - (this.showPages - 3) / 2;
            this.showPageEnd = pageIndex + (this.showPages - 3) / 2;
          }
        }
        console.log("showPagesStart:" + this.showPagesStart + ",showPageEnd:" + this.showPageEnd + ",pageIndex:" + pageIndex);
      }
    },
    playClick(){
        this._dom = document.getElementById('myh5video');
        // this.isPlay = !this.isPlay;
        // this._dom.play();
        if(this._dom.paused) {  /*paused检测视频播放是否暂停*/
          this._dom.play() 
          this.clickh5video =  false
        } else {
          this._dom.pause();
          this.clickh5video =  true
        }
    },
    showDialog (param, index) {

      this.playerOptions.sources[0].src = this.allData[index].filename
      this.playerOptions.poster = this.GLOBAL.URL + this.allData[index].img
      console.log(this.playerOptions.sources[0].src,this.playerOptions.poster)
      this._dom = document.getElementById('myh5video')
      console.log('this._dom', this._dom)
      if (this._dom.play()) {
        // this._dom.pause()  // 暂停
        this._dom.load()   // 重新加载视频元素
        this.clickh5video =  true
      }
      this[param] = true
    },
    hideDialog (param) {
      this[param] = false
    },
    // listen event
    onPlayerPlay(player) {
        console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
        console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      // seek to 10s
      //console.log('example player 1 readied', player)
      player.currentTime(10)
      // console.log('example 01: the player is readied', player)
    },
    showImg() {
      //TODO 
      $('#mymodal').modal('show');
    }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>

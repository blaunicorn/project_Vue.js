<template>
  <div >
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


      <div class="photo-list2 mt-5" >
        <div class="row" v-on:click="playClick()">
         <div class="col-12 mb-4">
           <div class="card card-video" > 
             <div class="video-title">
               Preocupações das Regiões sobre Questões de Globalização
            </div >
             <a >
              <!-- <img class="card-img-top" height="400" src="static/img/p7-1.png" alt="Card image cap"> -->
              <video class="card-img-top"  
                id="myh5video" 
                height = "400"
                src="http://vjs.zencdn.net/v/oceans.mp4" 
                controls = "true"
                poster="static/img/p7-1.png" 
                preload="auto" 
                webkit-playsinline="true" 
                                  
                playsinline="true"  
                x-webkit-airplay="allow" 
                x5-video-player-type="h5" 
                x5-video-player-fullscreen="true" 
                                
                x5-video-orientation="portraint" 
                style="object-fit:fill">
                您的浏览器暂不支持播放该视频，请升级至最新版浏览器。
              </video>
            </a>
              <div class="card-body">
                <a >
                Uma palavra de Chan
                </a>
              </div>
           <a >
           <img v-if= "clickh5video" src="static/img/play.png" class="play-video" >
           </a>
           </div>
           </div><!--/col-4-->
        </div>

        <div class="row">

         <div class="col-4 mb-4" >
           <div class="card card-video"  @click="showDialog('isShowAbout')">
             <a >
              <img class="card-img-top" src="static/img/p7-1.png" alt="Card image cap">
            </a>
              <div class="card-body">
                <a >
                Uma palavra de Chan
                </a>
              </div>
           <a >
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
      <this-dialog :is-show="isShowAbout" @on-close="hideDialog('isShowAbout')">
      <p>playing video</p>
          <video-player  class="vjs-custom-skin"
                ref="videoPlayer1"
                :options="playerOptions1"
                :playsinline="true"
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
                @statechanged="playerStateChanged($event)">
          </video-player>
    </this-dialog>

  </div>
</template>

<script>

import ThisDialog from '@/components/dialog'

export default {
  name: 'HelloWorld',
  components: {
    ThisDialog
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShowAbout: false,
      clickh5video: true,
      // videojs options
      playerOptions: {
        height: '360',
        autoplay: false,
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          // mp4
          src: "http://vjs.zencdn.net/v/oceans.mp4",
          // webm
          // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }],
        poster: "static/img/p7-1.png",
      },
      playerOptions1: {
        height: '400',
        autoplay: true,
        muted: true,
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
      }
    }
  },
    mounted() {
      // console.log('this is current player instance object', this.player)
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
      // player() {
      //   return this.$refs.videoPlayer1.player
      // }
    },
    methods: {
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
      showDialog (param) {
        this._dom = document.getElementById('myh5video')
        console.log('this._dom', this._dom)
        if (this._dom.play()) {
          this._dom.pause();
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
        console.log('example player 1 readied', player)
        player.currentTime(10)
        // console.log('example 01: the player is readied', player)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>

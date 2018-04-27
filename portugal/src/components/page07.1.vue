<!-- 点击弹出图片轮播模板  -->
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
        Venerável Mestre Xuecheng /   Caridade Ren Ai
       </div>
       <div class="title">
         <i class="red-icon"></i>
          Caridade Ren Ai
         <i class="green-icon"></i>
       </div>


      <div class="photo-list2 mt-5">

        <div class="row">

         <div class="col-4 mb-4"  v-for =" (imag, index) in pictures">
           <div class="card"   @click="showDialog('isShowAbout', index)">
              <a >
              <img class="card-img-top" :src="imag" alt="Card image cap">
            </a>
              <div class="card-body">
                <a href="">
                {{index}}Uma palavra de Chan
                </a>
              </div>
           </div>
           </div><!--/col-4-->

         <div class="col-4 mb-4" >
           <div class="card"   @click="showDialog('isShowAbout')">
              <a >
              <img class="card-img-top" src="static/img/p7-1.png" alt="Card image cap">
            </a>
              <div class="card-body">
                <a href="">
                Uma palavra de Chan
                </a>
              </div>
           </div>
           </div><!--/col-4-->

           
         <div class="col-4 mb-4">
           <div class="card">
             <a href="javascript:showImg(1);void(0)">
              <img class="card-img-top" src="static/img/p7-2.png" alt="Card image cap">
            </a>
              <div class="card-body">
                <a href="">
                Uma palavra de Chan
                </a>
              </div>
           </div>
           </div><!--/col-4-->

         <div class="col-4 mb-4">
           <div class="card">
             <a href="javascript:showImg(2);void(0)">
              <img class="card-img-top" src="static/img/p7-1.png" alt="Card image cap">
            </a>
              <div class="card-body">
                <a href="">
                Uma palavra de Chan
                </a>
              </div>
           </div>
           </div><!--/col-4-->

         <div class="col-4 mb-4">
           <div class="card" @click="showDialog('isShowAbout')">
             <a >
              <img class="card-img-top" src="static/img/p7-3.png" alt="Card image cap">
            </a>
              <div class="card-body">
                <a href="">
                Uma palavra de Chan
                </a>
              </div>
           </div>
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
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop" >
        <swiper-slide class="slide-1" v-for =" (imag, index) in pictures" :key="index"><img :src="imag" /></swiper-slide>
        <!-- <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide> -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs" >
        <swiper-slide class="slide-2" v-for =" (imag, index) in pictures" :key="index"><img :src="imag" /></swiper-slide>
        <!-- <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide> -->
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
      </this-dialog>





  <!--轮播-->

<!--轮播结束-->

   <!--/mymodal-->

  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ThisDialog from '@/components/dialog'

const list = () =>['/static/img/surmon01.jpg', '/static/img/surmon02.jpg', '/static/img/surmon03.jpg', '/static/img/surmon04.jpg', '/static/img/surmon05.jpg', '/static/img/surmon05.jpg']

  export default {
    components: {
      ThisDialog,
      swiper,
      swiperSlide
    },
    data() {
      return {
        isShowAbout: false,
        indextap: 0,
        imgs: ['/static/img/p7-1.png', '/static/img/p7-2.png', '/static/img/p7-3.png', '/static/img/p7-1.png', '/static/img/p7-2.png','/static/img/p7-2.png'],
        pictures: list(),
        swiperOptionTop: {
          notNextTick: false,
          spaceBetween: 10,
          loop: true,
          initialSlide: 0,
          slideToClickedSlide: true,
          loopedSlides: 5, //looped slides should be the same
          observer:true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          pagination:{
            el: '.swiper-pagination',
            type: 'fraction'
          },
        },
        swiperOptionThumbs: {
          notNextTick: false,
          spaceBetween: 10,
          slidesPerView: 5,
          touchRatio: 0.2,
          clickable: true,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          centeredSlides: true,   // 缩略图 居中
          slideToClickedSlide: true,
          observer:true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        }
      }
    },
    created () {
      // console.log(this.$refs.swiperTop)
    },
    updated () {
      let isShowAbout = this.isShowAbout
      if (isShowAbout) {
        console.log('isShowAbout',isShowAbout)

      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
              // swiperThumbs.params.initialSlide = this.indextap
              // console.log('this.indextap', this.indextap)
              // if (this.indextap) {
              // swiperTop.slideTo(this.indextap-1)
              // swiperThumbs.slideTo(this.indextap-1)              // }
                 console.log('swiperTop', this.$refs.swiperTop.swiper)  
                 console.log('swiperThumbs', this.$refs.swiperThumbs.swiper)         
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
      // setInterval(() => {
      //   console.log('simulate async data')
      //   let swiperTop = this.$refs.swiperTop.Swiper
      //   console.log('swiperSlides',swiperSlides)
      //   let swiperThumbs = this.$refs.swiperThumbs.Swiper
      //   console.log('swiperThumbs',swiperThumbs)
      //   swiperTop.controller.control = swiperThumbs
      //   swiperThumbs.controller.control = swiperTop
      //   // if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
      // }, 3000)
      }
    },
   computed: {
      // swiperTop() {
      //   console.log('初始化',this.$refs.swiperTop.swiper)
      //   return this.$refs.swiperTop.swiper

      // },
      // swiperThumbs() {
      //   return this.$refs.swiperThumbs.swiper
      //   console.log('初始化swiperThumbs',swiperThumbs)
      // }
    },
    methods: {
      showDialog (param, index) {
        this[param] = true
        this.indextap = index

        this.swiperOptionTop.initialSlide = this.indextap
        this.swiperOptionThumbs.initialSlide = this.indextap  //先把参数带进去 然后再初始化swiper，指定初始页面      
        
        console.log('this.isShowAbout,index,indextap',this.isShowAbout,index,this.indextap)        
      },
      hideDialog (param) {
        this[param] = false
      },
      showImg () {
        console.log('ddd')
        //TODO 
        $('#mymodal').modal('show');
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.pc-slide {
	width: 650px;
	margin: 0 auto;
}

.view .swiper-container {
	width: 650px;
}

.view .swiper-container img{
  width:100%;
}

#mymodal{
  top:60px;
}

.view .arrow-left {
	background:  no-repeat left top;
	position: absolute;
	left: 10px;
	top: 50%;
	margin-top: -25px;
	width: 28px;
	height: 51px;
	z-index: 10;
}

.view .arrow-right {
	background:  no-repeat left bottom;
	position: absolute;
	right: 10px;
	top: 50%;
	margin-top: -25px;
	width: 28px;
	height: 51px;
	z-index: 10;
}

.preview {
	width: 100%;
	margin-top: 10px;
	position: relative;
}

.preview .swiper-container {
	width: 430px;
	height: 82px;
	margin-left: 100px;
}

.preview .swiper-slide {
	width: 87px;
	height: 82px;
	cursor:pointer;
}

.preview .slide6 {
	width: 82px;
}

.preview .arrow-left {
	position: absolute;
	left: 57px;
	top: 10px;
	margin-top: -9px;
	z-index: 10;
}

.preview .arrow-left img {
  width:30px;
}

.preview .arrow-right img {
  width:30px;
}

.preview .arrow-right {
	position: absolute;
	right: 70px;
	top: 10%;
	margin-top: -9px;
	z-index: 10;
}

.preview img {
	padding: 1px;
}

.preview .active-nav img {
	padding: 0;
	border: 2px solid #256d3d;
}
.slide-2.swiper-slide.swiper-slide-active {   /* 缩略图选中时改变边框样式颜色 */
      /* width: 124.6px;
    margin-right: 10px; */
    border: 2px #4CAF50 solid
}
</style>

<template>
  <div  v-if = "getData">
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

         <div class="col-4 mb-4"  v-for =" (item, index) in arrayData">
           <div class="card"   @click="showDialog('isShowAbout', index)">
              <a >
              <img class="card-img-top" :src="GLOBAL.URL + item.url" alt="Card image cap">
            </a>
              <div class="card-body">
                <a  v-text= "item.title">
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

      <this-dialog   :is-show="isShowAbout" @on-close="hideDialog('isShowAbout')">
           <div class="pc-slide">
	<div class="view">
		<div class="swiper-container">
      <swiper :options="swiperOptionTop" class="gallery-top swiper-wrapper" ref="swiperTop" >
        <swiper-slide class="slide-1 swiper-slide"  v-for =" (item, index) in arrayData[indextap].galleryItems" :key="index">
          <img :src="GLOBAL.URL + item.url" />
        </swiper-slide>
        <!-- <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide> -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
		</div>
	</div>
           </div>
      <!-- swiper2 Thumbs -->
      	<div class="preview">
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs swiper-container" ref="swiperThumbs" >
        <swiper-slide class="slide-2 swiper-slide" v-for =" (item, index) in arrayData[indextap].galleryItems" :key="index"><img :src="GLOBAL.URL + item.url" /></swiper-slide>
        <!-- <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide> -->
        <!-- <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div> -->
      </swiper>   <div class=" arrow-left" slot="button-next"><img  src="static/img/arrow-left.png" /></div>
        <div class=" arrow-right" slot="button-prev"><img src="static/img/arrow-right.png" /></div>     
      	</div>
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
         //为第一页或者最后一页时，首页，尾页不能点击
        fDisabled:false,
        lDisabled:false,
         //总项目数
        totalCount: 200,
        //默认分页数
        pageCount: 5,
        //当前页面
        pageCurrent: 1,
        //分页大小,默认每页数据的条目数
        pagesize: 8,
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
        baseUrl: '',
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
          spaceBetween: 2,
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
            // nextEl: '.swiper-button-next',
            // prevEl: '.swiper-button-prev'
            nextEl: '.arrow-left',
            prevEl: '.arrow-right'
          },
        }
      }
    },
    created () {
      // console.log(this.$refs.swiperTop)
      this.$axios.get(this.GLOBAL.API, {
        params: {
          r: 'gallery/get-list',
          cat1: 1,
          // offset: 8,
          // limit: 2
        }
      }).then((response) => {
        console.log(response.data)
        // that.newsContent = response.data.index_article_list
        // let i
        // for (i = 0; i < that.newsContent.length; i++) {
        //   that.newsurl[i] = that.GLOBAL.URL + that.newsContent[i].articlePictures[0].url
        // }
        // that.getData = true
        this.allData = response.data.longquan_picture_list
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
      },
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
      }
    },
    mounted(){
      this.showPage(this.pageCurrent, null, true)
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
  height: 465px;   /*固定画面大小 让图片填满div */
}

.view .swiper-container img{
  width:100%;
  height: 100%;
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
	width: 600px;
	height: 82px;
	margin-left: 25px;
}

.preview .swiper-slide {
	width: 120px;
	height: 82px;
	cursor:pointer;
}

.preview .slide6 {
	width: 80px;
}

.preview .arrow-left {
	position: absolute;
	left: 0px;
	top: 10px;
	margin-top: -10px;
	z-index: 10;
}

.preview .arrow-left img {
  width:25px;
  height: 82px;
}

.preview .arrow-right img {
  width:25px;
  height: 82px;
}

.preview .arrow-right {
	position: absolute;
	right: 0px;
	top: 10px;
	margin-top: -10px;
	z-index: 10;
}

.preview img {
  width:100%;
  height: 100%;
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

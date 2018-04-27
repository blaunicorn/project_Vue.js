<template>
<div>2222
        <!-- swiper1 -->
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop" >
        <swiper-slide class="'slide-' + index" v-for =" (imag, index) in pictures" :key="index"><img :src="imag" />></swiper-slide>
        <!-- <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide> -->
                <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs" >
        <swiper-slide class="slide-1" v-for =" (imag, index) in pictures" :key="index"><img :src="imag" />></swiper-slide>
        <!-- <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide> -->
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
  </div>
</template>


<script>
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        pictures: ['/static/img/surmon01.jpg', '/static/img/surmon02.jpg', '/static/img/surmon03.jpg', '/static/img/surmon04.jpg', '/static/img/surmon05.jpg'],
        swiperOptionTop: {
          spaceBetween: 10,
          loop: true,
          slideToClickedSlide: true,
          loopedSlides: 5, //looped slides should be the same
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          slidesPerView: 4,
          touchRatio: 0.2,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          slideToClickedSlide: true,
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
                console.log('初始化', swiperTop)
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    },
    methods:  {
      kkk () {
        console.log(this.$refs.swiperTop.swiper.activateIndex)
      }
    }
  }
</script>


<style  scoped>
  .swiper-container {
    background-color: #000;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
    /* // &.slide-1 {
    //   background-image:url('/static/img/surmon01.jpg');
    // }
    // &.slide-2 {
    //   background-image:url('/static/img/surmon02.jpg');
    // }
    // &.slide-3 {
    //   background-image:url('/static/img/surmon02.jpg');
    // }
    // &.slide-4 {
    //   background-image:url('/static/img/surmon02.jpg');
    // }
    // &.slide-5 {
    //   background-image:url('/static/img/surmon02.jpg');
    // } */
  }
  .gallery-top {
    height: 80%;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
</style>
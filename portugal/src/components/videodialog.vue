<template>
  <div >
    <div class="dialog-wrap">
      <div class="dialog-cover"  v-if="isShow" @click="closeMyself"></div>
      <transition name="drop">
        <div class="dialog-content"  v-if="isShow">
          <p class="dialog-close" @click="closeMyself">x</p>
          <slot>empty</slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
        pictures: ['/static/img/surmon01.jpg', '/static/img/surmon02.jpg', '/static/img/surmon03.jpg', '/static/img/surmon04.jpg', '/static/img/surmon05.jpg'],
     }
    },
    mounted() {

    },
    computed: {
    swiper() {
      return this.$refs.swiperTop.swiper
             this.$refs.swiperThumbs.swiper
    }
    },
  methods: {
    closeMyself () {
      this.$emit('on-close')
    }
  }
}
</script>

<style scoped>
/* .pc-slide {
	width: 650px;
	margin: 0 auto;
} */
.drop-enter-active {
  transform:scale(0);
  -webkit-transform:scale(1);
  -moz-transform:scale(1) ; 
  -o-transform:scale(1); 
  transition: all 0s ease;
  -moz-transition: all 0s ease-in;
	-webkit-transition: all 0s ease-in;
	-o-transition: all 0s ease-in;
}
.drop-leave-active {
  transition: all .1s ease;
  -moz-transition: all 0s ease-in;
	-webkit-transition: all 0s ease-in;
	-o-transition: all 0s ease-in;
}
.drop-enter {
  transform: translateY(100px);
}
.drop-leave-active {
  transform: translateY(100px);
}

.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background: #000;
  opacity: .6;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  width: 650px;
  height:auto;
  position: fixed;
  overflow: visible;
  top: 60px;
  margin: auto;
  left:0;
  right:0;
  bottom:0;
  z-index: 9;    /* 绝对定位中的相对居中 */
  /* padding: 2%;
  line-height: 1.6; */
}
.dialog-close {
  position: fixed;
  top: 40px;
  right:40px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
.dialog-close:hover {
  color: #4fc08d;
}
</style>

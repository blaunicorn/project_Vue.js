<template>
  <div>
    <x-header class="x-header" :left-options="{backText: ''}">
                        <a slot="overwrite-left">
        <cell class="cell">
          <i class="fa fa-angle-left"  style = "color: #ffffff;" @click="onItemClick(9)"></i>
        </cell>
      </a><p class="title">先优评选</p></x-header>
    <div v-if = "getData2"><swiper :list="imgSwiper" :index="demo07_index"  auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
    <div v-else><img class="img1" src="../assets/py1.jpg"></div>
    <router-link to="/ytzy19">
    <div><img class="img2" src="../assets/py2.jpg"></div>
    </router-link>
    <router-link to="/ytzy20">
    <div><img class="img2" src="../assets/py3.jpg"></div>
    </router-link>
    <router-link to="/ytzy21">
    <div><img class="img2" src="../assets/py4.jpg"></div>
    </router-link>
    <router-link to="/ytzy22">
    <div><img class="img2" src="../assets/py5.jpg"></div>
    </router-link>
  </div>
</template>
<script>
  import { XHeader, Cell, Swiper } from 'vux'
  export default {
    components: {
      XHeader,
      Cell,
      Swiper
    },
    data () {
      return {
        getData2: false,
        demo07_index: 0,
        imgSwiper: []
      }
    },
    created () {
      let that = this
      // 轮播图
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'carousel/get-carousels-by-category',
          sid: '12345qwe',
          category: '7'
        }
      }).then((response) => {
        console.log(response.data)
        that.imgSwiper = response.data.carousels
        let i
        for (i = 0; i < that.imgSwiper.length; i++) {
          that.imgSwiper[i].img = that.GLOBAL.URL + that.imgSwiper[i].img
        }
        that.getData2 = false
      })
    },
    methods: {
      onItemClick (index) {
        console.log('on item click:', index)
        if (index === 9) {
          this.$router.push('/ytzy17')
        }
      }
    }
  }
</script>
<style scoped>
  .x-header{
    background: red;
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
  .img1{
    margin-top: 0px;
    width: 100%;
    height: 180px;
  }
  .img2{
    margin-top: 15px;
    width: 94%;
    margin-left: 3%;
    height: 80px;
  }
</style>

<template>
  <div>
    <x-header class="x-header" :left-options="{backText: ''}">
                        <a slot="overwrite-left">
        <cell class="cell">
          <i class="fa fa-angle-left"  style = "color: #ffffff;" @click="onItemClick(9)"></i>
        </cell>
      </a><p class="title">党员发展</p></x-header>
    <div v-if = "getData2"><swiper :list="imgSwiper" :index="demo07_index"  auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
    <div v-else><img class="img1" src="../assets/ytzy29-1.jpg"></div>
    <div class="border">
      <div class="flex">
        <div class="word">01.提交入党申请书</div>
      </div>
      <div class="line"></div>
 <div class="word-contant1">条件：

 </div>
    </div>
  </div>
</template>
<script scoped>
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
          category: '9'
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
  .border{
    background: #ffffff;
    margin-top: 10px;
    border-left: 1px solid #BBBBBB;
    border-right: 1px solid #BBBBBB;
    border-bottom: 1px solid #BBBBBB;
  }
  .flex{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .word{
   text-align: center;
    font-size: 16px;
    color:red ;
    margin-left: 10px;
  }
  .word-contant{
   text-align: center;
    font-size: 18px;
    color:#000000 ;
    margin-left: 10px;
  }
  .word-contant1{
   text-align: left;
    font-size: 14px;
    color:#000000 ;
    margin-left: 20px;
    margin-right: 20px;
  }
  .tubiao1{
    width: 20px;
    height: 20px;
  }
  .line{
    border-bottom: solid 1px #F22222;
    width: 100%;
  }  
</style>

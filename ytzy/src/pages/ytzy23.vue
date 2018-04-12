<template>
  <div>
    <x-header class="x-header" :left-options="{backText: ''}">
            <a slot="overwrite-left">
        <cell class="cell">
          <i class="fa fa-angle-left"  style = "color: #ffffff;" @click="onItemClick(9)"></i>
        </cell>
      </a><p class="title">支部生活</p>
      <a slot="right">
        <cell class="cell">
          <i class="fa fa-search" @click="search">
          </i>
        </cell>
      </a>
    </x-header>
    <div v-if = "getData2"><swiper :list="imgSwiper" :index="demo07_index"  auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
    <div v-else><img class="pic" src="../assets/ytzy23-1.jpg"></div>
    <div class="flex">
      <router-link to="/ytzy24">
      <div class="flex1">
        <div class="flex2">
          <img class="pic1" src="../assets/ytzy23-2.png">
          <div>支部党员大会</div>
        </div>
        <img class="pic2" src="../assets/right.png">
      </div>
      </router-link>
      <router-link to="/ytzy25">
      <div class="flex1">             
        <div class="flex2">
          <img class="pic1" src="../assets/ytzy23-3.png">
          <div>支部委员会</div>
        </div>
        <img class="pic2" src="../assets/right.png">
      </div>
      </router-link>
      <router-link to="/ytzy26">
      <div class="flex1">
        <div class="flex2">
          <img class="pic1" src="../assets/ytzy23-4.png">
          <div>党小组会</div>
        </div>
        <img class="pic2" src="../assets/right.png">
      </div>
      </router-link>
      <router-link to="/ytzy27">
      <div class="flex1">
        <div class="flex2">
          <img class="pic1" src="../assets/ytzy23-5.png">
          <div>党课</div>
        </div>
        <img class="pic2" src="../assets/right.png">
      </div>
      </router-link>
    </div>
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
          category: '6'
        }
      }).then((response) => {
        console.log(response.data)
        that.imgSwiper = response.data.carousels
        let i
        for (i = 0; i < that.imgSwiper.length; i++) {
          that.imgSwiper[i].img = that.GLOBAL.URL + that.imgSwiper[i].img
        }
        that.getData2 = true
      })
    },
    methods: {
      search () {
        this.$router.push('/search.2')
      },
      onItemClick (index) {
        if (index === 9) {
          this.$router.push('/ytzy17')
        }
      }
    }
  }
</script>
<style scoped>
  .x-header{
    background-color:red;
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
  .fa-search{
    color: #ccc;
  }
  .pic{
    width: 100%;
    display: block;
  }
  .pic1{
    height: 50px;
    width: 50px;
    margin-right: 20px;
  }
  .pic2{
    height: 25px;
    width: 25px;
  }
  .flex{
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }
  .flex1{
    display: flex;
    padding-left: 5%;
    padding-right: 5%;
    border-bottom: 1px solid #E6E6E6;
    padding-top: 10px;
    padding-bottom: 10px;
    align-items: center;
    justify-content: space-between;
  }
  .flex2{
    display: flex;
    align-items: center;
    color: #000000;
  }
</style>

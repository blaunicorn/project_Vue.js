<template>
  <div>
    <x-header class="x-header" :left-options="{backText: ''}">
                  <a slot="overwrite-left">
        <cell class="cell">
          <i class="fa fa-angle-left"  style = "color: #ffffff;" @click="onItemClick(9)"></i>
        </cell>
      </a><p class="title">党务公开</p>
      <a slot="right">
        <cell class="cell">
          <!-- <i class="fa fa-search"></i> -->
        </cell>
      </a>
    </x-header>
    <div v-if = "getData2"><swiper :list="imgSwiper" :index="demo07_index"  auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
    <div v-else><img class="pic" src="../assets/ytzy17-1.jpg"></div>
    <div class="flex-first">
      <div>
        <router-link to="/ytzy23">
          <img class="pic1" src="../assets/ytzy17-2.png">
          <div>支部生活</div>
        </router-link>
      </div>
      <div>
        <router-link to="/ytzy31">
          <img class="pic1" src="../assets/ytzy17-4.png">
          <div>党员发展</div>
        </router-link>
      </div>
      <div>
        <router-link to="/ytzy28">
          <img class="pic1" src="../assets/ytzy17-3.png">
          <div>党费计算</div>
        </router-link>
      </div>
    </div>
    <div class="flex-first">
      <div>
        <router-link to="/ytzy29">
          <img class="pic1" src="../assets/ytzy17-5.png">
          <div>干部考核</div>
        </router-link>
      </div>
      <div>
        <router-link to="/ytzy30">
          <img class="pic1" src="../assets/ytzy17-6.png">
          <div>党务工作流程</div>
        </router-link>
      </div>
      <div>
        <router-link to="/ytzy18">
          <img class="pic1" src="../assets/ytzy17-7.png">
          <div>先优评选</div>
        </router-link>
      </div>
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
          category: '5'
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
      onItemClick (index) {
        console.log('on item click:', index)
        if (index === 0) {
          this.$router.push('/ytzy02')
        }
        if (index === 1) {
          this.$router.push('/ytzy08')
        }
        if (index === 2) {
          this.$router.push('/ytzy06')
        }
        if (index === 3) {
          this.$router.push('/ytzy10')
        }
        if (index === 9) {
          this.$router.push('/ytzy02')
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
  .flex-first {
    display: -webkit-flex;
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    margin-top: 20px;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
  }
  .pic1 {
    height: 45px;
    width: 45px;
  }
  a {
    text-decoration: none;
    color: #101010;
  }

</style>

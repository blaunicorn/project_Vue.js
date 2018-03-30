<template>
  <div class="body">
    <x-header class="x-header" :left-options="{backText: ''}">                        <a slot="overwrite-left">
        <cell class="cell">
          <i class="fa fa-angle-left"  style = "color: #ffffff;" @click="onItemClick(9)"></i>
        </cell>
      </a><p class="title">优秀共产党员评选</p></x-header>
    <div><img class="pic1" src="../assets/party4.jpg"></div>
    <div class="border">
      <div class="flex">
        <img class="tubiao1" src="../assets/model1.png">
        <div class="word">秀共产党员评选标准</div>
      </div>
      <div class="line"></div>
    </div>
    <div class="border">
      <div class="flex">
        <img class="tubiao1" src="../assets/model1.png">
        <div class="word">秀共产党员候选人</div>
      </div>
      <div class="line"></div>
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
      return {}
    },
    methods: {
      onItemClick (index) {
        console.log('on item click:', index)
        if (index === 9) {
          this.$router.push('/ytzy18')
        }
      }
    }
  }
</script>
<style scoped>
  .x-header{
    background: #f22222;
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
  .body{
    background-color:#F0F0F0 ;
  }
  .pic1{
    width: 100%;
    display: block;
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
    font-size: 14px;
    color:#F22222 ;
    margin-left: 10px;
  }
  .tubiao1{
    width: 20px;
    height: 20px;
  }
  .line{
    border-bottom: solid 6px #F0F0F0;
    width: 100%;
  }
</style>

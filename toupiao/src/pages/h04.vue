<template>
  <div class="home">
    <x-header class="x-header" :left-options="{backText: ''}">儿少中心党支部</x-header>
    <img class="pic1" src="../assets/vie.jpg">
    <div class="explain">
      <div>您的分数为 {{$route.params.score}} 分</div>
      <div>现在排名第 {{$route.params.rank}} 名</div>
    </div>
    <x-button link="/h05" class="begin">排行榜</x-button>
  </div>
</template>
<script>
  import { XHeader, XButton } from 'vux'

  export default {
    components: {
      XHeader,
      XButton
    },
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .home{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    background-color: #fffef2;
  }
  .x-header{
    background: #f22222;
  }
  .pic1 {
    width: 100%;
  }
  .explain{
    text-align: center;
    font-size: 14px;
    margin-top: 50px;
    margin-bottom: 50px;
    line-height: 30px;
  }
  .begin{
    width: 150px;
    height: 30px;
    background-color: #f22222;
    font-size: 14px;
    color: #ffffff;
    border-radius: 0;
    line-height: 30px;
  }
</style>

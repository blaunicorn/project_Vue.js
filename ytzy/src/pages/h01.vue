<template>
    <div class="home">
        <x-header style=" background: #f22222" :left-options="{showBack: false}">
            <p>儿少中心党支部</p>
        </x-header>
        <img class="pic1" src="../assets/vie.jpg">
        <x-button link="h011" class="begin">学习</x-button>
        <x-button link="h03" class="begin">答题</x-button>
        <x-button link="h05" class="begin">排行榜</x-button>
    </div>
</template>
<script>
  import {XHeader, XButton} from 'vux'

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
    .home {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #fffef2;
    }
    /*.vux-header .vux-header-title {*/
        /*background: #f22222!important;*/
        /*margin: 0!important;*/
    /*}*/
    .pic1 {
        width: 100%;
        margin-bottom: 100px;
    }

    .begin {
        width: 150px;
        height: 30px;
        background-color: #f22222;
        font-size: 14px;
        color: #ffffff;
        border-radius: 0;
        line-height: 30px;
    }
</style>

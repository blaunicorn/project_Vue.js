<template>
    <div>
        <x-header class="x-header"  :left-options="{showBack: false}">大庆油田总医院考核平台</x-header>
        <div class="explain">
          <div class="title">您已完成考评，谢谢参与。</div>
        </div>
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
    .x-header {
        background: #2992f2;
    }
    .explain{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .title{
      font-size: 20px;
      font-weight: bold;
      margin-top: 40px;
      margin-bottom: 40px;
    }
    .content{
      width: 90%;
      font-size: 14px;
    }
    .submit{
      background-color: #2992f2;
      width: 165px;
      height: 30px;
      color: white;
      font-size: 14px;
      line-height: 30px;
      margin-top: 40px;
    }
    
</style>

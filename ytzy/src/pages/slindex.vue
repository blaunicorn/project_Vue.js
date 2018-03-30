<template>
  <div class="home">
    <x-header class="x-header" :left-options="{showBack: false}">展示平台</x-header>
    <div class="classify">
      <div class="title">工会建设</div>
      <div class="content">
        <i class="fa fa-dot-circle-o"></i> 创新创效
        <div class="print">
          <a href="http://219.235.107.209:8117/?sid=123"><img class="pic" src="../assets/anli1.jpg"></a>
        </div>
      </div>
      <div class="content">
        <i class="fa fa-dot-circle-o"></i> 心灵工坊
        <div class="print">
          <a href="http://219.235.107.209:8117/?sid=123"><img class="pic" src="../assets/anli2.png"></a>
        </div>
      </div>
      <div class="content">
        <i class="fa fa-dot-circle-o"></i> 油田工匠
        <div class="print">
          <a href="http://219.235.107.209:8117/?sid=123"><img class="pic" src="../assets/anli3.jpg"></a>
        </div>
      </div>
    </div>
    <div class="classify">
      <div class="title">投票答题</div>
      <div class="content">
        <i class="fa fa-dot-circle-o"></i> 网上知识竞答
        <div class="print">
          <a href="http://219.235.107.209:8117/?sid=123"><img class="pic" src="../assets/anli4.jpg"></a>
        </div>
      </div>
      <div class="content">
        <i class="fa fa-dot-circle-o"></i> 考核投票
        <div class="print">
          <a href="http://219.235.107.209:8117/?sid=123"><img class="pic" src="../assets/anli5.png"></a>
        </div>
      </div>
      <div class="content">
        <i class="fa fa-dot-circle-o"></i> 春联征集投票
        <div class="print">
          <a href="http://219.235.107.209:8117/?sid=123"><img class="pic" src="../assets/anli6.jpg"></a>
        </div>
      </div>
    </div>
    <div class="classify">
      <div class="title">小程序</div>
      <div class="content">
        <i class="fa fa-dot-circle-o"></i> 商务名片
        <div class="print">
          <a href="http://219.235.107.209:8117/?sid=123"><img class="pic" src="../assets/anli7.png"></a>
        </div>
      </div>
      <div class="content">
        <i class="fa fa-dot-circle-o"></i> 健康运动
        <div class="print">
          <a href="http://219.235.107.209:8117/?sid=123"><img class="pic" src="../assets/anli8.jpg"></a>
        </div>
      </div>
      <div class="content">
        <i class="fa fa-dot-circle-o"></i> 签到
        <div class="print">
          <a href="http://219.235.107.209:8117/?sid=123"><img class="pic" src="../assets/anli9.png"></a>
        </div>
      </div>
      <div class="content">
        <i class="fa fa-dot-circle-o"></i> 汇智堂
        <div class="print">
          <a href="http://219.235.107.209:8117/?sid=123"><img class="pic" src="../assets/anli10.jpg"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { XHeader } from 'vux'

  export default {
    components: {
      XHeader
    },
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .home{
    width: 100%;
    background-color: #f0f0f0;
    padding-bottom: 10px;
  }
  .x-header{
    background: #555555;
  }
  .classify{
    width: 96%;
    margin-left: 2%;
    background-color: white;
    padding-top: 20px;
    margin-top: 10px;
  }
  .title{
    margin-bottom: 20px;
    margin-left: 15px;
    font-size: 16px;
    font-weight: bold;
  }
  .content{
    border-top: 1px solid #e6e6e6;
  }
  .fa{
    margin-left: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .print{
    display: flex;
    justify-content: center;
  }
  .pic{
    width: 280px;
    display: block;
    margin-bottom: 15px;
  }
</style>

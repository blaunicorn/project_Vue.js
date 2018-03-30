<template>
  <div style="background: #ffffff">
    <x-header class="x-header" :left-options="{showBack: false}">
      <p>总院贯彻十九大学习平台</p>
      <a href="#" slot="right">
        <cell class="cell">
          <i class="fa fa-search">
          </i>
        </cell>
      </a>
    </x-header>
    <div class="news">
      <div>最新要闻</div>
      <div>院内公告</div>
      <div>新党章</div>
      <div>十九大全文</div>
      <div>专家解读</div>
    </div>
    <div><img class="img1" src="../assets/dj1.jpg"></div>
    <div style="margin-top: 15px;">
      <div class="flex">
        <div><img class="img2" src="../assets/dj2.jpg"></div>
        <div class="context">
          <div class="word">习近平同美国总统特朗普举行会谈</div>
          <div class="c-date">2017-11-10</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="flex">
        <div><img class="img2" src="../assets/dj3.jpg"></div>
        <div class="context">
          <div class="word">关于十九大报告，你必须知道的“关键词”</div>
          <div class="c-date">2017-11-22</div>
        </div>
      </div>
      <div class="line"></div>
    </div>
    <div style="margin-top: 45px;"></div>
    <div class="f-flex">
      <div>
        <div>
          <cell>
            <i class="fa fa-comments-o font-size">
            </i>
          </cell>
        </div>
        <div class="f-word">体会交流</div>
      </div>
      <div>
        <div>
          <cell>
            <i class="fa fa-tasks font-size">
            </i>
          </cell>
        </div>
        <div class="f-word">自学自测</div>
      </div>
      <div>
        <div>
          <cell>
            <i  class="fa fa-trophy font-size">
            </i>
          </cell>
        </div>
        <div class="f-word">评优评选</div>
      </div>
      <div>
        <div>
          <cell>
            <i class="fa fa-comments-o font-size">
            </i>
          </cell>
        </div>
        <div class="f-word">成果展示</div>
      </div>
      <div>
        <div>
          <cell>
            <i class="fa fa-user-o font-size">
            </i>
          </cell>
        </div>
        <div class="f-word m-left">我</div>
      </div>
    </div>
  </div>
</template>
<script>
  import { XHeader, Cell } from 'vux'
  export default {
    components: {
      XHeader,
      Cell
    },
    data () {
      return {}
    }
  }
</script>
<style scoped>
  .x-header{
    background: #f22222;
  }
  .cell{
    margin-top: -10px;
  }
  .fa-search{
    color: #ffffff;
    font-size: 18px;
  }
  .news{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
    height: 37px;
  }
  .img1{
    height: 200px;width: 100%
  }
  .flex{
    display: flex;justify-content: space-around
  }
  .img2{
    height: 80px;width: 130px
  }
  .context{
    margin-top: 5px;width: 190px
  }
  .word{
    font-size: 14px;color: #424242
  }
  .c-date{
    font-size: 10px;color: #828282;margin-top: 10px
  }
  .line {
    border: 1px solid #ebebeb;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .f-flex{
    width: 100%; display: flex;
    justify-content: space-around;
    align-items: center;
    height: 45px;
    border: 1px solid #bbbbbb;
    background: #f8f8f8;
    position: fixed;bottom: 0px
  }
  .font-size{
    font-size: 20px
  }
  .f-word{
    font-size:11px;color: #828282;margin-top: -15px
  }
  .m-left{
    margin-left: 1.5em;
  }
</style>

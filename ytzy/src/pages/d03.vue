<template>
  <div class="homeBox">
    <x-header class="x-header" :left-options="{showBack: false}">
      <p>十九大精神学习答题</p>
      <a slot="right">
        <cell class="cell">
          <i class="fa fa-search">
          </i>
        </cell>
      </a>
    </x-header>
    <div><img class="pic1" src="../assets/vie.jpg"></div>
    <div>
      <div class="message">
        <span >基本信息</span>
        <span style="color: #e51c23;">*</span>
      </div>
      <div class="message flex">
        <div class="name">姓名：</div>
        <div><x-input class="xiput"is-type="china-name" v-model="inE.name"></x-input></div>
      </div>
      <div class="message flex">
        <div class="name">电话：</div>
        <div><x-input class="xiput" v-model="inE.tel" name="mobile" keyboard="number" is-type="china-mobile"></x-input></div>
      </div>
      <div class="select">
        <div>1.我国经济已由高速增长阶段转向（   ）阶段，正处在转变发展方式、优化经济结构、转换增长动力的攻关期，建设现代化经济体系是跨越关口的迫切要求和我国发展的战略目标。</div>
        <div class="sel-content">
          <input class="mar-top" type="radio" name="name">A 提质增效<br>
          <input class="mar-top" type="radio" name="name">B 高质量发展<br>
          <input class="mar-top" type="radio" name="name">C 转型发展
        </div>
      </div>
      <div class="line"></div>
      <div style=""></div>
      <div class="select">
        <div>2.要完善国家安全战略和国家安全政策，坚决维护国家（   ），统筹推进各项安全工作。健全国家安全体系，加强国家安全法治保障，提高防范和抵御安全风险能力。</div>
        <div class="sel-content">
          <input class="mar-top" type="radio" name="name" >A 主权安全<br>
          <input class="mar-top" type="radio" name="name" >B 国民安全<br>
          <input class="mar-top" type="radio" name="name" >C 政治安全
        </div>
      </div>
      <div class="line"></div>
    </div>
    <div class="remain">
    	<div>剩余时间:</div>
    	<div>00:00:00</div>
    </div>
    <x-button class="begin">提交</x-button>
  </div>
</template>
<script>
  import { XHeader, Cell, XInput, XButton } from 'vux'

  export default {
    components: {
      XHeader,
      Cell,
      XInput,
      XButton
    },
    data () {
      return {
        inE: {
          name: '',
          tel: ''
        },
        Tstr: {
          'name': '姓名',
          'tel': '联系方式'
        }
      }
    }
  }
</script>

<style scoped>
  .homeBox {
    /*position: relative;*/
    width: 100%;
    height: 100%;
    top: 0px;
    bottom: 0px;
    background-color: #fffef2;
  }
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
  .pic1 {
    width: 100%;
  }
  .message{
    font-size: 12px;
    margin-left: 10%;
    margin-top: 20px;
  }
  .flex{
    display: flex;
  }
  .name{
    font-size: 12px;
    margin-top: 4px
  }
  .xiput{
    border: 1px solid #bbbbbb;
    background: #ffffff;
    width: 120px;
    height: 8px;
    margin-left: 20px;
  }
  .select{
    margin-top: 20px;
    font-size: 14px;
    margin-left: 10%;
    width: 80%;
    text-align: justify;
  }
  .sel-content{
    margin-left: 1em;
  }
  .mar-top{
    margin-top: 10px;
  }
  .line{
    border: 3px solid #ebebeb;
    margin-top: 20px;
  }
  .begin{
    width: 100%;
    height: 40px;
    background-color: #f22222;
    font-size: 14px;
    color: #ffffff;
    border-radius: 0;
  }
  .remain{
  	width: 100px;
  	height: 32px;
  	border: 1px solid #f22222;
  	border-radius: 13px;
  	position: fixed;
  	right: 0;
  	bottom: 60px;
  	font-size: 10px;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	line-height: 16px;
  	z-index: 9;
  	background-color: #ffffff;
  }
</style>

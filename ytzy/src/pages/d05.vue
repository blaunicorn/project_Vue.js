<template>
	<div class="home">
		<x-header class="x-header" :left-options="{showBack: false}">
      <p>十九大精神学习答题</p>
      <a slot="right">
        <cell class="cell">
          <i class="fa fa-search">
          </i>
        </cell>
      </a>
    </x-header>
    <img class="pic1" src="../assets/vie.jpg">
    <div class="explain">您已提交成功，可查询结果。</div>
    <x-button class="begin">查询结果</x-button>
	</div>
</template>
<script>
import { XHeader, Cell, XButton } from 'vux'

export default {
  components: {
    XHeader,
    Cell,
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
.explain{
  display: flex;
  justify-content: center;
  font-size: 14px;
  margin-top: 50px;
  margin-bottom: 50px;
}
.begin{
  width: 150px;
  height: 30px;
  background-color: #f22222;
  font-size: 14px;
  color: #ffffff;
  border-radius: 0;
}
</style>
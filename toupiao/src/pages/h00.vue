<template>
	<div>		
    <img class="pic1" src="../assets/welcome.jpg">
    <x-button link="h01" class="enter">点击进入</x-button>
	</div>
</template>
<script>
import { XButton } from 'vux'

export default {
  components: {
    XButton
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.pic1 {
  width: 100%;
  display: block;
  position: fixed;
  top: 0;
}
.enter{
  width: 90px;
  height: 25px;
  background-color: #f22222;
  font-size: 14px;
  color: #ffffff;
  border-radius: 5px;
  line-height: 25px; 
  display: flex;
  justify-content: center;
  margin-top: 350px;
}
</style>

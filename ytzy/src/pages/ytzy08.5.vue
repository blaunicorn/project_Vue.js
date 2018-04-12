<template>
    <div class="app">
        <Tabs >
            <Tab name="好友榜" hash="friend" fontsize="36" tabheight="90">
                <div class="first"></div>
            </Tab>
            <Tab name="全省榜" hash="convince" fontsize="36" tabheight="90">
                <div class="second"></div>
            </Tab>
            <Tab name="全国榜" hash="country" fontsize="36" tabheight="90">
                <div class="three"></div>
            </Tab>
        </Tabs>
    </div>
</template>
<script>
import { Tabs, Tab } from 'vue-swipe-tab'
export default {
  components: {
    Tabs,
    Tab
  },
  methods: {
    changePage (idx) {
      console.log(idx)
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
  .tab-swiper {
    background-color: #ffffff;
    height: 800px;
    font-size: 12px;
  }
  .circle{
    display: flex;
    margin-top: 10px;
    margin-left: 5%;
    margin-right: 5%
  }
  .flex{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
  }
  .cir-pic{
    width: 110px;
    height: 70px;
  }
  .cir-word{
    font-size: 14px;
    text-align: justify;
    margin-top: 5px;
    margin-left: 20px;
    height: 62px;
    color: #000000;
    display: -webkit-box;  
	  -webkit-box-orient: vertical;  
  	display: -moz-box;  
	  -moz-box-orient: vertical;  
  	overflow: hidden;
    -webkit-line-clamp: 3;
  	text-overflow: ellipsis; 
  }
  .cir-date{
    margin-left: 20px;
    font-size:10px;
    color: #828282;
    margin-top: 10px
  }
  .cir-line{
    border: 2px solid #d6d6d6;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  .xs-plugin-pulldown-container {
  line-height: 40px;
  }
  .xs-plugin-pullup-container {
  line-height: 40px;
  }
</style>

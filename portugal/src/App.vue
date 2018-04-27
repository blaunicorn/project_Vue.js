<template>
  <div id="app">
        临时链接
    <router-link to="/">index</router-link>
    <router-link to="/page03">page03</router-link>
    <router-link to="/page04">page04</router-link>
    <router-link to="/page05">page05</router-link>
    <router-link to="/page06">page06</router-link>
    <router-link to="/page07">page07</router-link>
    <router-link to="/page09">page09</router-link>
    <router-link to="/page10">page10</router-link>     
    <router-link to="/paging">学诚法师数据分页示例</router-link>     
    <router-link to="/video">视频数据示例</router-link>     
  <keep-alive>
    <router-view/>
  </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>

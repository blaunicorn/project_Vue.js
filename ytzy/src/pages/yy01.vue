<template>
  <div>
    <x-header class="x-header" :left-options="{backText: ''}">评优评选</x-header>
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
    background: red;
  }
</style>

<template>
    <div>
        <!-- <x-header class="x-header" :left-options="{showBack: false}">投票</x-header>
        <div><img class="pic1" src="../assets/tp.jpg"></div> -->
        {{brow}}
    </div>
</template>
<script>
  import {XHeader} from 'vux'

  export default {
    components: {
      XHeader
    },
    data () {
      return {
        brow: ''
      }
    },
    created () {
      this.brow = 'weixin2'
      this.$router.push({name: 'author', params: {sid: 'abcde', url: 'tp01'}})
    }
  }
</script>

<style scoped>
    .x-header {
        background: #f22222;
    }

    .pic1 {
        width: 100%;
    }

</style>

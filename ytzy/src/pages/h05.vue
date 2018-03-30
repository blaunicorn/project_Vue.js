<template>
    <div class="home">
        <x-header class="x-header" :left-options="{backText: ''}">儿少中心党支部</x-header>
        <div><img class="pic1" src="../assets/wszsjd.jpg"></div>
        <div class="ranking">排行榜</div>
        <div class="line"></div>
        <div v-if="getData" class="mar-top">
            <div class="flex" v-for="(value, key) in rank">
                <div>第{{key+1}}名 &nbsp;&nbsp;{{value.name}}</div>
                <div>{{value.score}}分</div>
            </div>
        </div>
        <div class="line1"></div>
        <div class="add">备注：如出现同分情况，按提交时间排名</div>
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
        rank: [],
        getData: false
      }
    },
    created () {
      let that = this
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'quiz/get-paper-rank',
          paper_id: '1'
        }

      }).then((response) => {
        // console.log(response.data)
        that.rank = response.data.rank_list
        that.getData = true
      })
    }
  }
</script>

<style scoped>
    .home {
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #fffef2;
    }

    .x-header {
        background: #f22222;
    }

    .pic1 {
        width: 100%;
    }

    .ranking {
        text-align: center;
        color: #f22222;
        font-size: 16px;
        font-weight: bold;
        margin-top: 10px!important;
    }

    .line {
        border-bottom: 1px solid #e51c23;
        width: 80%;
        margin-left: 10%;
    }

    .flex {
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin-left: 10%;
        font-size: 14px;
    }

    .mar-top {
        margin-top: 10px;
    }

    .line1 {
        border-bottom: 1px solid #a3a3a3;
        width: 80%;
        margin-left: 10%;
        margin-top: 10px;
    }

    .add {
        font-size: 12px;
        text-align: center;
        margin-top: 10px;
    }
</style>

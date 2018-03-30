<template>
    <div class="home">
        <x-header class="x-header" :left-options="{backText: ''}">
            <p>儿少中心党支部</p>
        </x-header>
        <img class="pic1" src="../assets/study.jpg">
        <div class="title">
            <div><img class="star" src="../assets/star.png"></div>
            <div class="tit-word">{{studyContent.title }}</div>
            <div><img class="star" src="../assets/star.png"></div>
        </div>
        <div class="line"></div>
        <!--通过传递的id参数，读取studyContent数据  -->
        <div>
                <div class="flex1">
                    <div><img class="dangzhang" src="../assets/dangz.png"></div>
                    <div>
                    <div class="content" v-html="transHtml(studyContent.content_json)"></div>
                    </div>
                </div>
                <div><img style="width: 100%" src="../assets/study1.png"></div>
        </div>
        <!--循环
        <div>
            <div v-for="(value, key) in studyContent">
                <div class="flex1">
                    <div><img class="dangzhang" src="../assets/dangz.png"></div>
                    <div>
                        <div class="tit-small">{{ value.title }}</div>
                        <div class="content" v-html="transHtml(value.content_json)"></div>
                    </div>
                </div>
                <div><img style="width: 100%" src="../assets/study1.png"></div>
            </div>
        </div> -->
    </div>
</template>
<script>
  import {XHeader, XButton} from 'vux'

  export default {
    components: {
      XHeader,
      XButton
    },
    data () {
      return {
        studyContent: {},
        getData: false
      }
    },
    // post远端数据读取测试
    created () {
      let that = this
      this.$axios.get(this.GLOBAL.URL, {
        params: {
          r: 'quiz/get-paper-study-content',
          study_id: that.$route.params.id
        }
      }).then((response) => {
        console.log(response.data)
        that.studyContent = response.data.study_content
        that.getData = true
      })
    },
    methods: {
      transHtml (sou) {
        let r = ''
        if (sou !== '') {
          let ar = JSON.parse(sou)
          for (let a in ar) {
            r += '<p>' + ar[a] + '</p>'
          }
        }
        return r
      }
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

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #f22222;
        font-weight: bold;
        font-size: 16px;
        margin-top: 10px;
    }

    .star {
        width: 30px;
        height: 30px;
    }

    .tit-word {
        margin-left: 1em;
        margin-right: 1em
    }

    .line {
        width: 100%;
        height: 3px;
        background-color: #f22222;
        margin-top: 5px;
    }

    /*循环*/
    .flex1 {
        display: flex;
        margin-left: 5%;
        margin-top: 10px;
        margin-right: 8%;
    }

    .dangzhang {
        width: 25px;
        height: 25px
    }

    .tit-small {
        font-size: 14px;
        font-weight: bold;
        margin-left: 5px;
    }

    .content {
        text-align: justify;
        font-size: 14px;
        line-height: 20px;
        text-indent: 2em;
        margin-top: 10px
    }
</style>

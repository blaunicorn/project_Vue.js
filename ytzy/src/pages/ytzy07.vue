<template>
  <div>
    <x-header class="x-header" :left-options="{backText: ''}">
      <p class="title">院内公告</p>
      <a slot="right">
        <cell class="cell">
          <i class="fa fa-search">
          </i>
        </cell>
      </a>
    </x-header>
    <div class="content">
      <div class="title-word">大庆油田总医院重奖科技功臣</div>
      <div class="title-date" >
        <div>大庆油田总医院</div>
        <div>2018-02-12</div>
      </div>
      <div class="photo"><img class="pic" src="../assets/ytyy7-1.jpeg"></div>
      <div class="word1">
            给予那些在医院发展建设中切实做出突出贡献的人真正的实惠，
            让那些工作上不求进取的平庸无为人看着眼热脸红。这是大庆油田总医院多年来在“科技兴院”发展战略中所一贯奉行的卓有成效的鼓励激励机制。
            在2月8日召开的“大庆油田总医院十届二次职工代表大会暨2018年工作会议”上，医院又分别对在2017年度医疗科技领域中取得优异成果的
            “六项医院年度重大科技进步奖”以及“23项省卫计委新技术应用奖”、“20项大庆市科技进步奖”以及“30篇SCI收录文章”等总计116项
             临床科研成果及优秀科研论文给予了隆重的表彰与奖励。
      </div>
      <div class="word1">
            在本次的科技奖励中，根据科研成果为医院科技发展所创造的价值与效益，其中的《经皮左心耳封堵术预防心房颤动血栓栓塞》、《急性
            心肌梗死早期有氧动态训练治疗技术的应用研究》、《SMILE全飞秒激光治疗近视》、《131碘SPECT/CT融合显像及血清TG水平检测在分化型甲状
            腺癌131碘治疗中的应用》、《开展减孔腹腔镜及类-NOTES大肠癌手术》以及《剑突下单孔腹腔镜微创手术在前纵膈肿瘤切除的应用》等六项“重大
            科技进步奖”奖项，每个项目组分别获得了3万元人民币的重头奖励。
      </div>
      <div class="word1">
            对于医院对科技功臣的重头奖励，获奖的医护人员表示：这奖励一方面是对我们曾经做出的努力肯定与褒奖，同时也是对我们今后更努力地去发奋工作
            的一种鞭策与激励。而没有获奖的医护人员则如此表示到：看到这些同事们获得真金白银式的奖励，我们的确从内心里羡慕又眼气，但从所取得的成果与业绩
            的比对，我们每个人却都打心眼里服气。我们今后所应该做的是：将对他人的羡慕，变成自己努力的动力，通过自己的勤奋，力争在新的一年里，取得与他们一样，
            甚至是超过于他们的实质性业绩。那么，在下一次的评比中，我们也一定会获得他们一样的表彰与奖励！（隋文泉）
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
      return {
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
  .content{
    width: 90%;
    margin-left: 5%
  }
  .title-word{
    font-size: 25px;
    font-weight: bold;
    margin-top: 10px;
    color: #101010;
    display: flex;
    justify-content: center;
  }
  .title-date{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color:#828282;
    margin-top: 20px;
  }
  .photo{
    display: flex;
    justify-content: center;
  }
  .pic{
    width: 340px;
    height: 223px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .word1{
    font-size: 18px;color: #101010;
    line-height: 26px;
    text-indent: 2em;
  }
</style>

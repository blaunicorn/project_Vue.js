<!--
// 引用数据
import global_ from '../assets/Global'

export default {
    data () {
      return {
        data_zxdt: global_.data_zxdt
      }
    }
}

// 导入配置文件
import global_ from './assets/Global'

Vue.prototype.GLOBAL = global_

this.GLOBAL.item

-->
<script>
  // API 访问地址
  const URL = 'https://zongyuan.yimi100.top/'   // 外网地址
  // const URL = 'http://192.168.52.121:8121/'
  // const URL = 'http://219.235.107.209:8118/'
  const VideoURL = 'http://219.235.107.209:8125/'
  // const VideoURL = 'http://219.235.107.209:8115/video/'
  const PicURL = 'https://zongyuan.yimi100.top/'
  // const PicURL = 'http://219.235.107.209:8115/pic/'
  // const sid = "12345qwe"
  const SID = window.localStorage.sid  // 全局sid变量
  export default {
    URL,
    VideoURL,
    PicURL,
    SID
  }
</script>


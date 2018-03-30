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
  const URL = 'https://appserver.dqt.com.cn/'   // 外网地址
  // const URL = 'http://192.168.52.121:8121/'
  // const URL = 'http://219.235.107.209:8118/'
  const VideoURL = 'http://219.235.107.209:8115/video/'
  const PicURL = 'http://219.235.107.209:8115/pic/'

  export default {
    URL,
    VideoURL,
    PicURL
  }
</script>


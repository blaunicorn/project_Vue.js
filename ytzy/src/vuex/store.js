import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    position: 0,
    photo_position: 0,
    from_home: true,
    loading: false,
    isShowTabbar: true,
    loginInfo: {
      avatarUrl: null,
      id: null,
      loginname: '',
      accessToken: ''
    },
    direction: 'forward',
    isAgainLoading: false
  },
  mutations: {
    SAVE_POSITION (state, p) {
      state.position = p
    },
    SAVE_PHOTO_POSITION (state, p) {
      state.photo_position = p
    },
    SAVE_FROMHOME (state, p) {
      state.from_home = p
    }
  }
})

export default store

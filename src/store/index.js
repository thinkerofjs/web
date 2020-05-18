import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      count: 1,
      nav: 1,
      login: false,
      isAuthor: false,
      username:"",
      pseudonym:""
    },
    mutations: {
      increment (state) {
        state.count++
      },
      changeNav (state, param) {
        state.nav = param
      },
      //是否是作者状态
      infoAuthor(state, param){
        state.isAuthor = param;
      },
      //判断是否登陆
      changeinfoLogin (state, param) {
        state.login = param
      },
      //得到账户名字
      getUserName (state, param) {
        state.username = param
      },
      getpseudonym (state,param) {
        state.pseudonym = param
      },
    }
  })

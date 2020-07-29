import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        language:'', // 语言
        langageLocalStrageKey:'pageLanage' //存储在缓存中的key
    },
    mutations:{
        CHANGE_LANGE(state,language){
            // 状态语言参数修改
            state.language = language
            // 缓存修改
            localStorage.setItem(state.langageLocalStrageKey, language)
        }
    }
})

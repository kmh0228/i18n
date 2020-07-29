
import Vue from 'vue'
import I18n from 'vue-i18n'
import example from './language/example_zmq'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhCNLocale from 'element-ui/lib/locale/lang/zh-CN'
import zhTWLocale from 'element-ui/lib/locale/lang/zh-TW'
import store from '../store'
// vue使用i18n组件
Vue.use(I18n)
// 根据缓存获取默认的系统语言
let defaultLange = localStorage.getItem(store.state.langageLocalStrageKey) || 'zh-CN'
// 设定store状态信息和缓存中的语言
store.commit('CHANGE_LANGE',defaultLange)

// en/zh-cn/zh-tw 为自定义的语言key，这里用到这三个是因为与elementui同步，可以引入elementui中的语言
let messages = {
  'en':{
    ...example.en,
    ...enLocale
  },
  'zh-CN':{
    ...example['zh-CN'],
    ...zhCNLocale
  },
  'zh-TW':{
    ...example['zh-TW'],
    ...zhTWLocale

  }
}
console.log('i18n.messages',messages)
export default new I18n({
  locale:defaultLange,
  messages:messages
})


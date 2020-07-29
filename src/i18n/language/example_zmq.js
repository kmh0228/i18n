/** 这是个例子，方便简化开发，开发完成后可统一把此文件的result字符串化，然后放入到此文件中&export defalut */

import { traditional } from 'jian_fan'
let language = {
  thisIsI18nKey: {
    'en':'Can\'t you understand English reading? Mobile phone word taking and photo taking',
    'zhCN':'英语阅读看不懂？手机取词 拍照秒变翻译'
  }
}
// 格式化 & export
let en = {}
let zhCN = {}
let zhTW = {}
let keys = Object.keys(language)
keys.forEach(e => {
  en[e] = language[e]['en']
  zhCN[e] = language[e]['zhCN']
  zhTW[e] = traditional(language[e]['zhCN'])
})
let result = { en, 'zh-CN': zhCN, 'zh-TW': zhTW }
// console.log(JSON.stringify(result))
export default result

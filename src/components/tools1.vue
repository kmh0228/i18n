<!-- 开发临时使用的工具，语言开发完成后请删除此文件和 router/index.js中第78-86行lang路径的配置-->
<!-- 输入框输入文字，自动筛选出已经配置好的配置。点击表格内容自动复制表格内内容 -->
<template>
  <div>
    <el-row style="margin-top:20px;">
      <el-col :span="8" :offset="8">
        <el-input label="请输入名词" v-model="name" @focus="focus"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4">
        <el-table :data="mlist" @cell-dblclick="cellDbClick">
          <el-table-column :prop="'key'" label="KEY"></el-table-column>
          <el-table-column :prop="'zhcn'" label="中文简体"></el-table-column>
          <el-table-column :prop="'zhtw'" label="中文繁体"></el-table-column>
          <el-table-column :prop="'en'" label="英文"></el-table-column>
          <el-table-column :prop="'js'" label="js"></el-table-column>
          <el-table-column :prop="'html'" label="html"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import i18n from '../i18n'
import XEClipboard from 'xe-clipboard'
// import axios from 'axios'
export default {
  data () {
    return {
      name: '',
      list: []
    }
  },
  computed: {
    mlist () {
      return this.list.filter(item => typeof item.zhcn === 'string' && item.zhcn.indexOf(this.name) > -1)
        .sort((a, b) => {
          let lengtha = a.zhcn.length
          let lengthb = b.zhcn.length
          if (lengtha > lengthb) { return 1 }
          if (lengtha < lengthb) { return -1 }
          return 0
        }).slice(0, 10)
    }
  },
  methods: {
    focus () {
        // 获取焦点时候自动把粘贴板的内容放进来。需要配合服务使用。kmh0228/sshs.../expr.../cli....
    //   axios.get('http://localhost:8910').then(result => {
    //     this.name = result.data
    //   })
    },
    cellDbClick (row, col) {
      let str = row[col.property]
      XEClipboard.copy(str)
      this.$notify({
        title: '复制成功',
        message: str,
        type: 'success'
      })
    }
  },
  mounted () {
    let mes = i18n.messages
    let keys = Object.keys(mes['zh-CN'])
    let lang = []
    keys.forEach(key => {
      lang.push({
        key: key,
        zhcn: mes['zh-CN'][key],
        zhtw: mes['zh-TW'][key],
        en: mes['en'][key],
        js: "$t('" + key + "')",
        html: "{{$t('" + key + "')}}"
      })
    })
    this.list = lang
  }
}
</script>

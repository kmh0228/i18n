<template>
  <div class="hello" style="position:relative;">
    <div style="position:absolute; top:20px; right:20px;">
      <select v-model="language" @change="change">
        <option value="en">英文</option>
        <option value="zh-CN">中文</option>
        <option value="zh-TW">繁体中文</option>
      </select>
    </div>
    <span style="display:block; margin-top:50px; text-align:center;">
        {{$t('thisIsI18nKey')}}
    </span>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      language:this.$store.state.language,
      msg: 'thisIsI18nKey'
    }
  },
  
  methods:{
    ...mapMutations([
      'CHANGE_LANGE'
    ]),
    change(){
      this.CHANGE_LANGE(this.language)
      this.$i18n.locale = this.language
    }
  },
  mounted(){
    
  }
}
</script>
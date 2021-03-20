<template>
  <div class="home">
    <Banner :lineList="navDataPP"></Banner>
    <!-- 邮轮品牌 -->
    <HeadModuleTit class="container" tit="邮轮品牌" enTit="Cruise brand"/>
    <HeadModulePPTab :navData="navDataPP"  moreName="更多邮轮公司" moreLink="company"></HeadModulePPTab>
    
    <!-- 邮轮百科 -->
    <HeadModuleTit class="container" tit="邮轮百科" enTit="Cruise encyclopedia"/>
    <HeadModuleBKTab :navData="navDataBK" moreName="更多百科内容" moreLink="bkcruise"></HeadModuleBKTab>

    <!-- 港口城市 -->
    <HeadModuleTit class="container" tit="港口城市" enTit="The port city of"/>
    <HeadModuleCHTab :navData="navDataGK" moreName="更多港口城市" moreLink="gkcity"></HeadModuleCHTab>

    <!-- 邮轮游记 -->
    <HeadModuleTit class="container" tit="邮轮游记" enTit="Cruise travel"/>
    <HeadModuleYJTab :navData="navDataYJ" moreName="更多游记内容" moreLink="comingSoon"></HeadModuleYJTab>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
// 模块名称
import HeadModuleTit from '../components/HeadModuleTit.vue'
// 品牌
import HeadModulePPTab from '../components/HeadModulePPTab.vue'
// 百科
import HeadModuleBKTab from '../components/HeadModuleBKTab.vue'
// 港口城市
import HeadModuleCHTab from '../components/HeadModuleCHTab.vue'
// 游记
import HeadModuleYJTab from '../components/HeadModuleYJTab.vue'
let Base64 = require('js-base64').Base64

export default {
  name: 'home',
  data() {
    return {
      navDataPP: [],
      navDataBK:[],
      navDataGK: [],
      navDataYJ:[],
    }
  },
  mounted(){
    this.getPPnav()
    this.getBKYJnav(1)
    this.getBKYJnav(2)
    this.getGKnav()
  },
  components: {
    Banner,
    HeadModuleTit,
    HeadModulePPTab,
    HeadModuleBKTab,
    HeadModuleCHTab,
    HeadModuleYJTab
  },
  methods: {
    // 邮轮品牌
    getPPnav(){
      this.$http.get('/API/index.ashx?command=GetShipCompany').then(function (res) {
        res.body = this.formatterNavVal(res.body, 'shipcompany')
        this.navDataPP = res.body
      })
    },
    //港口城市
    getGKnav(){
      this.$http.get('/API/index.ashx?command=GetAreaCity').then(function (res) {
        res.body.list = this.formatterNavVal(res.body.list, 'areaname')
        if(res.body && res.body.list){
          for(var i=0; i<res.body.list.length; i++){
            res.body.list[i].description = Base64.decode(res.body.list[i].description)
          }
        }
        this.navDataGK = res.body.list
      })
    },
    // 百科。。。。游记（1-百科，，2游记）1
    getBKYJnav(type){
      this.$http.get('/API/index.ashx?command=GetCategoryByCategoryId&categoryid='+type).then(function (res) {
        res.body = this.formatterNavVal(res.body, 'category')
        if(type == 1){
          this.navDataBK = res.body
        }else if(type == 2){
          this.navDataYJ = res.body
        }
        
      })
    },
    // 格式化数据
    formatterNavVal(data, showName){
      for(var i=0; i<data.length; i++){
        if(data[i].id) data[i].id = data[i].id.toString();
        data[i].name = data[i][showName]
      }
      return data;
    }
  }
}
</script>

<style lang="scss">

</style>

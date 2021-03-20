<template>
  <div class="HeadModuleBKTab">
    <div class="container linkbox">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane 
          v-for="(item, index) in navData" 
          :key="index+1"
          :label="item.name" 
          :name="item.id"
        >
          <HeadModuleBK :contInfoBK="contInfoBK"></HeadModuleBK>
        </el-tab-pane>
      </el-tabs>

      <div class="link">
        <router-link :to="moreLink">{{moreName}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// 百科
import HeadModuleBK from './HeadModuleBK.vue'
export default {
  name: 'HeadModuleBKTab',
  props: {
    navData: Array,
    moreName: String,
    moreLink: String
  },
  data() {
    return {
      activeName: '3',
      activeIndex: '1',
      activeIndex2: '1',
      contInfoBK: []
    };
  },
  mounted(){
    this.getConInfo(this.activeName)
  },
  methods: {
    handleClick(tab) {
      this.getConInfo(this.activeName)
    },
    // 根据分类id获取内容
    getConInfo(categoryid){
      if(!categoryid) return;
      this.$http.get('/API/index.ashx?command=GetArticleByCategoryId&categoryid='+categoryid).then(function (res) {
        this.contInfoBK = res.body
      })
    }
  },
  components: {
    HeadModuleBK
  }
}
</script>
<style lang="scss">
.HeadModuleBKTab{
  .el-tabs__item.is-active{
    color: #ee6b03;
  }
  .el-tabs__item:hover{
    color: #ee6b03;
  }
  .el-tabs__active-bar{
    border-bottom: 3px solid #ee6b03;
  }

  .linkbox{
    position: relative;
    .el-tabs__header{
      max-width: 1050px;
    }

    .link{
      text-align: right;
      color:#333333;
      height: 40px;
      line-height: 40px;
      position:absolute;
      right: 0;
      top: 0;
      border-bottom:2px solid #E4E7ED;
      width: 200px;
      a{
        color:#333333;
        padding-right:22px;
        position: relative;
        &::before{
          content: '';
          position: absolute;
          right: 0;
          top: 2px;
          width: 15px;
          height:15px;
          background: url("../assets/img/header/right.png") no-repeat;
          background-size: 12px;
        }
      }
    }
  }

  
  @media screen and (max-width: 750px) {
    .linkbox{
      .el-tabs__header{
        max-width: 360px;
      }
    }
  }
}
</style>

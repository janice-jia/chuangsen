<template>
  <div class="HeadModuleNav">
    <el-row>
      <el-col :span="16">
        <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item v-for="(item, index) in navData" :index="index+1" :key="index">{{item.name}}</el-menu-item>
        </el-menu> -->
      </el-col>
      <el-col :span="8">
        <div class="link">
          <router-link :to="moreLInk">{{moreName}}</router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 品牌
import HeadModulePP from './HeadModulePP.vue'
export default {
  name: 'HeadModuleNav',
  props: {
    navData: Array,
    moreName: String,
    moreLInk: String
  },
  data() {
    return {
      activeName: 'first',
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
    HeadModulePP
  }
}
</script>
<style lang="scss">
.HeadModuleNav{
  border-bottom: 1px solid #e5e5e5;
  margin: 80px 0 60px 0;
  margin-bottom: 30px!important;
  max-width: 100%;
  .el-menu--horizontal{
    border: none!important;
  }
  .el-menu{
    background: none;
    border: none;
    height: 60px;
    overflow: hidden;
    .el-menu-item.is-active{
      border-bottom: 3px solid #ee6b03;
    }
  }
  .link{
    text-align: right;
    color:#333333;
    line-height: 60px;
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
</style>

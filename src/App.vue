<template>
  <div id="app">
    <el-container>
      <el-header>
        <!-- 头部 -->
        <Header></Header>
      </el-header>
      <!-- banner -->
      <!-- 主体 -->
      <!-- <el-main> -->
        <!-- <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link> -->
      <!-- </el-main> -->
      
    </el-container>
    <router-view/>
    <!-- 尾部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped lang="scss">
  .el-header{
    height: 45px!important;
  }
</style>


<template>

<div class="cs-header">
    <div class="container"> 
    <el-row>
        <el-col :span="6">
          <div class="logo">
            <img src="../assets/logo.png" alt="">
          </div>
        </el-col>
        <el-col :span="14">
          <el-row type="flex" class="row-bg" justify="center">
            <!-- pc菜单 -->
            <div class="pcMenu">
              <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1"><router-link to="home" active-class="activeClass">Apple 与教育</router-link></el-menu-item>
                <el-submenu index="2">
                  <template slot="title">基础教育</template>
                  <el-menu-item index="2-1"><router-link to="BasicEduTeacherLeader" active-class="activeClass">学校领导力</router-link></el-menu-item>
                  <el-menu-item index="2-2"><router-link to="BasicEduTeacherTraining" active-class="activeClass">教师培训</router-link></el-menu-item>
                  <el-menu-item index="2-3"><router-link to="BasicEduTeacherResource" active-class="activeClass">教师资源</router-link></el-menu-item>
                  <el-menu-item index="2-4"><router-link to="home" active-class="activeClass">家长</router-link></el-menu-item>
                  <el-menu-item index="2-5"><router-link to="home" active-class="activeClass">IT服务</router-link></el-menu-item>
                  <el-menu-item index="2-6"><router-link to="home" active-class="activeClass">解决方案</router-link></el-menu-item>
                  <el-menu-item index="2-7"><router-link to="home" active-class="activeClass">成功案例</router-link></el-menu-item>
                </el-submenu>
                <!-- <el-menu-item index="2"><router-link to="company" active-class="activeClass">基础教育</router-link></el-menu-item> -->
                <el-menu-item index="3"><router-link to="YLairline" active-class="activeClass">高等教育</router-link></el-menu-item>
                <el-menu-item index="4"><router-link to="AboutUs" active-class="activeClass">关于我们</router-link></el-menu-item>
                <el-menu-item index="5"><router-link to="ContactUs" active-class="activeClass">联系我们</router-link></el-menu-item>
              </el-menu>
            </div>
          </el-row>
        </el-col>
        <el-col :span="4">
          <div class="dealers">
            <img src="../assets/dealers.png" alt="">
          </div>
        </el-col>
    </el-row>
    <div class="LanguageSelection">
      <span class="hover">CN</span>
      <span class="interval">|</span>
      <span>EN</span>
    </div>
    </div>
</div>
     
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      // 侧栏菜单显示状态
      drawer: false,
      // 侧栏菜单方向，，，从右往左开
      direction:'rtl',
      activeIndex: '1'
    }
  },
  mounted(){
    this.getRouterIndex()
  },
  methods: {
    getRouterIndex(){
      if(this.$route.name == 'AboutUs') this.activeIndex = '4'
      if(this.$route.name == 'ContactUs') this.activeIndex = '5'
      if(this.$route.name == 'BasicEduTeacherTraining' || this.$route.name == 'BasicEduTeacherResource') this.activeIndex = '2'
    },
    handleSelect(v){
      this.activeIndex = v
    }
  }
}
</script>
<style lang="scss">
// 导航

</style>
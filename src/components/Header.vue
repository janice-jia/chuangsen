<template>

<div class="cs-header">
    <div class="container" id="web"> 
      <el-row >
          <el-col :span="8">
            <div class="logo">
              <router-link to="home">
                <!-- <img src="../assets/logo-apple.png" alt=""> -->
              </router-link>
            </div>
          </el-col>
          <el-col :span="16">
            <el-row type="flex" class="row-bg" justify="end">
              <!-- pc菜单 -->
              <div class="pcMenu">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @open="handleOpen" @select="handleSelect">
                  <el-menu-item index="1"><router-link to="home" active-class="activeClass">Apple 与教育</router-link></el-menu-item>
                  <el-submenu index="2">
                    <template slot="title">基础教育</template>
                    <el-menu-item index="2-1"><router-link to="BasicEduTeacherLeader" active-class="activeClass">学校领导力</router-link></el-menu-item>
                    <el-menu-item index="2-2"><router-link to="BasicEduTeacherTraining" active-class="activeClass">教师培训</router-link></el-menu-item>
                    <el-menu-item index="2-3"><router-link to="BasicEduTeacherResource" active-class="activeClass">教师资源</router-link></el-menu-item>
                    <el-menu-item index="2-4"><router-link to="BasicEduParents" active-class="activeClass">家长</router-link></el-menu-item>
                    <el-menu-item index="2-5"><router-link to="BasicEduIT" active-class="activeClass">IT服务</router-link></el-menu-item>
                    <el-menu-item index="2-6"><router-link to="BasicEduSolution" active-class="activeClass">解决方案</router-link></el-menu-item>
                    <el-menu-item index="2-7"><router-link to="BasicEduSuccessCases" active-class="activeClass">成功案例</router-link></el-menu-item>
                  </el-submenu>
                  <!-- <el-menu-item index="2"><router-link to="company" active-class="activeClass">基础教育</router-link></el-menu-item> -->
                  <el-submenu index="3">
                    <template slot="title">高等教育</template>
                    <el-menu-item index="3-1"><router-link to="Protrain" active-class="activeClass">专业培训</router-link></el-menu-item>
                    <el-menu-item index="3-2"><router-link to="iOSCourse" active-class="activeClass">iOS 课程</router-link></el-menu-item>
                    <el-menu-item index="3-3"><router-link to="iOSClub" active-class="activeClass">iOS 俱乐部</router-link></el-menu-item>
                    <el-menu-item index="3-4"><router-link to="iOSExperience" active-class="activeClass">校园体验中心</router-link></el-menu-item>
                  </el-submenu>
                  <!-- <el-menu-item index="3"><router-link to="YLairline" active-class="activeClass">高等教育</router-link></el-menu-item> -->
                  <el-menu-item index="4"><router-link to="AboutUs" active-class="activeClass">关于我们</router-link></el-menu-item>
                  <el-menu-item index="5"><router-link to="ContactUs" active-class="activeClass">联系我们</router-link></el-menu-item>
                </el-menu>
              </div>
            </el-row>
          </el-col>
          <!--<el-col :span="4">-->
            <!--<el-row type="flex" class="row-bg" justify="end">-->
              <!--<div class="dealers">-->
                  <!--<div class="middle">-->
                      <!--<img src="../assets/dealers-small.png" alt="">-->
                  <!--</div>-->
                <!--</div>-->
            <!--</el-row>-->
          <!--</el-col>-->
      </el-row>
    </div>

    <el-row id="ipone">
        <el-col :span="7">
          <div class="middle" @click="drawer = true" v-if="!drawer">
            <img src="../assets/img/icon-menu.png" alt="">
          </div>
          <div class="middle" @click="drawer = false" v-if="drawer">
            <img src="../assets/img/icon-close.png" alt=""></div>
        </el-col>
        <el-col :span="12">
          <div class="logo">
            <router-link to="home">
              <!-- <img src="../assets/logo-apple.png" alt=""> -->
            </router-link>
          </div>
        </el-col>
        <el-col :span="5"></el-col>
    </el-row>

    <el-drawer
      class="leftmenu"
      :visible.sync="drawer"
      direction="ltr"
      :show-close="false"
      size="100%">
      <el-row id="ipone">
          <el-col :span="7">
            <div class="middle iconmenu" @click="drawer = true" v-if="!drawer">
              <img src="../assets/img/icon-menu.png" alt="">
            </div>
            <div class="middle icoclose" @click="drawer = false" v-if="drawer">
              <img src="../assets/img/icon-close.png" alt=""></div>
          </el-col>
          <el-col :span="12">
            <div class="logo">
              <router-link to="home">
                <!-- <img src="../assets/logo-apple.png" alt=""> -->
              </router-link>
            </div>
          </el-col>
          <el-col :span="5"></el-col>
      </el-row>
      <el-menu :default-active="activeIndex" class="el-menu-demo" :unique-opened="true" @open="handleOpen" @select="handleSelect">
        <el-menu-item index="1" class="menu1n"><router-link to="home" active-class="activeClass">Apple 与教育</router-link></el-menu-item>
        <el-submenu index="2" class="menubtn">
          <template slot="title">基础教育</template>
          <el-menu-item index="2-1"><router-link to="BasicEduTeacherLeader" active-class="activeClass">学校领导力</router-link></el-menu-item>
          <el-menu-item index="2-2"><router-link to="BasicEduTeacherTraining" active-class="activeClass">教师培训</router-link></el-menu-item>
          <el-menu-item index="2-3"><router-link to="BasicEduTeacherResource" active-class="activeClass">教师资源</router-link></el-menu-item>
          <el-menu-item index="2-4"><router-link to="BasicEduParents" active-class="activeClass">家长</router-link></el-menu-item>
          <el-menu-item index="2-5"><router-link to="BasicEduIT" active-class="activeClass">IT服务</router-link></el-menu-item>
          <el-menu-item index="2-6"><router-link to="BasicEduSolution" active-class="activeClass">解决方案</router-link></el-menu-item>
          <el-menu-item index="2-7"><router-link to="BasicEduSuccessCases" active-class="activeClass">成功案例</router-link></el-menu-item>
        </el-submenu>
        <!-- <el-menu-item index="2"><router-link to="company" active-class="activeClass">基础教育</router-link></el-menu-item> -->
        <el-submenu index="3" class="menubtn">
          <template slot="title">高等教育</template>
          <el-menu-item index="3-1"><router-link to="Protrain" active-class="activeClass">专业培训</router-link></el-menu-item>
          <el-menu-item index="3-2"><router-link to="iOSCourse" active-class="activeClass">iOS 课程</router-link></el-menu-item>
          <el-menu-item index="3-3"><router-link to="iOSClub" active-class="activeClass">iOS 俱乐部</router-link></el-menu-item>
          <el-menu-item index="3-4"><router-link to="iOSExperience" active-class="activeClass">校园体验中心</router-link></el-menu-item>
        </el-submenu>
        <!-- <el-menu-item index="3"><router-link to="YLairline" active-class="activeClass">高等教育</router-link></el-menu-item> -->
        <el-menu-item index="4" class=""><router-link to="AboutUs" active-class="activeClass">关于我们</router-link></el-menu-item>
        <el-menu-item index="5" class="menu1"><router-link to="ContactUs" active-class="activeClass">联系我们</router-link></el-menu-item>
      </el-menu>
    </el-drawer>

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
      activeIndex: '1',
      drawer: false
    }
  },
  mounted(){
    this.getRouterIndex()
  },
  methods: {
    getRouterIndex(){
      if(this.$route.name == 'home') this.activeIndex = '1'
      if(this.$route.name == 'AboutUs') this.activeIndex = '4'
      if(this.$route.name == 'ContactUs') this.activeIndex = '5'
      if(this.$route.name == 'BasicEduTeacherLeader') this.activeIndex = '2-1'
      if(this.$route.name == 'BasicEduTeacherTraining') this.activeIndex = '2-2'
      if(this.$route.name == 'BasicEduTeacherResource') this.activeIndex = '2-3'
      if(this.$route.name == 'BasicEduParents') this.activeIndex = '2-4'
      if(this.$route.name == 'BasicEduIT') this.activeIndex = '2-5'
      if(this.$route.name == 'BasicEduSolution') this.activeIndex = '2-6'
      if(this.$route.name == 'BasicEduSuccessCases') this.activeIndex = '2-7'
      

      if(this.$route.name == 'Protrain') this.activeIndex = '3-1'
      if(this.$route.name == 'iOSCourse') this.activeIndex = '3-2'
      if(this.$route.name == 'iOSClub') this.activeIndex = '3-3'
      if(this.$route.name == 'iOSExperience') this.activeIndex = '3-4'
    },
    handleOpen(key, keyPath) {
      console.log(11);
    },
    handleSelect(v){
      console.info('aa',v)
      this.activeIndex = v
      this.drawer = false
    }
  },
  watch: {
    $route() {
      this.getRouterIndex();
    }
  },
}
</script>
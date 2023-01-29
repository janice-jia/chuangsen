<template>
  <div class="studentClub">
    <div class="con1">
      <div class="container">
        <div class="tit">学生俱乐部</div>
        <div class="desc">
          <p>Apple 提供了两类社团，一类是针对开发的 iOS Club，</p>
          <p>一类是针对数字创意的 iCreate Club。</p>
          <p>Apple官方学生俱乐部，为学生营造分享和交流的空间，</p>
          <p>让我们每个学生都能在这种氛围下，激发更大的想象力，</p>
          <p>一起协作完成各种天马行空的作品。</p>
        </div>
        <div class="img">
          <img src="../assets/img/0123/club_01.png" alt="">
        </div>
      </div>
    </div>

    <div class="con2">
      <div class="container">
        <div class="tit">学生俱乐部活动形式如下：</div>
        <el-row :gutter="25">
          <el-col :xs="16" :sm="16" :md="8" :lg="8" :xl="8">
            <img src="../assets/img/0123/club_02.png" alt="">
          </el-col>
          <el-col :xs="16" :sm="16" :md="8" :lg="8" :xl="8">
            <img src="../assets/img/0123/club_03.png" alt="">
          </el-col>
          <el-col :xs="16" :sm="16" :md="8" :lg="8" :xl="8">
            <img src="../assets/img/0123/club_04.png" alt="">
          </el-col>
        </el-row>
        <div class="tit tit2">学生俱乐部活动丰富</div>
        <div class="img">
          <img src="../assets/img/0123/club_05.png" alt="">
        </div>
      </div>
    </div>

    <div class="con3">
      <div class="container">
        <div class="tit">苹果生态实习资源</div>
        <div class="img">
          <img src="../assets/img/0123/club_06.png" alt="">
        </div>
      </div>
    </div>
    <div class="cs-page">
      <router-link to="home" active-class="activeClass">首页</router-link>
      <router-link to="iOSCourse" active-class="activeClass">上一页</router-link>
      <router-link to="iOSExperience" active-class="activeClass">下一页</router-link>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  name:'studentClub',
  data() {
    return {
    }
  },
  mounted(){
  },
  methods: {
    
  }
}
</script>
<style lang="scss">
.studentClub{
  font-family: '苹方-简';
  .con1{
    .tit{
      font-size: 58px;
      color: #000;
      text-align: center;
      margin-top: 110px;
      margin-bottom: 45px;
    }
    .desc{
      text-align: center;
      font-size: 24px;
      color: #000;
      font-weight: 300;
      line-height: 46px;
    }
    .img{
      padding: 65px 0 110px 0;
      text-align: center;
    }
  }
  .con2{
    background: #fff;
    padding-top: 95px;
    .tit{
      text-align: center;
      font-size: 40px;
      margin: 0 0 65px 0;
    }
    .tit2{
      margin-top: 90px;
    }
    .img{
      text-align: center;
    }
  }
  .con3{
    padding-top: 95px;
    padding-bottom: 65px;
    .tit{
      text-align: center;
      font-size: 40px;
      margin: 0 0 65px 0;
    }
    .img{
      text-align: center;
    }
  }

  .line{
      height: 1px;
      border-top: 1px solid #d6d6d6;
  }
}
</style>

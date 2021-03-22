<template>
  <div class="cs-BasEduTeaTrain">
    <!-- 教师培训 -->
    <div class="cs-BasEduTeaTrain-part1">
      <div class="container">
        <h1>教师培训</h1>
        <p class="desc">创森与具有苹果教学经验的教育工作者和优秀的领导团队合作，以创新为重点，为教师提供技术培训、指导和支持，从而帮助教师激发学生兴趣，让学生快乐学习。</p>
        <p class="dingzhi">定制教师培养课程：</p>
        <el-row type="flex" justify="center">
          <el-col :span="6">
            <div class="dz-item">
              <div class="dz-item-img"><img src="../assets/img/icon-teacherTrain-1.png" alt=""></div>
              <p>学校领导力及规划的支持</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="dz-item">
              <div class="dz-item-img"><img src="../assets/img/icon-teacherTrain-2.png" alt=""></div>
              <p>各学科探索型学习体验的指导</p>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="dz-item">
              <div class="dz-item-img"><img src="../assets/img/icon-teacherTrain-2.png" alt=""></div>
              <p>苹果编程课程指导</p>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="dz-item">
              <div class="dz-item-img"><img src="../assets/img/icon-teacherTrain-4.png" alt=""></div>
              <p>项目式学习的教学探索</p>
            </div>
          </el-col>
        </el-row>
        <a href="" class="more">点击了解 教育工作者个人购买优惠 <span class="el-icon-arrow-right"></span></a>
      </div>
    </div>
    <!-- 学习工具 -->
    <div class="cs-BasEduTeaTrain-part2">
      <div class="container">
          <p style="padding:95px 0 68px 0">学习工具</p>
          <img src="../assets/img/icon-teacherTrain-5.png" alt="">
          <p style="margin:40px 0 55px 0">课堂 App Classroom</p>
          <div class="con">
            • 教师通过自己的 iPad/Mac 巡视学生 iPad 屏幕，查看学生学习内容<br>
            • 单人/群体导航至特定网页、书籍或 App<br>
            • 可以将学生 iPad 锁定为仅限使用一个 App<br>
            • 将学生设备锁屏/静音，保持学生的课堂专注力<br>
          </div>
          <img src="../assets/img/teacherTrain-1.jpg" alt="" style="margin:80px 0 0 0">
          <p style="margin:170px 0 75px 0">iPad 学习及教学类应用</p>
          <img src="../assets/img/teacherTrain-2.jpg" alt="">
          <p style="margin:123px 0 74px 0">Apple 教育类免费 App</p>
          <img src="../assets/img/teacherTrain-3.jpg" alt="">
          <p style="margin:123px 0 74px 0">第三方教育类 App</p>
          <img src="../assets/img/teacherTrain-4.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'BasicEduTeacherTraining',
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
.cs-BasEduTeaTrain{
  border-bottom: 1px solid #D6D6D6;
  .cs-BasEduTeaTrain-part1{
    height: 890px;
    background: #f5f5f7;
    text-align: center;
    padding: 115px 0 0 0;
    .container{
      h1{
        font-size: 58px;
        font-weight: 600;
        color: #000000;
        line-height: 76px;
      }
      p.desc{
        width: 920px;
        font-size: 24px;
        font-weight: 400;
        color: #000000;
        line-height: 46px;
        margin: 56px auto;
      }
      p.dingzhi{
        font-size: 32px;
        font-weight: 600;
        color: #010101;
        line-height: 38px;
        margin: 10px 0 70px 0;
      }
      .dz-item{
        display: table-cell;
        vertical-align: middle;
        height: 150px;
        text-align: center;
        .dz-item-img{
          height: 73px;
        }
        p{
          font-size: 24px;
          font-weight: 400;
          color: #333333;
          line-height: 30px;
          margin-top: 43px;
          margin-bottom: 51px;
        }
      }
      .more{
        font-size: 26px;
        font-weight: 400;
        color: #0071E3;
        line-height: 30px;
      }
    }
  }
  .cs-BasEduTeaTrain-part2{
    background: #FFFFFF;
    padding: 0 0 108px 0;
    .container{
      text-align: center;
      p{
        font-size: 40px;
        font-weight: 600;
        color: #000000;
        line-height: 38px;
      }
      .con{
        margin: 0 auto;
        width: 753px;
        text-align: left;
        font-size: 24px;
        font-weight: 400;
        color: #000000;
        line-height: 46px;
      }
    }
  }
}
</style>

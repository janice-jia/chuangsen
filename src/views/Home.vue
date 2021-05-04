<template>
  <div class="cs-home">
    <!-- Apple 与教育 -->
    <div class="cs-home-part1">
      <div class="container">
        <div class="tit">Apple 与教育。</div>
        <div class="cs-home-con">
          <p class="subtitle">“教育是深深根植于 Apple 的 DNA。” </p>
          <p class="con">Apple 致力于打造高科技与创造力的教育生态系统，通过功能强大的硬件产品与精彩纷呈的 APP 软件以及丰富多样的学习资源，将科技创新带进课堂，为学校、老师、家长和学生，提供高效全面的教学服务。</p>
          <p class="con">创森智云作为 AAES（Apple Authorised Education Specialist）——苹果授权教育专家，携手 Apple 为我国各类中小学校、高等院校提供客制化的教育解决方案和全生命周期服务。</p>
        </div>
      </div>
    </div>
    <!-- 基础教育，，高等教育 -->
    <div class="cs-home-part2">
      <div class="container">
        <el-row :gutter="60">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-card :body-style="{ padding: '0px' ,textAlign: 'center'}">
              <img src="../assets/img/cs-home-2.jpg" class="image">
              <div class="img-tit">
                <span class="tit">基础教育</span>
                <div class="bottom clearfix">
                  <router-link to="BasicEduTeacherLeader">
                    <el-button type="text" class="button">进一步了解 <span class="el-icon-arrow-right"></span></el-button>
                  </router-link>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-card :body-style="{ padding: '0px' ,textAlign: 'center'}">
              <img src="../assets/img/cs-home-3.jpg" class="image">
              <div class="img-tit">
                <span class="tit">高等教育</span>
                <div class="bottom clearfix">
                  <router-link to="Protrain">
                    <el-button type="text" class="button">进一步了解 <span class="el-icon-arrow-right"></span></el-button>
                  </router-link>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  
    <!-- 即刻登入 -->
    <div class="cs-home-part3">
        <div class="container">
          <div class="con">
            <div class="tit">即刻登入，享受校园优惠</div>
            <div class="button">
              <a href="http://www.mac4me.com/" target="_blank">开始选购
                <span class="el-icon-arrow-right"></span>
              </a>
            </div>
            <div style="clear:both"></div>
            <img src="../assets/img/cs-home-4.png" alt="">
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
    }
  },
  mounted(){
  },
  components: {
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .cs-home{
    .cs-home-part1{
      text-align: center;
      height: 1120px;
      background: url(../assets/img/cs-home-1.jpg) no-repeat bottom #fff;
      background-size:100% auto;
      .cs-home-con{
        // width: 930px;
        margin: 0 auto;
      }
      .tit{
        padding: 110px 0 50px 0;
      }
      .subtitle{
        padding-bottom: 10px;
      }
      .con{
        letter-spacing: 0.2px;
        text-indent: 0;
        text-align: justify;
        &:last-child{
          margin-top: 40px;
        }
      }
    }
    // 基础教育--高等教育
    .cs-home-part2{
      padding: 85px 0;
      overflow: hidden;
      .image {
        width: 100%;
        height: 350px;
        display: block;
      }
      .el-card,.el-card__body{
        border-radius: 22px;
      }
      .img-tit{
        width: 560px;
        height: 190px;
        background-color: #fff;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        span.tit{
          font-size: 40px;
          font-weight: 600;
          color: #000000;
        }
        .button span{
          font-size: 22px;
          font-weight: 400;
          color: #0071E3;
        }
      }
    }
    // 即刻登入
    .cs-home-part3{
      background: #fff;
      padding: 20px 0 120px 0;
      img{
        max-width: 100%;
      }
      @media screen and (max-width: 750px) {
          img{
            max-width: 75%;
          }
      }
      .con{
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        .tit{
          font-size: 40px;
          font-weight: 600;
          color: #000000;
          padding: 78px 0 40px 0;
        }
        .button{
          width: 240px;
          height: 76px;
          background: #0071E3;
          border-radius: 38px;
          display: inline-block;
          margin-bottom: 55px;
          a{
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 76px;
            font-size: 28px;
            font-weight: 400;
            color: #FFFFFF;
          }
        }
      }
    }
  }

// 适配
@media screen and (max-width: 768px) {
  .cs-home .cs-home-part2 .el-card{
    &:first-child{
      margin-bottom: 80px;
    }
  }
}
</style>

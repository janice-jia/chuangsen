<template>
  <div class="iOSExperience">

    <!-- 这部分废弃啦 5555 -->
    <!-- <div class="cs-iOSExp-part1">
      <div class="container">
        <h1>校园体验中心</h1>
        <div class="item item-1">
          <el-row>
            <el-col :span="12">
              <div class="con">
                <img src="../assets/img/icon-exper-1.png" alt="">
                <h2>汉口学院Apple体验中心</h2>
                <p>湖北武汉市江夏区大桥新区街道金樱街文化大道汉口学院北门梧桐雨Apple体验中心</p>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="img">
                <img src="../assets/img/cs-exper-1.jpg" alt="">
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="item item-2">
          <el-row>
            <el-col :span="12">
              <div class="img">
                <img src="../assets/img/cs-exper-2.jpg" alt="">
              </div>
            </el-col>
            <el-col :span="12">
              <div class="con">
                <img src="../assets/img/icon-exper-2.png" alt="">
                <h2>武汉大学Apple体验中心</h2>
                <p>湖北武汉市武昌区珞珈山街道东湖南路8号武汉大学工程创新与实践中心1104室</p>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="item-3">
          <h1 style="font-size:40px">即刻登入，享受校园优惠</h1>
          <div class="button">
            <a href="">开始选购 
              <span class="el-icon-arrow-right"></span>
            </a>
          </div>
          <img src="../assets/img/cs-home-4.png" alt="">
          <h1 style="font-size:40px">微信小程序，也能轻松购买</h1>
          <img src="../assets/img/cs-exper-3.jpg" alt="" style="margin-bottom:67px;">
        </div>
      </div>
    </div> -->
  
    <div class="cs-iOSExp-part2">
      <div class="container">
        <h1>校园体验中心</h1>
        <!-- 第一行 -->
        <el-row :gutter="60">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="itembox">
              <div class="img">
                <img src="../assets/img/cs-exper-4.jpg" alt="">
              </div>
              <div class="con">
                <img src="../assets/img/icon-exper-3.png" alt="">
                <p class="p1">汉口学院 Apple 校园体验中心</p>
                <p class="p2">湖北武汉市江夏区大桥新区街道金樱街文化大道汉口学院北门梧桐雨 Apple 校园体验中心</p>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="itembox">
              <div class="img">
                <img src="../assets/img/cs-exper-5.jpg" alt="">
              </div>
              <div class="con">
                <img src="../assets/img/icon-exper-4.png" alt="">
                <p class="p1">武汉大学 Apple 校园体验中心</p>
                <p class="p2">湖北武汉市武昌区珞珈山街道东湖南路8号武汉大学工程创新与实践中心1104室 </p>
              </div>
            </div>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="60">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="itembox">
              <div class="img">
                <img src="../assets/img/logo/store_hbqcgyxy.jpeg" alt="">
              </div>
              <div class="con">
                <img src="../assets/img/logo/hbqcgyxy.png" alt="" style="width:240px">
                <p class="p1">湖北汽车工业学院 Apple 校园体验中心</p>
                <p class="p2">湖北省十堰市张湾区车城西路167号湖北汽车工业学院逸夫图书馆一层 Apple 校园体验中心</p>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="itembox">
              <div class="img">
                <img src="../assets/img/logo/store_zncjzfdx.jpeg" alt="">
              </div>
              <div class="con">
                <img src="../assets/img/logo/zncjzfdx.png" alt="" style="width:240px">
                <p class="p1">中南财经政法大学 Apple 校园体验中心</p>
                <p class="p2">湖北省武汉市东湖高新技术开发区南湖大道182号中南财经政法大学图书馆2楼 Apple 校园体验中心 </p>
              </div>
            </div>
          </el-col>
        </el-row>

        <!-- 第三行 -->
        <el-row :gutter="60">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="itembox">
              <div class="img">
                <img src="../assets/img/logo/store_ytdx.jpeg" alt="">
              </div>
              <div class="con">
                <img src="../assets/img/logo/ytdx.png" alt="" style="width:240px">
                <p class="p1">烟台大学 Apple 校园体验中心</p>
                <p class="p2">山东省烟台市莱山区清泉路30号烟台大学北校区天猫校园2层 Apple 校园体验中心</p>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="itembox">
              <div class="img">
                <img src="../assets/img/logo/store_lzdx.jpeg" alt="">
              </div>
              <div class="con">
                <img src="../assets/img/logo/lzdx.png" alt="" style="width:240px">
                <p class="p1">兰州大学 Apple 校园体验中心</p>
                <p class="p2">甘肃省兰州市榆中夏官营镇兰州大学榆中校区综合体天猫超市负一楼 Apple 校园体验中心</p>
              </div>
            </div>
          </el-col>
        </el-row>

        <!-- 第四行 -->
        <el-row :gutter="60">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="itembox">
              <div class="img">
                <img src="../assets/img/logo/store_lzcjdx.jpeg" alt="">
              </div>
              <div class="con">
                <img src="../assets/img/logo/lzcjdx.png" alt="" style="width:240px">
                <p class="p1">兰州财经大学 Apple 校园体验中心</p>
                <p class="p2">甘肃省兰州市榆中县薇乐大道4号财经大学和平校区天猫超市4楼 Apple 校园体验中心</p>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          </el-col>
        </el-row>
      </div>

    </div>

    <div class="cs-page">
      <router-link to="home" active-class="activeClass">首页</router-link>
      <router-link to="studentClub" active-class="activeClass">上一页</router-link>
    </div>

  </div>
</template>
<script>
export default {
  name:'iOSExperience',
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
.iOSExperience{
   border-bottom: 1px solid #D6D6D6;
   .cs-iOSExp-part2{
     h1{
        font-size: 58px;
        font-weight: 600;
        color: #000000;
        line-height: 76px;
        padding: 115px 0 75px 0;
        text-align: center;
      }
     .itembox{
       border-radius: 22px;
       overflow: hidden;
       background: #fff;
       box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
       margin-bottom: 60px;
       img{
         max-width: 100%;
       }
     }
     .con{
       height: 270px;
       display: table-cell;
       vertical-align: middle;
       padding-left: 56px;
       .p1{
          font-size: 24px;
          font-weight: 600;
          color: #000000;
          line-height: 32px;
          margin: 33px 0 28px 0;
       }
       .p2{
          font-size: 17px;
          font-weight: 400;
          color: #333333;
          line-height: 28px;
          padding-right: 50px;
       }
     }
   }
  //  .cs-iOSExp-part1{
  //   background: #FFFFFF;
  //   h1{
  //         font-size: 58px;
  //         font-weight: 600;
  //         color: #000000;
  //         line-height: 76px;
  //         padding: 115px 0 75px 0;
  //         text-align: center;
  //     }
  //     .item{
  //       border-radius: 22px;
  //       overflow: hidden;
  //       .img{
  //         height: 500px;
  //       }
  //       .img img{
  //         width: 600px;
  //         height: 100%;
  //         float: left;
  //         overflow: hidden;
  //       }
  //       .con{
  //         padding: 0 0 0 63px;
  //         display: table-cell;
  //         vertical-align: middle;
  //         height: 500px;
  //         h2{
  //           font-size: 32px;
  //           font-weight: 600;
  //           color: #FFFFFF;
  //           line-height: 30px;
  //           margin: 45px 0 44px 0;
  //         }
  //         p{
  //             font-size: 24px;
  //             font-weight: 400;
  //             color: #FFFFFF;
  //             line-height: 38px;
  //             width: 476px;
  //         }
  //       }
  //     }
  //     .item-1{
  //       background: linear-gradient(150deg, #439BE7, #3276B5);
  //     }
  //     .item-2{
  //       margin-top: 45px;
  //       background: linear-gradient(150deg, #53A660, #3A7F64);
  //     }

  //     .item-3{
  //       text-align: center;
  //       img{
  //         max-width: 100%;
  //       }
  //       .button{
  //           width: 240px;
  //           height: 76px;
  //           background: #0071E3;
  //           border-radius: 38px;
  //           display: inline-block;
  //           margin-bottom: 55px;
  //           a{
  //             display: block;
  //             width: 100%;
  //             height: 100%;
  //             text-align: center;
  //             line-height: 76px;
  //             font-size: 28px;
  //             font-weight: 400;
  //             color: #FFFFFF;
  //           }
  //         }
  //     }
  //  }
   
   
}

// 适配
@media screen and (max-width: 1200px) {
  .iOSExperience .cs-iOSExp-part2 .con{
    .com{
      padding: 0 20px;
    }
    .el-row{
      .el-col{
        margin-top: 30px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .iOSExperience .cs-iOSExp-part2 .con{
    padding: 0 52px;
    max-width: 100%;
  }
}
</style>

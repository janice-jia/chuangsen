<template>
  <div class="BasicEduSolution">
    <!-- part1 -->
    <div class="cs-baseEduS-part1">
      <img src="../assets/img/cs-basicEduS-1.jpg" alt="">
      <div class="container">
        <div class="con">
          <h1>解决方案</h1>
          <p>移动设备全生命周期服务，<br>即从新设备采购到搭建移动化办公环境，再到设备使用期间的运维管理，直至退出使用，<br>设备整个生命期间的一站式服务。</p>
          <img class="img" src="../assets/img/icon-basicEduS-1.png" alt="">
        </div>
      </div>
    </div>
    <!-- part2 -->
    <div class="cs-baseEduS-part2">
      <h1 class="tit" style="color: #00AFF8;">设备采购</h1>
      <div class="container">
        <div class="item-1">
          <p class="p1">创森智云是 Apple 授权的教育行业一级经销商，致力于为学校提供定制化的硬件选型建议，为老师和学生提供教学和学习设备。</p>
          <p class="p2">教育价专享采购平台</p>
          <div class="button">
            <a href="">开始选购 
              <span class="el-icon-arrow-right"></span>
            </a>
          </div>
          <img src="../assets/img/cs-home-4.png" alt="">
        </div>
        <h1 class="tit" style="color: #A969D4;">设备部署</h1>
        <div class="item-2">
            <el-row type="flex" justify="space-between">
              <!-- 设备初始化 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-2.png" alt=""></div>
                <p class="icontit">设备初始化</p>
              </el-col>
              <el-col style="width: 118px;">
                <div class="iconright"><img class="img" src="../assets/img/icon-basicEduS-0.png" alt=""></div>
              </el-col>
              <!-- 软件安装 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-3.png" alt=""></div>
                <p class="icontit">软件安装</p>
              </el-col>
              <el-col style="width: 118px;">
                <div class="iconright"><img class="img" src="../assets/img/icon-basicEduS-0.png" alt=""></div>
              </el-col>
              <!-- 资产信息收集激光雕刻 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-4.png" alt=""></div>
                <p class="icontit">资产信息收集<br>激光雕刻</p>
              </el-col>
              <el-col style="width: 118px;">
                <div class="iconright"><img class="img" src="../assets/img/icon-basicEduS-0.png" alt=""></div>
              </el-col>
              <!-- 打包 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-5.png" alt=""></div>
                <p class="icontit">打包</p>
              </el-col>
              <el-col style="width: 118px;">
                <div class="iconright"><img class="img" src="../assets/img/icon-basicEduS-0.png" alt=""></div>
              </el-col>
              <!-- 运输 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-6.png" alt=""></div>
                <p class="icontit">运输</p>
              </el-col>
            </el-row>
            <div style="clear:both"></div>
        </div>
        <div class="item-3">
          <el-row :gutter="53">
            <el-col :span="12">
              <div class="img"><img src="../assets/img/cs-basicEduS-2.jpg" alt=""></div>
              <p style="color: #63CAAD;">发放和培训</p>
            </el-col>
            <el-col :span="12">
              <div class="img"><img src="../assets/img/cs-basicEduS-3.jpg" alt=""></div>
              <p style="color: #E7323A;">运维管理</p>
            </el-col>
          </el-row>
        </div>

        <div class="item-4">
          <el-row :gutter="53">
            <el-col :span="12">
              <div class="item-4-box">
                <div class="part1">
                  <el-row type="flex" justify="space-between">
                    <el-col>
                      <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-7.png" alt=""></div>
                      <p class="icontit">集中/分散发放新设备</p>
                    </el-col>
                    <el-col>
                      <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-8.png" alt=""></div>
                      <p class="icontit">用户培训</p>
                    </el-col>
                  </el-row>
                </div>
                <div class="img"><img src="../assets/img/cs-basicEduS-4.jpg" alt=""></div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="item-4-box">
                <div class="part2">
                  <el-row type="flex" justify="space-between">
                    <el-col>
                      <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-9.png" alt=""></div>
                      <p class="icontit">热线服务</p>
                    </el-col>
                    <el-col>
                      <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-10.png" alt=""></div>
                      <p class="icontit">维修服务</p>
                    </el-col>
                    <el-col>
                      <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-11.png" alt=""></div>
                      <p class="icontit">延保服务</p>
                    </el-col>
                  </el-row>
                  <p class="pcenter">企业维修绿色通道服务</p>
                  <el-row type="flex" justify="space-between">
                    <el-col>
                      <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-12.png" alt=""></div>
                      <p class="icontit">VIP 服务</p>
                    </el-col>
                    <el-col>
                      <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-13.png" alt=""></div>
                      <p class="icontit">上门接送机</p>
                    </el-col>
                    <el-col>
                      <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-14.png" alt=""></div>
                      <p class="icontit">备机服务</p>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <h1 class="tit" style="color: #E9612A;">设备回收</h1>
      
    </div>
    <!-- part3 -->
    <div class="cs-baseEduS-part3">
      <div class="container"></div>
    </div>
    <!-- part4 -->
    <div class="cs-baseEduS-part4">
      <div class="container"></div>
    </div>
    <!-- part5 -->
    <div class="cs-baseEduS-part5">
      <div class="container"></div>
    </div>
    <!-- part6 -->
    <div class="cs-baseEduS-part6">
      <div class="container"></div>
    </div>
  </div>
</template>
<script>
export default {
  name:'BasicEduSolution',
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
.BasicEduSolution{
   border-bottom: 1px solid #D6D6D6;
   .iconbox{
    width: 100px;
    height: 100px;
    background: #F5F5F7;
    border-radius: 50px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    display: inline-block;
    line-height: 135px;
    img{
      display: inline-block;
    }
   }
  
  .icontit{
    margin-top: 25px;
    text-align: center;
    font-size: 22px;
    font-weight: 400;
    color: #333333;
    line-height: 32px;
  }

   .cs-baseEduS-part1{
     position: relative;
     height: 1120px;
    img{
      // max-width: 100%;
      max-height: 100%;
    }
    .container{
      .con{
        width: 1200px;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -600px;
        text-align: center;
        height: 1120px;
        h1{
          font-size: 58px;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 76px;
          margin: 114px 0 56px 0;
        }
        p{
          font-size: 24px;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 46px;
          margin-bottom: 59px;
        }
        @media screen and (max-width: 750px) {
          .img{
              width: 50%;
          }
        }
      }
    } 
   }
   
   .cs-baseEduS-part2{
     h1.tit{
        font-size: 36px;
        font-weight: 600;
        line-height: 140px;
        height: 140px;
        text-align: center;
     }
     .container{
       .item-1{
         background: #FFFFFF;
         border-radius: 22px;
         text-align: center;
         .p1{
           margin: 0 auto;
           width: 980px;
            font-size: 24px;
            font-weight: 400;
            color: #000000;
            line-height: 38px;
            padding: 71px 0 38px 0;
         }
         .p2{
            font-size: 32px;
            font-weight: 600;
            color: #000000;
            line-height: 76px;  
         }
         .button{
            width: 240px;
            height: 76px;
            background: #0071E3;
            border-radius: 38px;
            display: block;
            margin: 44px auto 54px auto;
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
          img{
            height: 301px;
            margin-bottom: 74px;
          }
       }
       .item-2{
         background: #FFFFFF;
         border-radius: 22px;
         padding: 71px 115px;
         text-align: center;
         .iconright{
           width: 118px;
           height: 100px;
           display: table-cell;
           vertical-align: middle;
           text-align: center;
         }
       }
       .item-3{
         margin-top: 58px;
         .img{
           border-radius: 22px;
            overflow: hidden;
         }
         p{
            font-size: 36px;
            font-weight: 600;
            line-height: 143px;
            height: 143px;
            text-align: center;
         }
       }
       .item-4{
         .part1{
           margin: 85px 20px 44px 90px;
         }
         .item-4-box{
           background: #FFFFFF;
           border-radius: 22px;
           overflow: hidden;
           text-align: center;
           height: 620px;
         }
         .part2{
           padding: 85px 75px 0 75px;
           .pcenter{
            font-size: 32px;
            font-weight: 400;
            color: #000000;
            line-height: 38px;
            text-align: center;
            margin: 87px 0 48px 0;
           }
         }
       }
     }
   }
   
   .cs-baseEduS-part3{
     .container{}
   }
   .cs-baseEduS-part4{
     .container{}
   }
   .cs-baseEduS-part5{
     .container{}
   }
   .cs-baseEduS-part6{
     .container{}
   }
}
</style>

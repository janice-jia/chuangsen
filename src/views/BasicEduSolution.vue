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
            <a href="http://mall.jschuangsen.cn/Home/User/login">开始选购
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
              <el-col class="w118">
                <div class="iconright"><img class="img" src="../assets/img/icon-basicEduS-0.png" alt=""></div>
              </el-col>
              <!-- 软件安装 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-3.png" alt=""></div>
                <p class="icontit">软件安装</p>
              </el-col>
              <el-col class="w118">
                <div class="iconright"><img class="img" src="../assets/img/icon-basicEduS-0.png" alt=""></div>
              </el-col>
              <!-- 资产信息收集激光雕刻 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-4.png" alt=""></div>
                <p class="icontit">资产信息收集<br>激光雕刻</p>
              </el-col>
              <el-col class="w118">
                <div class="iconright"><img class="img" src="../assets/img/icon-basicEduS-0.png" alt=""></div>
              </el-col>
              <!-- 打包 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-5.png" alt=""></div>
                <p class="icontit">打包</p>
              </el-col>
              <el-col class="w118">
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
          <el-row :gutter="60">
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <div class="img"><img src="../assets/img/cs-basicEduS-2.jpg" alt=""></div>
              <p style="color: #63CAAD;">发放和培训</p>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <div class="img"><img src="../assets/img/cs-basicEduS-3.jpg" alt=""></div>
              <p style="color: #E7323A;">运维管理</p>
            </el-col>
          </el-row>
        </div>

        <div class="item-4">
          <el-row :gutter="60">
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
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
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
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
                      <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-14.png" alt=""></div>
                      <p class="icontit">上门接送机</p>
                    </el-col>
                    <el-col>
                      <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-15.png" alt=""></div>
                      <p class="icontit">备机服务</p>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <h1 class="tit" style="color: #E9612A;">设备回收</h1>
        <div class="item-5">
          
          <div class="part1">
            <el-row>
              <el-col class="el1" :xs="24" :sm="24" :md="11" :lg="11" :xl="11">
                <el-row type="flex" justify="space-between" style="text-align:center;margin:15px 0 65px 0">
                  <el-col>
                    <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-16.png" alt=""></div>
                    <p class="icontit">旧设备回收</p>
                  </el-col>
                  <el-col>
                    <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-17.png" alt=""></div>
                    <p class="icontit">数据擦除</p>
                  </el-col>
                </el-row>
                <el-row type="flex" justify="space-between" style="text-align:center">
                  <el-col>
                    <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-18.png" alt=""></div>
                    <p class="icontit">设备检测</p>
                  </el-col>
                  <el-col>
                    <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-19.png" alt=""></div>
                    <p class="icontit">残值评估</p>
                  </el-col>
                </el-row>
              </el-col>
              <el-col class="el2" :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                <img style="border-radius:22px;" src="../assets/img/cs-basicEduS-5.jpg" alt="">
              </el-col>
            </el-row>
          </div>

          
          <h2 class="tit">回收模式</h2>
          <p class="tit1">针对个人</p>
          <div class="part2">
            <el-row type="flex" justify="space-between">
              <!-- 线上下单 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-20.png" alt=""></div>
                <p class="icontit">线上下单</p>
              </el-col>
              <el-col class="w118">
                <div class="iconright"><img class="img" src="../assets/img/icon-basicEduS-0.png" alt=""></div>
              </el-col>
              <!-- 预约上门 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-21.png" alt=""></div>
                <p class="icontit">预约上门</p>
              </el-col>
              <el-col  class="w118">
                <div class="iconright"><img class="img" src="../assets/img/icon-basicEduS-0.png" alt=""></div>
              </el-col>
              <!-- 当面质检 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-22.png" alt=""></div>
                <p class="icontit">当面质检</p>
              </el-col>
              <el-col  class="w118">
                <div class="iconright"><img class="img" src="../assets/img/icon-basicEduS-0.png" alt=""></div>
              </el-col>
              <!-- 秒拿钱 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-23.png" alt=""></div>
                <p class="icontit">秒拿钱</p>
              </el-col>
            </el-row>
            <div style="clear:both"></div>
          </div>
          <p class="tit1">针对机构</p>
          <div class="part3">
            <el-row type="flex" justify="space-between">
              <!-- 收集回收信息 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-24.png" alt=""></div>
                <p class="icontit">收集回收信息</p>
              </el-col>
              <el-col  class="w50">
                <div class="iconright"><img class="img" src="../assets/img/icon-basicEduS-0.png" alt=""></div>
              </el-col>
              <!-- 上门检查设备 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-25.png" alt=""></div>
                <p class="icontit">上门检查设备</p>
              </el-col>
              <el-col  class="w50">
                <div class="iconright"><img class="img" src="../assets/img/icon-basicEduS-0.png" alt=""></div>
              </el-col>
              <!-- 报价 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-26.png" alt=""></div>
                <p class="icontit">报价</p>
              </el-col>
              <el-col  class="w50">
                <div class="iconright"><img class="img" src="../assets/img/icon-basicEduS-0.png" alt=""></div>
              </el-col>
              <!-- 客户确认 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-27.png" alt=""></div>
                <p class="icontit">客户确认</p>
              </el-col>
              <el-col  class="w50">
                <div class="iconright"><img class="img" src="../assets/img/icon-basicEduS-0.png" alt=""></div>
              </el-col>
              <!-- 签订协议 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-28.png" alt=""></div>
                <p class="icontit">签订协议</p>
              </el-col>
              <el-col  class="w50">
                <div class="iconright"><img class="img" src="../assets/img/icon-basicEduS-0.png" alt=""></div>
              </el-col>
              <!-- 支付客户款项并开票 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-29.png" alt=""></div>
                <p class="icontit  icontit1" style="position: relative;">
                  <span style="position: absolute;left:-30px;width:200px">支付客户款项并开票</span>
                </p>
              </el-col>
              <el-col  class="w50">
                <div class="iconright"><img class="img" src="../assets/img/icon-basicEduS-0.png" alt=""></div>
              </el-col>
              <!-- 取回设备 -->
              <el-col>
                <div class="iconbox"><img class="img" src="../assets/img/icon-basicEduS-30.png" alt=""></div>
                <p class="icontit">取回设备</p>
              </el-col>
            </el-row>
            <div style="clear:both"></div>
          </div>
          <p class="mf">免费上门评估设备残值；</p>
          <p class="mf">设备回收残值报价时效：7天（如未在7天内完成，需重新报价）；</p>
        </div>
        
      </div>
      
      
    </div>
    <!-- part3 -->
    <div class="cs-baseEduS-part3">
      <div class="container">
        <h2>项目团队</h2>
        <h3>Lifecycle Service</h3>
        <p class="p1">Professional Management Team</p>
        <img class="img" src="../assets/img/icon-basicEduS-31.png" alt="">
        <div class="item-con">
          <!-- 部署团队 -->
          <el-row type="flex" justify="space-between">
            <el-col>
              <div class="item-conbox box1">
                <div class="titd">部署团队</div>
                <div class="con">
                  <p>Apple ID 创建</p>
                  <p>用户信息收集</p>
                  <p>设备信息收集</p>
                  <p>4G 卡安装</p>
                  <p>再次封装</p>
                  <p>签收单管理</p>
                  <p>库存管理</p>
                </div>
              </div>
            </el-col>
            <el-col>
              <div class="item-conbox box2">
                <div class="titd">内部运维团队</div>
                <div class="con">
                    <p>全国 Office</p>
                    <p>设备部署</p>
                    <p>设备发放</p>
                    <p>设备回收</p>
                    <p>设备检测</p>
                    <p>数据擦除</p>
                </div>
              </div>
            </el-col>
            <el-col>
              <div class="item-conbox box3">
                <div class="titd">现场支持团队</div>
                <div class="con">
                    <p>现场技术支持</p>
                    <p>网络调试</p>
                    <p>设备发放</p>
                    <p>设备回收</p>
                    <p>设备检测</p>
                    <p>数据迁移</p>
                    <p>数据擦除</p>
                </div>
              </div>
            </el-col>
            <el-col>
              <div class="item-conbox box4">
                <div class="titd">网点服务团队</div>
                <div class="con">
                    <p>现场技术支持</p>
                    <p>设备发放</p>
                    <p>设备回收</p>
                    <p>设备检测</p>
                    <p>数据迁移</p>
                    <p>数据擦除</p>
                    <p>用户培训</p>
                </div>
              </div>
            </el-col>
            <el-col>
              <div class="item-conbox box5">
                <div class="titd">热线团队</div>
                <div class="con">
                    <p>热线技术支持</p>
                    <p>服务单管理</p>
                    <p>预约设备发放</p>
                    <p>预约设备回收</p>
                    <p>常见问题反馈</p>
                    <p>报告提交</p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- part4 -->
    <div class="cs-baseEduS-part4">
      <div class="container">
        <h1>服务网络</h1>
        <div>
          <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14" style="padding-right:50px">
              <img class="img" src="../assets/img/icon-basicEduS-32.png" alt="">
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
              <p class="p1"><span class="font32">第二工作日</span><span class="font24">上门服务</span></p>
              <p class="p2"><span class="font24">覆盖全国</span><span class="font42">500+</span><span class="font24">个城市</span></p>
              <el-row>
                <el-col :span="12">
                  <p class="p3">平均响应时间</p>
                  <p class="p4"><span class="font52">< 2</span> <span class="font24">个工作日</span></p>
                </el-col>
                <el-col :span="12">
                  <p class="p3">平均维修时间</p>
                  <p class="p4"><span class="font52">< 5</span> <span class="font24">个工作日</span></p>
                </el-col>

                <el-col :span="12">
                  <p class="p3">用户投诉率</p>
                  <p class="p4"><span class="font52" style="padding-right:0">< 0.5</span> <span class="font24">%</span></p>
                </el-col>
                <el-col :span="12">
                  <p class="p3">准时上门率</p>
                  <p class="p4"><span class="font52" style="padding-right:0">> 95</span> <span class="font24">%</span></p>
                </el-col>

                <el-col :span="12">
                  <p class="p3">用户满意度</p>
                  <p class="p4"><span class="font52" style="padding-right:0">> 95</span> <span class="font24">%</span></p>
                </el-col>
                <el-col :span="12">
                  
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- part5 -->
    <div class="cs-baseEduS-part5">
      <img class="img" src="../assets/img/cs-basicEduS-6.jpg" alt="">
      <div class="container">
        <div class="middle">
          <h1>Exclusive Service Platform for Educator</h1>
          <div class="button">
            <a href="https://esp.doublerise.com/">了解更多 
              <span class="el-icon-arrow-right"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- part6 -->
    <div class="cs-baseEduS-part6">
      <div class="container">
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <div class="item">
                <el-row type="flex">
                  <el-col style="width:135px;"><div class="middle"><img class="img" src="../assets/img/icon-basicEduS-33.png" alt=""></div></el-col>
                  <el-col>
                    <div class="middle">
                      <p class="tit1">引导学校文化</p>
                      <p class="p1 w1">随时查询设备状态，实时统计资产情况，为企业提供贯穿设备全生命周期的全方位体验。</p>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <div class="item">
                <el-row type="flex">
                  <el-col style="width:135px"><div class="middle"><img class="img" src="../assets/img/icon-basicEduS-34.png" alt=""></div></el-col>
                  <el-col>
                    <div class="middle">
                      <p class="tit1">设备管理服务</p>
                      <p class="p1 w2">设备激活、部署、更换及回收，通过 ESP 平台一键开单，过程实时跟踪，还可根据客户需求定制流程，是您工单流转的最佳帮手。</p>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>

            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <div class="item">
                <el-row type="flex">
                  <el-col style="width:135px;"><div class="middle"><img class="img" src="../assets/img/icon-basicEduS-35.png" alt=""></div></el-col>
                  <el-col>
                    <div class="middle">
                      <p class="tit1">远程诊断</p>
                      <p class="p1 w1">在线远程为设备提供诊断服务，帮助企业随时了解设备健康状态，故障预排查。</p>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <div class="item">
                <el-row type="flex">
                  <el-col style="width:135px"><div class="middle"><img class="img" src="../assets/img/icon-basicEduS-36.png" alt=""></div></el-col>
                  <el-col>
                    <div class="middle">
                      <p class="tit1">知识库及咨询服务 </p>
                      <p class="p1 w2">提供丰富的知识库供企业查阅，及时更新常见问题。企业还可以在线互动咨询，平台第一时间为企业答疑解惑。</p>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>

            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <div class="item">
                <el-row type="flex">
                  <el-col style="width:135px;"><div class="middle"><img class="img" src="../assets/img/icon-basicEduS-37.png" alt=""></div></el-col>
                  <el-col>
                    <div class="middle">
                      <p class="tit1">维修申报 </p>
                      <p class="p1 w1">Apple 全系列产品官方授权服务资质，优质专业的售后支持及服务，多种方式随需选择，线上预约。</p>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <div class="item">
                <el-row type="flex">
                  <el-col style="width:135px"><div class="middle"><img class="img" src="../assets/img/icon-basicEduS-38.png" alt=""></div></el-col>
                  <el-col>
                    <div class="middle">
                      <p class="tit1">行业应用解决方案 </p>
                      <p class="p1 w2">提供移动化领域前沿解决方案以及行业成功案例，赋能企业移动化，助力企业 IT 创新发展。</p>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
        </el-row>
      </div>
    </div>

    <div class="cs-page">
      <router-link to="home" active-class="activeClass">首页</router-link>
      <router-link to="BasicEduIT" active-class="activeClass">上一页</router-link>
      <router-link to="BasicEduSuccessCases" active-class="activeClass">下一页</router-link>
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
   .w118{
     width: 118px;
   }
   .w50{
     width: 50px;
   }
  
  .icontit{
    margin-top: 25px;
    text-align: center;
    font-size: 22px;
    font-weight: 400;
    color: #333333;
    line-height: 32px;
  }

  .iconright{
    width: 118px;
    height: 100px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

   .cs-baseEduS-part1{
     position: relative;
     height: 1120px;
     text-align: center;
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
       .mf{
          font-size: 22px;
          font-weight: 400;
          color: #333333;
          line-height: 38px;
          text-align: center;
       }
       .item-1{
         background: #FFFFFF;
         border-radius: 22px;
         text-align: center;
         .p1{
           margin: 0 auto;
           max-width: 980px;
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
       }
       .item-3{
         margin-top: 58px;
         .img{
           border-radius: 22px;
            overflow: hidden;
            img{
              float: left;
            }
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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
           box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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
       .item-5{
         background: #FFFFFF;
         border-radius: 22px;
         padding: 74px 0 78px 0;
         text-align: center;
         margin-bottom: 53px;
         .el1{
            padding:0 60px;
          }
          .el2{
            padding-right: 90px;
            img{
              max-width: 100%;
            }
          }
         .tit{
            font-size: 32px;
            font-weight: 400;
            color: #E9612A;
            line-height: 38px;
            margin: 94px 0 38px 0;
         }
         .tit1{
            font-size: 24px;
            font-weight: 600;
            color: #000000;
            line-height: 32px;
            margin: 0 0 47px;
         }
         .part2{
           margin: 0 222px 73px 222px;
         }
         .part3{
           margin: 0 40px 79px 40px;
           .iconright{
            width: 50px;
           }
         }
       }
     }
   }
   
   .cs-baseEduS-part3{
     background: #FFFFFF;
     .container{
       h2{
          font-size: 42px;
          font-weight: 600;
          color: #000000;
          line-height: 38px;
          text-align: center;
          padding: 75px 0 61px 0;
       }
       h3{
          font-size: 32px;
          font-weight: 600;
          color: #000000;
          line-height: 30px;
          text-align: center;
       }
       .p1{
          font-size: 24px;
          font-weight: 400;
          color: #333333;
          line-height: 30px;
          text-align: center;
          margin: 14px 0 53px 0;
       }
       .img{
         margin-bottom: 15px;
         margin-left: 45px;
       }
       .item-con{
          padding: 0 50px 74px 50px;
          .item-conbox{
            width: 200px;
            height: 360px;
            border-radius: 22px;
            overflow: hidden;
            padding: 35px 0 0 0;
          }
          .titd{
            font-size: 24px;
            font-weight: 600;
            color: #000000;
            line-height: 30px;
            text-align: left;
            padding: 0 0 20px 0;
            text-align: center;
          }
          p{
            font-size: 20px;
            font-weight: 400;
            color: #333333;
            line-height: 36px;
            text-align: center;
          }
       }
       .box1{background: #CFE5F8;}
       .box2{background: #E1DFF6;}
       .box3{background: #FFDF86;}
       .box4{background: #D9F0E9;}
       .box5{background: #F1DEE6;}
     }
   }
   .cs-baseEduS-part4{
     background: #f5f5f7;
     img{
       max-width: 100%;
     }
     .container{
       h1{
          font-size: 42px;
          font-weight: 600;
          color: #000000;
          line-height: 38px;
          padding: 104px 0 139px 0;
       }
       p{
          font-weight: 400;
          color: #000000;
       }
       .p1 .font32{padding: 0 10px 0 0;}
       .p2 .font42{padding: 0 10px 0 5px;}
       .p3{font-size: 24px; margin:56px 0 0 0;}
       .p4 .font52{padding: 0 15px 0 0;}
       .font24{font-size: 24px;}
       .font32{font-size: 32px;}
       .font42{font-size: 42px;}
       .font52{font-size: 42px;}
     }
   }
   .cs-baseEduS-part5{
     position: relative;
     height: 620px;
     text-align: center;
     img{
       max-height: 100%;
     }
     .container{
       position: absolute;
       left: 25%;
       top: 0;
       .middle{
         display: table-cell;
         vertical-align: middle;
         height: 620px;
         text-align: center;
         width: 100%;
       }
       h1{
          font-size: 42px;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 38px;
          text-align: center;
        }
        .button{
          width: 240px;
          height: 76px;
          background: #0071E3;
          border-radius: 38px;
          display: inline-block;
          margin:55px auto 0 auto;
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
   .cs-baseEduS-part6{
     background: #FFFFFF;
     padding-top: 131px;
     .container{
       .item{
         margin-bottom: 76px;
         .middle{
           height: 170px;
           display: table-cell;
           vertical-align: middle;
           padding-left: 20px;
         }
         .tit1{
            font-size: 32px;
            font-weight: 600;
            color: #000000;
            line-height: 30px;
            margin-bottom: 36px;
         }
         .p1{
            font-size: 24px;
            font-weight: 400;
            color: #000000;
            line-height: 38px;
            width: 369px;
            text-align: justify;
         }
         .w1{
           width: 369px;
         }
         .w2{
           width: 470px;
         }
       }
     }
   }
}

@media screen and (max-width: 992px){
  .BasicEduSolution .cs-baseEduS-part2 .container .item-3 .img{
    img{
      width: 100%;
    }
  }
  .BasicEduSolution .cs-baseEduS-part2 .container .item-4 .item-4-box{
    margin-bottom: 60px;
  }
  .BasicEduSolution .cs-baseEduS-part3 .container .img{
    margin: 0;
    max-width: 100%;
  }
  .BasicEduSolution .cs-baseEduS-part3 .container .item-con{
    padding: 10%;
  }
  .BasicEduSolution .cs-baseEduS-part3 .container .item-con .item-conbox{
    width: 100%;
  }
  .BasicEduSolution .cs-baseEduS-part3 .container .item-con .el-row--flex{
      display: inline-table;
      .el-col{
        width: 30%;
        margin: 15px 1%;
      }
  }
  .BasicEduSolution .cs-baseEduS-part6 .container .item .w1,
  .BasicEduSolution .cs-baseEduS-part6 .container .item .w2{
    width: 100%;
  }
}
// 适配
@media screen and (max-width: 768px) {
  .BasicEduSolution{
    .cs-baseEduS-part1{
      height: 780px;
      .container{
        .con{
          width: 100%;
          margin-left: -50%;
          height: auto;
          img{
            max-width: 34%;
          }
        }
      }
    }
    .iconbox{
      width: 80px;
      height: 80px;
      line-height: 100px;
      img{
        max-width: 40%;
      }
    }
    .w118,.w50{
      width: 0px;
      img{
        max-width: 100%;
      }
    }
    .cs-baseEduS-part2{
      .container{
        .item-1{
          .p1{
            width: auto!important;
            padding: 71px 30px 38px 30px!important;
            text-align: justify;
          }
          img{
            max-width: 80%;
            height: auto!important;
          }
        }
        .item-2{
          padding: 71px 10px!important;
          .el-row--flex{
              display: flex;
              flex-wrap: wrap;
              justify-content:flex-start;
              .el-col-24{
                width: 33%;
                // flex: 1;
                .iconbox{
                  width: 80px;
                  height: 80px;
                  line-height: 100px;
                }
                .icontit{
                  max-width: 100%;
                  margin-bottom: 35px;
                }
                .icontit1{
                  span{
                    position: initial;
                    width: auto!important;
                  }
                }
              }
              .w118{
                width: 0!important;
              }
            }
        }
        .item-3{
          .img{
            img{
              max-width: 100%;
            }
          }
        }
        .item-5{
          .el2{
            padding: 0 30px;
            margin-top: 30px;
          }
          .part2,.part3{
            margin: 0;
          }
          .part2{
            margin-bottom: 40px;
          }
          .part3{
            .iconbox{
              width: 50px;
              height: 50px;
              line-height: 60px;
              img{
                max-width: 50%;
              }
            }
            .el-row--flex{
              display: flex;
              flex-wrap: wrap;
              justify-content:flex-start;
              .el-col-24{
                width: 33%;
                // flex: 1;
                .iconbox{
                  width: 80px;
                  height: 80px;
                  line-height: 100px;
                }
                .icontit{
                  max-width: 100%;
                  margin-bottom: 35px;
                }
                .icontit1{
                  span{
                    position: initial;
                    width: auto!important;
                  }
                }
              }
              .w50{
                width: 0!important;
              }
            }
          }
        }
      }
    }
  }
  .BasicEduSolution .cs-baseEduS-part3 .container .item-con{
    padding: 0;
  }
  .BasicEduSolution .cs-baseEduS-part3 .container .item-con .el-row--flex{
      display: inline-table;
      .el-col{
        width: 48%;
        margin: 15px 1%;
      }
  }
  .BasicEduSolution .cs-baseEduS-part2 .container .item-4 .part1{
    margin: 60px 20px 60px 20px;
  }
  .BasicEduSolution .cs-baseEduS-part5{
    height: auto;
    height: 270px;
    .container{
      left: 0;
      .middle{
        height: 270px;
      }
    }
    // img{
    // }

  }
}
</style>

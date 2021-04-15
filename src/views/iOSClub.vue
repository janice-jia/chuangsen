<template>
  <div class="iOSClub">
    <div class="cs-iosclub-part1">
      <div class="container">
        <h1>iOS 俱乐部</h1>
          <p class="tit"><span style="width:14px;display:inline-block">&nbsp;</span>增强教与学联动，走进高校内部，</p>
          <p class="tit"><span style="width:14px;display:inline-block">&nbsp;</span>激发更多创造力实践。</p>
          <p class="tit" style="width:290px; margin:0 auto">edu@jschuangsen.cn</p>
        <!--<div class="item-1 item-rel">-->
          <!--<img src="../assets/img/cs-iosclub-1.jpg" alt="">-->
          <!--<p>ios 俱乐部活动-湖北汽车学院</p>-->
        <!--</div>-->

        <div class="item-2">
          <div class="item-l item-rel">
            <img src="../assets/img/cs-iosclub-2.jpg" alt="">
            <p>iOS 俱乐部活动-武汉大学</p>
          </div>
          <div class="item-r item-rel">
            <img src="../assets/img/cs-iosclub-3.jpg" alt="">
            <p>iOS 俱乐部活动-湖北科技大学</p>
          </div>
          <div style="clear:both"></div>
        </div>

        <h1>iOS 俱乐部活动</h1>
        <p class="tit">中国高校计算机大赛—移动应用创新赛</p>
        <p class="con">由 Apple 公司和浙江大学发起的原创性应用程序（App）的开发比赛，参赛 App 基于 iOS 系统设计开发，并须在 Apple 公司的产品组合上顺畅运行。鼓励参赛队伍下载使用 Swift 语言进行开发。</p>
        <p class="con" style="letter-spacing: 0.8px;">参赛作品主题涉及应用领域及社会关注的热点难点问题，如能源、健康医疗、环保、养老、智慧交通、智慧城市、智慧物流、与社会创新相关的物联网、食品安全、与社会服务相关的大数据/云服务等。</p>
      
        <div class="item-3">
          <img src="../assets/img/cs-iosclub-4.jpg" alt="">
        </div>

        <div class="item-4">
          <el-row :gutter="60">
            <el-col :span="12">
              <div class="box">
                <img src="../assets/img/cs-iosclub-5.jpg" alt="">
                <p>2019年10.25-27日，第四届中国高校移动应用创新赛决赛，武汉大学的参赛作品《Hello Slide》喜获一等奖。</p>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="box">
                <img src="../assets/img/cs-iosclub-6.jpg" alt="">
                <p>2020第五届中国高校计算机大赛-移动应用创新赛，武汉大学的 C4 团队所开发的《Comive》获得了这次比赛的二等奖。</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="cs-page">
      <router-link to="home" active-class="activeClass">首页</router-link>
      <router-link to="iOSCourse" active-class="activeClass">上一页</router-link>
      <router-link to="iOSExperience" active-class="activeClass">下一页</router-link>
    </div>

  </div>
</template>
<script>
export default {
  name:'iOSClub',
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
.iOSClub{
   border-bottom: 1px solid #D6D6D6;
   h1{
      font-size: 58px;
      font-weight: 600;
      color: #000000;
      line-height: 76px;
      margin: 114px 0 60px 0;
      text-align: center;
   }
   .tit{
      font-size: 28px;
      font-weight: 600;
      color: #000000;
      line-height: 48px;
      text-align: center;
   }
   .con{
      font-size: 20px;
      font-weight: 400;
      color: #000000;
      line-height: 38px;
      margin: 42px auto;
      width: 999px;
   }
   .item-rel{
     position: relative;
     border-radius: 22px;
     overflow: hidden;
     p{
       position: absolute;
        text-align: center;
        left: 0 ;
        top: 50%;
        width: 100%;
        margin-top: -23px;
        font-size: 46px;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 38px;
     }
   }
   .item-1{
     margin: 54px 0 57px 0;
     height: 432px;
     position: relative;
     img{
       max-height: 100%;
     }
   }
   .item-2{
       margin-top: 57px;
     img{
       max-height: 100%;
       max-width: 100%;
     }
     .item-l{
       float: left;
       width: 480px;
     }
     .item-r{
       float: right;
       width: 690px;
       margin-left: 27px;
     }
     .item-rel p{
       font-size: 36px;
       margin-top: -18px;
     }
   }
   .item-3{
     margin-bottom: 55px;
     img{
       max-height: 100%;
       max-width: 100%;
     }
   }
   .item-4{
     .box{
      background: #FFFFFF;
      border-radius: 22px;
      overflow: hidden;
      margin-bottom: 114px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      img{
        max-height: 324px;
      }
       p{
          font-size: 20px;
          font-weight: 400;
          color: #000000;
          line-height: 38px;
          padding: 32px;
          height: 166px;
       }
     }
   }
}
</style>

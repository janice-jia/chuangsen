<template>
  <div class="BasicEduParents">
      <div class="BasicEduParents-part1">
        <div class="container">
          <!-- <h1>家长</h1> -->
          <p class="p1">AppleCare 为你提供</p>
          <p class="p2">长期的技术支持与服务。<br>获得更多服务和支持。为你的 Mac 选购 AppleCare+ 服务计划，享受教育优惠价格。</p>
          <img src="../assets/img/icon-basePar-1.png" alt="">
        </div>
      </div>
      <div class="BasicEduParents-part2">
        <div class="container">
          <h1>让旧设备物尽其用</h1>
          <p>你可以用符合条件的设备来换购，并在购买新设备时享受折抵优惠。如果你的设备不符合折抵条件，我们会免费将其回收处理。不论设备型号或状况如何，我们都可以物尽其用，让你和地球都从中受益。</p>
          <img src="../assets/img/icon-basePar-2.png" alt="">
        </div>
      </div>
      <div class="BasicEduParents-part3">
        <img src="../assets/img/cs-basePar-1.jpg" alt="">
        <div class="con">
          <div class="conbox">
            <h1>iOS 数字校园</h1>
            <p class="p1">高校学生、老师以及为高校学生购买设备的家长，享受教育专属优惠。</p>
            <div class="button">
              <a href="http://mall.jschuangsen.cn/Home/User/login">开始选购 <span class="el-icon-arrow-right"></span></a>
            </div>  
          </div>
        </div>
        <div style="clear:both"></div>
      </div>

      <div class="cs-page">
        <router-link to="home" active-class="activeClass">首页</router-link>
        <router-link to="BasicEduTeacherResource" active-class="activeClass">上一页</router-link>
        <router-link to="BasicEduIT" active-class="activeClass">下一页</router-link>
      </div>
  </div>
</template>
<script>
export default {
  name:'BasicEduParents',
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
.BasicEduParents{
   border-bottom: 1px solid #D6D6D6;
   .BasicEduParents-part1{
     text-align: center;
     padding-bottom: 110px;
     img{
       max-width: 100%;
     }
     h1{
      font-size: 58px;
      font-weight: 600;
      color: #000000;
      line-height: 76px;
      padding: 115px 0 73px 0;
     }
     .p1{
        font-size: 42px;
        font-weight: 600;
        color: #000000;
        line-height: 38px;
        padding-top: 73px;
     }
     .p2{
        font-size: 24px;
        font-weight: 400;
        color: #000000;
        line-height: 38px;
        margin: 37px 0 77px 0;
     }
   }

   .BasicEduParents-part2{
     background: #fff;
     text-align: center;
     padding: 112px 0 113px 0;
     img{
       max-width: 100%;
     }
     h1{
        font-size: 42px;
        font-weight: 600;
        color: #000000;
        line-height: 38px;
     }
     p{
        font-size: 24px;
        font-weight: 400;
        color: #000000;
        line-height: 38px;
        margin: 41px 0 95px 0;
     }
   }

   .BasicEduParents-part3{
     text-align: center;
     position: relative;
     img{
         max-width: 100%;
     }
     .con{
       position: absolute;
       top: 50%;
       left: 50%;
       width: 1200px;
       margin-left: -600px;
       margin-top: -120px;
       
       .conbox{
         width: 1200px;
        //  height: 768px;
         height: 100%;
         margin: 0 auto;
          display: table-cell;
          vertical-align: middle;
          text-align: center;
       }
       h1{
          font-size: 42px;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 38px;
       }
       .p1{
         width: 849px;
          font-size: 24px;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 38px;
          text-align: center;
          margin: 40px auto 44px auto;
       }
       .button{
          width: 240px;
          height: 76px;
          background: #0071E3;
          border-radius: 38px;
          display: inline-block;
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
  .BasicEduParents{
     .BasicEduParents-part3{
       height: 320px;
       img{
         max-height: 100%;
         max-width: none!important;
       }
     }
  }
}
</style>
